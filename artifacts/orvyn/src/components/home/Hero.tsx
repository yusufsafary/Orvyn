import { useState, useRef, useEffect } from "react";
import { Mic, ArrowDown } from "lucide-react";

const CYCLING_WORDS = [
  "exhausted",
  "anxious",
  "stuck",
  "scattered",
  "overwhelmed",
  "heartbroken",
  "restless",
  "lost",
];

const PROMPTS = [
  "What's been sitting with you today?",
  "What's on your mind right now?",
  "What are you carrying into this moment?",
  "What would you say if someone was listening?",
  "What needs to be put down for a while?",
];

const SESSION_RESULTS = [
  { title: "Anchoring Through Uncertainty", duration: "12 min", type: "Guided breathwork + reflection" },
  { title: "Finding Ground Again", duration: "9 min", type: "Body scan + visualization" },
  { title: "Releasing What Isn't Yours", duration: "14 min", type: "Somatic release + stillness" },
  { title: "The Space Between Thoughts", duration: "10 min", type: "Mindful pause + grounding" },
];

export function Hero() {
  const [inputText, setInputText] = useState("");
  const [sessionState, setSessionState] = useState<"idle" | "generating" | "result">("idle");
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [promptIndex] = useState(() => Math.floor(Math.random() * PROMPTS.length));
  const [sessionResult] = useState(() => SESSION_RESULTS[Math.floor(Math.random() * SESSION_RESULTS.length)]);
  const [generatingText, setGeneratingText] = useState("Listening…");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Cycle through emotional words
  useEffect(() => {
    const cycle = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
        setWordVisible(true);
      }, 400);
    }, 2200);
    return () => clearInterval(cycle);
  }, []);

  // Generating state text progression
  useEffect(() => {
    if (sessionState !== "generating") return;
    const stages = ["Listening…", "Understanding you…", "Building your session…", "Almost ready…"];
    let i = 0;
    const t = setInterval(() => {
      i++;
      if (i < stages.length) setGeneratingText(stages[i]);
    }, 600);
    const done = setTimeout(() => {
      clearInterval(t);
      setSessionState("result");
    }, 2800);
    return () => { clearInterval(t); clearTimeout(done); };
  }, [sessionState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || sessionState !== "idle") return;
    setSessionState("generating");
    setGeneratingText("Listening…");
  };

  const handleReset = () => {
    setSessionState("idle");
    setInputText("");
  };

  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden">

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: isFocused
            ? "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(200,184,154,0.06) 0%, transparent 70%)"
            : "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(200,184,154,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[800px] w-full mx-auto px-6 text-center relative z-10">

        {/* Eyebrow — cycling emotional word */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-6 h-px bg-[#c8b89a]/40" />
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
            <span>For when you feel</span>
            <span
              className="text-[#c8b89a] font-medium transition-all duration-400 inline-block"
              style={{
                opacity: wordVisible ? 1 : 0,
                transform: wordVisible ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                minWidth: "6rem",
                textAlign: "left",
              }}
            >
              {CYCLING_WORDS[wordIndex]}
            </span>
          </div>
          <span className="w-6 h-px bg-[#c8b89a]/40" />
        </div>

        {/* Main heading */}
        <h1
          className="font-serif font-light text-white leading-[0.92] mb-8"
          style={{ fontSize: "clamp(3.4rem, 10vw, 8.5rem)" }}
        >
          Share what<br />
          you're{" "}
          <em className="not-italic text-[#c8b89a]">carrying.</em>
        </h1>

        {/* Sub copy */}
        <p className="text-white/45 text-base md:text-lg leading-relaxed mb-14 max-w-[480px] mx-auto">
          Whatever you bring — one word or everything on your mind — a session shaped for this exact moment is ready in under a minute.
        </p>

        {/* Session input / states */}
        <div className="w-full max-w-[600px] mx-auto">

          {sessionState === "idle" && (
            <form onSubmit={handleSubmit} className="relative group">
              <div
                className="relative transition-all duration-500"
                style={{
                  boxShadow: isFocused
                    ? "0 0 0 1px rgba(200,184,154,0.25), 0 24px 60px rgba(0,0,0,0.5)"
                    : "0 0 0 1px rgba(255,255,255,0.07), 0 16px 40px rgba(0,0,0,0.35)",
                }}
              >
                <textarea
                  ref={textareaRef}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e as unknown as React.FormEvent);
                    }
                  }}
                  placeholder={PROMPTS[promptIndex]}
                  className="w-full bg-[#111116] text-white placeholder:text-white/18 placeholder:font-serif placeholder:italic p-5 pb-16 resize-none focus:outline-none min-h-[130px] text-base font-serif leading-relaxed"
                  data-testid="input-session"
                />

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#111116] border-t border-white/[0.06] px-4 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wider text-white/30 hover:text-white/60 transition-colors"
                      data-testid="button-voice-record"
                    >
                      <Mic size={12} strokeWidth={1.5} />
                      Voice
                    </button>
                    {inputText.length > 0 && (
                      <span className="text-[0.6rem] text-white/20 tabular-nums">
                        {inputText.length} chars
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="relative overflow-hidden bg-[#c8b89a] text-[#07070a] px-7 py-2.5 text-[0.65rem] uppercase tracking-[0.18em] font-semibold disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white"
                    data-testid="button-submit-session"
                  >
                    Begin session →
                  </button>
                </div>
              </div>

              {/* Hint */}
              <p className="text-[0.6rem] text-white/20 mt-3 tracking-wide">
                Press Enter to begin · Shift+Enter for new line
              </p>
            </form>
          )}

          {sessionState === "generating" && (
            <div
              className="bg-[#111116] p-10 flex flex-col items-center gap-7 animate-in fade-in zoom-in-95 duration-500"
              style={{ boxShadow: "0 0 0 1px rgba(200,184,154,0.1), 0 24px 60px rgba(0,0,0,0.5)" }}
              data-testid="state-generating"
            >
              {/* Breathing ring */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full border border-[#c8b89a]/30 animate-ping"
                  style={{ animationDuration: "1.8s" }}
                />
                <div className="w-3 h-3 rounded-full bg-[#c8b89a]/60 animate-pulse" />
              </div>

              <p
                className="text-white/55 font-serif italic text-xl tracking-wide transition-all duration-500"
                key={generatingText}
                style={{ animation: "fadeIn 0.4s ease" }}
              >
                {generatingText}
              </p>

              {/* Progress line */}
              <div className="w-48 h-px bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#c8b89a]/60 to-[#c8b89a]"
                  style={{ animation: "progressBar 2.8s ease-in-out forwards" }}
                />
              </div>
            </div>
          )}

          {sessionState === "result" && (
            <div
              className="bg-[#111116] p-8 animate-in fade-in slide-in-from-bottom-3 duration-700 text-left relative overflow-hidden"
              style={{ boxShadow: "0 0 0 1px rgba(200,184,154,0.2), 0 24px 60px rgba(0,0,0,0.6)" }}
              data-testid="state-result"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b89a]/50 to-transparent" />

              <div className="flex items-start justify-between mb-7">
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#c8b89a] mb-3">Your session is ready</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-white leading-snug">{sessionResult.title}</h3>
                </div>
                <button
                  onClick={handleReset}
                  className="text-[0.6rem] uppercase tracking-wider text-white/20 hover:text-white/60 transition-colors mt-1"
                >
                  ✕
                </button>
              </div>

              <div className="flex gap-3 mb-8">
                {[sessionResult.duration, sessionResult.type].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[#0c0c0f] border border-white/[0.06] text-[0.65rem] uppercase tracking-wider text-white/40">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Waveform placeholder */}
              <div className="flex items-end gap-[3px] h-8 mb-8 opacity-40">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#c8b89a] rounded-sm flex-1"
                    style={{
                      height: `${20 + Math.sin(i * 0.8) * 14 + Math.random() * 8}%`,
                      opacity: 0.3 + (i / 32) * 0.7,
                    }}
                  />
                ))}
              </div>

              <button
                className="w-full bg-[#c8b89a] text-[#07070a] py-4 text-[0.65rem] uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300"
                data-testid="button-begin-generated-session"
              >
                Begin session
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#c8b89a]" style={{ animation: "scrollPulse 2s ease-in-out infinite" }} />
        <ArrowDown className="text-[#c8b89a]" size={16} strokeWidth={1} />
      </div>
    </section>
  );
}
