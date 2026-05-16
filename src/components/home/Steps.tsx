import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function Steps() {
  const steps = [
    {
      num: "I",
      title: "Say what you're carrying",
      desc: "Type a word, a sentence, or everything on your mind. Orvyn starts with whatever you have."
    },
    {
      num: "II",
      title: "A session is built just for you",
      desc: "From your words, a guided session is built — voice, pacing, imagery all tuned to this moment alone. Not a library. Yours."
    },
    {
      num: "III",
      title: "One tap. Inner Map updates.",
      desc: "After each session, a one-tap mood check-in takes five seconds. Over weeks, patterns emerge."
    },
    {
      num: "IV",
      title: "Orvyn adapts. Always.",
      desc: "The more you practice, the more precisely Orvyn understands you. Sessions deepen. The map proves it."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-[920px] mx-auto px-6">
        <div className="border border-white/10 bg-[#0c0c0f]">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className={`p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-12 items-start ${i !== steps.length - 1 ? 'border-b border-white/5' : ''}`}>
                <div className="font-serif text-3xl text-accent w-16 shrink-0">{step.num}.</div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">{step.title}</h4>
                  <p className="text-white/50 leading-relaxed max-w-[500px]">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
