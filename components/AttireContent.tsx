"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import EventToggle from "./ui/EventToggle";
import { useEventParam } from "@/lib/useEventParam";
import AttireIllustration from "./ui/AttireIllustrations";

const attireData = {
  wedding: {
    vibe: "Elegance & Tradition",
    vibeDesc:
      "The Kerala wedding ceremony is deeply rooted in sacred rituals and vibrant culture. We invite you to embrace the elegance of South Indian tradition with beautiful, modest festive wear.",
    colors: [
      { color: "#FFFFF0", label: "Ivory", border: "border-gold/40" },
      { color: "#D4A017", label: "Gold", border: "border-transparent" },
      { color: "#C62828", label: "Red", border: "border-transparent" },
      { color: "#9B1B30", label: "Maroon", border: "border-transparent" },
      { color: "#EF6C00", label: "Orange", border: "border-transparent" },
      { color: "#F9A825", label: "Turmeric", border: "border-transparent" },
    ],
    women: [
      {
        title: "Saree",
        tag: "Timeless Classic",
        illustration: "kanjivaram-saree",
        desc: "A silk, chiffon, or cotton saree is timeless. Kanjivaram and other silk sarees with golden zari are classics for South Indian celebrations, but any beautiful drape in festive hues is perfect.",
      },
      {
        title: "Kasavu Saree",
        tag: "Kerala Traditional",
        illustration: "kasavu-saree",
        desc: "The quintessential Kerala look — an elegant white or cream saree adorned with a golden border. A stunning, timeless choice if you'd love to match the local tradition.",
      },
      {
        title: "Traditional Ensembles",
        tag: "Beautiful Alternative",
        illustration: "lehenga",
        desc: "Lehengas, anarkalis, and elegant salwar suits in festive tones work beautifully. We kindly request keeping shoulders traditionally covered during the ceremony rituals.",
      },
    ],
    men: [
      {
        title: "Mundu & Shirt",
        tag: "Kerala Classic",
        illustration: "mundu",
        desc: "A crisp white or cream mundu paired with a shirt. This is the definitive Kerala wedding attire—dashing, comfortable, and a wonderful way to join in the spirit of the ceremony!",
      },
      {
        title: "Kurta Pajama",
        tag: "Comfortable Elegance",
        illustration: "kurta",
        desc: "A classic silk or cotton kurta with pajama or churidar. Comfortable and effortlessly traditional in any joyful shade.",
      },
      {
        title: "Formal Wear",
        tag: "Sharp & Simple",
        illustration: "formal-shirt",
        desc: "A well-pressed shirt and light-coloured trousers are always sharp and perfectly welcome. Choose what makes you feel comfortable for the morning celebration.",
      },
    ],
    tips: [
      "Modesty is appreciated during the ceremony—covering shoulders is a lovely traditional gesture.",
      "You may need to slip your footwear off at the venue, so something easy to remove is ideal.",
      "Gold jewelry pairs exquisitely with South Indian attire!",
      "Light, breathable fabrics are your best friend for Kerala's tropical August weather.",
    ],
    avoid: [
      "Completely black outfits, as they are traditionally reserved for different occasions.",
      "Plain white everyday wear without embellishments (though a gold-bordered Kasavu is highly celebrated!).",
    ],
  },
  reception: {
    vibe: "Glamour & Celebration",
    vibeDesc:
      "The Bangalore reception is an evening of celebration, music, and joy! Bring out your most glamorous, dazzling self—think bold colors, beautiful silhouettes, and party-ready elegance.",
    colors: [
      { color: "#C62828", label: "Red", border: "border-transparent" },
      { color: "#D81B60", label: "Pink", border: "border-transparent" },
      { color: "#D4A017", label: "Gold", border: "border-transparent" },
      { color: "#6A1B9A", label: "Purple", border: "border-transparent" },
      { color: "#9B1B30", label: "Maroon", border: "border-transparent" },
      { color: "#EF6C00", label: "Orange", border: "border-transparent" },
      { color: "#F9A825", label: "Turmeric", border: "border-transparent" },
      { color: "#1565C0", label: "Royal Blue", border: "border-transparent" },
    ],
    women: [
      {
        title: "Designer Drapes",
        tag: "Evening Glamour",
        illustration: "designer-saree",
        desc: "Rich silks, flowing chiffons, or designer drapes. This is your moment to shine with intricate embroidery, dazzling sequins, or bold, striking colors.",
      },
      {
        title: "Lehenga or Anarkali",
        tag: "Party Ready",
        illustration: "anarkali",
        desc: "A gorgeous sweeping lehenga or a majestic flowing anarkali in rich jewel tones—perfect for twirling on the dance floor!",
      },
      {
        title: "Evening Gown",
        tag: "Modern Chic",
        illustration: "cocktail-dress",
        desc: "A vibrant cocktail dress, sweeping gown, or chic evening jumpsuit. Go bold and celebratory for an unforgettable night.",
      },
    ],
    men: [
      {
        title: "Sherwani or Bandhgala",
        tag: "Majestic Statement",
        illustration: "sherwani",
        desc: "A majestic sherwani, bandhgala, or Nehru jacket in rich, deep tones like navy, midnight blue, or emerald makes a striking evening statement.",
      },
      {
        title: "Festive Kurta",
        tag: "Elevated Thread",
        illustration: "kurta-festive",
        desc: "An intricately embroidered or rich silk kurta in bold evening colors. Comfortable enough for dancing while still looking impeccably festive.",
      },
      {
        title: "Suit or Formals",
        tag: "Timelessly Sharp",
        illustration: "blazer",
        desc: "A well-tailored suit, a sharp blazer, or crisp formals. Elevate your look with a vibrant pocket square, a stylish tie, or a distinguished lapel pin.",
      },
    ],
    tips: [
      "Wear your most glamorous and festive outfit—shimmer and shine are highly encouraged!",
      "Bring out those striking statement jewelry pieces.",
      "Wear comfortable dancing shoes because the venue is waiting for your best moves!",
      "September evenings in Bangalore are pleasantly cool, making richer fabrics wonderfully comfortable.",
    ],
    avoid: [
      "Subdued, plain, or overly casual wear—tonight is a celebration, so dress the part!",
    ],
  },
};

