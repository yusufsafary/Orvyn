import { useState, useEffect } from "react";
  import { Link, useLocation } from "wouter";
  import { Menu, X, BookOpen } from "lucide-react";

  export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [location] = useLocation();

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => { setMobileMenuOpen(false); }, [location]);

    // Prevent body scroll when drawer open
    useEffect(() => {
      document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
      return () => { document.body.style.overflow = ""; };
    }, [mobileMenuOpen]);

    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-[#07070a]/80 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[920px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl tracking-[0.28em] text-white hover:text-accent transition-colors" data-testid="link-logo">
            ORVYN
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/how-it-works" className="text-sm font-sans text-white/60 hover:text-white transition-colors" data-testid="link-how-it-works">
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-sans text-white/60 hover:text-white transition-colors" data-testid="link-about">
              About
            </Link>
            <a href="/#pricing" className="text-sm font-sans text-white/60 hover:text-white transition-colors" data-testid="link-pricing">
              Pricing
            </a>
            <Link
              href="/journal"
              className="flex items-center gap-1.5 text-sm font-sans text-white/50 hover:text-[#c8b89a] transition-colors"
              title="Your private journal"
              data-testid="link-journal"
            >
              <BookOpen size={14} strokeWidth={1.5} />
              <span className="hidden lg:inline">Journal</span>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white p-2 -mr-2"
            onClick={() => setMobileMenuOpen(v => !v)}
            data-testid="button-mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer — full-screen overlay */}
        <div
          className={`fixed inset-0 bg-[#07070a] z-40 flex flex-col justify-center px-10
            transition-all duration-500 ease-in-out
            ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className={`flex flex-col gap-10 transition-transform duration-500 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-4"}`}>
            <Link href="/how-it-works" className="font-serif text-5xl text-white/80 hover:text-white transition-colors leading-none">
              How It Works
            </Link>
            <Link href="/about" className="font-serif text-5xl text-white/80 hover:text-white transition-colors leading-none">
              About
            </Link>
            <a href="/#pricing" onClick={() => setMobileMenuOpen(false)} className="font-serif text-5xl text-white/80 hover:text-white transition-colors leading-none">
              Pricing
            </a>
            <Link href="/journal" className="font-serif text-5xl text-white/80 hover:text-[#c8b89a] transition-colors leading-none">
              Journal
            </Link>
          </nav>

          {/* Bottom tagline */}
          <p className="absolute bottom-12 left-10 text-[0.6rem] uppercase tracking-[0.25em] text-white/20">
            Go deeper. Come back different.
          </p>
        </div>
      </header>
    );
  }
  