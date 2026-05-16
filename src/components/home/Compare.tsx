import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const rows = [
  { feature: "Fresh script, every session", orvyn: "✓", ai: "✗", calm: "✗", headspace: "✗" },
  { feature: "Adapts to your exact moment", orvyn: "✓", ai: "partial", calm: "✗", headspace: "✗" },
  { feature: "Inner Map — visible transformation", orvyn: "✓", ai: "✗", calm: "✗", headspace: "✗" },
  { feature: "Session memory across time", orvyn: "✓", ai: "✗", calm: "✗", headspace: "✗" },
  { feature: "No ads. Ever.", orvyn: "✓", ai: "varies", calm: "✓", headspace: "✓" },
  { feature: "Pay per session (not flat sub)", orvyn: "✓", ai: "✗", calm: "✗", headspace: "✗" },
  { feature: "40+ languages, fully voiced", orvyn: "✓", ai: "varies", calm: "partial", headspace: "partial" },
  { feature: "Free to begin, no card", orvyn: "✓", ai: "varies", calm: "✗", headspace: "✗" },
];

function Cell({ value, isOurs }: { value: string; isOurs?: boolean }) {
  const color =
    value === "✓"
      ? isOurs
        ? "text-[#c8b89a]"
        : "text-[#7aad8a]"
      : value === "✗"
      ? "text-white/20"
      : "text-[#8a7a64]";

  return <td className={`px-3 py-4 text-sm border-b border-white/[0.07] ${color} ${isOurs ? "font-medium" : ""}`}>{value}</td>;
}

export function Compare() {
  return (
    <section className="py-32">
      <div className="max-w-[920px] mx-auto px-6">
        <ScrollReveal>
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-5">Honest comparison</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white leading-[1.05]">
            How we compare.<br /><em className="not-italic text-[#c8b89a]">Honestly.</em>
          </h2>
        </ScrollReveal>

        {/* Desktop table */}
        <ScrollReveal delay={100} className="mt-12 hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/[0.07]">
                <th className="text-left py-3 px-3 text-[0.6rem] uppercase tracking-[0.15em] text-white/40 font-normal">Feature</th>
                <th className="text-left py-3 px-3 text-[0.6rem] uppercase tracking-[0.15em] text-[#c8b89a] font-normal">Orvyn</th>
                <th className="text-left py-3 px-3 text-[0.6rem] uppercase tracking-[0.15em] text-white/40 font-normal">AI Apps</th>
                <th className="text-left py-3 px-3 text-[0.6rem] uppercase tracking-[0.15em] text-white/40 font-normal">Calm</th>
                <th className="text-left py-3 px-3 text-[0.6rem] uppercase tracking-[0.15em] text-white/40 font-normal">Headspace</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.015] transition-colors group">
                  <td className="px-3 py-4 text-sm text-white/70 border-b border-white/[0.07]">{row.feature}</td>
                  <Cell value={row.orvyn} isOurs />
                  <Cell value={row.ai} />
                  <Cell value={row.calm} />
                  <Cell value={row.headspace} />
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>

        {/* Mobile cards */}
        <ScrollReveal delay={100} className="mt-10 md:hidden flex flex-col gap-px bg-white/[0.07] border border-white/[0.07]">
          {rows.slice(0, 4).map((row, i) => (
            <div key={i} className="bg-[#0c0c0f] p-5">
              <p className="text-sm text-white/70 mb-3 font-medium">{row.feature}</p>
              <div className="flex gap-6">
                <div>
                  <p className="text-[0.55rem] uppercase tracking-wider text-white/40 mb-1">Orvyn</p>
                  <p className="text-sm text-[#c8b89a] font-medium">{row.orvyn === "✓" ? "Always" : row.orvyn}</p>
                </div>
                <div>
                  <p className="text-[0.55rem] uppercase tracking-wider text-white/40 mb-1">Others</p>
                  <p className="text-sm text-white/40">{row.ai === "✗" ? "No" : row.ai === "✓" ? "Yes" : row.ai}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
