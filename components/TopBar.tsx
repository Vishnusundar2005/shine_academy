import React from "react";
import Image from "next/image";
import { Sparkles, Users, Flame } from "lucide-react";

export default function TopBar() {
  return (
    <aside aria-label="Announcement" className="bg-gradient-to-r from-shine-deepDark via-shine-cardDark to-shine-deepDark text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-teal-900/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-bold text-[11px] border border-teal-500/30">
            <Sparkles className="w-3 h-3 text-shine-gold" />
            BOARD EXAM SPECIAL
          </span>
          <span className="text-slate-300 font-medium">
            Class 11 &amp; 12 Maths <span className="text-teal-700 hidden md:inline">|</span> <span className="hidden md:inline text-slate-400">CBSE • State Board • ICSE</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-shine-gold font-bold text-xs tracking-tight">
          <Flame className="w-3.5 h-3.5 text-shine-gold animate-bounce" />
          <span>Strict Limit: Only 30 Students Per Batch</span>
        </div>
      </div>
    </aside>
  );
}
