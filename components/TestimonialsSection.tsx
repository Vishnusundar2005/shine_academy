"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Star,
  MessageSquare,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  X,
  Maximize2,
  PlusCircle,
  Quote,
  Sparkles,
  Trash2,
  RotateCcw,
  Lock,
  KeyRound,
  ShieldAlert,
  Eye,
  EyeOff,
} from "lucide-react";
import { academyConfig } from "@/config/academy";

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  board?: string;
  rating: number;
  type: "whatsapp" | "text" | "upload";
  quote: string;
  imageSrc?: string;
  date?: string;
  verified?: boolean;
}

export const initialReviews: ReviewItem[] = [
  {
    id: "wa-1",
    name: "Rakshath",
    role: "Class 12 Maths Student",
    board: "CBSE / State Board",
    rating: 5,
    type: "whatsapp",
    quote:
      "All started at our academy from you and our sir mam. Thank you ❤️ Thats a real Honour. We do our duty and its your hardwork and consistent efforts without distraction.",
    imageSrc: "/images/reviews/whatsapp-review-1.jpeg",
    date: "Verified WhatsApp Chat",
    verified: true,
  },
  {
    id: "wa-2",
    name: "Rakshath",
    role: "Class 12 Graduate",
    board: "12th Grade Board Exam",
    rating: 5,
    type: "whatsapp",
    quote:
      "Mam happy teachers day, thanks for your valuable support and help during my 12th grades, thank you mam... Wherever it is I'm proud to say it all started from shine tuition academy mam 😊",
    imageSrc: "/images/reviews/whatsapp-review-2.jpeg",
    date: "Verified WhatsApp Chat",
    verified: true,
  },
  {
    id: "text-1",
    name: "Harchitha Narayanan",
    role: "Class 10 / 11 Foundation",
    board: "CBSE Board",
    rating: 5,
    type: "text",
    quote:
      "I had a great learning experience at Shine Tuition Academy. The teaching is very clear and concepts are explained in a simple way. The teachers are patient and always ready to clear doubts. Regular tests and practice sessions helped me improve my performance and confidence.",
    date: "Alumni Batch",
    verified: true,
  },
  {
    id: "text-2",
    name: "Madhukshara",
    role: "Class 12 PCM Maths",
    board: "State Board",
    rating: 5,
    type: "text",
    quote:
      "I had a wonderful experience here. Before this, I tried many other tuitions and didn't get good coaching. At Shine the teaching is structured and the doubt-clearing is excellent.",
    date: "Alumni Batch",
    verified: true,
  },
];

