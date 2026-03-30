import DiyaIcon from "./ui/DiyaIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Colorful gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon-dark to-[#4A0E1C]" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 rangoli-dots opacity-[0.03]" />

      <div className="relative py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Names */}
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold-light mb-2">
            Karthik & Haritha
          </h2>
          <p className="text-white/50 text-sm tracking-widest uppercase mb-10">
            August 30 & September 5, 2026
          </p>

          {/* Families */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-turmeric text-xs tracking-[0.3em] uppercase mb-3 font-medium">
                Bride&apos;s Family
              </p>
              <p className="font-display text-xl text-white/90 mb-1">
                Sreedharan & Radha
              </p>
              <p className="text-white/60 text-sm">
                Dr. Akhil & Dr. Remya &middot; Nivaan
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-turmeric text-xs tracking-[0.3em] uppercase mb-3 font-medium">
                Groom&apos;s Family
              </p>
              <p className="font-display text-xl text-white/90 mb-1">
                Srikanth & Sudha
              </p>
              <p className="text-white/60 text-sm">Sathvik</p>
            </div>
          </div>

          {/* Diya divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
            <DiyaIcon size={28} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { label: "Events", href: "/#events" },
              { label: "RSVP", href: "/#rsvp" },
              { label: "Travel", href: "/travel" },
              { label: "Attire", href: "/attire" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-turmeric text-sm tracking-wider uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-white/30 text-xs tracking-wider">
            Made with love
          </p>
        </div>
      </div>
    </footer>
  );
}
