import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";

export function CTA() {
  return (
    <section className="py-40 bg-[#0c0c0f] border-t border-white/[0.07] text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#c8b89a]/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[920px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-7xl font-light text-white leading-[1.1] mb-8">
            No two people carry<br />the same thing.<br />
            <em className="not-italic text-[#c8b89a]">No two sessions should either.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-md mx-auto">
            Start free. Your space is ready in under a minute. No card required.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#hero-input"
            className="px-10 py-4 bg-[#c8b89a] text-[#07070a] text-[0.65rem] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors"
            data-testid="button-cta-create"
          >
            Create my space
          </a>
          <Link
            href="/how-it-works"
            className="px-10 py-4 border border-white/15 text-white/60 text-[0.65rem] uppercase tracking-[0.2em] hover:text-white hover:border-white/30 transition-colors"
            data-testid="link-cta-how-it-works"
          >
            See how it works
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
