import { useState, useEffect } from "react";

  export function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const update = () => {
        const scrolled  = window.scrollY;
        const total     = document.body.scrollHeight - window.innerHeight;
        setProgress(total > 0 ? Math.min(scrolled / total, 1) : 0);
      };
      window.addEventListener("scroll", update, { passive: true });
      return () => window.removeEventListener("scroll", update);
    }, []);

    if (progress <= 0) return null;

    return (
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] pointer-events-none
          bg-gradient-to-r from-[#c8b89a]/60 via-[#c8b89a] to-[#c8b89a]/60
          transition-all duration-75"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />
    );
  }
  