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
    location: "Shilpa Convention Center, Injakkadu, Kerala",
    date: "August 30, 2026",
    getting_there: [
      {
        title: "Fly into Trivandrum (TRV)",
        detail: "The closer airport — about 3 hours to the venue near Alleppey. Most convenient if coming from within India.",
        icon: "plane",
      },
      {
        title: "Fly into Cochin (COK)",
        detail: "About 1.5 hours from the venue with more domestic flight options. Good if Trivandrum connections are limited.",
        icon: "plane",
      },
      {
        title: "Pickups on August 29th",
        detail: "We'll arrange pickups from Trivandrum airport on Aug 29th. Share your flight details when you RSVP and we'll coordinate!",
        icon: "car",
      },
      {
        title: "Getting a Cab",
        detail: "Prepaid cabs available at both airports — head to the prepaid taxi counter on arrival. Uber/Ola may not work for outstation trips this far, so prepaid is your safest bet.",
        icon: "taxi",
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
          badgeColor: "bg-saffron",
          intro: "Kerala's grandest festival celebrates the homecoming of King Mahabali. Arrive early and experience the state at its most vibrant!",
          bgClass: "bg-saffron-wash",
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
            {
              title: "Pulikali — Tiger Dance",
              description: "In Thrissur, performers painted as vibrant tigers dance through the streets. The energy is infectious — uniquely Kerala!",
              image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&h=400&fit=crop",
            },
            {
              title: "Kathakali — Classical Dance Drama",
              description: "Elaborate costumes, vivid face paint, and expressive hand gestures tell ancient stories through one of India's oldest classical art forms.",
              image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&h=400&fit=crop",
            },
          ],
        },
        {
          heading: "Alleppey Backwaters",
          badge: "The \"Venice of the East\" — near the venue",
          badgeColor: "bg-gold-dark",
          intro: "Serene canals, lush paddy fields, and a pace of life that invites you to slow down. Whether before or after the wedding, the backwaters are magical.",
          bgClass: "bg-leaf",
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
            {
              title: "Village Life & Local Culture",
              description: "Cycle through quiet villages, watch coir-making and toddy-tapping, stop at tea shops. The backwater villages are like stepping into another world.",
              image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&h=400&fit=crop",
            },
            {
              title: "Ayurvedic Wellness",
              description: "Kerala is the birthplace of Ayurveda. Treat yourself to traditional massages, herbal baths, and rejuvenating therapies at resorts near Alleppey.",
              image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
            },
          ],
        },
      ],
    },
  },
  reception: {
    location: "V Legacy Marriage Hall, Aura Convention Center, Bangalore",
    date: "September 5, 2026",
    getting_there: [
      {
        title: "Fly into Bangalore (BLR)",
        detail: "Kempegowda International Airport has excellent domestic and international connectivity. The venue is in the city — about 1–1.5 hours from the airport depending on traffic.",
        icon: "plane",
      },
      {
        title: "Train to Bangalore",
        detail: "Bangalore City (SBC) and Yeshwantpur (YPR) are well-connected railway stations. The venue is easily accessible from either by cab.",
        icon: "taxi",
      },
      {
        title: "Cabs in Bangalore",
        detail: "Uber and Ola work great in Bangalore! You can also book auto-rickshaws through the apps. Traffic can be heavy, so plan extra time.",
        icon: "car",
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
          bgClass: "bg-leaf",
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
          bgClass: "bg-saffron-wash",
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
  return Icon ? <Icon className="w-6 h-6" /> : null;
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
          {/* Venue banner */}
          <section className="px-4 sm:px-6 lg:px-8 mb-8">
            <div className="mx-auto max-w-5xl">
              <div className={`text-center py-5 px-6 rounded-2xl border-2 ${
                isWedding
                  ? "bg-gradient-to-r from-maroon/5 via-saffron/5 to-maroon/5 border-maroon/15"
                  : "bg-gradient-to-r from-gold/5 via-saffron/5 to-gold/5 border-gold/15"
              }`}>
                <p className={`font-bold text-sm ${isWedding ? "text-maroon" : "text-gold-dark"}`}>
                  {data.location}
                </p>
                <p className="text-brown-light text-xs mt-1">{data.date}</p>
              </div>
            </div>
          </section>

          {/* Getting There */}
          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto max-w-5xl">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isWedding ? "bg-saffron/20 text-saffron" : "bg-gold/20 text-gold-dark"
                }`}>
                  <Plane className="w-5 h-5" strokeWidth={2} />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-maroon font-bold">
                  Getting There
                </h2>
              </div>

              <div className={`grid grid-cols-1 ${data.getting_there.length > 3 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-5`}>
                {data.getting_there.map((info, i) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`bg-white rounded-2xl border-2 p-6 hover:shadow-md transition-all ${
                      isWedding ? "border-saffron/10 hover:border-saffron/30" : "border-gold/10 hover:border-gold/30"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                      isWedding ? "bg-saffron/15 text-saffron" : "bg-gold/15 text-gold-dark"
                    }`}>
                      <IconForType type={info.icon} />
                    </div>
                    <h3 className="font-semibold text-brown text-lg mb-2">{info.title}</h3>
                    <p className="text-brown-light text-sm leading-relaxed">{info.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* International */}
          <section className={`px-4 sm:px-6 lg:px-8 py-10 ${
            isWedding ? "bg-gradient-to-r from-gold/5 via-saffron/5 to-gold/5" : "bg-gradient-to-r from-saffron/5 via-gold/5 to-saffron/5"
          }`}>
            <div className="mx-auto max-w-5xl">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isWedding ? "bg-gold/20 text-gold-dark" : "bg-saffron/20 text-saffron"
                }`}>
                  <Globe className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-maroon font-bold">
                  {isWedding ? "International Guests" : "Flying In?"}
                </h2>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-${data.international.length} gap-5`}>
                {data.international.map((tip, i) => (
                  <motion.div
                    key={tip.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`bg-white rounded-2xl border-2 p-6 ${
                      isWedding ? "border-gold/10" : "border-saffron/10"
                    }`}
                  >
                    <h3 className={`font-semibold text-lg mb-2 ${isWedding ? "text-gold-dark" : "text-saffron"}`}>
                      {tip.title}
                    </h3>
                    <p className="text-brown-light text-sm leading-relaxed">{tip.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Accommodation */}
          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-r from-turmeric/20 via-saffron/10 to-gold/20 rounded-2xl p-8 sm:p-10 border-2 border-gold/20 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Hotel className="w-7 h-7 text-gold-dark" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-maroon font-bold mb-3">
                  {data.accommodation.title}
                </h3>
                <p className="text-brown-light max-w-lg mx-auto leading-relaxed">
                  {data.accommodation.detail}
                </p>
                <Link
                  href="/#rsvp"
                  className="inline-block mt-6 bg-maroon text-white px-8 py-3 rounded-full font-semibold hover:bg-maroon-dark transition-colors"
                >
                  RSVP Now
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Divider */}
          <div className="mx-auto max-w-5xl px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>

          {/* Explore sections */}
          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto max-w-5xl text-center mb-8">
              <h2 className="font-display text-3xl sm:text-5xl text-maroon font-bold mb-2">
                {data.explore.title}
              </h2>
              <p className="text-brown-light max-w-xl mx-auto">{data.explore.subtitle}</p>
            </div>
          </section>

          {data.explore.sections.map((section, si) => (
            <section key={si} className={`px-4 sm:px-6 lg:px-8 py-14 ${section.bgClass}`}>
              <div className="mx-auto max-w-5xl">
                <div className="text-center mb-10">
                  <div className={`inline-block ${section.badgeColor} text-white text-xs tracking-wider uppercase px-4 py-1.5 rounded-full font-medium mb-4`}>
                    {section.badge}
                  </div>
                  <h3 className="font-display text-2xl sm:text-4xl text-maroon font-bold mb-3">
                    {section.heading}
                  </h3>
                  <p className="text-brown-light max-w-xl mx-auto">{section.intro}</p>
                </div>

                <div className="space-y-6">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gold/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                        <div className="md:w-72 h-48 md:h-auto relative shrink-0 bg-brown/5">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 288px"
                          />
                        </div>
                        <div className="p-6 sm:p-8 flex-1">
                          <h4 className="font-display text-xl sm:text-2xl text-maroon font-bold mb-2">
                            {item.title}
                          </h4>
                          <p className="text-brown-light leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
