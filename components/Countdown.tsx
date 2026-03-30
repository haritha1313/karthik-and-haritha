"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    function calculate(): TimeLeft {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(calculate());
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="flex gap-4 sm:gap-6 justify-center">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="text-center">
            <div className="font-display text-3xl sm:text-5xl font-semibold text-gold h-[1.2em]">
              &mdash;
            </div>
            <div className="text-xs sm:text-sm text-brown-light mt-1 tracking-widest uppercase">
              {label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 sm:gap-6 justify-center">
      {units.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="font-display text-3xl sm:text-5xl font-semibold text-gold">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm text-brown-light mt-1 tracking-widest uppercase">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
