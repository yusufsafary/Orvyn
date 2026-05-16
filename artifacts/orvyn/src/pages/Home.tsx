import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { TheMoment } from "@/components/home/TheMoment";
import { Features } from "@/components/home/Features";
import { NarrativeBreak } from "@/components/home/NarrativeBreak";
import { Steps } from "@/components/home/Steps";
import { Testimonials } from "@/components/home/Testimonials";
import { InnerMap } from "@/components/home/InnerMap";
import { Compare } from "@/components/home/Compare";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div>
      {/* Act I — The invitation */}
      <Hero />

      {/* The human moment that brings people here */}
      <TheMoment />

      {/* Social proof — people like you are already here */}
      <Stats />

      {/* Act II — What makes this different */}
      <NarrativeBreak
        line="Most apps give everyone the same session. Orvyn gives you the one that couldn't have been made for anyone else."
        sub="Here's why that matters — and how it works."
        align="center"
      />

      <Features />

      {/* Bridge into how */}
      <NarrativeBreak
        line="The first session takes about two minutes to generate. What comes after takes a lifetime to understand."
        align="center"
        accent
      />

      {/* Act III — The process */}
      <Steps />

      {/* What happens when it lands */}
      <Testimonials />

      {/* Act IV — The long game */}
      <InnerMap />

      <NarrativeBreak
        line="You've probably tried something before. Here's how this is different — honestly."
        align="center"
      />

      <Compare />

      {/* Act V — When you're ready */}
      <NarrativeBreak
        line="Start with what you have. Even 'I don't know' is enough."
        sub="Free to begin. No card required."
        align="center"
        accent
      />

      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
