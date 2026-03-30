"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import DiyaIcon from "./ui/DiyaIcon";
import { ChevronDown, Check } from "lucide-react";

interface RSVPData {
  name: string;
  email: string;
  guests: string;
  attending: string;
  accommodation: string[];
  message: string;
}

export default function RSVP() {
  const [form, setForm] = useState<RSVPData>({
    name: "",
    email: "",
    guests: "1",
    attending: "",
    accommodation: [],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <SectionWrapper id="rsvp" className="bg-banana-leaf-texture bg-fixed py-20 relative">
        {/* Removed dull black overlay to keep colors vibrant */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="relative z-10 text-center py-20 px-8 max-w-2xl mx-auto glass-card rounded-[2rem] shadow-2xl border border-white/40"
        >
          <div className="flex justify-center mb-8">
            <div className="animate-glow bg-gold/10 p-6 rounded-full border border-gold/30 shadow-[0_0_20px_rgba(212,160,23,0.3)]">
              <DiyaIcon size={72} />
            </div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-maroon font-bold mb-6 drop-shadow-sm">
            Thank You!
          </h2>
          <p className="text-gray-800 font-semibold text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            We&apos;ve received your RSVP and can&apos;t wait to celebrate with you!
          </p>
          <div className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-gold/30 border border-gold-light/50">
            <span className="text-xl">&#10003;</span> See you at the wedding!
          </div>
        </motion.div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="rsvp" className="bg-banana-leaf-texture bg-fixed py-16 sm:py-24 relative">
      {/* Removed dull black overlay to preserve lush green leaf colors! */}

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto glass-card rounded-[2rem] shadow-2xl overflow-hidden border border-white/50"
      >
        {/* Decorative inner border */}
        <div className="absolute inset-4 border-2 border-gold/20 rounded-[1.5rem] pointer-events-none mix-blend-multiply" />

        <div className="py-12 px-6 sm:px-12 md:px-16 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-maroon/10 p-3 rounded-full mb-4">
              <DiyaIcon size={32} />
            </div>
            <p className="text-maroon tracking-[0.3em] uppercase text-sm font-bold mb-3 drop-shadow-sm">
              We&apos;d love to see you
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-maroon font-bold mb-6">
              RSVP
            </h2>
            <div className="inline-block bg-gradient-to-r from-gold-dark to-gold text-white text-xs tracking-widest uppercase px-6 py-2.5 rounded-full font-bold shadow-md border border-gold-light/40 mb-4">
              Please respond by June 30, 2026
            </div>
            <p className="text-gray-700 font-medium text-sm mt-2 max-w-md mx-auto">
              Accommodation near the venue will be arranged for all confirmed guests.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-brown mb-2 tracking-wide">
                  Full Name <span className="text-maroon">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-gold/30 bg-white/80 focus:bg-white focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all shadow-sm font-medium"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-brown mb-2 tracking-wide">
                  Email <span className="text-maroon">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-gold/30 bg-white/80 focus:bg-white focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all shadow-sm font-medium"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Attending */}
            <div>
              <label className="block text-sm font-bold text-brown mb-3 tracking-wide">
                Which events will you attend? <span className="text-maroon">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Wedding", sub: "Kerala on 30th Aug", bg: "bg-maroon" },
                  { label: "Reception", sub: "Bangalore on 5th Sep", bg: "bg-gold-dark" },
                  { label: "Both!", sub: "All Festivities", bg: "bg-gradient-to-r from-saffron to-gold" },
                ].map((option) => {
                  const value = option.label === "Both!" ? "Both" : `${option.label} (${option.sub})`;
                  const selected = form.attending === value;
                  return (
                    <label
                      key={value}
                      className={`flex flex-col items-center justify-center px-4 py-5 rounded-xl border-2 cursor-pointer transition-all text-center relative overflow-hidden ${
                        selected
                          ? "border-transparent shadow-lg scale-105"
                          : "border-gold/30 bg-white/60 hover:bg-white hover:border-saffron/50 text-brown hover:shadow-md"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value={value}
                        checked={selected}
                        onChange={(e) => setForm({ ...form, attending: e.target.value })}
                        className="sr-only"
                        required
                      />
                      {/* Selected state background */}
                      {selected && (
                        <div className={`absolute inset-0 ${option.bg} opacity-100 z-0`} />
                      )}
                      
                      <span className={`relative z-10 font-bold ${selected ? "text-white text-lg" : "text-brown text-base"}`}>
                        {option.label}
                      </span>
                      <span className={`relative z-10 text-xs mt-1 font-semibold ${selected ? "text-white/90" : "text-gray-600"}`}>
                        {option.sub}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Accommodation */}
            {form.attending && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="overflow-hidden"
              >
                <label className="block text-sm font-bold text-brown mb-3 tracking-wide">
                  Do you need accommodation?
                </label>
                <p className="text-xs text-brown-light mb-3">
                  Stay for the wedding and/or reception days is planned by us. Just check what you need!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {(form.attending === "Both"
                    ? ["Wedding (Kerala)", "Reception (Bangalore)"]
                    : form.attending.includes("Wedding")
                      ? ["Wedding (Kerala)"]
                      : ["Reception (Bangalore)"]
                  ).map((option) => {
                    const checked = form.accommodation.includes(option);
                    return (
                      <label
                        key={option}
                        className={`flex items-center gap-3 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all ${
                          checked
                            ? "border-gold bg-gold/10 shadow-sm"
                            : "border-gold/20 bg-white/60 hover:border-gold/40"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${
                          checked ? "bg-gold border-gold" : "border-gold/30 bg-white"
                        }`}>
                          {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                        </div>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => {
                            setForm({
                              ...form,
                              accommodation: checked
                                ? form.accommodation.filter((a) => a !== option)
                                : [...form.accommodation, option],
                            });
                          }}
                          className="sr-only"
                        />
                        <span className="font-medium text-brown text-sm">{option}</span>
                      </label>
                    );
                  })}
                  <label
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all ${
                      form.accommodation.includes("Not needed")
                        ? "border-gold bg-gold/10 shadow-sm"
                        : "border-gold/20 bg-white/60 hover:border-gold/40"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${
                      form.accommodation.includes("Not needed") ? "bg-gold border-gold" : "border-gold/30 bg-white"
                    }`}>
                      {form.accommodation.includes("Not needed") && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                    </div>
                    <input
                      type="checkbox"
                      checked={form.accommodation.includes("Not needed")}
                      onChange={() => {
                        setForm({
                          ...form,
                          accommodation: form.accommodation.includes("Not needed")
                            ? form.accommodation.filter((a) => a !== "Not needed")
                            : ["Not needed"],
                        });
                      }}
                      className="sr-only"
                    />
                    <span className="font-medium text-brown text-sm">Not needed</span>
                  </label>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Guests */}
              <div>
                <label htmlFor="guests" className="block text-sm font-bold text-brown mb-2 tracking-wide">
                  Guests (Including you)
                </label>
                <div className="relative">
                  <select
                    id="guests"
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-gold/30 bg-white/80 focus:bg-white focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all shadow-sm font-medium appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brown">
                    <ChevronDown className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>


            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-brown mb-2 tracking-wide">
                A Message for Us
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border border-gold/30 bg-white/80 focus:bg-white focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all shadow-sm font-medium resize-none"
                placeholder="Wishes, questions, or anything you'd like us to know..."
              />
            </div>

            {status === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border-l-4 border-red-500 text-red-700 px-5 py-4 rounded-r-xl text-sm font-medium shadow-sm"
              >
                {errorMsg}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-5 rounded-xl bg-gradient-to-r from-maroon to-maroon-light text-white font-display text-2xl font-bold shadow-[0_10px_20px_rgba(155,27,48,0.3)] hover:shadow-[0_15px_30px_rgba(155,27,48,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === "loading" ? "Confirming..." : "Send RSVP"}
            </button>
          </form>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
