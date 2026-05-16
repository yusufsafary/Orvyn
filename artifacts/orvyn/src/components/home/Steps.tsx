import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    num: "I",
    moment: "You open Orvyn",
    title: "Say whatever you have",
    desc: "One word. One sentence. Everything. There's no right way to start. Orvyn is built to work with whatever you bring — even if all you have is 'I don't know.'",
    aside: "Works in 40+ languages",
  },
  {
    num: "II",
    moment: "Thirty seconds later",
    title: "A session appears — built for this exact moment",
    desc: "From your words, a complete guided session is created. Voice, pace, imagery — all shaped for what you just brought. Not pulled from a library. Made for you.",
    aside: "No two sessions are identical",
  },
  {
    num: "III",
    moment: "The session ends",
    title: "One tap. Five seconds. Your map grows.",
    desc: "A single mood check-in after each session. That's all it takes. Over days and weeks, Orvyn shows you what no one else could — what you keep returning to, and what's shifting.",
    aside: "Takes less time than locking your phone",
  },
  {
    num: "IV",
    moment: "The next time you come back",
    title: "It already knows you better",
    desc: "Each session informs the next. Orvyn doesn't forget. It deepens. What began as a single moment becomes a practice — and a practice becomes change you can actually see.",
    aside: "Sessions evolve with you",
  },
];

export function Steps() {
  return (
    <section className="py-24 md:py-32 bg-[#0c0c0f]">
      <div className="max-w-[920px] mx-auto px-6">
        <ScrollReveal className="mb-16">
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-5">The first time you sit down</span>
          <h2
            className="font-serif font-light text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Here's exactly<br />
            <em className="not-italic text-white/40">what happens.</em>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.85rem] top-8 bottom-8 w-px bg-gradient-to-b from-[#c8b89a]/20 via-[#c8b89a]/10 to-transparent hidden md:block" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`flex gap-8 md:gap-12 py-10 md:py-12 ${i !== steps.length - 1 ? "border-b border-white/[0.05]" : ""}`}>
                  {/* Step number + circle */}
                  <div className="flex flex-col items-center gap-2 shrink-0 pt-1">
                    <div className="w-14 h-14 rounded-full border border-[#c8b89a]/20 flex items-center justify-center bg-[#07070a]">
                      <span className="font-serif text-lg text-[#c8b89a]">{step.num}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-white/25 mb-2">{step.moment}</p>
                    <h4 className="font-serif text-xl md:text-2xl text-white leading-snug mb-3">{step.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed max-w-[500px] mb-4">{step.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-wider text-[#8a7a64]">
                      <span className="w-4 h-px bg-[#8a7a64]" />
                      {step.aside}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
