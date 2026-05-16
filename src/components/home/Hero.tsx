import { useState, useRef } from "react";
import { Mic, ArrowDown } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function Hero() {
  const [inputText, setInputText] = useState("");
  const [sessionState, setSessionState] = useState<"idle" | "generating" | "result">("idle");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || sessionState !== "idle") return;

    setSessionState("generating");
    
    setTimeout(() => {
      setSessionState("result");
    }, 2500);
  };

  const handleReset = () => {
    setSessionState("idle");
    setInputText("");
  };

  return (
    <section className="min-h-[100dvh] pt-32 pb-24 flex flex-col items-center justify-center relative">
      <div className="max-w-[920px] w-full mx-auto px-6 text-center">
        
        <ScrollReveal delay={0}>
          <p className="text-xs uppercase tracking-widest text-accent mb-8" data-testid="hero-eyebrow">
            Orvyn wellness · Personalized to this moment
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h1 className="font-serif text-5xl md:text-[8rem] leading-[0.9] font-light text-white mb-8" data-testid="hero-heading">
            Share what<br />you're <em className="text-accent not-italic">carrying.</em>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="max-w-[540px] mx-auto text-lg text-white/60 mb-16 leading-relaxed" data-testid="hero-subcopy">
            Orvyn listens to whatever you bring. One word, one thought, your whole week. A guided session is built precisely for this moment. Not a library. Yours.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300} className="w-full max-w-[640px] mx-auto">
          {sessionState === "idle" && (
            <form 
              onSubmit={handleSubmit}
              className="bg-[#161619] border border-white/10 p-2 shadow-2xl relative transition-all duration-500"
              data-testid="form-session-input"
            >
              <textarea
                ref={textareaRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="What's on your mind right now?"
                className="w-full bg-transparent text-white placeholder:text-white/20 placeholder:italic p-4 pb-16 resize-none focus:outline-none min-h-[120px] text-lg font-serif"
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
                  className="bg-accent text-[#07070a] px-6 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
                  data-testid="button-submit-session"
                >
                  Begin session →
                </button>
              </div>
            </form>
          )}

          {sessionState === "generating" && (
            <div className="bg-[#161619] border border-white/10 p-8 shadow-2xl h-[160px] flex flex-col items-center justify-center gap-6 animate-in fade-in zoom-in-95 duration-500" data-testid="state-generating">
              <div className="w-full max-w-[240px] h-1 bg-white/5 overflow-hidden">
                <div className="h-full bg-accent animate-[progress_2.5s_ease-in-out_forwards]" style={{ transformOrigin: 'left' }} />
              </div>
              <p className="text-white/60 font-serif italic text-lg animate-pulse">Building your session...</p>
            </div>
          )}

          {sessionState === "result" && (
            <div className="bg-[#161619] border border-accent/30 p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 text-left relative overflow-hidden" data-testid="state-result">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full mix-blend-screen" />
              
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs text-accent uppercase tracking-widest mb-2">Session Ready</p>
                  <h3 className="font-serif text-3xl text-white">Anchoring Through Uncertainty</h3>
                </div>
                <button onClick={handleReset} className="text-xs text-white/30 hover:text-white/80 transition-colors">Reset</button>
              </div>
              
              <div className="flex gap-4 mb-8">
                <div className="bg-[#0c0c0f] border border-white/5 px-4 py-2 text-xs text-white/60">12 min</div>
                <div className="bg-[#0c0c0f] border border-white/5 px-4 py-2 text-xs text-white/60">Guided breathwork + reflection</div>
              </div>
              
              <button className="w-full bg-accent text-[#07070a] py-4 text-sm font-medium hover:bg-accent/90 transition-colors" data-testid="button-begin-generated-session">
                Begin session
              </button>
            </div>
          )}
        </ScrollReveal>

      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="text-accent" size={24} strokeWidth={1} />
      </div>
    </section>
  );
}
