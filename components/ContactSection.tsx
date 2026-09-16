"use client";

import React, { useState } from "react";

const classOptions = [
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

const boardOptions = ["CBSE", "State Board", "ICSE", "IGCSE", "Other"];

const modeOptions = [
  "Offline (Classroom)",
  "Online (Live)",
  "Hybrid (Online + Offline)",
];

const initialForm = {
  studentName: "",
  parentName: "",
  phone: "",
  email: "",
  studentClass: "",
  board: "",
  mode: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const updateField = (field: string, val: string) => {
    setForm((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const sName = form.studentName.trim();
    const pName = form.parentName.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    const msg = form.message.trim();

    if (!sName || sName.length > 100) return setError("Please enter the student's name.");
    if (!pName || pName.length > 100) return setError("Please enter the parent's name.");
    if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) return setError("Please enter a valid phone number.");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Please enter a valid email.");
    if (!form.studentClass) return setError("Please select a class.");
    if (!form.board) return setError("Please select a board.");
    if (!form.mode) return setError("Please select a learning mode.");
    if (msg.length > 1000) return setError("Message is too long.");

    const lines = [
      "Hello Shine Tuition Academy, I would like to book a free demo session:",
      "",
      `*Student Name:* ${sName}`,
      `*Parent Name:* ${pName}`,
      `*Phone Number:* ${phone}`,
      email ? `*Email:* ${email}` : null,
      `*Class:* ${form.studentClass}`,
      `*Board:* ${form.board}`,
      `*Preferred Mode:* ${form.mode}`,
      msg ? `*Message:* ${msg}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = `https://wa.me/919840970732?text=${encodeURIComponent(lines)}`;
    setRedirectUrl(url);

    // Direct redirect to WhatsApp with pre-filled message
    window.location.href = url;
  };

  const inputClass =
    "w-full rounded-md border border-border bg-parchment px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-ink-soft/60 focus:border-teal focus:ring-2 focus:ring-teal/20";
  const labelClass =
    "block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft mb-1.5";

  return (
    <section id="contact" className="border-t border-border/60 bg-parchment-2 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal">
            Contact Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance text-ink lg:text-5xl">
            Let&apos;s talk about your child&apos;s progress.
          </h2>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            href="tel:+919840970732"
            className="group flex items-start gap-5 rounded-xl border border-border bg-parchment p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal hover:shadow-md"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal text-lg text-parchment">
              ☏
            </span>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
                Call Us
              </div>
              <div className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink group-hover:text-teal-deep">
                98409 70732
              </div>
              <div className="mt-1 text-xs text-ink-soft">Mon – Sat · 9 AM – 9 PM</div>
            </div>
          </a>

          <a
            href="https://www.shinetuitionacademy.in"
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-5 rounded-xl border border-border bg-parchment p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal hover:shadow-md"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold text-lg text-ink">
              ⌘
            </span>
            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
                Visit Website
              </div>
              <div className="mt-1 truncate font-display text-2xl font-semibold tracking-tight text-ink group-hover:text-teal-deep">
                shinetuitionacademy.in
              </div>
              <div className="mt-1 text-xs text-ink-soft">Programmes, batches and more</div>
            </div>
          </a>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-2xl border-2 border-teal/40 bg-parchment p-8 shadow-[0_20px_50px_-30px_color-mix(in_oklab,var(--teal)_60%,transparent)] lg:p-12">
            <div className="mb-8 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
                Enrolment Enquiry
              </span>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
                Book your free demo session
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Fill in your details — we&apos;ll reply within a few hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="studentName" className={labelClass}>
                  Student Name *
                </label>
                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  required
                  maxLength={100}
                  value={form.studentName}
                  onChange={(s) => updateField("studentName", s.target.value)}
                  className={inputClass}
                  placeholder="Full name"
                />
              </div>

              <div>
                <label htmlFor="parentName" className={labelClass}>
                  Parent Name *
                </label>
                <input
                  id="parentName"
                  name="parentName"
                  type="text"
                  required
                  maxLength={100}
                  value={form.parentName}
                  onChange={(s) => updateField("parentName", s.target.value)}
                  className={inputClass}
                  placeholder="Full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={(s) => updateField("phone", s.target.value)}
                  className={inputClass}
                  placeholder="98XXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(s) => updateField("email", s.target.value)}
                  className={inputClass}
                  placeholder="optional"
                />
              </div>

              <div>
                <label htmlFor="class" className={labelClass}>
                  Class *
                </label>
                <select
                  id="class"
                  name="class"
                  required
                  value={form.studentClass}
                  onChange={(s) => updateField("studentClass", s.target.value)}
                  className={inputClass}
                >
                  <option value="">Select class</option>
                  {classOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="board" className={labelClass}>
                  Board *
                </label>
                <select
                  id="board"
                  name="board"
                  required
                  value={form.board}
                  onChange={(s) => updateField("board", s.target.value)}
                  className={inputClass}
                >
                  <option value="">Select board</option>
                  {boardOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="mode" className={labelClass}>
                  Preferred Mode *
                </label>
                <select
                  id="mode"
                  name="mode"
                  required
                  value={form.mode}
                  onChange={(s) => updateField("mode", s.target.value)}
                  className={inputClass}
                >
                  <option value="">Select mode</option>
                  {modeOptions.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  value={form.message}
                  onChange={(s) => updateField("message", s.target.value)}
                  className={inputClass}
                  placeholder="Tell us about your child's needs (optional)"
                />
              </div>

              {error && (
                <div className="sm:col-span-2 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {redirectUrl && !error && (
                <div className="sm:col-span-2 rounded-md border border-teal/40 bg-teal-soft px-4 py-3 text-sm text-teal-deep flex flex-col gap-1">
                  <span>Redirecting to WhatsApp with your prefilled details...</span>
                  <a
                    href={redirectUrl}
                    className="font-semibold underline hover:text-teal"
                  >
                    Click here if you aren&apos;t redirected automatically →
                  </a>
                </div>
              )}

              <div className="sm:col-span-2 flex flex-col items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-teal px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-parchment shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--teal)_60%,transparent)] transition-colors hover:bg-teal-deep"
                >
                  Send Enquiry via WhatsApp
                </button>
                <p className="text-xs text-ink-soft">Or call directly: 98409 70732</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
