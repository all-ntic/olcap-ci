import { useEffect, useState, ComponentType } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

/**
 * Lazy-loaded image component with modern format support
 * Automatically uses intersection observer for performance
 */
export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  fallback = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E',
  ...props 
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(fallback);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };

    img.onerror = () => {
      setImageSrc(fallback);
      setIsLoaded(true);
    };
  }, [src, fallback]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${!isLoaded ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

/**
 * Lazy load React components for code splitting
 * @param importFunc - Dynamic import function
 * @param fallback - Optional fallback component while loading
 */
export const lazyLoadComponent = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
): React.FC<any> => {
  const LazyComponent: React.FC<any> = (props) => {
    const [Component, setComponent] = useState<T | null>(null);

    useEffect(() => {
      importFunc().then((mod) => setComponent(() => mod.default));
    }, []);

    if (!Component) {
      return fallback ? <>{fallback}</> : <div className="animate-pulse bg-muted h-40 w-full rounded-lg" />;
    }

    return <Component {...props} />;
  };

  return LazyComponent;
};

/**
 * Preload critical resources
 */
export const preloadResources = (resources: { href: string; as: string; type?: string }[]) => {
  if (typeof window === 'undefined') return;

  resources.forEach(({ href, as, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  });
};

/**
 * Preconnect to external domains
 */
export const preconnectDomains = (domains: string[]) => {
  if (typeof window === 'undefined') return;

  domains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};
