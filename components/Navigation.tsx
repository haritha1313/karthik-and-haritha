"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Super simple logic to update hash on scroll for the home page sections
      if (window.location.pathname === "/") {
        const sections = ["events", "rsvp"];
        let current = "";
        
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            // If the section is near the top of the viewport
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = `#${section}`;
            }
          }
        }
        
        // If we're at the very top, clear the hash
        if (window.scrollY < 100) {
          current = "";
        }
        
        setActiveHash(current);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Initial check
    onScroll();
    setActiveHash(window.location.hash);

    // Listen for hash changes explicitly
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

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
        <div className={`backdrop-blur-md border-b border-gold/20 transition-colors duration-300 ${scrolled ? 'bg-ivory/95 shadow-md' : 'bg-ivory/80'}`}>
          <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
            <Link href="/" className="font-display text-2xl text-maroon font-bold tracking-wide">
              K <span className="text-gold">&</span> H
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
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
