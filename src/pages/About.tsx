import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-[#0c0c0f] border-b border-white/[0.07]">
        <div className="max-w-[660px] mx-auto px-6">
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-6">Our story</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-[1.02] mb-8">
            Built for the moment<br /><em className="not-italic text-[#c8b89a]">between okay<br />and not okay.</em>
          </h1>
          <div className="w-12 h-px bg-[#8a7a64] mb-8" />
          <p className="text-white/55 leading-relaxed">
            Most wellness apps were built for people who already know what they need. Orvyn was built for the rest of us.
          </p>
        </div>
      </section>

      {/* Story body */}
      <section className="py-24">
        <div className="max-w-[660px] mx-auto px-6">
          <ScrollReveal>
            <div className="prose text-white/60 text-sm leading-[2] space-y-8">

              <div>
                <h2 className="font-serif text-3xl text-white font-light mb-4">The problem</h2>
                <p>
                  Existing apps give you a library. You browse. You pick something that sounds vaguely right. You sit down with a session recorded for nobody in particular.
                </p>
                <p>
                  What you actually needed — in that exact moment, with that specific thing on your mind — was a guide who could meet you exactly where you were.
                </p>
                <p>
                  That guide didn't exist. So we built it.
                </p>
              </div>

              <div className="border-l-2 border-[#c8b89a] pl-6 py-1 bg-[#c8b89a]/[0.04]">
                <p className="font-serif italic text-white/75 text-lg leading-relaxed">
                  "We didn't build Orvyn because we needed another wellness app. We built it because the one we needed didn't exist."
                </p>
              </div>

              <div>
                <h2 className="font-serif text-3xl text-white font-light mb-4">The insight</h2>
                <p>
                  The most powerful thing you can do for another person is to meet them exactly where they are — not where you think they should be, and not somewhere comfortable for you.
                </p>
                <p>
                  That's what good therapy does. That's what a trusted friend does at 2am. And that's what technology, until recently, couldn't do at all.
                </p>
                <p>
                  Orvyn changes that. Share what you're carrying — in any language, at any length — and receive a guided session built from your exact words. The voice. The pacing. The imagery. All of it shaped for this moment alone.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-3xl text-white font-light mb-4">The mission</h2>
                <p>
                  Orvyn exists to give every person access to a guide that speaks to their exact moment — not a library assembled for the average person.
                </p>
                <p>
                  We believe that wellness is not a product you consume. It's a practice you build. And a practice that's shaped to you will always be more effective than one shaped for everyone.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-3xl text-white font-light mb-4">The team</h2>
                <p>
                  We're a team of eight — engineers, licensed therapists, sound designers, and AI researchers. We are not a wellness brand with an AI feature. We're an AI team that takes wellness seriously enough to involve therapists in every design decision.
                </p>
                <p>
                  Our therapists review session structures. Our sound designers shape every audio element. Our engineers obsess over the 30 seconds between your words and your session.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-3xl text-white font-light mb-4">Our values</h2>
                <div className="space-y-5">
                  {[
                    { label: "Precision", body: "Generic is comfortable. Precise is useful. We choose precision every time." },
                    { label: "Privacy", body: "Your inner world belongs to you. We don't sell it, share it, or train on it without your explicit consent." },
                    { label: "Depth", body: "We didn't build Orvyn to help people feel slightly better for an hour. We built it to help people actually change." },
                  ].map((v) => (
                    <div key={v.label} className="pl-5 border-l border-white/[0.12]">
                      <p className="text-white/90 font-medium text-sm mb-1">{v.label}</p>
                      <p className="text-white/50 text-sm">{v.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-white/40 text-sm">
                We'd rather have a thousand people whose lives were meaningfully changed than a million who barely opened the app.
              </p>
              <p className="text-white/40 text-sm">
                If you're here, you're one of the first. We're grateful for that.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="mt-16">
            <Link href="/" className="inline-block px-8 py-4 bg-[#c8b89a] text-[#07070a] text-[0.65rem] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors" data-testid="button-about-back">
              Back to Orvyn
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
