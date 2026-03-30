"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </motion.section>
  );
}
