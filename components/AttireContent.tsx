"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventToggle, { EventType } from "./ui/EventToggle";
import AttireIllustration from "./ui/AttireIllustrations";
import { Sparkles, UserRound } from "lucide-react";

const attireData = {
  wedding: {
    vibe: "Traditional & Sacred",
    vibeDesc: "The Kerala wedding ceremony is deeply traditional. Think elegant, modest, and rooted in South Indian heritage.",
    colors: [
      { color: "#FFFFF0", label: "Ivory", border: "border-gold/40" },
      { color: "#D4A017", label: "Gold", border: "" },
      { color: "#C62828", label: "Red", border: "" },
      { color: "#9B1B30", label: "Maroon", border: "" },
      { color: "#EF6C00", label: "Orange", border: "" },
      { color: "#F9A825", label: "Turmeric", border: "" },
    ],
    women: [
      {
        title: "Saree",
        tag: "Top Pick",
        illustration: "kanjivaram-saree",
        desc: "Any saree works beautifully — silk, chiffon, cotton, you name it. Kanjivaram and other silk sarees with gold borders are very common at South Indian weddings, but really any saree in festive colours is perfect.",
      },
      {
        title: "Kasavu Saree",
        tag: "Kerala Traditional",
        illustration: "kasavu-saree",
        desc: "The quintessential Kerala look — a white or cream saree with a golden border. Elegant, timeless, and stunning. Perfect if you want to match the local vibe.",
      },
      {
        title: "Any Traditional Attire",
        tag: "Great Alternative",
        illustration: "lehenga",
        desc: "Lehenga, salwar kameez, churidar, anarkali — any traditional Indian outfit in festive colours works beautifully. Keep it modest — shoulders covered during the ceremony rituals.",
      },
    ],
    men: [
      {
        title: "Mundu / Veshti & Shirt",
        tag: "Kerala Classic",
        illustration: "mundu",
        desc: "A white or gold-bordered mundu paired with a shirt — solid colours or prints, both work. This is THE Kerala wedding look. You'll look dashing and fit right in — seriously, try it!",
      },
      {
        title: "Kurta Pajama or Any Ethnic Wear",
        tag: "Comfortable & Traditional",
        illustration: "kurta",
        desc: "A silk or cotton kurta with pajama, churidar, or any ethnic wear you're comfortable in. Any colour works. The easy-going option that still looks fantastic.",
      },
      {
        title: "Formal Shirt & Trousers",
        tag: "Works Too",
        illustration: "formal-shirt",
        desc: "Let's be real — men can wear whatever and get away with it. A well-pressed shirt and trousers in light colours is perfectly fine. No stress!",
      },
    ],
    tips: [
      "Cover shoulders during the ceremony — it's a sacred ritual",
      "You may need to remove footwear, so wear something easy to slip off",
      "Gold jewelry is the perfect companion — go for it!",
      "Light, breathable fabrics are your friend in Kerala's August weather",
    ],
    avoid: ["All-black outfits (associated with mourning)", "Plain white without any embellishment (can signal mourning in some traditions — but a gold-bordered Kasavu is perfect!)"],
  },
  reception: {
    vibe: "Glamorous & Festive",
    vibeDesc: "The Bangalore reception is a party! This is your chance to go all out — sparkle, colour, and celebration.",
    colors: [
      { color: "#C62828", label: "Red", border: "" },
      { color: "#D81B60", label: "Pink", border: "" },
      { color: "#D4A017", label: "Gold", border: "" },
      { color: "#6A1B9A", label: "Purple", border: "" },
      { color: "#9B1B30", label: "Maroon", border: "" },
      { color: "#EF6C00", label: "Orange", border: "" },
      { color: "#F9A825", label: "Turmeric", border: "" },
      { color: "#1565C0", label: "Royal Blue", border: "" },
    ],
    women: [
      {
        title: "Designer Saree or Silk Saree",
        tag: "Go Glam",
        illustration: "designer-saree",
        desc: "Rich silk sarees, chiffon sarees, or designer drapes in bold colours. This is the time to bring out the showstoppers — sequins, embroidery, and all the sparkle.",
      },
      {
        title: "Lehenga or Anarkali",
        tag: "Party Ready",
        illustration: "anarkali",
        desc: "A gorgeous lehenga or flowing anarkali in jewel tones — perfect for the dance floor and photos. Think ruby, magenta, royal blue.",
      },
      {
        title: "Cocktail Dress or Gown",
        tag: "Western Chic",
        illustration: "cocktail-dress",
        desc: "A colourful cocktail dress, maxi gown, or jumpsuit works beautifully. Go bold with colour — this is a celebration! Avoid subdued or muted tones.",
      },
    ],
    men: [
      {
        title: "Sherwani or Bandhgala",
        tag: "Grand Look",
        illustration: "sherwani",
        desc: "A sherwani or Nehru jacket in rich tones — maroon, navy, gold — makes a grand statement. Perfect for photos and the dance floor.",
      },
      {
        title: "Festive Kurta",
        tag: "Classic Indian",
        illustration: "kurta-festive",
        desc: "An embroidered or silk kurta in bold colours. Pair with churidar or pajama — comfortable and looks great. The versatile option.",
      },
      {
        title: "Blazer, Suit, or Formals",
        tag: "Always Works",
        illustration: "blazer",
        desc: "A blazer, a suit, or even a sharp shirt and trousers — men have it easy. Dress it up with a colourful pocket square or tie and you're golden.",
      },
    ],
    tips: [
      "Go all out — this is the time for your most festive outfit!",
      "Statement jewelry and bold accessories are encouraged",
      "Wear comfortable shoes — there will be dancing!",
      "Bangalore weather in September is pleasant, so heavier fabrics work fine",
    ],
    avoid: ["All-black outfits (bright colours are encouraged for festive occasions)", "Very casual wear — jeans, t-shirts, sneakers"],
  },
};

