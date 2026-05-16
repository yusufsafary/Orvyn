import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function InnerMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Array<{ state: "inactive" | "active" | "recent"; delay: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 42 }, (_, i) => {
      const r = Math.random();
      const state = r > 0.85 ? "recent" : r > 0.6 ? "active" : "inactive";
      return { state: state as "inactive" | "active" | "recent", delay: i * 30 };
    });
    setDots(generated);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const dotEls = containerRef.current?.querySelectorAll(".map-dot");
          dotEls?.forEach((dot, i) => {
            setTimeout(() => {
              (dot as HTMLElement).style.opacity = "1";
              (dot as HTMLElement).style.transform = "scale(1)";
            }, i * 30);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [dots]);

  const moods = [
    { label: "Stillness", active: true },
    { label: "Work anxiety", active: true },
    { label: "Grief", active: false },
    { label: "Clarity", active: true },
    { label: "Loneliness", active: false },
    { label: "Focus", active: false },
  ];

  return (
    <section className="py-32 bg-[#0c0c0f]">
      <div className="max-w-[920px] mx-auto px-6">
        <ScrollReveal>
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-5">Your journey</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white leading-[1.05] mb-6">
            The map only<br /><em className="not-italic text-[#c8b89a]">you can draw.</em>
          </h2>
          <div className="w-12 h-px bg-[#8a7a64] my-8" />
          <p className="text-white/50 leading-relaxed max-w-[480px]">
            Most apps end when the session ends. Orvyn begins there. Every check-in adds a point. Every week reveals a pattern. You'll see things about yourself you've never had words for.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150} className="mt-10">
          <div
            ref={containerRef}
            className="border border-white/[0.07] bg-[#111116] p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b89a]/40 to-transparent" />

            <p className="text-[0.58rem] uppercase tracking-[0.2em] text-[#8a7a64] mb-6">
              Inner Map — Week 3 of your practice
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {dots.map((dot, i) => (
                <div
                  key={i}
                  className="map-dot w-2 h-2 rounded-full transition-all duration-500"
                  style={{
                    opacity: 0,
                    transform: "scale(0.5)",
                    backgroundColor:
                      dot.state === "recent"
                        ? "#ffffff"
                        : dot.state === "active"
                        ? "#c8b89a"
                        : "rgba(255,255,255,0.15)",
                    boxShadow:
                      dot.state === "recent"
                        ? "0 0 8px rgba(255,255,255,0.5)"
                        : dot.state === "active"
                        ? "0 0 4px rgba(200,184,154,0.3)"
                        : "none",
                  }}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {moods.map((mood) => (
                <span
                  key={mood.label}
                  className={`px-3 py-1 text-[0.65rem] uppercase tracking-wider border transition-colors ${
                    mood.active
                      ? "border-[#c8b89a]/40 text-[#c8b89a]"
                      : "border-white/10 text-white/30"
                  }`}
                >
                  {mood.label}
                </span>
              ))}
            </div>

            <div className="border-t border-white/[0.07] pt-5">
              <p className="font-serif italic text-white/60 leading-relaxed text-sm">
                "This week you've returned to{" "}
                <span className="text-[#c8b89a]">stillness</span> 4 times. The
                sessions around{" "}
                <span className="text-[#c8b89a]">work anxiety</span> are getting
                shorter. Something is shifting."
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
