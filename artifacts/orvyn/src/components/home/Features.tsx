import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    num: "01",
    chapter: "Yours alone",
    title: "Built from your exact words",
    desc: "Every session starts with what you bring. Not a category. Not a mood board. Your words — shaped into a session that couldn't have been made for anyone else.",
  },
  {
    num: "02",
    chapter: "Over time",
    title: "A map of where you've been",
    desc: "After every session, one tap. Over weeks, Orvyn surfaces what you keep returning to, what's lifting, what's still heavy. Pattern recognition, made human.",
  },
  {
    num: "03",
    chapter: "In the room",
    title: "A voice that holds space",
    desc: "Pacing, tone, imagery — all calibrated to your state. Not text-to-speech. A voice that understands the difference between needing to be held and needing to be challenged.",
  },
  {
    num: "04",
    chapter: "Going deeper",
    title: "It learns you",
    desc: "The more you practice, the more precisely Orvyn understands you. Sessions don't repeat. They deepen. Your map makes the difference visible.",
  },
];

export function Features() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-[920px] mx-auto px-6">
        <ScrollReveal className="mb-20">
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-5">What Orvyn does</span>
          <h2
            className="font-serif font-light text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Not a feature list.<br />
            <em className="not-italic text-white/40">A different way of caring.</em>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-24">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 80} className="relative">
              <span className="absolute -top-10 -left-2 font-serif text-[7rem] leading-none text-white/[0.025] select-none pointer-events-none">
                {f.num}
              </span>
              <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#c8b89a]/70 mb-3 relative z-10">
                {f.chapter}
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-4 relative z-10 leading-snug">
                {f.title}
              </h3>
              <p className="text-white/50 leading-relaxed relative z-10 text-sm md:text-base">
                {f.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