export default function AttireContent() {
  const [event, setEvent] = useState<EventType>("wedding");
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
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 mb-14 items-start">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl text-maroon font-bold mb-2">
                  {data.vibe}
                </h2>
                <p className="text-brown-light text-sm leading-relaxed">{data.vibeDesc}</p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-brown-light font-medium mb-4">
                  Colours That Work
                </h3>
                <div className="flex flex-wrap gap-4">
                  {data.colors.map((swatch, i) => (
                    <motion.div
                      key={swatch.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="text-center"
                    >
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-sm ring-4 ring-white ${swatch.border}`}
                        style={{ backgroundColor: swatch.color }}
                      />
                      <p className="text-xs font-medium text-brown mt-2">{swatch.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Divider ── */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-14" />

            {/* ── Women ── image grid */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-5 h-5 text-pink" strokeWidth={1.5} />
                <h3 className="font-display text-3xl text-maroon font-bold">Women</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {data.women.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden mb-3">
                      <AttireIllustration type={item.illustration} className="w-full h-full" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h4 className="font-bold text-brown text-lg">{item.title}</h4>
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                        isWedding ? "bg-gold/15 text-gold-dark" : "bg-pink/15 text-pink"
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-brown-light text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Men ── image grid */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <UserRound className="w-5 h-5 text-gold-dark" strokeWidth={1.5} />
                <h3 className="font-display text-3xl text-maroon font-bold">Men</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {data.men.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden mb-3">
                      <AttireIllustration type={item.illustration} className="w-full h-full" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h4 className="font-bold text-brown text-lg">{item.title}</h4>
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                        isWedding ? "bg-gold/15 text-gold-dark" : "bg-saffron/15 text-saffron"
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-brown-light text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Divider ── */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />

            {/* ── Tips & Avoid ── bordered grid boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="border border-gold/15 rounded-lg p-6">
                <h3 className="font-display text-xl text-maroon font-bold mb-4 flex items-center gap-2">
                  <span className="text-gold-dark">&#10003;</span> Tips
                </h3>
                <ul className="space-y-3">
                  {data.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brown-light">
                      <span className="text-gold mt-0.5 shrink-0">&#9753;</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-maroon/10 rounded-lg p-6">
                <h3 className="font-display text-xl text-maroon font-bold mb-4 flex items-center gap-2">
                  <span className="text-maroon">&#10007;</span> Please Avoid
                </h3>
                <ul className="space-y-3">
                  {data.avoid.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brown-light">
                      <span className="text-maroon mt-0.5 shrink-0">&#10007;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Closing note ── */}
            <div className="text-center py-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />
              <p className="text-saffron font-bold text-base">
                Most importantly — wear something that makes you feel joyful and celebratory!
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
