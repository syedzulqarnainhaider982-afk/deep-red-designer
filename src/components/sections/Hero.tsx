"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { ChevronDown, MapPin, Mail, Phone } from "lucide-react";

export default function Hero() {
  const scrollToCollections = () => {
    const el = document.querySelector("#collections");
    if(el) el.scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if(el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1974&auto=format&fit=crop"
          alt="Luxury Fashion Background"
          fill
          priority
          className="object-cover opacity-[0.12] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-[var(--color-primary)]/80 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[var(--color-primary)]/40 to-[var(--color-primary)]" />
      </div>

      {/* Subtle Floating Orbs */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-[var(--color-accent)]/5 rounded-full blur-[100px] z-0"
      />
      
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-[var(--color-accent)]/5 rounded-full blur-[120px] z-0"
      />

      <Container className="relative z-10 w-full flex flex-col items-center justify-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[var(--color-accent)] text-xs md:text-sm tracking-[0.3em] uppercase mb-6 block font-medium">
            The Pinnacle of Haute Couture
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif text-[var(--color-text-main)] mb-6 leading-[1.1] tracking-tight max-w-4xl"
        >
          Where Elegance <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text-main)] via-[var(--color-accent)] to-[var(--color-accent-light)] italic">
            Meets Perfection
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[var(--color-text-muted)] text-base md:text-lg max-w-2xl mb-12 font-sans font-light leading-relaxed"
        >
          Explore a carefully curated collection of bespoke luxury fashion, tailored to embody sophistication and timeless beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Button size="lg" variant="primary" withArrow onClick={scrollToCollections}>
            Explore Collection
          </Button>
          <Button size="lg" variant="ghost" onClick={scrollToServices} className="border-b border-transparent hover:border-[var(--color-accent)] rounded-none px-4">
            Book an Appointment
          </Button>
        </motion.div>
      </Container>

      {/* Social Icons (Left Side) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-20"
      >
        <a href="https://instagram.com/studiobyiram" aria-label="Instagram" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors active:scale-95">
          <MapPin size={16} />
        </a>
        <a href="mailto:info@pbcollection.com" aria-label="Email" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors active:scale-95">
          <Mail size={16} />
        </a>
        <a href="https://wa.me/923319233258" aria-label="Phone" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors active:scale-95">
          <Phone size={16} />
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={scrollToCollections}
      >
        <span className="text-[10px] uppercase tracking-widest text-text-muted group-hover:text-accent transition-colors">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-text-muted group-hover:text-accent transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
