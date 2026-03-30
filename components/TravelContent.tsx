"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import EventToggle, { EventType } from "./ui/EventToggle";
import { Plane, Car, MapPin, Globe, Hotel } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const travelData = {
  wedding: {
    location: "Shilpa Convention Center",
    address: "Injakkadu, Kerala",
    date: "August 30, 2026",
    airports: [
      {
        title: "Trivandrum International (TRV)",
        detail: "About 3 hours to the venue. Most convenient if coming from within India.",
        icon: "plane",
      },
      {
        title: "Cochin International (COK)",
        detail: "About 1.5 hours from the venue with more domestic flight options.",
        icon: "plane",
      },
    ],
    transport: [
      {
        title: "Pickups on August 29th",
        detail: "We'll arrange pickups from Trivandrum airport on Aug 29th. Share your flight details when you RSVP and we'll coordinate!",
      },
      {
        title: "Getting a Cab",
        detail: "Prepaid cabs available at both airports — head to the prepaid taxi counter on arrival. Uber/Ola may not work for outstation trips this far, so prepaid is your safest bet.",
      },
    ],
    international: [
      {
        title: "Save on flights",
        detail: "Roundtrip flights to Bangalore (BLR) or Mumbai (BOM) are often significantly cheaper than flying directly to Trivandrum. Connect with a quick 1–1.5 hour domestic flight.",
      },
      {
        title: "Route through Bangalore",
        detail: "If you fly into Bangalore, you could explore the city first and attend the reception on Sep 5 before/after heading to Kerala!",
      },
      {
        title: "Mumbai connections",
        detail: "Mumbai has many daily flights to Trivandrum and is often the cheapest international entry point to India.",
      },
    ],
    accommodation: {
      title: "Accommodation",
      detail: "Stay for the wedding day is planned by us — just mark that you need it when you RSVP. If you're staying longer and have your own travel plans, feel free to DM us for suggestions on where to stay!",
    },
    explore: {
      title: "Explore Kerala",
      subtitle: "The wedding is near Alleppey — God's Own Country has so much to offer if you arrive early or stay late!",
      sections: [
        {
          heading: "Onam Festival",
          badge: "August 16–26, 2026 — Right before the wedding!",
          badgeColor: "bg-maroon",
          intro: "Kerala's grandest festival celebrates the homecoming of King Mahabali. Arrive early and experience the state at its most vibrant!",
          items: [
            {
              title: "Vallam Kali — Snake Boat Races",
              description: "The legendary Nehru Trophy Boat Race in Alleppey features massive snake boats crewed by 100+ rowers, racing through the backwaters. One of Kerala's most thrilling spectacles!",
              image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
            },
            {
              title: "Onam Sadya — The Grand Feast",
              description: "A spectacular vegetarian feast with 20–30 dishes served on a banana leaf. From avial to payasam, every dish celebrates Kerala's culinary heritage. An absolute must!",
              image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=400&fit=crop",
            },
            {
              title: "Pookalam — Floral Carpets",
              description: "Every doorstep comes alive with intricate flower arrangements, growing more elaborate each day until the grand Thiruvonam day.",
              image: "https://images.unsplash.com/photo-1598887142487-3c854d51eabb?w=600&h=400&fit=crop",
            },
          ],
        },
        {
          heading: "Alleppey Backwaters",
          badge: "The \"Venice of the East\" — near the venue",
          badgeColor: "bg-gold-dark",
          intro: "Serene canals, lush paddy fields, and a pace of life that invites you to slow down. Whether before or after the wedding, the backwaters are magical.",
          items: [
            {
              title: "Houseboat Cruise (Kettuvallam)",
              description: "Float through palm-fringed canals on a traditional rice barge with bedrooms, a kitchen, and an open deck. The most magical way to see the backwaters.",
              image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&h=400&fit=crop",
            },
            {
              title: "Shikara Boat Rides",
              description: "Smaller boats with thatched roofs — Kerala's gondola. Perfect for a peaceful morning drifting through narrow canals and watching village life unfold.",
              image: "https://images.unsplash.com/photo-1609340667284-1f4a2e55b7a0?w=600&h=400&fit=crop",
            },
            {
              title: "Kayaking through the Canals",
              description: "Paddle through narrow waterways past coconut groves and paddy fields for an intimate, up-close backwater experience.",
              image: "https://images.unsplash.com/photo-1545042679-40a1e618b1e4?w=600&h=400&fit=crop",
            },
          ],
        },
      ],
    },
  },
  reception: {
    location: "V Legacy Marriage Hall",
    address: "Aura Convention Center, Bangalore",
    date: "September 5, 2026",
    airports: [
      {
        title: "Kempegowda International (BLR)",
        detail: "Excellent domestic and international connectivity. About 1–1.5 hours from the venue depending on traffic.",
        icon: "plane",
      },
      {
        title: "Bangalore City Station (SBC)",
        detail: "Well-connected railway station. The venue is easily accessible by cab.",
        icon: "taxi",
      },
      {
        title: "Yeshwantpur Station (YPR)",
        detail: "Another well-connected railway station. The venue is easily accessible from here by cab.",
        icon: "taxi",
      },
    ],
    transport: [
      {
        title: "Cabs in Bangalore",
        detail: "Uber and Ola work great in Bangalore! You can also book auto-rickshaws through the apps. Traffic can be heavy, so plan extra time.",
      },
    ],
    international: [
      {
        title: "Direct international flights",
        detail: "Bangalore (BLR) has direct flights from many international destinations — Dubai, Singapore, London, San Francisco, and more. Often the cheapest entry point!",
      },
      {
        title: "Attending both events?",
        detail: "If you're coming from the Kerala wedding, Trivandrum to Bangalore is a quick 1–1.5 hour flight with many daily options. Or take the scenic 12-hour train!",
      },
    ],
    accommodation: {
      title: "Accommodation",
      detail: "Stay for the reception day is planned by us — just mark that you need it when you RSVP. If you're staying longer and have your own travel plans, feel free to DM us for suggestions on where to stay!",
    },
    explore: {
      title: "Explore Bangalore",
      subtitle: "India's tech capital is also a city of parks, palaces, and incredible food. Here's what to check out!",
      sections: [
        {
          heading: "Must-See Bangalore",
          badge: "India's Garden City",
          badgeColor: "bg-gold-dark",
          intro: "Bangalore blends old-world charm with modern energy. Pleasant weather year-round, amazing food scene, and a vibrant culture.",
          items: [
            {
              title: "Lalbagh Botanical Garden",
              description: "A 240-acre garden with a stunning glass house, ancient trees, and a peaceful lake. Perfect for a morning walk and one of Bangalore's most iconic spots.",
              image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&h=400&fit=crop",
            },
            {
              title: "Bangalore Palace",
              description: "A Tudor-style palace inspired by England's Windsor Castle, with ornate interiors, sprawling grounds, and a fascinating history of the Wodeyar dynasty.",
              image: "https://images.unsplash.com/photo-1600005082646-77e56c3a4e09?w=600&h=400&fit=crop",
            },
            {
              title: "Street Food & Craft Beer",
              description: "From VV Puram Food Street's dosas and chaats to Bangalore's legendary craft beer scene — the city is a food lover's paradise. Don't miss the filter coffee!",
              image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600&h=400&fit=crop",
            },
            {
              title: "Nandi Hills",
              description: "A stunning hilltop just 60km from the city. Go for sunrise and you'll be rewarded with breathtaking views above the clouds. Best experienced early morning!",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
            },
          ],
        },
        {
          heading: "Shopping & Culture",
          badge: "Retail Therapy",
          badgeColor: "bg-saffron",
          intro: "Bangalore is great for shopping — from traditional silk sarees to modern boutiques.",
          items: [
            {
              title: "Commercial Street & MG Road",
              description: "The heart of Bangalore shopping. Find everything from silk sarees and jewelry to trendy fashion. Bargaining is expected at street shops!",
              image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600&h=400&fit=crop",
            },
            {
              title: "Cauvery Emporium",
              description: "Government-run handicrafts store with authentic Mysore silk sarees, sandalwood items, rosewood crafts, and South Indian souvenirs at fixed prices.",
              image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=400&fit=crop",
            },
          ],
        },
      ],
    },
  },
};

