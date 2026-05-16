import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-6">404</p>
      <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-[1.02] mb-8">
        This page<br /><em className="not-italic text-[#c8b89a]">doesn't exist.</em>
      </h1>
      <div className="w-12 h-px bg-[#8a7a64] mb-8" />
      <p className="text-white/50 text-sm mb-12">
        The page you're looking for isn't here. Let's take you somewhere that is.
      </p>
      <Link href="/" className="px-10 py-4 bg-[#c8b89a] text-[#07070a] text-[0.65rem] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors">
        Return home
      </Link>
    </div>
  );
}
