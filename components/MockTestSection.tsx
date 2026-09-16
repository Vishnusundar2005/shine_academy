import React from "react";
import { FileCheck2, TrendingUp, CheckCircle, Target, ArrowRight, Clock, Sparkles } from "lucide-react";

export default function MockTestSection() {
  return (
    <section className="py-16 sm:py-24 bg-shine-deepDark border-b border-teal-900/30 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
            <FileCheck2 className="w-3.5 h-3.5 text-shine-gold" />
            Continuous Assessment
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Don’t Wait Until The Board Exam <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-shine-gold to-teal-200">
              To Find Out What Your Child Doesn’t Know.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Exam anxiety happens when a student writes their first full paper only during pre-boards. Our weekly mock tests make problem-solving second nature.
          </p>
        </div>

        {/* 3 Pillars of Weekly Mock Tests */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-14">
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-teal-900/50 shadow-md flex flex-col hover:border-teal-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4 border border-emerald-500/30">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2">
              Validates Clear Concepts
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Confirms which chapters your child has truly mastered and can solve accurately without relying on class notes.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-teal-900/50 shadow-md flex flex-col hover:border-shine-gold transition-all">
            <div className="w-12 h-12 rounded-2xl bg-shine-gold/20 text-shine-gold flex items-center justify-center mb-4 border border-shine-gold/30">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2">
              Uncovers Difficult Question Types
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pinpoints tricky twists, case-based questions, and multi-concept problems where the student gets stuck.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-teal-900/50 shadow-md flex flex-col hover:border-teal-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4 border border-teal-500/30">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2">
              Highlights Chapters Needing Practice
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Enables targeted revision weeks ahead of school exams, so weak topics are corrected before they impact final marks.
            </p>
          </div>
        </div>

        {/* Transition callout box */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 text-white p-6 sm:p-8 border border-teal-500/40 shadow-glowTeal flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-shine-gold flex items-center justify-center shrink-0 border border-teal-400/30">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-shine-gold font-bold">
                Measurable Exam Readiness
              </div>
              <div className="font-heading text-base sm:text-lg font-bold text-white mt-0.5">
                From passive “I understood” to confident “I can solve it.”
              </div>
            </div>
          </div>
          <a
            href="#enquiry"
            className="shimmer-button shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-shine-gold text-slate-950 font-black text-xs sm:text-sm shadow-md hover:brightness-110 transition-all"
          >
            <span>JOIN THE BATCH</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
