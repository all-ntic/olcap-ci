import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel d'OLCAP-CI. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickQuestions = [
    "Qu'est-ce que l'OLCAP-CI ?",
    "Comment faire un don ?",
    "Vos actions contre l'anémie",
    "Octobre Rose 2024",
    "Comment devenir bénévole ?"
  ];

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('olcap-chatbot', {
        body: { message: text }
      });

      if (error) throw error;

      // Add bot response
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.reply || "Désolé, je n'ai pas pu traiter votre demande. Veuillez réessayer.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Désolé, je rencontre des difficultés techniques. Vous pouvez nous contacter directement au (+225) 01 51 83 82 82.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    sendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 z-40 rounded-full w-14 h-14 bg-accent hover:bg-accent/90 text-white shadow-lg animate-pulse-soft"
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-20 right-6 z-40 w-80 h-96">
      <Card className="h-full flex flex-col shadow-xl border-2 border-primary/20">
        <CardHeader className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Assistant OLCAP-CI</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 h-auto"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-muted text-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t bg-muted/30">
              <p className="text-xs text-muted-foreground mb-2">Questions fréquentes :</p>
              <div className="space-y-1">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="block w-full text-left text-xs p-2 rounded bg-background hover:bg-muted transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Tapez votre message..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" size="sm" disabled={isLoading || !inputMessage.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;