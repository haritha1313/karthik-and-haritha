"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const HOME_SECTION_IDS = ["events", "rsvp"];
const SECTION_SENTINEL_Y = 150;

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/#events" },
  { label: "RSVP", href: "/#rsvp" },
  { label: "Travel", href: "/travel" },
  { label: "Attire", href: "/attire" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const getHomeSectionHash = () => {
      let currentHash = "";

      for (const sectionId of HOME_SECTION_IDS) {
        const sectionElement = document.getElementById(sectionId);

        if (!sectionElement) {
          continue;
        }

        const rect = sectionElement.getBoundingClientRect();
        if (
          rect.top <= SECTION_SENTINEL_Y &&
          rect.bottom >= SECTION_SENTINEL_Y
        ) {
          currentHash = `#${sectionId}`;
        }
      }

      if (window.scrollY < 100) {
        return "";
      }

      return currentHash;
    };

    const syncHomeHash = (currentHash: string) => {
      const nextUrl = currentHash
        ? `${window.location.pathname}${window.location.search}${currentHash}`
        : `${window.location.pathname}${window.location.search}`;

      if (
        nextUrl !==
        window.location.pathname + window.location.search + window.location.hash
      ) {
        window.history.replaceState(window.history.state, "", nextUrl);
      }
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      if (pathname === "/") {
        const currentHash = getHomeSectionHash();
        setActiveHash(currentHash);
        syncHomeHash(currentHash);
        return;
      }

      setActiveHash("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    const [path, hash] = href.split("#");
    const activeRoute = pathname === path;

    // If it's a hash link, it's active if the route matches AND the hash matches
    if (hash) {
      return activeRoute && activeHash === `#${hash}`;
    }

    // If it's the home link ("/")
    if (href === "/") {
      return pathname === "/" && !activeHash;
    }

    // For other links like "/travel"
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        {/* Colorful top accent bar */}
        <div className="h-1 bg-gradient-to-r from-maroon via-saffron to-gold" />
        <div
          className={`backdrop-blur-md border-b border-gold/20 transition-colors duration-300 ${scrolled ? "bg-ivory/95 shadow-md" : "bg-ivory/80"}`}
        >
          <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
            <Link
              href="/"
              className="flex items-center"
            >
              <Image 
                src="/images/logo.png" 
                alt="K&H Logo" 
                width={160} 
                height={100} 
                priority
                className="object-contain mix-blend-multiply drop-shadow-md"
              />
            </Link>

            {/* Desktop */}
            <div className="hidden sm:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm tracking-wider uppercase transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-maroon text-white font-medium shadow-md"
                      : "text-brown-light hover:bg-saffron/10 hover:text-maroon font-normal"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden p-2 text-maroon"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="sm:hidden overflow-hidden border-t border-gold/20 bg-ivory/95 backdrop-blur-md"
              >
                <div className="flex flex-col py-2">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`px-6 py-3 text-sm tracking-widest uppercase transition-colors ${
                        isActive(item.href)
                          ? "text-maroon font-medium bg-maroon/10"
                          : "text-brown-light hover:text-maroon hover:bg-saffron/5 font-normal"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
