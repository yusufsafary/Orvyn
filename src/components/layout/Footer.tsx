import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-8 mt-24">
      <div className="max-w-[920px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-serif text-xl tracking-[0.28em] text-white">
              ORVYN
            </Link>
            <p className="text-sm text-white/50">Go deeper. Come back different.</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-white/40 hover:text-accent transition-colors text-sm">X</a>
              <a href="#" className="text-white/40 hover:text-accent transition-colors text-sm">IG</a>
              <a href="#" className="text-white/40 hover:text-accent transition-colors text-sm">TT</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium text-white mb-2">Product</h4>
            <Link href="/how-it-works" className="text-sm text-white/50 hover:text-white transition-colors">How It Works</Link>
            <a href="/#pricing" className="text-sm text-white/50 hover:text-white transition-colors">Pricing</a>
            <span className="text-sm text-white/50">Web App</span>
            <span className="text-sm text-white/30">iOS (Soon)</span>
            <span className="text-sm text-white/30">Android (Soon)</span>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium text-white mb-2">Company</h4>
            <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">About</Link>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Careers</a>
            <a href="mailto:hello@orvyn.id" className="text-sm text-white/50 hover:text-white transition-colors">hello@orvyn.id</a>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium text-white mb-2">Legal</h4>
            <Link href="/legal" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-sm text-white/50 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-white/30">© 2026 Orvyn. All rights reserved. orvyn.id</p>
          <div className="flex gap-4 text-xs text-white/30">
            <Link href="/legal" className="hover:text-white transition-colors">Privacy</Link>
            <span>·</span>
            <Link href="/legal" className="hover:text-white transition-colors">Terms</Link>
            <span>·</span>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
