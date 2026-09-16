import React from "react";
import { ArrowRight, Sparkles, Users, Flame } from "lucide-react";
import { academyConfig } from "@/config/academy";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-shine-deepDark via-shine-cardDark to-shine-deepDark text-white border-b border-teal-900/40 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/20 blur-[130px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-shine-gold/15 text-shine-gold text-xs font-bold uppercase tracking-wider mb-6 border border-shine-gold/30">
          <Sparkles className="w-3.5 h-3.5" />
          Give Them The Advantage
        </div>

        {/* Heading */}
        <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          Give Your Child More Than Just An Online Maths Class.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Give them an environment where they can genuinely understand the concept, ask their doubts, practise with guidance, test their readiness, and improve with individual attention.
        </p>

        {/* Programme summary badge */}
        <div className="inline-block p-4 sm:p-5 rounded-3xl bg-slate-900/90 border border-teal-500/30 mb-8 max-w-2xl mx-auto text-left sm:text-center shadow-md">
          <div className="text-xs uppercase tracking-wider text-shine-gold font-extrabold mb-1">
            Class 11 &amp; 12 Maths Online Tuition
          </div>
          <div className="text-sm sm:text-base font-bold text-slate-100">
            15-Year Experienced PhD Professor &nbsp;|&nbsp; Maximum 30 Students &nbsp;|&nbsp; Weekly Mock Tests
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a
            href="#enquiry"
            className="shimmer-button w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl bg-gradient-to-r from-teal-400 via-teal-500 to-shine-gold hover:from-teal-300 hover:to-shine-gold active:scale-[0.99] text-slate-950 font-black text-base sm:text-lg shadow-glowGold transition-all duration-200"
          >
            <span>CHECK AVAILABLE BATCH</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs text-shine-gold font-bold">
          <Flame className="w-3.5 h-3.5 text-shine-gold animate-bounce" />
          <span>Limited seats in each batch. Enrolment on first-come basis.</span>
        </div>
      </div>
    </section>
  );
}
