import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { preconnectDomains } from "./utils/performance";

// Preconnect to critical external domains for better performance
preconnectDomains([
  'https://lceuznoxizqibnxazzge.supabase.co',
  'https://js.paystack.co',
  'https://api.paystack.co'
]);

createRoot(document.getElementById("root")!).render(<App />);
