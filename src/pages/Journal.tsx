import { useState, useRef, useEffect } from "react";
  import { useJournal, MOODS, type MoodKey, type JournalEntry } from "@/hooks/use-journal";
  import { WifiOff, Trash2, ArrowRight, Check } from "lucide-react";
  import { Link } from "wouter";

  // ─── helpers ────────────────────────────────────────────────────────────────

  function humanTime(ts: number): string {
    const diff = Date.now() - ts;
    if (diff < 60_000)  return "just now";
    if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
    return new Date(ts)
      .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
      .toLowerCase();
  }

  function dayLabel(ts: number): string {
    const d   = new Date(ts);
    const now = new Date();
    const yes = new Date(now); yes.setDate(now.getDate() - 1);
    if (d.toDateString() === now.toDateString()) return "Today";
    if (d.toDateString() === yes.toDateString()) return "Yesterday";
    return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  }

  function groupByDay(entries: JournalEntry[]): { label: string; items: JournalEntry[] }[] {
    const map = new Map<string, JournalEntry[]>();
    for (const e of entries) {
      const label = dayLabel(e.createdAt);
      if (!map.has(label)) map.set(label, []);
      map.get(label)!.push(e);
    }
    return Array.from(map.entries()).map(([label, items]) => ({ label, items }));
  }

  // ─── composer ───────────────────────────────────────────────────────────────

  function Composer({ onSave }: { onSave: (text: string, mood: MoodKey | null) => void }) {
    const [text, setText] = useState("");
    const [mood, setMood] = useState<MoodKey | null>(null);
    const [saved, setSaved] = useState(false);
    const [focused, setFocused] = useState(false);
    const taRef = useRef<HTMLTextAreaElement>(null);

    // auto-resize
    useEffect(() => {
      const ta = taRef.current;
      if (!ta) return;
      ta.style.height = "auto";
      ta.style.height = ta.scrollHeight + "px";
    }, [text]);

    const handleSave = () => {
      if (!text.trim()) return;
      onSave(text, mood);
      setText("");
      setMood(null);
      setSaved(true);
      setTimeout(() => setSaved(false), 1800);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") handleSave();
    };

    return (
      <div
        className={`border transition-all duration-500 ${
          focused ? "border-white/20 bg-[#111116]" : "border-white/[0.07] bg-[#0e0e12]"
        }`}
      >
        {/* textarea */}
        <div className="p-6 pb-3">
          <textarea
            ref={taRef}
            value={text}
            onChange={e => setText(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder="What are you carrying right now?"
            rows={3}
            className="w-full bg-transparent text-white/80 placeholder:text-white/20 placeholder:italic
              font-serif text-xl leading-relaxed resize-none focus:outline-none
              transition-all duration-300 overflow-hidden"
          />
        </div>

        {/* mood picker */}
        <div className="px-6 pb-4 flex flex-wrap gap-2">
          {MOODS.map(m => (
            <button
              key={m.key}
              onClick={() => setMood(prev => prev === m.key ? null : m.key)}
              title={m.sub}
              className={`px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.12em] border transition-all duration-200 ${
                mood === m.key
                  ? "border-[#c8b89a]/60 text-[#c8b89a] bg-[#c8b89a]/[0.08]"
                  : "border-white/[0.08] text-white/35 hover:border-white/20 hover:text-white/55"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* footer */}
        <div className="px-6 pb-5 flex items-center justify-between gap-4">
          <p className="text-[0.58rem] text-white/20 uppercase tracking-widest">
            {text.length > 0 ? `${text.length} chars · ⌘↵ to save` : "Cmd + Enter to save"}
          </p>

          <button
            onClick={handleSave}
            disabled={!text.trim()}
            className={`flex items-center gap-2 px-5 py-2.5 text-[0.62rem] uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
              saved
                ? "bg-[#c8b89a]/20 text-[#c8b89a] border border-[#c8b89a]/30"
                : text.trim()
                ? "bg-[#c8b89a] text-[#07070a] hover:bg-white"
                : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"
            }`}
          >
            {saved ? (
              <><Check size={11} strokeWidth={2.5} /> Received</>
            ) : (
              "Save to journal"
            )}
          </button>
        </div>
      </div>
    );
  }

  // ─── entry card ─────────────────────────────────────────────────────────────

  function EntryCard({
    entry,
    onDelete,
    isNew,
  }: {
    entry: JournalEntry;
    onDelete: () => void;
    isNew: boolean;
  }) {
    const [hovered,   setHovered]   = useState(false);
    const [confirming, setConfirming] = useState(false);
    const moodMeta = MOODS.find(m => m.key === entry.mood);

    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setConfirming(false); }}
        className={`group relative border-b border-white/[0.05] py-7 flex gap-6 transition-all duration-300 ${
          isNew ? "animate-in fade-in slide-in-from-bottom-3 duration-700" : ""
        }`}
      >
        {/* left: time + mood */}
        <div className="w-24 shrink-0 flex flex-col gap-2 pt-1">
          <span className="text-[0.6rem] text-white/25 uppercase tracking-wider tabular-nums">
            {humanTime(entry.createdAt)}
          </span>
          {moodMeta && (
            <span className="text-[0.55rem] text-[#c8b89a]/70 uppercase tracking-[0.1em]">
              {moodMeta.label}
            </span>
          )}
        </div>

        {/* center: text */}
        <div className="flex-1 min-w-0">
          {entry.mood && (
            <div
              className="w-0.5 h-full absolute left-[7.5rem] top-7"
              style={{ background: "linear-gradient(to bottom, rgba(200,184,154,0.35), transparent)" }}
            />
          )}
          <p className="font-serif italic text-white/75 leading-[1.75] text-lg whitespace-pre-wrap">
            {entry.text}
          </p>

          {/* session CTA — appears on hover */}
          <div className={`mt-4 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
            <Link
              href={`/?carry=${encodeURIComponent(entry.text.slice(0, 120))}`}
              className="inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.12em] text-[#c8b89a]/60 hover:text-[#c8b89a] transition-colors group/link"
            >
              Let this become a session
              <ArrowRight size={11} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* right: delete */}
        <div className={`flex items-start pt-1 transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`}>
          {!confirming ? (
            <button
              onClick={() => setConfirming(true)}
              className="text-white/20 hover:text-[#c47a6a] transition-colors p-1"
              aria-label="Delete entry"
            >
              <Trash2 size={13} strokeWidth={1.5} />
            </button>
          ) : (
            <div className="flex flex-col items-end gap-1.5">
              <button
                onClick={onDelete}
                className="text-[0.55rem] text-[#c47a6a] uppercase tracking-wider hover:opacity-80 transition-opacity"
              >
                Delete
              </button>
              <button
                onClick={() => setConfirming(false)}
                className="text-[0.55rem] text-white/25 uppercase tracking-wider hover:text-white/50 transition-colors"
              >
                Keep
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─── empty state ────────────────────────────────────────────────────────────

  function EmptyState() {
    return (
      <div className="py-32 flex flex-col items-center gap-8 text-center">
        <div className="relative">
          <div className="w-16 h-16 border border-[#c8b89a]/20 rounded-full animate-pulse"
            style={{ animationDuration: "3s" }} />
          <div className="absolute inset-[6px] border border-[#c8b89a]/10 rounded-full animate-pulse"
            style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-[#c8b89a]/30 text-lg">O</span>
          </div>
        </div>
        <div>
          <p className="font-serif italic text-white/30 text-xl mb-2">Nothing here yet.</p>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/20">
            The first word is always the hardest.
          </p>
        </div>
      </div>
    );
  }

  // ─── page ───────────────────────────────────────────────────────────────────

  export default function Journal() {
    const { entries, addEntry, deleteEntry, isOnline } = useJournal();
    const [newId, setNewId] = useState<string | null>(null);

    const handleSave = (text: string, mood: MoodKey | null) => {
      const entry = addEntry(text, mood);
      setNewId(entry.id);
      setTimeout(() => setNewId(null), 1000);
    };

    const groups = groupByDay(entries);

    return (
      <div>
        {/* ── hero ── */}
        <section className="py-32 bg-[#0c0c0f] border-b border-white/[0.07]">
          <div className="max-w-[660px] mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a]">
                Private · Offline · Yours
              </span>
              {/* online / offline dot */}
              <div className="flex items-center gap-2">
                {isOnline ? (
                  <span className="flex items-center gap-1.5 text-[0.55rem] text-white/25 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7aad8a] inline-block" />
                    Saved locally
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-[0.55rem] text-[#c8b89a]/60 uppercase tracking-widest">
                    <WifiOff size={10} />
                    Offline · still saving
                  </span>
                )}
              </div>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-[1.02] mb-8">
              Your<br /><em className="not-italic text-[#c8b89a]">journal.</em>
            </h1>

            <div className="w-12 h-px bg-[#8a7a64] mb-8" />

            <p className="text-white/40 text-sm leading-relaxed">
              What you write here stays here. It never leaves your device. It is yours entirely.
            </p>
          </div>
        </section>

        {/* ── composer ── */}
        <section className="py-12 border-b border-white/[0.07]">
          <div className="max-w-[660px] mx-auto px-6">
            <Composer onSave={handleSave} />
            <p className="text-[0.56rem] text-white/20 uppercase tracking-widest mt-4 text-right">
              Stored on this device only · {entries.length} {entries.length === 1 ? "entry" : "entries"}
            </p>
          </div>
        </section>

        {/* ── entries ── */}
        <section className="py-12 pb-40">
          <div className="max-w-[660px] mx-auto px-6">
            {entries.length === 0 ? (
              <EmptyState />
            ) : (
              <div>
                {groups.map(group => (
                  <div key={group.label} className="mb-12">
                    <p className="text-[0.58rem] uppercase tracking-[0.25em] text-white/25 mb-2 pb-4 border-b border-white/[0.05]">
                      {group.label}
                    </p>
                    {group.items.map(entry => (
                      <EntryCard
                        key={entry.id}
                        entry={entry}
                        onDelete={() => deleteEntry(entry.id)}
                        isNew={entry.id === newId}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
  