import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";

const steps = [
  {
    num: "01",
    title: "Open Orvyn and share what you're carrying",
    body: "Type or speak what's on your mind — one word, one sentence, or a full paragraph. There's no wrong answer. Orvyn starts with exactly what you have.",
    tip: "Even one word is enough",
  },
  {
    num: "02",
    title: "Orvyn builds your session from your exact words",
    body: "In about 30 seconds, your words are shaped into a personalized guided session — complete with pacing, imagery, and voice tone calibrated to what you brought. Not a template. Built for you.",
    tip: "No two sessions are identical",
  },
  {
    num: "03",
    title: "Your personalized audio session begins",
    body: "Settle in. Your session plays — guided breathwork, body scan, visualization, or reflection, depending on what you shared. The voice knows how to hold the exact space you need.",
    tip: "All voices are human-quality AI",
  },
  {
    num: "04",
    title: "One tap logs your mood to your Inner Map",
    body: "After the session, a five-second check-in: how do you feel now? One tap. That's it. Every check-in adds a data point to your personal map.",
    tip: "Takes under ten seconds",
  },
  {
    num: "05",
    title: "Your Inner Map builds patterns you've never seen",
    body: "Over days and weeks, Orvyn surfaces what keeps coming up, what's shifting, and what's lifting. You'll recognize things about yourself that were always there — just invisible.",
    tip: "Visible progress, not promises",
  },
  {
    num: "06",
    title: "Orvyn remembers. Each session deepens.",
    body: "The more you practice, the more precisely Orvyn understands your patterns. Sessions become sharper, more targeted. Your map becomes a record of genuine change.",
    tip: "It gets better every time",
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-[#0c0c0f] border-b border-white/[0.07]">
        <div className="max-w-[660px] mx-auto px-6">
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-6">Getting started</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-[1.02] mb-8">
            How Orvyn<br /><em className="not-italic text-[#c8b89a]">works.</em>
          </h1>
          <div className="w-12 h-px bg-[#8a7a64] mb-8" />
          <p className="text-white/55 leading-relaxed text-base">
            From your first word to your Inner Map — here's exactly what happens, and why it's different from anything you've tried before.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-[660px] mx-auto px-6">
          <div className="flex flex-col gap-px bg-white/[0.07] border border-white/[0.07]">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-[#07070a] p-8 relative overflow-hidden">
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 font-serif text-[6rem] text-white/[0.03] leading-none pointer-events-none select-none">
                    {step.num}
                  </span>
                  <p className="text-[0.8rem] text-[#c8b89a] font-medium mb-3">Step {step.num}</p>
                  <h3 className="font-serif text-2xl text-white mb-3 leading-snug">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-4 max-w-[480px]">{step.body}</p>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#c8b89a]/[0.08] text-[0.65rem] uppercase tracking-wider text-[#c8b89a]">
                    <span className="w-1 h-1 bg-[#c8b89a] rounded-full" />
                    {step.tip}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-24 bg-[#0c0c0f]">
        <div className="max-w-[660px] mx-auto px-6">
          <ScrollReveal>
            <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-5">The science</span>
            <h2 className="font-serif text-4xl text-white font-light mb-8">Why it works</h2>
            <div className="prose text-white/55 text-sm leading-relaxed space-y-5">
              <p>
                Mental rehearsal — the practice of guided visualization and intentional reflection — is one of the most replicated findings in performance psychology. Elite athletes, surgeons, and musicians use it to prepare for high-stakes moments. The mechanism is well understood: the brain processes imagined experience in the same neural pathways as real experience.
              </p>
              <p>
                What Orvyn does is apply that same principle to everyday emotional experience — not just performance. When you share what you're carrying and receive a session built from it, you're not being prescribed a generic relaxation technique. You're creating a targeted mental environment for the specific challenge, block, or feeling in front of you right now.
              </p>
              <p>
                The Inner Map adds a layer most apps ignore: visibility. Pattern recognition is a core cognitive tool for behavior change. Seeing your emotional patterns — what you return to, what shifts, what lifts — gives you a form of agency that passive apps can't offer. You're not just relaxing. You're developing self-knowledge.
              </p>
              <div className="border-l-2 border-[#c8b89a] pl-5 py-2 bg-[#c8b89a]/[0.04]">
                <p className="font-serif italic text-white/70 text-base">
                  "Personalized practice isn't a luxury — it's the prerequisite for depth."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.07] text-center">
        <div className="max-w-[660px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-white font-light mb-6">
              Ready to try it?
            </h2>
            <p className="text-white/50 mb-10 text-sm leading-relaxed">
              Free. No card. Your first session takes under two minutes to generate.
            </p>
            <Link href="/" className="inline-block px-10 py-4 bg-[#c8b89a] text-[#07070a] text-[0.65rem] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors" data-testid="button-howitworks-cta">
              Begin free
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
