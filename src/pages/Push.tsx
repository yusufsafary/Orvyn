import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Push() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<{ commit?: string; files?: number; branch?: string; url?: string; error?: string } | null>(null);

  const handlePush = async () => {
    if (!token.trim()) return;
    setStatus("loading");
    setResult(null);

    try {
      const res = await fetch("/api/github/push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token.trim() }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setResult(data);
        setToken("");
      } else {
        setStatus("error");
        setResult({ error: data.error ?? "Unknown error" });
      }
    } catch {
      setStatus("error");
      setResult({ error: "Network error — is the API server running?" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-[#07070a]">
      <div className="w-full max-w-[560px]">
        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c8b89a] mb-5">Developer tools</p>
        <h1 className="font-serif text-4xl text-white mb-2">Push to GitHub</h1>
        <p className="text-white/40 text-sm mb-10">
          Paste your GitHub personal access token (with <code className="text-[#c8b89a]">repo</code> scope) to push the Orvyn codebase to{" "}
          <a href="https://github.com/yusufsafary/Orvyn" target="_blank" rel="noreferrer" className="text-[#c8b89a] underline underline-offset-4">
            yusufsafary/Orvyn
          </a>.
        </p>

        <div className="bg-[#111116] border border-white/10 p-6 mb-4">
          <label className="block text-[0.6rem] uppercase tracking-widest text-white/40 mb-3">
            GitHub Token
          </label>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handlePush()}
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#07070a] border border-white/10 text-white/80 placeholder:text-white/15 px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#c8b89a]/40 transition-colors"
            disabled={status === "loading"}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <button
          onClick={handlePush}
          disabled={!token.trim() || status === "loading"}
          className="w-full py-4 bg-[#c8b89a] text-[#07070a] text-[0.65rem] uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed mb-8"
        >
          {status === "loading" ? "Pushing…" : "Push to GitHub →"}
        </button>

        {status === "loading" && (
          <div className="border border-white/10 bg-[#111116] p-6 animate-pulse">
            <p className="text-white/50 text-sm font-serif italic">Uploading files to GitHub…</p>
            <p className="text-white/30 text-xs mt-2">Creating blobs, tree, commit — this may take 15–30 seconds.</p>
          </div>
        )}

        {status === "success" && result && (
          <div className="border border-[#c8b89a]/30 bg-[#111116] p-6">
            <p className="text-[0.6rem] uppercase tracking-widest text-[#c8b89a] mb-3">Push successful</p>
            <div className="space-y-2 text-sm text-white/70">
              <p><span className="text-white/40">Files pushed:</span> {result.files}</p>
              <p><span className="text-white/40">Branch:</span> {result.branch}</p>
              <p className="truncate">
                <span className="text-white/40">Commit:</span>{" "}
                <code className="text-white/80 text-xs">{result.commit?.slice(0, 12)}</code>
              </p>
            </div>
            {result.url && (
              <a
                href={result.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-5 text-[#c8b89a] text-xs underline underline-offset-4 hover:text-white transition-colors"
              >
                View commit on GitHub →
              </a>
            )}
          </div>
        )}

        {status === "error" && result?.error && (
          <div className="border border-red-900/40 bg-[#111116] p-6">
            <p className="text-[0.6rem] uppercase tracking-widest text-red-400 mb-2">Push failed</p>
            <p className="text-white/60 text-sm">{result.error}</p>
          </div>
        )}

        <div className="mt-12 border-t border-white/[0.07] pt-8">
          <p className="text-[0.6rem] uppercase tracking-widest text-white/25 mb-3">How to get a token</p>
          <ol className="text-xs text-white/40 space-y-2 list-decimal list-inside leading-relaxed">
            <li>Go to <a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer" className="text-[#c8b89a] underline underline-offset-2">github.com/settings/tokens</a></li>
            <li>Click "Generate new token (classic)"</li>
            <li>Give it a name, tick the <strong className="text-white/50">repo</strong> checkbox</li>
            <li>Generate, copy, and paste above</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
