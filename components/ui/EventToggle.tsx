"use client";

import { motion } from "framer-motion";

export type EventType = "wedding" | "reception";

export default function EventToggle({
  selected,
  onChange,
}: {
  selected: EventType;
  onChange: (event: EventType) => void;
}) {
  return (
    <div className="flex justify-center mb-10">
      <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-full p-1.5 border-2 border-gold/20 shadow-md">
        {([
          { key: "wedding" as EventType, label: "Wedding", sub: "Kerala · Aug 30", color: "from-maroon to-maroon-dark" },
          { key: "reception" as EventType, label: "Reception", sub: "Bangalore · Sep 5", color: "from-emerald to-emerald-dark" },
        ]).map((option) => (
          <button
            key={option.key}
            onClick={() => onChange(option.key)}
            className={`relative px-5 sm:px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
              selected === option.key
                ? "text-white shadow-lg"
                : "text-brown-light hover:text-brown"
            }`}
          >
            {selected === option.key && (
              <motion.div
                layoutId="event-toggle-bg"
                className={`absolute inset-0 bg-gradient-to-r ${option.color} rounded-full`}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex flex-col items-center">
              <span>{option.label}</span>
              <span className={`text-[10px] font-medium mt-0.5 ${
                selected === option.key ? "text-white/70" : "text-brown-light/60"
              }`}>
                {option.sub}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
