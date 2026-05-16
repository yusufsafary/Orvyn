import { useEffect, useState } from "react";

export function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("orvyn-intro-seen");
    
    if (hasSeenIntro) {
      setIsVisible(false);
      setIsRendered(false);
      return;
    }
    
    sessionStorage.setItem("orvyn-intro-seen", "true");
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 1000); // Wait for fade out
    }, 2600);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#07070a] transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      data-testid="intro-overlay"
    >
      <h1 className="font-serif text-4xl md:text-5xl text-accent tracking-[0.28em] animate-in fade-in zoom-in duration-1000 fill-mode-both">
        ORVYN
      </h1>
    </div>
  );
}
