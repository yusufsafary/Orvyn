import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    text: "I didn't realize how loud my mind was until Orvyn gave me a session that named it exactly.",
    author: "@mireille",
    source: "App Store",
    detail: "Used Orvyn after a difficult week at work",
  },
  {
    text: "The Inner Map showed me I've been running from the same feeling for three weeks. That alone changed everything.",
    author: "@jktharold",
    source: "Google Play",
    detail: "Day 21 of practice",
  },
  {
    text: "I've tried Calm, Headspace. This is the first one that felt like it was actually listening.",
    author: "@sophiavv",
    source: "X",
    detail: "Came to Orvyn after two other apps",
  },
  {
    text: "I actually dozed off mid-session. That's how right it felt. Like it knew exactly what I needed.",
    author: "@ellenngg",
    source: "Instagram",
    detail: "3am session, couldn't sleep",
  },
  {
    text: "The anxiety that hides behind productivity — Orvyn was the first thing that found it.",
    author: "@rcryptanic",
    source: "X",
    detail: "Typed 'I'm fine' and meant something else",
  },
  {
    text: "Mental clarity isn't automatic. Orvyn makes it intentional. I see the difference in my map.",
    author: "@justinpw",
    source: "App Store",
    detail: "Week 6 of daily practice",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[920px] mx-auto px-6 mb-12">
        <ScrollReveal>
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-5">Real moments</span>
          <h2
            className="font-serif font-light text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            What happens<br />
            <em className="not-italic text-white/40">when it lands.</em>
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div
          className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 px-6 md:pl-[calc(50vw-460px)]"
          data-testid="container-testimonials"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111116] border border-white/[0.06] p-7 w-[300px] md:w-[340px] shrink-0 flex flex-col justify-between group hover:border-[#c8b89a]/20 transition-colors duration-500"
              data-testid={`card-testimonial-${i}`}
            >
              <div>
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-[#c8b89a]/60 text-xs">★</span>
                  ))}
                </div>

                <p className="text-white/75 font-serif text-lg leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div>
                <p className="text-[0.6rem] uppercase tracking-wider text-white/30 mb-1">{t.detail}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <span className="text-sm text-white/55 font-medium">{t.author}</span>
                  <span className="text-[0.6rem] uppercase tracking-wider text-white/25">{t.source}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="w-6 shrink-0 md:hidden" />
        </div>
      </ScrollReveal>
    </section>
  );
}
