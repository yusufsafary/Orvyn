import { useState, useEffect } from "react";

  export const MOODS = [
    { key: "still"     as const, label: "Still",     sub: "Calm, quiet, present"        },
    { key: "heavy"     as const, label: "Heavy",     sub: "Weighed down, struggling"    },
    { key: "unsettled" as const, label: "Unsettled", sub: "Anxious, restless"           },
    { key: "soft"      as const, label: "Soft",      sub: "Open, tender, gentle"        },
    { key: "clear"     as const, label: "Clear",     sub: "Focused, resolved"           },
    { key: "carried"   as const, label: "Carried",   sub: "Burdened but still moving"   },
  ] as const;

  export type MoodKey = typeof MOODS[number]["key"];

  export interface JournalEntry {
    id: string;
    text: string;
    mood: MoodKey | null;
    createdAt: number;
  }

  const KEY = "orvyn-journal-v1";

  function load(): JournalEntry[] {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
    catch { return []; }
  }

  function persist(entries: JournalEntry[]) {
    localStorage.setItem(KEY, JSON.stringify(entries));
  }

  export function useJournal() {
    const [entries, setEntries] = useState<JournalEntry[]>(load);
    const [isOnline, setIsOnline] = useState(
      typeof navigator !== "undefined" ? navigator.onLine : true
    );

    useEffect(() => {
      const on  = () => setIsOnline(true);
      const off = () => setIsOnline(false);
      window.addEventListener("online",  on);
      window.addEventListener("offline", off);
      return () => {
        window.removeEventListener("online",  on);
        window.removeEventListener("offline", off);
      };
    }, []);

    const addEntry = (text: string, mood: MoodKey | null): JournalEntry => {
      const entry: JournalEntry = {
        id: crypto.randomUUID(),
        text: text.trim(),
        mood,
        createdAt: Date.now(),
      };
      setEntries(prev => {
        const next = [entry, ...prev];
        persist(next);
        return next;
      });
      return entry;
    };

    const deleteEntry = (id: string) => {
      setEntries(prev => {
        const next = prev.filter(e => e.id !== id);
        persist(next);
        return next;
      });
    };

    return { entries, addEntry, deleteEntry, isOnline };
  }
  