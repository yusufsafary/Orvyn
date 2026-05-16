import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Features } from "@/components/home/Features";
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
      <Hero />
      <Stats />
      <Features />
      <Steps />
      <Testimonials />
      <InnerMap />
      <Compare />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
