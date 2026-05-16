import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function Testimonials() {
  const testimonials = [
    {
      text: "I didn't realize how loud my mind was until Orvyn gave me a session that named it exactly.",
      author: "@mireille",
      source: "App Store"
    },
    {
      text: "The Inner Map showed me I've been running from the same feeling for three weeks. That alone changed everything.",
      author: "@jktharold",
      source: "Google Play"
    },
    {
      text: "I've tried Calm, Headspace. This is the first one that felt like it was actually listening.",
      author: "@sophiavv",
      source: "X"
    },
    {
      text: "I actually dozed off mid-session. That's how right it felt. Like it knew exactly what I needed.",
      author: "@ellenngg",
      source: "Instagram"
    },
    {
      text: "The anxiety that hides behind productivity — Orvyn was the first thing that found it.",
      author: "@rcryptanic",
      source: "X"
    },
    {
      text: "Mental clarity isn't automatic. Orvyn makes it intentional. I see the difference in my map.",
      author: "@justinpw",
      source: "App Store"
    }
  ];

  return (
    <section className="py-32 overflow-hidden">
      <ScrollReveal>
        <div className="flex gap-6 overflow-x-auto hide-scrollbar px-6 md:px-0 md:ml-[calc(50vw-460px)] pb-8" data-testid="container-testimonials">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-[#111116] border border-white/5 p-8 w-[320px] shrink-0 flex flex-col justify-between"
              data-testid={`card-testimonial-${i}`}
            >
              <div>
                <div className="text-accent text-sm tracking-widest mb-6">★★★★★</div>
                <p className="text-white/80 font-serif text-xl leading-relaxed italic mb-8">"{t.text}"</p>
              </div>
              <div className="text-xs text-white/40 uppercase tracking-wider">
                <span className="text-white/60">{t.author}</span> · {t.source}
              </div>
            </div>
          ))}
          {/* Spacer for right padding on scroll */}
          <div className="w-6 shrink-0 md:hidden" />
        </div>
      </ScrollReveal>
    </section>
  );
}
