import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    ) return;

    if (sessionStorage.getItem("orvyn-pwa-dismissed")) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setVisible(true), 4000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setVisible(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem("orvyn-pwa-dismissed", "1");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-3 fade-in duration-700"
      style={{ width: "max-content", maxWidth: "calc(100vw - 2rem)" }}
      data-testid="pwa-install-prompt"
    >
      <div className="flex items-center gap-4 bg-[#111116] border border-white/[0.10] px-5 py-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        {/* Icon mark */}
        <div className="w-8 h-8 border border-[#c8b89a]/30 flex items-center justify-center shrink-0">
          <span className="font-serif text-[#c8b89a] text-sm leading-none">O</span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-0.5">
          <p className="text-[0.75rem] text-white font-medium font-sans tracking-wide leading-none">
            Install Orvyn
          </p>
          <p className="text-[0.65rem] text-white/40 leading-none tracking-wide">
            Add to home screen · Always available offline
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={handleInstall}
          className="ml-2 bg-[#c8b89a] text-[#07070a] px-4 py-2 text-[0.6rem] uppercase tracking-[0.15em] font-medium hover:bg-white transition-colors duration-200 whitespace-nowrap shrink-0"
          data-testid="pwa-install-button"
        >
          Install
        </button>

        {/* Dismiss */}
        <button
          onClick={handleDismiss}
          className="text-white/25 hover:text-white/50 transition-colors ml-1 shrink-0"
          data-testid="pwa-dismiss-button"
          aria-label="Dismiss install prompt"
        >
          <X size={13} />
        </button>
      </div>
    </div>
  );
}