const LOCAL_STORAGE_KEY = "shine_academy_custom_reviews";
const DELETED_STORAGE_KEY = "shine_academy_deleted_reviews";

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);
  const [filter, setFilter] = useState<"all" | "whatsapp" | "text" | "upload">("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [hasCustomModifications, setHasCustomModifications] = useState(false);

  // Owner Delete Confirmation Modal State
  const [deleteTarget, setDeleteTarget] = useState<ReviewItem | null>(null);
  const [ownerKeyword, setOwnerKeyword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [actionSuccessMsg, setActionSuccessMsg] = useState("");

  // Form State
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("Class 12");
  const [board, setBoard] = useState("CBSE");
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load reviews from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      const deletedIds: string[] = JSON.parse(
        localStorage.getItem(DELETED_STORAGE_KEY) || "[]"
      );

      const filteredInitial = initialReviews.filter((r) => !deletedIds.includes(r.id));

      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const validSaved = parsed.filter((r) => !deletedIds.includes(r.id));
          setReviews([...validSaved, ...filteredInitial]);
          setHasCustomModifications(validSaved.length > 0 || deletedIds.length > 0);
          return;
        }
      }

      setReviews(filteredInitial);
      setHasCustomModifications(deletedIds.length > 0);
    } catch (e) {
      console.error("Failed to load saved reviews", e);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !feedback.trim()) {
      alert("Please fill in your name and feedback message.");
      return;
    }

    setIsSubmitting(true);

    const newReview: ReviewItem = {
      id: "user-" + Date.now(),
      name: name.trim(),
      role: `${studentClass} Student`,
      board: `${board} Board`,
      rating,
      type: imagePreview ? "upload" : "text",
      quote: feedback.trim(),
      imageSrc: imagePreview || undefined,
      date: "Just now",
      verified: true,
    };

    setTimeout(() => {
      const updatedList = [newReview, ...reviews];
      setReviews(updatedList);
      setHasCustomModifications(true);

      // Save user submitted items to localStorage
      try {
        const userReviewsOnly = updatedList.filter((r) => r.id.startsWith("user-"));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userReviewsOnly));
      } catch (err) {
        console.warn("Could not save to localStorage (storage quota might be exceeded):", err);
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form
      setName("");
      setFeedback("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      setTimeout(() => {
        setSubmitSuccess(false);
        setIsFormOpen(false);
      }, 2000);
    }, 400);
  };

  // Open the Password Verification Modal
  const openDeleteModal = (item: ReviewItem) => {
    setDeleteTarget(item);
    setOwnerKeyword("");
    setDeleteError("");
  };

  const closeDeleteModal = () => {
    setDeleteTarget(null);
    setOwnerKeyword("");
    setDeleteError("");
  };

  // Confirm Delete with Owner Password Verification
  const handleConfirmDelete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deleteTarget) return;

    const expectedKeyword = academyConfig.reviewAdminKeyword || "shine2026";

    if (ownerKeyword.trim() !== expectedKeyword) {
      setDeleteError("Incorrect owner keyword. Access denied.");
      return;
    }

    const id = deleteTarget.id;
    const authorName = deleteTarget.name;
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    setHasCustomModifications(true);

    try {
      // Update custom reviews storage
      const userReviewsOnly = updated.filter((r) => r.id.startsWith("user-"));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userReviewsOnly));

      // Track deleted initial review IDs
      const deletedIds: string[] = JSON.parse(
        localStorage.getItem(DELETED_STORAGE_KEY) || "[]"
      );
      if (!deletedIds.includes(id)) {
        deletedIds.push(id);
        localStorage.setItem(DELETED_STORAGE_KEY, JSON.stringify(deletedIds));
      }
    } catch (err) {
      console.warn("Storage update failed", err);
    }

    closeDeleteModal();
    setActionSuccessMsg(`Feedback by "${authorName}" was removed successfully.`);
    setTimeout(() => setActionSuccessMsg(""), 4000);
  };

  const handleResetDefaultReviews = () => {
    const entered = window.prompt(
      "Please enter the Owner Secret Keyword to reset all reviews to default:"
    );
    if (!entered) return;

    const expectedKeyword = academyConfig.reviewAdminKeyword || "shine2026";
    if (entered.trim() !== expectedKeyword) {
      alert("Incorrect owner keyword. Action cancelled.");
      return;
    }

    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.removeItem(DELETED_STORAGE_KEY);
    setReviews(initialReviews);
    setHasCustomModifications(false);
    setActionSuccessMsg("All reviews have been reset to default.");
    setTimeout(() => setActionSuccessMsg(""), 4000);
  };

  const filteredReviews = reviews.filter((r) => {
    if (filter === "all") return true;
    if (filter === "whatsapp") return r.type === "whatsapp";
    if (filter === "text") return r.type === "text";
    if (filter === "upload") return r.type === "upload" || !!r.imageSrc;
    return true;
  });

  return (
    <section id="testimonials" className="relative bg-parchment-2 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-teal">
              <Sparkles className="size-3.5 text-teal" />
              Real Student & Parent Feedback
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Real WhatsApp Responses & Student Stories
            </h2>
            <p className="mt-3 text-base text-ink-soft">
              Direct messages from students who transformed their Maths concepts, board exam scores, and confidence at Shine Tuition Academy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {hasCustomModifications && (
              <button
                onClick={handleResetDefaultReviews}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-parchment px-4 py-3 text-xs font-semibold text-ink-soft transition hover:bg-parchment-2 hover:text-ink"
                title="Reset reviews to original default batch"
              >
                <RotateCcw className="size-3.5" /> Reset Defaults
              </button>
            )}

            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center gap-2.5 rounded-xl bg-teal px-5 py-3.5 text-sm font-semibold text-parchment shadow-md transition-all hover:bg-teal-deep hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal/50"
            >
              {isFormOpen ? (
                <>
                  <X className="size-4" /> Close Feedback Form
                </>
              ) : (
                <>
                  <PlusCircle className="size-4" /> Share Your Feedback / Review
                </>
              )}
            </button>
          </div>
        </div>

        {/* Global Success Notification Toast */}
        {actionSuccessMsg && (
          <div className="mt-6 flex items-center justify-between rounded-xl border border-teal/30 bg-teal/10 px-5 py-3.5 text-sm font-semibold text-teal-deep shadow-sm">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="size-5 text-teal" />
              <span>{actionSuccessMsg}</span>
            </div>
            <button
              onClick={() => setActionSuccessMsg("")}
              className="text-teal-deep/70 hover:text-teal-deep"
            >
              <X className="size-4" />
            </button>
          </div>
        )}

        {/* Feedback Submission Card / Form (Accordion) */}
        {isFormOpen && (
          <div className="mt-10 overflow-hidden rounded-2xl border border-teal/30 bg-parchment p-6 shadow-xl transition-all sm:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-border/80 pb-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">
                  Write a Student / Parent Review
                </h3>
                <p className="text-xs text-ink-soft sm:text-sm">
                  Share your experience or upload your mark sheet / WhatsApp feedback to inspire future students.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="rounded-lg p-1.5 text-ink-soft hover:bg-parchment-2"
                aria-label="Close form"
              >
                <X className="size-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="my-8 flex flex-col items-center justify-center rounded-xl bg-teal/10 p-8 text-center text-teal-deep">
                <CheckCircle2 className="size-12 text-teal" />
                <h4 className="mt-3 font-display text-2xl font-bold">Thank You for Your Feedback!</h4>
                <p className="mt-1 text-sm text-ink-soft">
                  Your review and uploaded photo have been updated live on the website.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                      Student / Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="mt-1.5 w-full rounded-lg border border-border bg-parchment-2 px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                      Class / Standard *
                    </label>
                    <select
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-border bg-parchment-2 px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    >
                      <option value="Class 12">Class 12 Maths</option>
                      <option value="Class 11">Class 11 Maths</option>
                      <option value="Class 10">Class 10 Maths</option>
                      <option value="Alumni">Alumni / Parent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                      Educational Board *
                    </label>
                    <select
                      value={board}
                      onChange={(e) => setBoard(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-border bg-parchment-2 px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    >
                      <option value="CBSE">CBSE Board</option>
                      <option value="State Board">State Board</option>
                      <option value="ICSE">ICSE / ISC</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Rating Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                    Your Rating *
                  </label>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="rounded p-1 text-gold transition hover:scale-110 focus:outline-none"
                      >
                        <Star
                          className={`size-6 ${
                            star <= rating
                              ? "fill-gold text-gold"
                              : "text-border"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-semibold text-ink-soft">
                      ({rating} out of 5 Stars)
                    </span>
                  </div>
                </div>

                {/* Feedback Textarea */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                    Your Feedback / Experience with Shine Tuition Academy *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="How did the 15-year PhD Professor coaching, small batch (30 students), mock tests, and direct doubt support help your child?"
                    className="mt-1.5 w-full rounded-lg border border-border bg-parchment-2 p-3.5 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                  />
                </div>

                {/* Image Upload Area */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                    Upload Screenshot / Mark Sheet / Feedback Photo (Optional)
                  </label>
                  <p className="mt-0.5 text-xs text-ink-soft">
                    Upload your WhatsApp chat screenshot, score card, or handwritten review.
                  </p>

                  {!imagePreview ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-2.5 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-parchment-2 p-6 text-center transition hover:border-teal/50 hover:bg-teal/5"
                    >
                      <Upload className="size-8 text-teal" />
                      <span className="mt-2 text-sm font-semibold text-ink">
                        Click to select image file
                      </span>
                      <span className="mt-1 text-xs text-ink-soft">
                        Supports PNG, JPG, JPEG (Max 5MB)
                      </span>
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="mt-3 flex items-center gap-4 rounded-xl border border-teal/20 bg-teal/5 p-3">
                      <div className="relative size-20 overflow-hidden rounded-lg border border-border bg-black/5">
                        <img
                          src={imagePreview}
                          alt="Review Preview"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-deep">
                          <CheckCircle2 className="size-4 text-teal" /> Photo attached successfully
                        </div>
                        <p className="mt-0.5 text-xs text-ink-soft">
                          This image will be displayed with your review.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                        title="Remove Image"
                      >
                        <X className="size-5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Form Buttons */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="rounded-lg border border-border bg-parchment px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-parchment-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-2.5 text-sm font-semibold text-parchment shadow-md transition hover:bg-teal-deep disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Post Review to Website"}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Filter Navigation Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 border-b border-border/60 pb-6 sm:justify-start">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
              filter === "all"
                ? "bg-ink text-parchment shadow"
                : "bg-parchment text-ink-soft hover:bg-parchment-2 hover:text-ink"
            }`}
          >
            All Responses ({reviews.length})
          </button>
          <button
            onClick={() => setFilter("whatsapp")}
            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
              filter === "whatsapp"
                ? "bg-teal text-parchment shadow"
                : "bg-parchment text-ink-soft hover:bg-parchment-2 hover:text-ink"
            }`}
          >
            <MessageSquare className="size-3.5" />
            WhatsApp Chats ({reviews.filter((r) => r.type === "whatsapp").length})
          </button>
          <button
            onClick={() => setFilter("text")}
            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
              filter === "text"
                ? "bg-teal text-parchment shadow"
                : "bg-parchment text-ink-soft hover:bg-parchment-2 hover:text-ink"
            }`}
          >
            <Quote className="size-3.5" />
            Alumni Reviews ({reviews.filter((r) => r.type === "text").length})
          </button>
          <button
            onClick={() => setFilter("upload")}
            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
              filter === "upload"
                ? "bg-teal text-parchment shadow"
                : "bg-parchment text-ink-soft hover:bg-parchment-2 hover:text-ink"
            }`}
          >
            <ImageIcon className="size-3.5" />
            With Images / Photos ({reviews.filter((r) => !!r.imageSrc).length})
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/90 bg-parchment shadow-sm transition hover:shadow-md"
            >
              {/* If review has an image (like WhatsApp screenshot or user upload) */}
              {item.imageSrc && (
                <div className="relative border-b border-border/70 bg-ink/5">
                  <div
                    onClick={() => setLightboxImage(item.imageSrc!)}
                    className="relative flex max-h-[380px] w-full cursor-zoom-in items-center justify-center overflow-hidden bg-slate-900/90 p-2 sm:p-4"
                  >
                    <img
                      src={item.imageSrc}
                      alt={`${item.name} review screenshot`}
                      className="max-h-[340px] w-auto rounded-lg object-contain shadow-md transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                      <Maximize2 className="size-3" /> Click to enlarge
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/40 bg-teal/10 px-4 py-1.5 text-[11px] font-semibold text-teal-deep">
                    <span>💬 WhatsApp Student Conversation · {item.name}</span>
                  </div>
                </div>
              )}

              {/* Review Content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-gold text-gold" />
                      ))}
                      {item.verified && (
                        <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal-deep">
                          <CheckCircle2 className="size-3 text-teal" /> Verified
                        </span>
                      )}
                    </div>

                    {/* Delete / Remove Action Button with Owner Keyword Protection */}
                    <button
                      onClick={() => openDeleteModal(item)}
                      className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-medium text-ink-soft opacity-75 transition hover:bg-red-50 hover:text-red-600 hover:opacity-100"
                      title={`Remove review by ${item.name} (Owner keyword required)`}
                    >
                      <Trash2 className="size-3.5 text-red-500" />
                      <span>Remove</span>
                    </button>
                  </div>

                  <blockquote className="mt-4 font-display text-lg italic leading-relaxed text-ink sm:text-xl">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="mt-6 flex items-center gap-3.5 border-t border-border/80 pt-5">
                  <div className="flex size-11 items-center justify-center rounded-full bg-teal font-display text-base font-bold text-parchment">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-ink">{item.name}</div>
                    <div className="text-xs text-ink-soft">
                      {item.role} {item.board ? `· ${item.board}` : ""}
                    </div>
                  </div>
                  {item.date && (
                    <span className="text-[11px] font-medium text-ink-soft">
                      {item.date}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Owner Keyword Verification Modal for Removing Feedback */}
        {deleteTarget && (
          <div
            onClick={closeDeleteModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-parchment p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div className="flex items-center gap-2 text-ink">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <ShieldAlert className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-ink">
                      Owner Verification
                    </h4>
                    <p className="text-xs text-ink-soft">Confirm feedback removal</p>
                  </div>
                </div>
                <button
                  onClick={closeDeleteModal}
                  className="rounded-lg p-1.5 text-ink-soft hover:bg-parchment-2"
                  aria-label="Close"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="my-4 rounded-xl bg-parchment-2 p-3.5 text-xs text-ink-soft">
                <span className="font-semibold text-ink">Selected Review:</span>
                <p className="mt-1 line-clamp-2 italic text-ink">
                  &ldquo;{deleteTarget.quote}&rdquo;
                </p>
                <p className="mt-1 text-[11px] font-medium text-ink-soft">
                  — {deleteTarget.name} ({deleteTarget.role})
                </p>
              </div>

              <form onSubmit={handleConfirmDelete} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                    Enter Owner Secret Keyword *
                  </label>
                  <p className="mt-0.5 text-[11px] text-ink-soft">
                    Only authorized academy owners can remove reviews.
                  </p>
                  <div className="relative mt-2">
                    <KeyRound className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-soft" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      autoFocus
                      value={ownerKeyword}
                      onChange={(e) => {
                        setOwnerKeyword(e.target.value);
                        setDeleteError("");
                      }}
                      placeholder="Enter owner keyword"
                      className="w-full rounded-lg border border-border bg-parchment-2 py-2.5 pl-10 pr-10 text-sm text-ink outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink"
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                  {deleteError && (
                    <p className="mt-2 text-xs font-medium text-red-600">
                      ⚠️ {deleteError}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-3">
                  <button
                    type="button"
                    onClick={closeDeleteModal}
                    className="rounded-lg border border-border bg-parchment px-4 py-2 text-xs font-semibold text-ink hover:bg-parchment-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow transition hover:bg-red-700"
                  >
                    <Trash2 className="size-3.5" />
                    Confirm & Remove
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Lightbox Modal for Screenshots */}
        {lightboxImage && (
          <div
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-2xl overflow-hidden rounded-2xl bg-slate-950 p-2 shadow-2xl"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
                aria-label="Close image"
              >
                <X className="size-5" />
              </button>
              <img
                src={lightboxImage}
                alt="Enlarged feedback screenshot"
                className="max-h-[85vh] w-auto rounded-xl object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
