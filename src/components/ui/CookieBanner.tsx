import { useState, useEffect } from "react";
import { Link } from "wouter";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after intro finishes (approx 3.2s)
    const hasConsented = localStorage.getItem("orvyn-cookie-consent");
    if (hasConsented) return;
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("orvyn-cookie-consent", "all");
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("orvyn-cookie-consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[100] p-6 animate-in slide-in-from-bottom duration-700"
      data-testid="cookie-banner"
    >
      <div className="max-w-[920px] mx-auto bg-[#161619] border border-white/10 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
        <div className="flex-1">
          <h3 className="font-serif text-xl text-white mb-2">Your Privacy</h3>
          <p className="text-sm text-white/60">
            We use essential cookies to make Orvyn work. We'd also like to use optional analytics cookies to help us improve. We never sell your data or serve ads.
          </p>
          <Link href="/cookies" className="text-xs text-accent mt-2 inline-block hover:underline" data-testid="link-cookie-policy">
            Read our Cookie Policy
          </Link>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button 
            onClick={handleEssentialOnly}
            className="flex-1 md:flex-none px-5 py-2 text-sm text-white/70 border border-white/10 hover:bg-white/5 transition-colors"
            data-testid="button-cookie-essential"
          >
            Essential only
          </button>
          <button 
            onClick={handleAcceptAll}
            className="flex-1 md:flex-none px-5 py-2 text-sm text-[#07070a] bg-accent hover:bg-accent/90 transition-colors"
            data-testid="button-cookie-accept"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