export default function AttireContent() {
  const [event, setEvent] = useEventParam();
  const data = attireData[event];
  const isWedding = event === "wedding";

  return (
    <div className="pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <EventToggle selected={event} onChange={setEvent} />

        <AnimatePresence mode="wait">
          <motion.div
            key={event}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* ── Vibe + Colors ── two-column grid */}
            <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
              <div className="flex-1">
                <h2 className="font-display text-4xl sm:text-5xl text-maroon font-extrabold mb-4 tracking-tight">
                  {data.vibe}
                </h2>
                <p className="text-brown-light text-lg leading-relaxed max-w-xl">
                  {data.vibeDesc}
                </p>
              </div>
              <div className="md:w-[400px]">
                <h3 className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-brown/70 font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold/40"></span>
                  Colours That Work
                  <span className="flex-1 h-px bg-gold/10"></span>
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {data.colors.map((swatch, i) => (
                    <motion.div
                      key={swatch.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.05 + 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-[0_2px_8px_-3px_rgba(0,0,0,0.15)] ring-[3px] ring-ivory group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ${
                          swatch.label === "Ivory"
                            ? "border-2 border-gold/20"
                            : "border-0"
                        }`}
                        style={{ backgroundColor: swatch.color }}
                        title={swatch.label}
                      />
                      <p className="text-[10px] font-semibold tracking-[0.1em] text-brown-light/80 uppercase group-hover:text-maroon transition-colors">
                        {swatch.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Divider ── */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-16" />

            {/* ── Women ── image grid */}
            <div className="mb-24">
              <div className="flex flex-col items-center mb-14 text-center relative">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/10 to-transparent -z-10" />
                <div className="bg-ivory px-8 sm:px-12 flex flex-col items-center">
                  <h3 className="font-display text-4xl sm:text-5xl text-maroon font-extrabold tracking-tight">
                    For Her
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink/40 to-transparent mt-4 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                {data.women.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0 bg-maroon/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <AttireIllustration
                        type={item.illustration}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="flex flex-col gap-3 mb-3">
                      <span
                        className={`self-start text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full ${
                          isWedding
                            ? "bg-gold/10 text-gold-dark ring-1 ring-gold/20"
                            : "bg-pink/10 text-pink ring-1 ring-pink/20"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <h4 className="font-display font-medium text-brown-dark text-[28px] leading-none group-hover:text-maroon transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-brown-light/90 text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Men ── image grid */}
            <div className="mb-24">
              <div className="flex flex-col items-center mb-14 text-center relative">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent -z-10" />
                <div className="bg-ivory px-8 sm:px-12 flex flex-col items-center">
                  <h3 className="font-display text-4xl sm:text-5xl text-maroon font-extrabold tracking-tight">
                    For Him
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-4 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                {data.men.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0 bg-maroon/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <AttireIllustration
                        type={item.illustration}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="flex flex-col gap-3 mb-3">
                      <span
                        className={`self-start text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full ${
                          isWedding
                            ? "bg-gold/10 text-gold-dark ring-1 ring-gold/20"
                            : "bg-saffron/10 text-saffron ring-1 ring-saffron/20"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <h4 className="font-display font-medium text-brown-dark text-[28px] leading-none group-hover:text-maroon transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-brown-light/90 text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Divider ── */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-16" />

            {/* ── Tips & Avoid ── bordered grid boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/60 backdrop-blur-md border border-gold/20 rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700" />
                <h3 className="font-display text-3xl text-maroon font-bold mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check
                      className="w-5 h-5 text-gold-dark"
                      strokeWidth={2.5}
                    />
                  </div>
                  Helpful Tips
                </h3>
                <ul className="space-y-5">
                  {data.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-brown-light"
                    >
                      <Check
                        className="w-5 h-5 text-gold mt-0.5 shrink-0"
                        strokeWidth={2}
                      />
                      <span className="leading-relaxed text-[15px]">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/60 backdrop-blur-md border border-maroon/15 rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700" />
                <h3 className="font-display text-3xl text-maroon font-bold mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center">
                    <X className="w-5 h-5 text-maroon" strokeWidth={2.5} />
                  </div>
                  Please Avoid
                </h3>
                <ul className="space-y-5">
                  {data.avoid.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-brown-light"
                    >
                      <X
                        className="w-5 h-5 text-maroon/50 mt-0.5 shrink-0"
                        strokeWidth={2}
                      />
                      <span className="leading-relaxed text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* ── Closing note ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center py-12 relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <p className="font-display text-2xl text-maroon font-medium flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="w-12 h-px bg-maroon/20 hidden sm:block"></span>
                Most importantly — wear what makes you feel joyful and
                celebratory!
                <span className="w-12 h-px bg-maroon/20 hidden sm:block"></span>
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
