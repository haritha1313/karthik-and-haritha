"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";
import MarigoldString from "./ui/MarigoldString";
import DiyaIcon from "./ui/DiyaIcon";
import TempleBells from "./ui/TempleBells";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Luxury Kanjivaram Silk Background */}
      <div className="absolute inset-0 bg-kanjivaram z-0" />
      
      {/* Warm color overlay to enhance richness instead of dulling it */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon/10 to-gold/5 mix-blend-multiply z-0 pointer-events-none" />

      {/* Decorative Corner Mandalas */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 opacity-80 z-0 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M0,0 L200,0 L0,200Z" fill="#D4A017" opacity="0.15" />
          <path d="M0,0 L120,0 L0,120Z" fill="#9B1B30" opacity="0.2" />
          <circle cx="20" cy="20" r="30" fill="none" stroke="#D4A017" strokeWidth="2" opacity="0.5" />
          <circle cx="20" cy="20" r="15" fill="none" stroke="#F9A825" strokeWidth="1" opacity="0.8" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 opacity-80 z-0 pointer-events-none" style={{ transform: "scaleX(-1)" }}>
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M0,0 L200,0 L0,200Z" fill="#D4A017" opacity="0.15" />
          <path d="M0,0 L120,0 L0,120Z" fill="#9B1B30" opacity="0.2" />
          <circle cx="20" cy="20" r="30" fill="none" stroke="#D4A017" strokeWidth="2" opacity="0.5" />
          <circle cx="20" cy="20" r="15" fill="none" stroke="#F9A825" strokeWidth="1" opacity="0.8" />
        </svg>
      </div>

      {/* Multiple overlapping garlands for crowded look */}
      <div className="absolute top-0 left-0 right-0 z-10 drop-shadow-lg">
        <MarigoldString />
      </div>
      <div className="absolute top-4 left-0 right-0 z-10 drop-shadow-xl opacity-80" style={{ transform: "scaleY(1.2)" }}>
        <MarigoldString />
      </div>

      {/* Hero Content enclosed in a glassmorphism card */}
      <div className="relative z-20 w-full max-w-4xl px-4 sm:px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="glass-card rounded-[2.5rem] p-6 sm:p-10 md:p-12 text-center border-2 border-gold/40 shadow-[0_30px_60px_rgba(212,160,23,0.15)] relative overflow-hidden backdrop-blur-xl bg-white/70"
        >
          {/* Subtle inner rangoli texture overlay for the card */}
          <div className="absolute inset-0 rangoli-dots opacity-10 pointer-events-none mix-blend-multiply" />
          {/* Hanging temple bells decoration */}
          <TempleBells />
          
          <div className="relative z-10">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xs sm:text-sm tracking-[0.4em] sm:tracking-[0.6em] uppercase text-maroon-dark font-bold mb-4 bg-gold/10 inline-block px-4 py-1.5 rounded-full border border-gold/30"
            >
              Save the Dates
            </motion.p>

            {/* Names - Scaled down */}
            <div className="py-2">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-script text-6xl sm:text-7xl lg:text-8xl font-normal text-[#7B1020] leading-none drop-shadow-[0_2px_2px_rgba(212,160,23,0.3)]"
              >
                Karthik
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="my-1 sm:my-3"
              >
                <span className="gold-shimmer font-display text-4xl sm:text-5xl font-semibold inline-block">&amp;</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="font-script text-6xl sm:text-7xl lg:text-8xl font-normal text-[#7B1020] leading-none drop-shadow-[0_2px_2px_rgba(212,160,23,0.3)] mb-6"
              >
                Haritha
              </motion.h1>
            </div>

            {/* Colorful date badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
            >
              <div className="bg-white/60 backdrop-blur-md text-maroon-dark px-5 py-2.5 rounded-full border-2 border-maroon/20 font-bold tracking-wide shadow-md hover:scale-105 transition-transform">
                <span className="text-gold mr-2">&#10047;</span> Aug 30, 2026 &middot; Kerala
              </div>
              <div className="bg-white/60 backdrop-blur-md text-gold-dark px-5 py-2.5 rounded-full border-2 border-gold/20 font-bold tracking-wide shadow-md hover:scale-105 transition-transform">
                <span className="text-turmeric mr-2">&#10047;</span> Sep 5, 2026 &middot; Bangalore
              </div>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-r from-maroon/5 via-saffron/10 to-maroon/5 rounded-2xl p-5 border border-gold/30 shadow-inner"
            >
              <Countdown targetDate="2026-08-30T09:00:00+05:30" />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-6 flex justify-center pb-20"
        >
          <a
            href="#events"
            className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 text-white font-bold hover:bg-white/30 hover:text-gold-light transition-all duration-300 group cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-white/40"
          >
            <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-shadow-sm">Join the Celebration</span>
            <ChevronDown className="w-5 h-5 animate-bounce" strokeWidth={3} />
          </a>
        </motion.div>
      </div>

      {/* Bottom marigold border - Double for crowded look */}
      <div className="absolute bottom-4 left-0 right-0 z-10 drop-shadow-xl opacity-80" style={{ transform: "rotate(180deg) scaleY(1.2)" }}>
        <MarigoldString />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 drop-shadow-md" style={{ transform: "rotate(180deg)" }}>
        <MarigoldString />
      </div>
    </section>
  );
}
