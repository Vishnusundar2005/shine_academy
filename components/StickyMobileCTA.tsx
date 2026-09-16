"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { academyConfig } from "@/config/academy";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-teal-500/40 p-3 shadow-glowTeal transition-all animate-in slide-in-from-bottom duration-300">
      <div className="max-w-md mx-auto flex items-center gap-2">
        <a
          href={`tel:${academyConfig.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-900 border border-teal-900/80 text-slate-100 font-bold text-xs tracking-tight active:bg-slate-800"
          aria-label="Call Academy Directly"
        >
          <Phone className="w-4 h-4 text-teal-400 shrink-0" />
          <span>Call</span>
        </a>

        <a
          href="#enquiry"
          className="shimmer-button flex-[2] inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-gradient-to-r from-teal-400 via-teal-500 to-shine-gold text-slate-950 font-black text-xs tracking-wide shadow-md active:scale-[0.98]"
        >
          <span>CHECK BATCH</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
}
