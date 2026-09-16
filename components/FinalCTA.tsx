import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Users, GraduationCap, MessageCircleQuestion, FileCheck2, Flame } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-shine-deepDark via-shine-cardDark to-shine-deepDark text-white relative overflow-hidden border-b border-teal-900/40">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-teal-500/20 blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Icon */}
        <div className="w-12 h-12 rounded-2xl bg-white p-0.5 shadow-glowTeal mx-auto mb-4 border border-teal-400">
          <Image
            src="/images/shine-logo.jpg"
            alt="Shine Tuition Academy"
            width={48}
            height={48}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-shine-gold/15 text-shine-gold text-xs font-bold uppercase tracking-wider mb-6 border border-shine-gold/30">
          <Flame className="w-3.5 h-3.5 text-shine-gold animate-bounce" />
          Limited Seat Batch
        </div>

        {/* Headline */}
        <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          Your Child Deserves To Be More Than Just Another Student In An Online Class.
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Give them the advantage of direct learning from a 15-year PhD Professor in a focused 30-student batch designed for board exam excellence.
        </p>

        {/* 4 Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-xs sm:text-sm font-bold">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-teal-900 text-teal-300 shadow-sm">
            <Users className="w-4 h-4 text-shine-gold" />
            <span>Only 30 Students Per Batch</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-teal-900 text-teal-300 shadow-sm">
            <GraduationCap className="w-4 h-4 text-shine-gold" />
            <span>15-Year PhD Professor</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-teal-900 text-teal-300 shadow-sm">
            <MessageCircleQuestion className="w-4 h-4 text-shine-gold" />
            <span>Direct Doubt Support</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-teal-900 text-teal-300 shadow-sm">
            <FileCheck2 className="w-4 h-4 text-shine-gold" />
            <span>Weekly Mock Tests</span>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a
            href="#enquiry"
            className="shimmer-button w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl bg-gradient-to-r from-teal-400 via-teal-500 to-shine-gold hover:from-teal-300 hover:to-shine-gold active:scale-[0.99] text-slate-950 font-black text-base sm:text-lg shadow-glowGold transition-all duration-200"
          >
            <span>CHECK AVAILABLE BATCH</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Urgency caption */}
        <p className="text-xs text-shine-gold font-bold">
          Book your enquiry before the batch is filled.
        </p>
      </div>
    </section>
  );
}
