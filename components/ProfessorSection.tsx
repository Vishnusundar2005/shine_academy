import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Sparkles,
} from "lucide-react";
import { academyConfig } from "@/config/academy";

export default function ProfessorSection() {
  return (
    <section id="faculty" className="py-16 sm:py-24 bg-shine-deepDark border-b border-teal-900/30 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
            <UserCheck className="w-3.5 h-3.5 text-shine-gold" />
            Verified Faculty
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Who Is Actually Teaching Your Child?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            In many online programs, renowned teachers appear only in marketing videos, while actual classes are delegated to junior tutors or automated recordings.
          </p>
        </div>

        {/* Main Trust Highlight Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-shine-cardDark to-slate-900 rounded-3xl text-white p-8 sm:p-12 shadow-glowTeal border border-teal-500/40 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            {/* Faculty Badge / Avatar Representation */}
            <div className="md:col-span-4 flex flex-col items-center text-center p-6 rounded-3xl bg-slate-950/80 border border-teal-500/30 shadow-md">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-teal-400 via-teal-600 to-shine-gold p-1 mb-4 shadow-glowTeal flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-slate-950 flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
                  <div className="w-10 h-10 rounded-full overflow-hidden mb-1 border border-teal-400">
                    <Image
                      src="/images/shine-logo.jpg"
                      alt="Shine Faculty Lead"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-extrabold text-teal-300 uppercase tracking-wider">PhD Faculty</span>
                </div>
              </div>
              <div className="font-heading text-lg font-bold text-white">PhD Professor</div>
              <div className="text-xs text-shine-gold font-bold mt-0.5">15 Years Teaching Experience</div>
              <div className="mt-3 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-bold border border-teal-500/30">
                Class 11 &amp; 12 Maths Specialist
              </div>
            </div>

            {/* Content Details */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-shine-gold text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-shine-gold" />
                Direct Professor Mentorship
              </div>
              
              <h3 className="font-heading text-xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
                A PhD Professor With 15 Years Of Experience Teaches Class 11 &amp; 12 Maths Directly.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Your child learns directly from an experienced doctoral educator who has spent 15 years guiding students through the intricacies of board exam mathematics.
              </p>

              {/* Differentiator checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="p-1 rounded-full bg-teal-500/20 text-teal-300 shrink-0 border border-teal-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span><strong>Direct Live Teaching:</strong> Every class is conducted live by the PhD Professor.</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="p-1 rounded-full bg-teal-500/20 text-teal-300 shrink-0 border border-teal-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span><strong>Not a junior teacher:</strong> No inexperienced proxies or delegated batches.</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="p-1 rounded-full bg-teal-500/20 text-teal-300 shrink-0 border border-teal-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span><strong>Not simply a pre-recorded course:</strong> Real-time two-way interactive sessions.</span>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#enquiry"
                  className="shimmer-button inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-400 via-teal-500 to-shine-gold text-slate-950 font-black text-sm shadow-glowTeal hover:scale-105 active:scale-95 transition-all duration-150"
                >
                  <span>CHECK BATCH AVAILABILITY</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
