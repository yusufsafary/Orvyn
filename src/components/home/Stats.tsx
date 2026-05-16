import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

function Counter({ end, duration = 1500, suffix = "" }: { end: number | string, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const numericEnd = typeof end === 'string' ? parseFloat(end.replace(/[^0-9.]/g, '')) : end;
  const isDecimal = numericEnd % 1 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out quad
            const easeOut = 1 - (1 - progress) * (1 - progress);
            setCount(numericEnd * easeOut);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericEnd);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericEnd, duration]);

  const displayCount = isDecimal 
    ? count.toFixed(1) 
    : Math.floor(count).toLocaleString();

  // If the original end value wasn't just a number, we just show it directly
  // to avoid complex parsing for strings like "< 60s", but since we need animation,
  // we'll compromise for this specific design requirement
  const isComplexString = typeof end === 'string' && /[<>]/.test(end);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl text-white">
      {isComplexString ? end : `${displayCount}${suffix}`}
    </span>
  );
}

export function Stats() {
  const stats = [
    { value: "47,000", suffix: "+", label: "Sessions generated" },
    { value: "4.9", suffix: "★", label: "App Store rating" },
    { value: "40", suffix: "+", label: "Languages supported" },
    { value: "< 60s", suffix: "", label: "From words to session" }
  ];

  return (
    <section className="py-24 border-y border-white/10 bg-[#07070a]/50">
      <div className="max-w-[920px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100} className="flex flex-col items-center md:items-start text-center md:text-left">
              <Counter end={stat.value} suffix={stat.suffix} />
              <span className="text-xs uppercase tracking-widest text-white/40 mt-3 font-medium">
                {stat.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
