import React from "react";
import { Users, XCircle, CheckCircle2, Flame, Sparkles } from "lucide-react";

export default function SmallBatchSection() {
  return (
    <section id="small-batch" className="py-16 sm:py-24 bg-shine-cardDark text-white border-b border-teal-900/40 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-shine-gold/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-shine-gold/15 text-shine-gold text-xs font-bold uppercase tracking-wider mb-4 border border-shine-gold/30">
            <Users className="w-3.5 h-3.5" />
            Classroom Philosophy
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            30 Students. <span className="text-shine-gold">Not 100.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            In mass online coaching with 100 to 500 students, your child is just a number in a chat window. We intentionally cap our batches to ensure genuine learning.
          </p>
        </div>

        {/* Big Number Visual Banner */}
        <div className="max-w-4xl mx-auto mb-14 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-10 border-2 border-teal-500/40 shadow-glowTeal flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xs uppercase tracking-widest text-shine-gold font-extrabold mb-1 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" />
              Strict Batch Limit
            </div>
            <div className="font-heading text-6xl sm:text-8xl font-black tracking-tighter text-white font-mono flex items-baseline gap-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-shine-gold to-teal-100">30</span>
              <span className="text-xl sm:text-2xl font-bold text-teal-400">MAX</span>
            </div>
            <div className="text-sm font-extrabold text-slate-200 mt-1">
              ONLY 30 STUDENTS PER BATCH
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8 flex-1">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
              Why We Never Exceed 30 Students
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              When class size is controlled, the PhD Professor can observe student responses, notice hesitation during problem-solving, and address individual doubts before moving on to the next chapter.
            </p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Typical 100+ mega batch */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-950/80 border border-rose-900/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Mass Online Coaching (100+ Students)
              </span>
              <XCircle className="w-5 h-5 text-rose-500" />
            </div>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Students hesitate to ask doubts in a massive public chat feed.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Questions scroll past rapidly and are frequently missed by the teacher.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Doubts accumulate chapter after chapter, leading to exam-time panic.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>No individual attention or understanding of the student&apos;s personal weak areas.</span>
              </li>
            </ul>
          </div>

          {/* Shine 30 student batch */}
          <div className="rounded-3xl p-6 sm:p-8 bg-teal-950/40 border-2 border-teal-500/50 relative shadow-glowTeal">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-teal-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
              The Shine Standard
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Shine Small Batch (Max 30 Students)
              </span>
              <CheckCircle2 className="w-5 h-5 text-shine-gold" />
            </div>
            <ul className="space-y-3.5 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <span className="text-shine-gold font-bold">✓</span>
                <span>Students interact directly with the PhD Professor during live class.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-shine-gold font-bold">✓</span>
                <span>Every doubt is addressed thoroughly without rushing through the portions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-shine-gold font-bold">✓</span>
                <span>Personalized guidance to correct common calculation &amp; step mistakes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-shine-gold font-bold">✓</span>
                <span>High accountability and continuous teacher attention throughout the year.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
