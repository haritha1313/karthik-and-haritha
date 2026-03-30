"use client";

import { motion } from "framer-motion";
import MarigoldString from "./MarigoldString";

export default function PageHeader({
  title,
  subtitle,
  accent,
}: {
  title: string;
  subtitle: string;
  accent?: string;
}) {
  return (
    <div className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF3E0] via-[#FFF8EE] to-ivory" />
      <div className="absolute inset-0 rangoli-dots opacity-[0.03]" />

      {/* Marigold top */}
      <div className="absolute top-12 left-0 right-0">
        <MarigoldString />
      </div>

      <div className="relative z-10 text-center px-4 pt-10">
        {accent && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-saffron tracking-[0.3em] uppercase text-sm font-medium mb-3"
          >
            {accent}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-maroon font-bold mb-3"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-brown-light max-w-lg mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
