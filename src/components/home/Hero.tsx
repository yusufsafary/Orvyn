import { useState, useRef, useEffect } from "react";
  import { Mic, ArrowDown } from "lucide-react";
  import { ScrollReveal } from "@/hooks/use-scroll-reveal";

  // ── Floating ambient background words ──────────────────────────────────────
  const AMBIENT = [
    "still", "breathe", "here", "let go", "present",
    "soft", "held", "ease", "now", "clear", "open", "rest",
  ];

  function FloatingWords() {
    const words = AMBIENT.map((w, i) => ({
      w,
      left: 5 + (i * 8.3) % 90,
      duration: 18 + (i * 3.7) % 14,
      delay:    -(i * 2.9) % 20,
      size:     i % 3 === 0 ? "text-sm" : i % 3 === 1 ? "text-xs" : "text-[0.65rem]",
      opacity:  i % 4 === 0 ? "opacity-[0.04]" : "opacity-[0.03]",
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        {words.map((item, i) => (
          <span
            key={i}
            className={`absolute font-serif italic text-white ${item.size} ${item.opacity}`}
            style={{
              left: `${item.left}%`,
              bottom: "-2rem",
              animation: `floatUp ${item.duration}s ${item.delay}s linear infinite`,
            }}
          >
            {item.w}
          </span>
        ))}
        <style>{`
          @keyframes floatUp {
            0%   { transform: translateY(0)      opacity: 0; }
            5%   { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translateY(-110vh); opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  // ── Breathing guide dot ────────────────────────────────────────────────────
  function BreathingDot() {
    return (
      <div className="flex items-center gap-2.5 mt-3" aria-hidden>
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#c8b89a]/50 inline-block"
          style={{
            animation: "breathe 7s ease-in-out infinite",
          }}
        />
        <span
          className="text-[0.55rem] uppercase tracking-[0.2em] text-white/20"
          style={{ animation: "breatheFade 7s ease-in-out infinite" }}
        >
          breathe
        </span>
        <style>{`
          @keyframes breathe {
            0%, 100% { transform: scale(1);   opacity: 0.4; }
            40%       { transform: scale(2.2); opacity: 1;   }
            60%       { transform: scale(2.2); opacity: 1;   }
          }
          @keyframes breatheFade {
            0%, 100% { opacity: 0.15; }
            40%      { opacity: 0.5;  }
            60%      { opacity: 0.5;  }
          }
        `}</style>
      </div>
    );
  }

  // ── Word encouragement ────────────────────────────────────────────────────
  function getEncouragement(text: string): string {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    if (words === 0) return "";
    if (words <= 2)  return "One word is enough to begin.";
    if (words <= 6)  return "There's something here.";
    if (words <= 12) return "Keep going — there's a session in this.";
    return "This is ready. Whenever you are.";
  }

  // ── X (Twitter) Card ──────────────────────────────────────────────────────
  function XCard() {
    return (
      <a
        href="https://x.com/orvynlab"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#161619] border border-white/10 hover:border-white/25 px-4 py-2.5 transition-all duration-300 group mb-8"
        aria-label="Follow Orvyn on X"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4 fill-white/70 group-hover:fill-white transition-colors duration-200 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors duration-200 tracking-wide">
          @orvynlab
        </span>
        <span className="text-[0.6rem] uppercase tracking-widest text-white/25 group-hover:text-white/50 transition-colors duration-200">
          Follow
        </span>
      </a>
    );
  }

  // ── Main Hero ─────────────────────────────────────────────────────────────
  export function Hero() {
    const [inputText, setInputText]     = useState("");
    const [sessionState, setSessionState] = useState<"idle" | "generating" | "result">("idle");
    const [focused, setFocused]         = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!inputText.trim() || sessionState !== "idle") return;
      setSessionState("generating");
      setTimeout(() => setSessionState("result"), 2500);
    };

    const handleReset = () => {
      setSessionState("idle");
      setInputText("");
    };

    // Auto-resize textarea
    useEffect(() => {
      const ta = textareaRef.current;
      if (!ta) return;
      ta.style.height = "auto";
      ta.style.height = ta.scrollHeight + "px";
    }, [inputText]);

    const encouragement = getEncouragement(inputText);

    return (
      <section className="min-h-[100dvh] pt-32 pb-24 flex flex-col items-center justify-center relative overflow-hidden">

        {/* Floating ambient words */}
        <FloatingWords />

        <div className="max-w-[920px] w-full mx-auto px-6 text-center relative z-10">

          <ScrollReveal delay={0}>
            <XCard />
          </ScrollReveal>

          <ScrollReveal delay={0}>
            <p className="text-xs uppercase tracking-widest text-accent mb-8" data-testid="hero-eyebrow">
              Orvyn wellness · Personalized to this moment
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1
              className="font-serif text-5xl md:text-[8rem] leading-[0.9] font-light text-white mb-8"
              data-testid="hero-heading"
            >
              Share what<br />you&apos;re{" "}
              <em className="text-accent not-italic">carrying.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p
              className="max-w-[540px] mx-auto text-lg text-white/60 mb-6 leading-relaxed"
              data-testid="hero-subcopy"
            >
              Orvyn listens to whatever you bring. One word, one thought, your whole week.
              A guided session is built precisely for this moment. Not a library. Yours.
            </p>
          </ScrollReveal>

          {/* Breathing guide */}
          <ScrollReveal delay={250}>
            <div className="flex justify-center mb-10">
              <BreathingDot />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="w-full max-w-[640px] mx-auto">
            {sessionState === "idle" && (
              <form
                onSubmit={handleSubmit}
                data-testid="form-session-input"
                className={`relative transition-all duration-500 ${
                  focused
                    ? "shadow-[0_0_60px_rgba(200,184,154,0.07)]"
                    : "shadow-none"
                }`}
              >
                <div
                  className={`bg-[#161619] border transition-colors duration-500 p-2 ${
                    focused ? "border-white/20" : "border-white/10"
                  }`}
                >
                  <textarea
                    ref={textareaRef}
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="What's on your mind right now?"
                    className="w-full bg-transparent text-white placeholder:text-white/20 placeholder:italic
                      p-4 pb-16 resize-none focus:outline-none min-h-[120px] text-lg font-serif
                      transition-all duration-300 overflow-hidden"
                    data-testid="input-session"
                  />

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <button
                      type="button"
                      className="flex items-center gap-2 text-xs text-white/40 hover:text-white/80 transition-colors bg-white/5 px-3 py-1.5 rounded-full"
                      data-testid="button-voice-record"
                    >
                      <Mic size={14} /> Record
                    </button>

                    <button
                      type="submit"
                      disabled={!inputText.trim()}
                      className="bg-accent text-[#07070a] px-6 py-2 text-sm font-medium
                        disabled:opacity-40 disabled:cursor-not-allowed
                        hover:bg-white transition-colors duration-200"
                      data-testid="button-submit-session"
                    >
                      Begin session →
                    </button>
                  </div>
                </div>

                {/* Word encouragement */}
                <p
                  className={`text-left mt-2.5 pl-1 text-[0.62rem] tracking-wider font-serif italic transition-all duration-500 ${
                    encouragement ? "text-[#c8b89a]/50 opacity-100" : "opacity-0"
                  }`}
                  aria-live="polite"
                >
                  {encouragement}
                </p>
              </form>
            )}

            {sessionState === "generating" && (
              <div
                className="bg-[#161619] border border-white/10 p-8 shadow-2xl h-[160px]
                  flex flex-col items-center justify-center gap-6
                  animate-in fade-in zoom-in-95 duration-500"
                data-testid="state-generating"
              >
                <div className="w-full max-w-[240px] h-px bg-white/5 overflow-hidden relative">
                  <div
                    className="absolute inset-y-0 left-0 bg-accent"
                    style={{ animation: "progressBar 2.5s ease-in-out forwards" }}
                  />
                </div>
                <p className="text-white/60 font-serif italic text-lg animate-pulse">
                  Building your session...
                </p>
                <style>{`
                  @keyframes progressBar {
                    from { width: 0%; }
                    to   { width: 100%; }
                  }
                `}</style>
              </div>
            )}

            {sessionState === "result" && (
              <div
                className="bg-[#161619] border border-accent/30 p-8 shadow-2xl
                  animate-in fade-in slide-in-from-bottom-4 duration-700 text-left relative overflow-hidden"
                data-testid="state-result"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full mix-blend-screen" />

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs text-accent uppercase tracking-widest mb-2">Session Ready</p>
                    <h3 className="font-serif text-3xl text-white">Anchoring Through Uncertainty</h3>
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-xs text-white/30 hover:text-white/80 transition-colors"
                  >
                    Reset
                  </button>
                </div>

                <div className="flex gap-4 mb-8">
                  <div className="bg-[#0c0c0f] border border-white/5 px-4 py-2 text-xs text-white/60">12 min</div>
                  <div className="bg-[#0c0c0f] border border-white/5 px-4 py-2 text-xs text-white/60">
                    Guided breathwork + reflection
                  </div>
                </div>

                <button
                  className="w-full bg-accent text-[#07070a] py-4 text-sm font-medium hover:bg-white transition-colors"
                  data-testid="button-begin-generated-session"
                >
                  Begin session
                </button>
              </div>
            )}
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <ArrowDown className="text-accent" size={22} strokeWidth={1} />
        </div>
      </section>
    );
  }
