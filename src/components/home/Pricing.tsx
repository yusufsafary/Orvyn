import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const plans = [
  {
    name: "Still",
    desc: "For those just beginning",
    price: "Free",
    period: "Always",
    featured: false,
    features: [
      "2 personalized sessions",
      "12 curated programs",
      "Inner Map (starter)",
      "No card required",
    ],
    cta: "Begin free",
  },
  {
    name: "Depth",
    desc: "For regular practice",
    price: "$9",
    period: "per month",
    featured: true,
    badge: "Most personal",
    features: [
      "8 credits / month",
      "Full Inner Map + patterns",
      "Session memory",
      "40+ languages",
      "Credits roll over",
    ],
    cta: "Start Depth",
  },
  {
    name: "Immerse",
    desc: "For daily transformation",
    price: "$24",
    period: "per month",
    featured: false,
    features: [
      "24 credits / month",
      "Priority generation",
      "Deep pattern analysis",
      "Personalized programs",
      "Everything in Depth",
    ],
    cta: "Go Immerse",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#0c0c0f]">
      <div className="max-w-[920px] mx-auto px-6">
        <ScrollReveal>
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-5">Your practice, your pace</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white leading-[1.05]">
            Pay for what you<br /><em className="not-italic text-[#c8b89a]">actually use.</em>
          </h2>
          <div className="w-12 h-px bg-[#8a7a64] my-8" />
          <p className="text-white/50 leading-relaxed max-w-[480px]">
            No flat subscription to a library you'll barely touch. Credits for sessions. Rolls over. Cancel anytime. Free to begin — no card required.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150} className="mt-12 grid md:grid-cols-3 gap-px bg-white/[0.07]">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 flex flex-col ${
                plan.featured ? "bg-[#111116] border-t-2 border-t-[#c8b89a]/40" : "bg-[#0c0c0f]"
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.badge && (
                <span className="absolute top-0 right-6 bg-[#c8b89a] text-[#07070a] text-[0.52rem] uppercase tracking-[0.15em] font-semibold px-3 py-1">
                  {plan.badge}
                </span>
              )}

              <div className="mb-8">
                <h3 className="font-serif text-2xl text-white mb-1">{plan.name}</h3>
                <p className="text-[0.75rem] text-white/50">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <div className="font-serif text-5xl text-white leading-none">{plan.price}</div>
                <div className="text-[0.65rem] uppercase tracking-wider text-white/40 mt-1">{plan.period}</div>
              </div>

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm text-white/60 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#8a7a64]">
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 text-[0.65rem] uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                  plan.featured
                    ? "bg-[#c8b89a] text-[#07070a] hover:bg-white"
                    : "bg-transparent border border-white/15 text-white/60 hover:bg-[#c8b89a] hover:border-[#c8b89a] hover:text-[#07070a]"
                }`}
                data-testid={`button-plan-${plan.name.toLowerCase()}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
