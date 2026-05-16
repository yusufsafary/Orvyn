import { useState } from "react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How is Orvyn different from Headspace or Calm?",
    a: "Those apps give you the same pre-recorded session everyone else gets. Orvyn builds from what you bring — your goal, your block, the exact thing you're carrying right now. No two sessions are the same. Ever.",
  },
  {
    q: "What is the Inner Map?",
    a: "After every session, a one-tap mood check-in takes five seconds. Over time, Orvyn surfaces patterns — what you return to, what's lifting, what's still heavy. It's the only part of you that shows where you've actually been.",
  },
  {
    q: "How does personalization actually work?",
    a: "Bring whatever you have — one word, one sentence, or everything on your mind. Orvyn shapes that into a guided session voiced precisely for this moment. The more you share, the more precisely it's built. But even one word is enough to start.",
  },
  {
    q: "What are credits and how do they work?",
    a: "1 credit = one personalized session. Choose a plan based on how often you practice. Unused credits roll over. You're never paying for a library you don't use.",
  },
  {
    q: "Is my data private?",
    a: "Yes. What you share stays between you and Orvyn. We don't sell your data, and your session content is yours alone. See our Privacy Policy for full details.",
  },
  {
    q: "What platforms is Orvyn on?",
    a: "iOS and Android — coming soon. The web app is available now so you can begin immediately, from any device, with no download required.",
  },
  {
    q: "I'm skeptical. Does this actually work?",
    a: "Fair. The best way to find out is to try it — free, no card. Mental rehearsal and personalized guided practice are among the most studied techniques in performance psychology. Orvyn applies that principle precisely to whatever you're working through right now. If it's not for you, no hard feelings.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.07]" data-testid={`faq-item-${index}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        data-testid={`faq-toggle-${index}`}
      >
        <span className="font-serif text-lg text-white/80 group-hover:text-white transition-colors leading-snug">
          {q}
        </span>
        <Plus
          size={18}
          className={`text-[#8a7a64] flex-shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-45 text-[#c8b89a]" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <p className="text-white/55 leading-relaxed text-sm pr-8">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-32">
      <div className="max-w-[920px] mx-auto px-6">
        <ScrollReveal>
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-5">Questions</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white leading-[1.05]">
            Things worth<br /><em className="not-italic text-[#c8b89a]">knowing.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100} className="mt-12 border-t border-white/[0.07]">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
