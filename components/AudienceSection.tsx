import React from "react";
import { CheckCircle2, XCircle, UserCheck, AlertTriangle, Sparkles } from "lucide-react";

export default function AudienceSection() {
  const idealFor = [
    "Students who understand concepts in class but get stuck solving independently at home.",
    "Students who find Class 11 or 12 Maths confusing and lack problem-solving confidence.",
    "Students who currently rely on memorising formulas instead of understanding how to apply them.",
    "Students who need disciplined, structured Maths preparation ahead of school and board exams.",
    "Students who want to systematically improve their speed, step-by-step presentation, and accuracy.",
    "Students preparing for CBSE, State Board, or ICSE Class 11 & 12 board examinations.",
  ];

  const notFor = [
    "Students who are not willing to attend scheduled live classes consistently.",
    "Students who do not wish to complete assigned practice worksheets and weekly tests.",
    "Students looking for overnight 'magic shortcuts' or guessing tricks without doing the work.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-shine-deepDark border-b border-teal-900/30 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
            <UserCheck className="w-3.5 h-3.5 text-shine-gold" />
            Programme Fit
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Who Is This Maths Program For?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We are deeply committed to every student we enroll. Here is who will benefit most from our Class 11 &amp; 12 coaching.
          </p>
        </div>

        {/* 2 Columns: Ideal For vs Not For */}
        <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Ideal Fit (7 cols) */}
          <div className="md:col-span-7 rounded-3xl p-6 sm:p-8 bg-slate-900/90 border-2 border-teal-500/50 shadow-glowTeal flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2.5 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  Ideal For Students Who:
                </h3>
              </div>

              <ul className="space-y-4">
                {idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-teal-900/60 text-xs font-bold text-teal-300">
              Designed for transformative results through structured guidance.
            </div>
          </div>

          {/* Not For (5 cols) */}
          <div className="md:col-span-5 rounded-3xl p-6 sm:p-8 bg-slate-950/80 border border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2.5 rounded-2xl bg-slate-800 text-slate-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  This May NOT Be For You If:
                </h3>
              </div>

              <ul className="space-y-4">
                {notFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <XCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
              <strong className="text-shine-gold block mb-1">Our Core Philosophy:</strong>
              We believe every student can master Maths when taught the right way — but consistent effort and practice are essential.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
