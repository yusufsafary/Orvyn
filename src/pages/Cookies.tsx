import { useState } from "react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";

export default function Cookies() {
  const [analytics, setAnalytics] = useState(true);
  const [preferences, setPreferences] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const consent = { essential: true, analytics, preferences };
    localStorage.setItem("orvyn-cookie-consent", JSON.stringify(consent));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-[#0c0c0f] border-b border-white/[0.07]">
        <div className="max-w-[660px] mx-auto px-6">
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-6">Cookie Policy</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-[1.02] mb-8">
            Cookies.<br /><em className="not-italic text-[#c8b89a]">Your control.</em>
          </h1>
          <div className="w-12 h-px bg-[#8a7a64] mb-8" />
          <p className="text-white/55 leading-relaxed">
            We use cookies to keep Orvyn running and to understand how it's being used. Here's exactly what each one does — and how to control it.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[660px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-white/55 text-sm leading-relaxed mb-10">
              A cookie is a small file stored in your browser. Orvyn uses them in three categories. You're in control of the optional ones.
            </p>
          </ScrollReveal>

          <div className="space-y-4 mb-10">
            {/* Essential */}
            <ScrollReveal delay={0}>
              <div className="border border-white/[0.1] bg-[#111116] p-6" data-testid="cookie-category-essential">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/85 text-sm font-medium">Essential cookies</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[0.6rem] uppercase tracking-wider text-white/30">Required</span>
                    <div className="w-10 h-5 bg-[#c8b89a] rounded-full relative cursor-not-allowed opacity-60">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">
                  Required for Orvyn to function. These handle your login session, security tokens, and basic site operations. They cannot be disabled.
                </p>
              </div>
            </ScrollReveal>

            {/* Analytics */}
            <ScrollReveal delay={60}>
              <div className="border border-white/[0.1] bg-[#111116] p-6" data-testid="cookie-category-analytics">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/85 text-sm font-medium">Analytics cookies</span>
                  <button
                    onClick={() => setAnalytics(!analytics)}
                    className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${analytics ? "bg-[#c8b89a]" : "bg-white/10"}`}
                    data-testid="toggle-analytics"
                    aria-label="Toggle analytics cookies"
                  >
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 ${analytics ? "right-0.5" : "left-0.5"}`} />
                  </button>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">
                  Help us understand how people use Orvyn — which features are used most, where people get stuck, how sessions are discovered. All data is anonymized. No personal content is included.
                </p>
              </div>
            </ScrollReveal>

            {/* Preferences */}
            <ScrollReveal delay={120}>
              <div className="border border-white/[0.1] bg-[#111116] p-6" data-testid="cookie-category-preferences">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/85 text-sm font-medium">Preference cookies</span>
                  <button
                    onClick={() => setPreferences(!preferences)}
                    className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${preferences ? "bg-[#c8b89a]" : "bg-white/10"}`}
                    data-testid="toggle-preferences"
                    aria-label="Toggle preference cookies"
                  >
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 ${preferences ? "right-0.5" : "left-0.5"}`} />
                  </button>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">
                  Remember your settings across visits — language preference, theme, and notification choices. Optional but improve your experience.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={180} className="flex gap-4 mb-16">
            <button
              onClick={handleSave}
              className={`px-8 py-3 text-[0.65rem] uppercase tracking-[0.15em] font-medium transition-all ${saved ? "bg-[#7aad8a] text-white" : "bg-[#c8b89a] text-[#07070a] hover:bg-white"}`}
              data-testid="button-save-preferences"
            >
              {saved ? "Saved" : "Save preferences"}
            </button>
            <Link href="/legal" className="px-8 py-3 border border-white/15 text-white/60 text-[0.65rem] uppercase tracking-[0.15em] hover:text-white hover:border-white/30 transition-colors">
              Privacy Policy
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="font-serif text-2xl text-white font-light mb-6">What we never use cookies for</h2>
            <ul className="text-white/50 text-sm leading-relaxed space-y-3">
              {[
                "Advertising or retargeting",
                "Selling data to third parties",
                "Tracking you across other websites",
                "Profiling your wellness data for commercial use",
              ].map((item) => (
                <li key={item} className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#8a7a64]">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-white/40 text-sm">
              Cookie questions: <a href="mailto:privacy@orvyn.id" className="text-[#c8b89a] underline underline-offset-4">privacy@orvyn.id</a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
