import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const MOMENTS = [
  "It's 11pm. You can't sleep. You don't know why.",
  "You've held it together all day. Now it's just you.",
  "You typed three different things into the search bar and deleted them all.",
  "You're fine. You keep saying you're fine. You are not fine.",
  "There's no crisis. Just this low hum you can't shake.",
  "You closed the other apps. This one felt different.",
];

export function TheMoment() {
  const moment = MOMENTS[Math.floor(Date.now() / 60000) % MOMENTS.length];

  return (
    <section className="py-0 relative">
      <ScrollReveal>
        <div className="bg-[#0c0c0f] border-y border-white/[0.05] py-20 md:py-28 px-6 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#c8b89a]/[0.025] rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-[760px] mx-auto">
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-[#c8b89a]/60 mb-8">
              You're not alone in this moment
            </p>

            <blockquote
              className="font-serif font-light text-white/85 leading-[1.3] mb-10"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
            >
              "{moment}"
            </blockquote>

            <p className="text-white/35 text-sm leading-relaxed max-w-[440px] mx-auto">
              Most people who come to Orvyn don't know exactly what they need. They just know something needs attention. That's enough to start.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
