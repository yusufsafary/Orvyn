import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#07070a]/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent border-transparent'}`}
    >
      <div className="max-w-[920px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-[0.28em] text-white hover:text-accent transition-colors" data-testid="link-logo">
          ORVYN
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/how-it-works" className="text-sm font-sans text-white/70 hover:text-white transition-colors" data-testid="link-how-it-works">
            How It Works
          </Link>
          <Link href="/about" className="text-sm font-sans text-white/70 hover:text-white transition-colors" data-testid="link-about">
            About
          </Link>
          <a href="/#pricing" className="text-sm font-sans text-white/70 hover:text-white transition-colors" data-testid="link-pricing">
            Pricing
          </a>
          <button className="text-sm font-sans text-accent border border-accent/30 px-5 py-2 hover:bg-accent/5 transition-colors" data-testid="button-begin-free">
            Begin free
          </button>
        </nav>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-[#07070a] z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center px-8 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col gap-8">
          <Link href="/how-it-works" className="font-serif text-4xl text-white hover:text-accent transition-colors">
            How It Works
          </Link>
          <Link href="/about" className="font-serif text-4xl text-white hover:text-accent transition-colors">
            About
          </Link>
          <a href="/#pricing" className="font-serif text-4xl text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </a>
          <div className="mt-8">
            <button className="w-full text-center font-sans text-accent border border-accent/30 px-6 py-4 hover:bg-accent/5 transition-colors text-lg">
              Begin free
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
