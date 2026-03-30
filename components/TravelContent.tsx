"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import EventToggle from "./ui/EventToggle";
import { useEventParam } from "@/lib/useEventParam";
import {
  Plane,
  Car,
  MapPin,
  Globe,
  Hotel,
  ExternalLink,
  Train,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const travelData = {
  wedding: {
    location: "Shilpa Convention Center",
    address: "Injakkadu, Kerala",
    date: "August 30, 2026",
    mapQuery: "Shilpa+Convention+Center+Injakkadu+Kerala",
    venueImage: "/images/shilpa.jpg",
    airports: [
      {
        title: "Cochin International (COK)",
        detail:
          "About 1.5 hours from the venue. This is the closest airport with excellent domestic and international connectivity.",
        icon: "plane",
      },
      {
        title: "Trivandrum International (TRV)",
        detail:
          "About 3 hours to the venue. A scenic drive up the coast, great if you want to explore southern Kerala first.",
        icon: "plane",
      },
      {
        title: "Chengannur Railway (CNGR)",
        detail:
          "The closest major railway station. Around 45 minutes away by taxi.",
        icon: "train",
      },
    ],
    transport: [
      {
        title: "Pickups on August 29th",
        detail:
          "We'll arrange pickups from Trivandrum airport on Aug 29th. Share your flight details when you RSVP and we'll coordinate!",
      },
      {
        title: "Getting a Cab",
        detail:
          "Prepaid cabs available at both airports — head to the prepaid taxi counter on arrival. Uber/Ola may not work for outstation trips this far, so prepaid is your safest bet.",
      },
    ],
    international: [
      {
        title: "Save on flights",
        detail:
          "Roundtrip flights to Bangalore (BLR) or Mumbai (BOM) are often significantly cheaper than flying directly to Trivandrum. Connect with a quick 1–1.5 hour domestic flight.",
      },
      {
        title: "Route through Bangalore",
        detail:
          "If you fly into Bangalore, you could explore the city first and attend the reception on Sep 5 before/after heading to Kerala!",
      },
      {
        title: "Mumbai connections",
        detail:
          "Mumbai has many daily flights to Trivandrum and is often the cheapest international entry point to India.",
      },
    ],
    accommodation: {
      title: "Accommodation",
      detail:
        "Stay for the wedding day is planned by us — just mark that you need it when you RSVP. If you're staying longer and have your own travel plans, feel free to DM us for suggestions on where to stay!",
    },
    explore: {
      title: "Explore Kerala",
      subtitle:
        "The wedding is near Alleppey — God's Own Country has so much to offer if you arrive early or stay late!",
      sections: [
        {
          heading: "Onam Festival",
          badge: "August 16–26, 2026 — Right before the wedding!",
          badgeColor: "bg-maroon",
          intro:
            "Kerala's grandest festival celebrates the homecoming of King Mahabali. Arrive early and experience the state at its most vibrant!",
          items: [
            {
              title: "Vallam Kali — Snake Boat Races",
              description:
                "The famed Nehru Trophy Boat Race takes over the backwaters of Alleppey. Witness the rhythmic chant and sheer power of 100+ rowers navigating massive traditional boats—an adrenaline-filled spectacle uniquely Kerala.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/4/4f/Kerala_boatrace.jpg",
            },
            {
              title: "Onam Sadya — The Grand Feast",
              description:
                "Prepare for a culinary journey! Sadya is a spectacular vegetarian feast featuring over 20 traditional dishes served on a fresh plantain leaf. An absolute must-experience expression of Kerala's heritage.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/9/95/Sadhya_DSW.jpg",
            },
            {
              title: "Pookalam — Floral Carpets",
              description:
                "Every doorstep comes alive with intricate, brilliant flower arrangements. These designs grow more elaborate each day leading to Thiruvonam, capturing the vibrant communal spirit of the festival.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/8/87/Onapookkalam.jpg",
            },
          ],
        },
        {
          heading: "Alleppey Backwaters",
          badge: 'The "Venice of the East" — near the venue',
          badgeColor: "bg-gold-dark",
          intro:
            "Serene canals, lush paddy fields, and a pace of life that invites you to slow down. Whether before or after the wedding, the backwaters are magical.",
          items: [
            {
              title: "Houseboat Cruise (Kettuvallam)",
              description:
                "Float through palm-fringed canals on a traditional rice barge. Equipped with modern comforts, this is a slow, magical way to watch village life unfold on the banks.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/1/1e/Alleppey_Boat_houses.jpg",
            },
            {
              title: "Shikara Boat Rides",
              description:
                "Smaller Shikara boats with thatched roofs allow you to enter the narrower, peaceful canals of Alleppey. A perfect choice for a stunning morning or a breathtaking sunset ride.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
            },
            {
              title: "Canoeing & Village Walks",
              description:
                "Paddle through the serene, winding waterways past verdant paddy fields and coconut groves. It's the most intimate, up-close way to experience the tranquil backwater ecosystem.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/c/c2/Alleppey_canal.jpg",
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
    mapQuery: "V+Legacy+Marriage+Hall+Aura+Convention+Center+Bangalore",
    venueImage: "/images/v-legacy.jpg",
    airports: [
      {
        title: "Kempegowda International (BLR)",
        detail:
          "Excellent domestic and international connectivity. About 1–1.5 hours from the venue depending on traffic.",
        icon: "plane",
      },
      {
        title: "Bangalore City Station (SBC)",
        detail:
          "Well-connected railway station. The venue is easily accessible by cab.",
        icon: "train",
      },
      {
        title: "Yeshwantpur Station (YPR)",
        detail:
          "Another well-connected railway station. The venue is easily accessible from here by cab.",
        icon: "train",
      },
    ],
    transport: [
      {
        title: "Cabs in Bangalore",
        detail:
          "Uber and Ola work great in Bangalore! You can also book auto-rickshaws through the apps. Traffic can be heavy, so plan extra time.",
      },
    ],
    international: [
      {
        title: "Direct international flights",
        detail:
          "Bangalore (BLR) has direct flights from many international destinations — Dubai, Singapore, London, San Francisco, and more. Often the cheapest entry point!",
      },
      {
        title: "Attending both events?",
        detail:
          "If you're coming from the Kerala wedding, Trivandrum to Bangalore is a quick 1–1.5 hour flight with many daily options. Or take the scenic 12-hour train!",
      },
    ],
    accommodation: {
      title: "Accommodation",
      detail:
        "Stay for the reception day is planned by us — just mark that you need it when you RSVP. If you're staying longer and have your own travel plans, feel free to DM us for suggestions on where to stay!",
    },
    explore: {
      title: "Experience Bangalore",
      subtitle:
        "India's pub and tech capital! Dive into vibrant neighborhoods, legendary food trails, aesthetic spaces, and massive microbreweries.",
      sections: [
        {
          heading: "City Strolls & Aesthetics",
          badge: "Morning to Afternoon",
          badgeColor: "bg-gold-dark",
          intro:
            "Discover the artistic, walkable, and unapologetically green side of Bangalore.",
          items: [
            {
              title: "Cubbon Park & The Red Library",
              description:
                "Skip Lalbagh and head to Cubbon Park on a weekend morning. It is a massive, dog-friendly green haven right in the city center. Don't miss a photo-op at the strikingly beautiful, bright red State Central Library.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/4/40/Bangalore_City_Central_Library.jpg",
            },
            {
              title: "Church Street Charms",
              description:
                "A bustling, gorgeous pedestrian-friendly street packed with street art, cozy cafes, and the legendary Blossom Book House—a paradise for book lovers. Perfect for an afternoon stroll.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/d/d7/Church_Street_in_night%2C_Bangalore_%282022%29.jpg",
            },
            {
              title: "National Gallery of Modern Art",
              description:
                "Retreat into the serene, aesthetic grounds of the NGMA. Set in a restored heritage mansion surrounded by magnificent trees and a reflection pool, it offers brilliant art exhibitions and a highly aesthetic outdoor cafe.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/a/a1/National_Gallery_of_Modern_Art_-_NGMA_-_Bangalore_6645.JPG",
            },
          ],
        },
        {
          heading: "Food, Brews & Nightlife",
          badge: "The Real Bangalore",
          badgeColor: "bg-saffron",
          intro:
            "Bangalore is synonymous with world-class craft beer and incredibly addictive local food.",
          items: [
            {
              title: "The Legendary Dosa Trail",
              description:
                "Forget generic breakfasts. Hunt down the thick, ghee-drenched Benne Masala Dosa at CTR (Malleswaram) or join the high-energy crowd at Rameshwaram Cafe. Pair it with the ultimate filter coffee in a steel tumbler.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/9/96/Masala_Dosa_at_MTR_Restaurant%2C_Indiaranagar%2C_Bangalore%2C_Karnatak.jpg",
            },
            {
              title: "Microbreweries in Indiranagar",
              description:
                "Bangalore is India's craft beer capital. Head to Indiranagar or Koramangala and visit lush open-air breweries like Toit or Windmills. Grab a beer flight to taste everything from Mango Ales to rich Stouts.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/9/90/Beer_Flight.jpg",
            },
            {
              title: "Rooftops at UB City",
              description:
                "For a glamorous night out, visit UB City. India's first luxury mall features striking modern architecture and hosts some of the best high-end rooftop lounges and pan-Asian dining experiences in the city.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/3/3e/UB_City_towers%2C_Bangalore_%282025%29.jpg",
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
  train: (props) => <Train {...props} strokeWidth={1.5} />,
};

function IconForType({ type }: { type: string }) {
  const Icon = iconMap[type];
  return Icon ? <Icon className="w-5 h-5" /> : null;
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function TravelContent() {
  const [event, setEvent] = useEventParam();
  const data = travelData[event];
  const isWedding = event === "wedding";

  return (
    <div className="pb-16 relative">
      <div className="px-4 sm:px-6 lg:px-8 pt-4 relative z-10">
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
          className="relative z-10"
        >
          {/* ── Logistics Bento Grid ── */}
          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto max-w-5xl space-y-6">
              {/* Top Row: Venue & Airports */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Venue Details */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="lg:col-span-2 relative overflow-hidden backdrop-blur-sm border border-gold/20 rounded-3xl p-8 flex flex-col justify-between group hover:shadow-lg hover:border-gold/40 transition-all duration-300"
                >
                  <Image
                    src={data.venueImage}
                    alt={data.location}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 object-right sm:object-center"
                  />
                  {/* Subtle blend and protective gradients so text is perfectly legible, but the beautiful image is clear on the right */}
                  <div className="absolute inset-0 bg-ivory/20 backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-[1px] z-0" />
                  <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/95 to-transparent sm:pr-[20%] z-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/70 to-transparent sm:hidden z-0" />

                  <div className="relative z-10 h-full flex flex-col justify-between w-full sm:w-2/3 lg:w-3/4 pr-4">
                    <div>
                      <div
                        className={`w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-sm ${
                          isWedding ? "text-maroon" : "text-gold-dark"
                        }`}
                      >
                        <MapPin className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h2 className="font-display text-3xl sm:text-4xl text-maroon font-bold mb-2 drop-shadow-sm">
                        {data.location}
                      </h2>
                      <p className="text-brown text-lg font-medium drop-shadow-sm">
                        {data.address}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gold/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p
                        className={`text-sm tracking-[0.2em] uppercase font-bold drop-shadow-sm ${isWedding ? "text-maroon" : "text-gold-dark"}`}
                      >
                        {data.date}
                      </p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${data.mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-1.5 ${
                          isWedding
                            ? "bg-maroon text-white hover:bg-maroon-dark"
                            : "bg-gold-dark text-white hover:bg-brown"
                        } transition-colors font-bold text-xs px-4 py-2 sm:py-1.5 rounded-full shadow-md hover:shadow-lg`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
                        View on Maps
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Airports */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/60 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-gold/40 transition-all duration-300"
                >
                  <div>
                    <h3 className="font-display text-2xl text-maroon font-bold mb-6 flex items-center gap-2">
                      <Plane className="w-5 h-5 text-gold-dark" />
                      Arrival
                    </h3>
                    <div className="space-y-6">
                      {data.airports.map((a) => (
                        <div key={a.title} className="group/airport">
                          <h4 className="font-semibold text-brown flex items-center gap-2 mb-1">
                            <IconForType type={a.icon} />
                            {a.title}
                          </h4>
                          <p className="text-brown-light text-sm leading-relaxed pl-7">
                            {a.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Row: Local Transport & International */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Local Transport */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/60 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 hover:shadow-lg hover:border-gold/40 transition-all duration-300"
                >
                  <h3 className="font-display text-2xl text-maroon font-bold mb-6 flex items-center gap-2">
                    <Car className="w-5 h-5 text-gold-dark" />
                    Local Transport
                  </h3>
                  <div className="space-y-6">
                    {data.transport.map((t) => (
                      <div key={t.title}>
                        <h4 className="font-semibold text-brown mb-1">
                          {t.title}
                        </h4>
                        <p className="text-brown-light text-sm leading-relaxed">
                          {t.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* International Guests */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/60 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 hover:shadow-lg hover:border-gold/40 transition-all duration-300"
                >
                  <h3 className="font-display text-2xl text-maroon font-bold mb-6 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-gold-dark" />
                    {isWedding ? "International Guests" : "Flying In?"}
                  </h3>
                  <div className="space-y-6">
                    {data.international.map((tip) => (
                      <div key={tip.title}>
                        <h4
                          className={`font-semibold mb-1 ${isWedding ? "text-gold-dark" : "text-maroon"}`}
                        >
                          {tip.title}
                        </h4>
                        <p className="text-brown-light text-sm leading-relaxed">
                          {tip.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ── Accommodation Banner ── */}
          <section className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl bg-maroon overflow-hidden text-white shadow-xl"
              >
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none -translate-y-1/4 translate-x-1/4">
                  <Hotel className="w-96 h-96" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                <div className="relative z-10 p-8 sm:p-12 md:flex md:items-center md:justify-between gap-8">
                  <div className="max-w-xl">
                    <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-4">
                      {data.accommodation.title}
                    </h2>
                    <p className="text-white/90 leading-relaxed text-lg mb-8 md:mb-0 font-medium">
                      {data.accommodation.detail}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/#rsvp"
                      className="inline-block bg-white text-maroon px-8 py-4 rounded-full font-bold hover:bg-gold-light hover:text-brown transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base tracking-wide"
                    >
                      RSVP Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── Explore Header ── */}
          <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-4">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="font-display text-4xl sm:text-5xl text-maroon font-bold mb-4">
                {data.explore.title}
              </h2>
              <p className="text-brown text-lg max-w-2xl mx-auto">
                {data.explore.subtitle}
              </p>
            </div>
          </section>

          {/* ── Explore Sections ── immersive image grid */}
          {data.explore.sections.map((section, si) => (
            <section key={si} className="px-4 sm:px-6 lg:px-8 pt-8 pb-12">
              <div className="mx-auto max-w-5xl">
                <div className="mb-8 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <span
                    className={`inline-block ${section.badgeColor} text-white text-xs tracking-wider uppercase px-4 py-1.5 rounded-full font-bold mb-4 shadow-sm`}
                  >
                    {section.badge}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-maroon font-bold mb-3">
                    {section.heading}
                  </h3>
                  <p className="text-brown-light max-w-2xl">{section.intro}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full">
                        <div className="transform transition-transform duration-300 sm:translate-y-4 sm:group-hover:translate-y-0">
                          <h4 className="font-display text-xl xl:text-2xl text-white font-bold mb-2 drop-shadow-md">
                            {item.title}
                          </h4>
                          <p className="text-white/90 text-sm leading-relaxed opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 line-clamp-3 sm:line-clamp-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {si < data.explore.sections.length - 1 && (
                  <div className="mt-16 mx-auto max-w-2xl">
                    <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
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
