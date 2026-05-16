import { ScrollReveal } from "@/hooks/use-scroll-reveal";

interface NarrativeBreakProps {
  line: string;
  sub?: string;
  align?: "left" | "center";
  accent?: boolean;
}

export function NarrativeBreak({ line, sub, align = "center", accent = false }: NarrativeBreakProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle horizontal rule with glow */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b89a]/10 to-transparent pointer-events-none" />

      <div className={`max-w-[920px] mx-auto px-6 ${align === "center" ? "text-center" : "text-left"}`}>
        <ScrollReveal>
          <p
            className={`font-serif font-light leading-[1.15] ${accent ? "text-[#c8b89a]" : "text-white"}`}
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)" }}
          >
            {line}
          </p>
          {sub && (
            <p className="mt-6 text-white/40 text-sm md:text-base leading-relaxed max-w-[520px] mx-auto">
              {sub}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
