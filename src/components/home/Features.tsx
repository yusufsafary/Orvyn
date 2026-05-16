import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function Features() {
  const features = [
    {
      num: "01",
      title: "Precision personalization",
      desc: "Not a library of sessions for everyone. A session for you, right now. Built from what you bring — your language, your pace, your exact moment."
    },
    {
      num: "02",
      title: "The Inner Map",
      desc: "After every session, a five-second mood check-in builds your pattern over time. You'll see things about yourself you've never had words for."
    },
    {
      num: "03",
      title: "Voice you can feel",
      desc: "Every session is voiced with pacing, tone, and imagery tuned to your state. This isn't text-to-speech. It's a voice that knows how to hold space."
    },
    {
      num: "04",
      title: "Always adapting",
      desc: "The more you practice with Orvyn, the more precisely it understands you. Sessions deepen. Your map proves it."
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-[920px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100} className="relative">
              <span className="absolute -top-12 -left-4 font-serif text-[8rem] leading-none text-white/[0.03] select-none pointer-events-none z-[-1]">
                {feature.num}
              </span>
              <h3 className="font-serif text-2xl text-white mb-4 relative z-10">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed relative z-10">{feature.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
