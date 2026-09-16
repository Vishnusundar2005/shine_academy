"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare, ShieldCheck, Sparkles, Flame } from "lucide-react";
import { academyConfig, createWhatsAppUrl } from "@/config/academy";
import type { LeadFormData, StudentClass, EducationBoard } from "@/types";

export default function LeadForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    parentName: "",
    whatsappNumber: "",
    studentClass: "Class 11",
    board: "CBSE",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Please enter your name";
    }

    const cleanPhone = formData.whatsappNumber.replace(/[^0-9]/g, "");
    if (!cleanPhone) {
      newErrors.whatsappNumber = "Please enter your WhatsApp number";
    } else if (cleanPhone.length < 10) {
      newErrors.whatsappNumber = "Please enter a valid 10-digit WhatsApp number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const whatsappUrl = createWhatsAppUrl({
      parentName: formData.parentName.trim(),
      whatsappNumber: formData.whatsappNumber.trim(),
      studentClass: formData.studentClass,
      board: formData.board,
    });

    setGeneratedUrl(whatsappUrl);
    setIsSubmitted(true);

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="enquiry" className="py-16 sm:py-24 bg-shine-deepDark border-b border-teal-900/30 scroll-mt-10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/15 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Form Container */}
        <div className="bg-slate-900/95 rounded-3xl shadow-glowTeal border-2 border-teal-500/40 overflow-hidden backdrop-blur-md">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 text-white p-6 sm:p-10 text-center relative border-b border-teal-900/60">
            {/* Logo Emblem */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1 shadow-glowTeal mx-auto mb-4 border-2 border-teal-400">
              <Image
                src="/images/shine-logo.jpg"
                alt="Shine Tuition Academy"
                width={64}
                height={64}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
              <Sparkles className="w-3.5 h-3.5 text-shine-gold" />
              Batch Availability Enquiry
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight">
              Check The Available Maths Batch
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Fill in your details and our team will contact you with the relevant batch timings, seat availability, and enrolment details.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto border border-teal-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Opening WhatsApp...</h3>
                <p className="text-slate-300 max-w-md mx-auto text-sm">
                  We are redirecting you to WhatsApp to send your batch enquiry directly to Shine Tuition Academy.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generatedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Click Here If WhatsApp Didn&apos;t Open</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white underline py-2"
                  >
                    Modify details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Parent Name */}
                  <div>
                    <label htmlFor="parentName" className="block text-xs font-bold uppercase tracking-wider text-teal-300 mb-2">
                      Parent Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={(e) => {
                        setFormData({ ...formData, parentName: e.target.value });
                        if (errors.parentName) setErrors({ ...errors, parentName: undefined });
                      }}
                      placeholder="Enter Your Name"
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-white bg-slate-950/80 focus:bg-slate-950 focus:outline-none focus:ring-2 transition-all ${
                        errors.parentName
                          ? "border-rose-400 focus:ring-rose-400/30"
                          : "border-teal-900/60 focus:border-teal-400 focus:ring-teal-400/20"
                      }`}
                      aria-invalid={Boolean(errors.parentName)}
                      aria-describedby={errors.parentName ? "parentName-error" : undefined}
                      required
                    />
                    {errors.parentName && (
                      <p id="parentName-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.parentName}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label htmlFor="whatsappNumber" className="block text-xs font-bold uppercase tracking-wider text-teal-300 mb-2">
                      WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, whatsappNumber: e.target.value });
                        if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: undefined });
                      }}
                      placeholder="Enter 10-digit WhatsApp Number"
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-white bg-slate-950/80 focus:bg-slate-950 focus:outline-none focus:ring-2 transition-all ${
                        errors.whatsappNumber
                          ? "border-rose-400 focus:ring-rose-400/30"
                          : "border-teal-900/60 focus:border-teal-400 focus:ring-teal-400/20"
                      }`}
                      aria-invalid={Boolean(errors.whatsappNumber)}
                      aria-describedby={errors.whatsappNumber ? "whatsappNumber-error" : undefined}
                      required
                    />
                    {errors.whatsappNumber && (
                      <p id="whatsappNumber-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.whatsappNumber}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Student Class */}
                  <div>
                    <label htmlFor="studentClass" className="block text-xs font-bold uppercase tracking-wider text-teal-300 mb-2">
                      Student&apos;s Class <span className="text-rose-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {(["Class 11", "Class 12"] as StudentClass[]).map((cls) => (
                        <button
                          type="button"
                          key={cls}
                          onClick={() => setFormData({ ...formData, studentClass: cls })}
                          className={`py-3.5 px-4 rounded-2xl text-sm font-extrabold border transition-all text-center ${
                            formData.studentClass === cls
                              ? "bg-teal-500 text-slate-950 border-teal-400 shadow-glowTeal"
                              : "bg-slate-950/80 text-slate-300 border-slate-800 hover:bg-slate-800"
                          }`}
                        >
                          {cls}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Education Board */}
                  <div>
                    <label htmlFor="board" className="block text-xs font-bold uppercase tracking-wider text-teal-300 mb-2">
                      Education Board <span className="text-rose-400">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["CBSE", "State Board", "ICSE"] as EducationBoard[]).map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, board: b })}
                          className={`py-3.5 px-2 rounded-2xl text-xs font-extrabold border transition-all text-center truncate ${
                            formData.board === b
                              ? "bg-teal-500 text-slate-950 border-teal-400 shadow-glowTeal"
                              : "bg-slate-950/80 text-slate-300 border-slate-800 hover:bg-slate-800"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="shimmer-button w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-teal-400 via-teal-500 to-shine-gold hover:from-teal-300 hover:to-shine-gold active:scale-[0.99] text-slate-950 font-black text-base sm:text-lg shadow-glowGold transition-all duration-150 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-teal-400/40"
                  >
                    <span>CHECK BATCH AVAILABILITY</span>
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                {/* Trust and privacy disclaimer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800 text-center sm:text-left">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>We&apos;ll contact you on WhatsApp with the batch details.</span>
                  </div>
                  <div className="text-shine-gold font-bold flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" />
                    Strict 30-student batch capacity
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