/* ------------------------------------------------------------------ */
/*  ICONS                                                              */
/* ------------------------------------------------------------------ */

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  plane: (props) => <Plane {...props} strokeWidth={1.5} />,
  car: (props) => <Car {...props} strokeWidth={1.5} />,
  taxi: (props) => <MapPin {...props} strokeWidth={1.5} />,
};

function IconForType({ type }: { type: string }) {
  const Icon = iconMap[type];
  return Icon ? <Icon className="w-5 h-5" /> : null;
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function TravelContent() {
  const [event, setEvent] = useState<EventType>("wedding");
  const data = travelData[event];
  const isWedding = event === "wedding";

  return (
    <div className="pb-16">
      <div className="px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mx-auto max-w-5xl">
          <EventToggle selected={event} onChange={setEvent} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={event}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* ── Venue + Info Grid ── */}
          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-start">
                {/* Left: venue details */}
                <div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                    isWedding ? "bg-maroon/10" : "bg-gold/15"
                  }`}>
                    <MapPin className={`w-5 h-5 ${isWedding ? "text-maroon" : "text-gold-dark"}`} strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-maroon font-bold">
                    {data.location}
                  </h2>
                  <p className="text-brown-light mt-1 text-sm">{data.address}</p>
                  <p className="text-brown-light mt-3 text-xs tracking-[0.15em] uppercase font-medium">
                    {data.date}
                  </p>
                </div>

                {/* Right: airports/stations list */}
                <div className="space-y-0">
                  {data.airports.map((a, i) => (
                    <div
                      key={a.title}
                      className={`flex items-start gap-4 py-4 ${
                        i < data.airports.length - 1 ? "border-b border-gold/10" : ""
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isWedding ? "bg-gold/10 text-gold-dark" : "bg-maroon/10 text-maroon"
                      }`}>
                        <IconForType type={a.icon} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brown">{a.title}</h3>
                        <p className="text-brown-light text-sm leading-relaxed mt-0.5">{a.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Local Transport ── bordered grid boxes */}
          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-display text-2xl sm:text-3xl text-maroon font-bold mb-6">
                Local Transport
              </h2>
              <div className={`grid grid-cols-1 ${data.transport.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-xl"} gap-6`}>
                {data.transport.map((t, i) => (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="border border-gold/15 rounded-lg p-6"
                  >
                    <h3 className="font-semibold text-brown mb-2">{t.title}</h3>
                    <p className="text-brown-light text-sm leading-relaxed">{t.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── International Guests ── bordered grid boxes */}
          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto max-w-5xl">
              <div className="flex items-center gap-3 mb-6">
                <Globe className={`w-5 h-5 ${isWedding ? "text-gold-dark" : "text-maroon"}`} strokeWidth={1.5} />
                <h2 className="font-display text-2xl sm:text-3xl text-maroon font-bold">
                  {isWedding ? "International Guests" : "Flying In?"}
                </h2>
              </div>
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-6`}>
                {data.international.map((tip, i) => (
                  <motion.div
                    key={tip.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="border border-gold/15 rounded-lg p-6"
                  >
                    <h3 className={`font-semibold mb-2 ${isWedding ? "text-gold-dark" : "text-maroon"}`}>
                      {tip.title}
                    </h3>
                    <p className="text-brown-light text-sm leading-relaxed">{tip.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Accommodation ── */}
          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Hotel className="w-6 h-6 text-gold-dark" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-maroon font-bold mb-2">
                    {data.accommodation.title}
                  </h2>
                  <p className="text-brown-light leading-relaxed max-w-2xl">
                    {data.accommodation.detail}
                  </p>
                  <Link
                    href="/#rsvp"
                    className="inline-block mt-5 bg-maroon text-white px-8 py-3 rounded-full font-semibold hover:bg-maroon-dark transition-colors text-sm tracking-wide"
                  >
                    RSVP Now
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── Divider ── */}
          <div className="mx-auto max-w-5xl px-4 py-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>

          {/* ── Explore Header ── */}
          <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-2">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-display text-3xl sm:text-5xl text-maroon font-bold mb-2">
                {data.explore.title}
              </h2>
              <p className="text-brown-light max-w-xl">{data.explore.subtitle}</p>
            </div>
          </section>

          {/* ── Explore Sections ── image grid */}
          {data.explore.sections.map((section, si) => (
            <section key={si} className="px-4 sm:px-6 lg:px-8 py-10">
              <div className="mx-auto max-w-5xl">
                <div className="mb-8">
                  <span className={`inline-block ${section.badgeColor} text-white text-xs tracking-wider uppercase px-4 py-1.5 rounded-full font-medium mb-3`}>
                    {section.badge}
                  </span>
                  <h3 className="font-display text-2xl sm:text-4xl text-maroon font-bold mb-2">
                    {section.heading}
                  </h3>
                  <p className="text-brown-light max-w-xl">{section.intro}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden mb-3">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <h4 className="font-display text-lg text-maroon font-bold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-brown-light text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>

                {si < data.explore.sections.length - 1 && (
                  <div className="mt-12">
                    <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                  </div>
                )}
              </div>
            </section>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
