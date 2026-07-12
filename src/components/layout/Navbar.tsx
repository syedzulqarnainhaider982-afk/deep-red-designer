"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-primary/80 backdrop-blur-md py-4 border-white/5 shadow-lg" : "bg-transparent py-8"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" onClick={(e) => scrollTo(e, "#home")} className="text-xl md:text-2xl font-serif text-[var(--color-accent)] tracking-widest font-bold">
          PB <span className="text-[var(--color-text-main)] font-light">COLLECTION</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-xs font-sans font-medium text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:inline-flex rounded-sm px-6 py-2 border-white/20 text-text-main hover:border-accent hover:text-accent text-xs tracking-wider active:scale-95 transition-all"
            onClick={() => {
              const el = document.querySelector("#contact");
              if(el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Consultation
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors active:scale-95"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </Container>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] p-2 active:scale-95 transition-transform"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-3xl font-serif text-[var(--color-accent)] drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                variant="outline" 
                className="mt-8 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black font-medium tracking-widest uppercase shadow-[0_0_15px_rgba(212,175,55,0.3)] active:scale-95 transition-all"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.querySelector("#contact");
                  if(el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Consultation
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
