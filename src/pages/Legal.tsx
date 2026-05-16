import { useState } from "react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";

export default function Legal() {
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");

  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-[#0c0c0f] border-b border-white/[0.07]">
        <div className="max-w-[660px] mx-auto px-6">
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-6">Legal</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-[1.02] mb-8">
            Privacy &amp;<br /><em className="not-italic text-[#c8b89a]">Terms.</em>
          </h1>
          <div className="w-12 h-px bg-[#8a7a64] mb-8" />
          <p className="text-white/55 leading-relaxed">
            Clear language. No surprises. Your inner world belongs to you — and we mean that legally, too.
          </p>
        </div>
      </section>

      {/* Tabs + content */}
      <section className="py-20">
        <div className="max-w-[660px] mx-auto px-6">
          <ScrollReveal>
            <div className="flex border border-white/[0.1] mb-12">
              <button
                onClick={() => setTab("privacy")}
                className={`flex-1 py-4 text-[0.65rem] uppercase tracking-[0.14em] font-medium transition-all ${tab === "privacy" ? "bg-[#c8b89a] text-[#07070a]" : "text-white/50 hover:text-white/80"}`}
                data-testid="tab-privacy"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setTab("terms")}
                className={`flex-1 py-4 text-[0.65rem] uppercase tracking-[0.14em] font-medium border-l border-white/[0.1] transition-all ${tab === "terms" ? "bg-[#c8b89a] text-[#07070a]" : "text-white/50 hover:text-white/80"}`}
                data-testid="tab-terms"
              >
                Terms of Service
              </button>
            </div>
          </ScrollReveal>

          {tab === "privacy" && (
            <ScrollReveal>
              <div className="text-white/55 text-sm leading-[2] space-y-8">
                <p className="text-white/35 italic">Last updated: May 2026</p>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">What we collect</h2>
                  <p>Orvyn collects only what's needed to provide the service: your account information (email, name), session content you share, mood check-in data for your Inner Map, and basic usage analytics (pages visited, features used).</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">What we never do</h2>
                  <ul className="space-y-2 pl-4">
                    {[
                      "Sell your personal data to third parties",
                      "Use your session content to train AI models without explicit consent",
                      "Serve ads based on your wellness data",
                      "Share your Inner Map data with anyone",
                    ].map((item) => (
                      <li key={item} className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-[#8a7a64]">{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">How your data is stored</h2>
                  <p>Your data is encrypted at rest and in transit. Session content is stored on secure servers and is accessible only to you. We use industry-standard security practices and conduct regular security audits.</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">Your Inner Map</h2>
                  <p>Your mood check-in data and Inner Map belong to you. You can export it at any time, and deleting your account permanently removes all associated data within 30 days.</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">Cookies</h2>
                  <p>We use essential cookies to keep Orvyn running and optional analytics cookies to understand how the product is used. See our{" "}
                    <Link href="/cookies" className="text-[#c8b89a] underline underline-offset-4">Cookie Policy</Link>{" "}
                    for full details and controls.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">Contact</h2>
                  <p>Privacy questions: <a href="mailto:privacy@orvyn.id" className="text-[#c8b89a] underline underline-offset-4">privacy@orvyn.id</a></p>
                </div>
              </div>
            </ScrollReveal>
          )}

          {tab === "terms" && (
            <ScrollReveal>
              <div className="text-white/55 text-sm leading-[2] space-y-8">
                <p className="text-white/35 italic">Last updated: May 2026</p>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">Using Orvyn</h2>
                  <p>Orvyn is a personal wellness platform. By using it, you agree to use it for personal, non-commercial wellness purposes and not to misuse or attempt to reverse-engineer the service.</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">Your content</h2>
                  <p>What you share with Orvyn — your words, your voice notes, your mood data — belongs to you. We use it only to generate your sessions and build your Inner Map. We don't claim ownership of anything you bring.</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">Credits and billing</h2>
                  <p>Credits are purchased for use on the Orvyn platform. Unused credits roll over within your plan cycle. Credits are non-refundable once a session has been generated. Subscriptions can be cancelled at any time; access continues until the end of the billing period.</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">Wellness disclaimer</h2>
                  <p>Orvyn is a wellness tool, not a medical device or mental health treatment. If you are experiencing a mental health crisis, please contact a qualified professional or emergency service. Orvyn is not a substitute for professional care.</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">Limitation of liability</h2>
                  <p>Orvyn provides the service "as is." We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-white font-light mb-4">Contact</h2>
                  <p>Legal questions: <a href="mailto:legal@orvyn.id" className="text-[#c8b89a] underline underline-offset-4">legal@orvyn.id</a></p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
}
