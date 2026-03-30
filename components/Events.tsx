"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, ExternalLink } from "lucide-react";

const events = [
  {
    title: "Wedding Ceremony",
    subtitle: "Traditional Hindu Wedding",
    date: "August 30, 2026",
    timeLabel: "Muhurtham",
    time: "9:20 AM to 11:40 AM",
    venue: "Shilpa Convention Center",
    address: "Injakkadu, Kerala",
    mapQuery: "Shilpa+Convention+Center+Injakkadu+Kerala",
    description:
      "Join us for our traditional Hindu wedding ceremony — sacred rituals, vedic mantras, the exchange of garlands, and blessings from our elders. A celebration filled with the warmth of family, the fragrance of jasmine, and the colours of Kerala.",
    accent: "text-gold-light",
    badge: "border-gold/40 bg-gold/20 text-white",
    cardStyle: "glass-panel-dark",
    textColor: "text-white",
    textMuted: "text-gray-200",
    infoCardStyle: "bg-white/10 border-white/20",
    bgImage: "/images/diya-bg.png",
    overlayMode: "from-amber-100/20 to-white/10 mix-blend-screen",
  },
  {
    title: "Reception",
    subtitle: "Dinner & Celebrations",
    date: "September 5, 2026",
    timeLabel: "When",
    time: "7:00 PM onwards",
    venue: "Aura Convention Center",
    address: "V Legacy, Bangalore",
    mapQuery: "V+Legacy+Marriage+Hall+Aura+Convention+Center+Bangalore",
    description:
      "Celebrate with us in Bangalore! An evening of music, delicious food, and joyful company as we begin our journey together. Come dressed in your finest and dance the night away!",
    accent: "text-[#7B1020]",
    badge: "border-[#7B1020]/30 bg-[#7B1020]/10 text-[#7B1020]",
    cardStyle: "glass-card",
    textColor: "text-gray-900",
    textMuted: "text-gray-700",
    infoCardStyle: "bg-black/5 border-black/10",
    bgImage: "/images/party-bg.png",
    overlayMode: "from-black/40 to-black/10 backdrop-blur-sm",
  },
];

export default function Events() {
  return (
    <div id="events" className="flex flex-col">
      {events.map((event, i) => (
        <section
          key={i}
          className="bg-fixed bg-cover bg-center relative overflow-hidden py-24 sm:py-32"
          style={{ backgroundImage: `url('${event.bgImage}')` }}
        >
          {/* Overlay matching the aesthetic of the background */}
          <div className={`absolute inset-0 bg-gradient-to-b ${event.overlayMode} z-0 pointer-events-none`} />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`relative rounded-3xl ${event.cardStyle} p-8 sm:p-12 overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]`}
              >
                <div className={`inline-block border ${event.badge} text-xs tracking-[0.2em] uppercase px-5 py-2 rounded-full font-bold mb-6 backdrop-blur-md shadow-inner`}>
                  {event.date}
                </div>

                <h3 className={`font-display text-4xl sm:text-5xl font-bold ${event.accent} mb-2 drop-shadow-sm`}>
                  {event.title}
                </h3>
                <p className={`${event.accent} opacity-80 text-sm tracking-widest uppercase mb-6 font-bold`}>
                  {event.subtitle}
                </p>
                <p className={`${event.textMuted} font-medium text-lg leading-relaxed mb-10 max-w-2xl`}>
                  {event.description}
                </p>

                {/* Info cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className={`${event.infoCardStyle} rounded-2xl p-5 border backdrop-blur-md flex flex-col justify-start`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className={`w-5 h-5 ${event.accent}`} strokeWidth={2} />
                      <p className={`font-bold ${event.textColor} text-sm tracking-wide`}>{event.timeLabel}</p>
                    </div>
                    <p className={`${event.textMuted} font-medium text-sm`}>{event.time}</p>
                  </div>

                  <div className={`${event.infoCardStyle} rounded-2xl p-5 border backdrop-blur-md flex flex-col justify-start items-start`}>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className={`w-5 h-5 ${event.accent}`} strokeWidth={2} />
                      <p className={`font-bold ${event.textColor} text-sm tracking-wide`}>Where</p>
                    </div>
                    <p className={`${event.textMuted} font-medium text-sm`}>{event.venue}</p>
                    <p className={`${event.textMuted} font-medium text-xs mt-1 opacity-80 mb-4`}>{event.address}</p>
                    
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${event.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 ${
                        event.cardStyle === "glass-panel-dark"
                          ? "bg-maroon text-white hover:bg-maroon-dark"
                          : "bg-[#7B1020] text-white hover:bg-[#5a0c18]"
                      } transition-colors font-bold text-xs px-4 py-1.5 rounded-full shadow-sm`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
                      View on Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
