"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { Scissors, Gem, Crown, Sparkles, Clock, Star, type LucideIcon } from "lucide-react";

// Counter Hook
function useCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return { count, nodeRef };
}

// 3D Tilt Image Component
function TiltImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setRotateX(yPct * 15); // max 15 deg tilt
    setRotateY(xPct * -15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 100, damping: 30, mass: 0.5 }}
      style={{ perspective: 1000 }}
      className="relative w-full h-[600px] rounded-sm group cursor-crosshair z-10"
    >
      <div className="absolute inset-0 rounded-sm overflow-hidden border border-white/10 glass-panel shadow-2xl transition-all duration-500 group-hover:border-[var(--color-accent)]/50">
        <Image
          src="/images/about.png"
          alt="Luxury Bridal Couture"
          fill
          className="object-cover scale-110 transition-transform duration-1000 group-hover:scale-100 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

// Hover Glow Card
function FeatureCard({ icon: Icon, title, desc, delay }: { icon: LucideIcon, title: string, desc: string, delay: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-8 rounded-sm glass-panel border border-white/5 overflow-hidden group cursor-pointer"
    >
      {/* Mouse Follow Glow */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(212,175,55,0.15), transparent 80%)`,
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-start gap-4">
        <div className="p-3 rounded-full bg-white/5 border border-white/10 text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-serif text-text-main group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// Animate Presence Mock (since we didn't import AnimatePresence from framer-motion up top, I'll just use simple css transition or import it)
import { AnimatePresence } from "framer-motion";

export default function About() {

  // Counters
  const { count: clientsCount, nodeRef: clientsRef } = useCounter(500);
  const { count: ratingCount, nodeRef: ratingRef } = useCounter(5);
  const { count: yearsCount, nodeRef: yearsRef } = useCounter(10);

  const features = [
    { icon: Scissors, title: "Bespoke Tailoring", desc: "Precision tailoring that fits not just your body, but your unique aura and personality." },
    { icon: Gem, title: "Luxury Fabrics", desc: "Sourced from the finest mills globally, ensuring unmatched texture and premium drape." },
    { icon: Crown, title: "Bridal Collection", desc: "Exquisite bridal wear that turns your most special day into a royal masterpiece." },
    { icon: Sparkles, title: "Custom Designs", desc: "Bring your vision to life with our expert designers who craft your dream silhouette." },
    { icon: Clock, title: "Fast Delivery", desc: "Uncompromised quality delivered within your timeline, ensuring perfection on time." },
    { icon: Star, title: "Premium Quality", desc: "Every thread, every stitch is a testament to our commitment to absolute perfection." }
  ];

  return (
    <section id="about" className="relative min-h-screen pt-20 pb-32 overflow-hidden bg-transparent">
      {/* Premium Background Layer (Different from Hero) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-accent)_0%,_transparent_20%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-accent)_0%,_transparent_20%)] opacity-10" />
        {/* Subtle Noise (using CSS pattern) */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      </div>

      {/* Cinematic Animated Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 z-20">
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/4 h-full bg-white blur-[2px]"
        />
      </div>

      <Container className="relative z-10">
        {/* Intro Label & Heading */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-accent" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">About The Brand</span>
            <span className="w-12 h-[1px] bg-accent" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-main leading-tight"
          >
            Crafting Elegance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-light to-white italic">
              Since Day One
            </span>
          </motion.h2>
        </div>

        {/* Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Left: 3D Image */}
          <TiltImage />

          {/* Right: Premium Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <div className="relative pl-6 border-l border-accent/30 hover:border-accent transition-colors duration-500">
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-accent/50" />
              <h3 className="text-2xl md:text-3xl font-serif text-accent mb-4 tracking-wide">Our Story</h3>
              <p className="text-text-muted font-light leading-loose text-sm md:text-base opacity-90">
                Born from a passion for exquisite aesthetics, PB Collection started as a closely-held secret among fashion connoisseurs. Today, it stands as a symbol of uncompromising luxury, weaving dreams into reality with every thread.
              </p>
            </div>
            
            <div className="relative pl-6 border-l border-accent/30 hover:border-accent transition-colors duration-500">
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-accent/50" />
              <h3 className="text-2xl md:text-3xl font-serif text-accent mb-4 tracking-wide">Our Vision</h3>
              <p className="text-text-muted font-light leading-loose text-sm md:text-base opacity-90">
                To redefine the future of haute couture by blending timeless traditions with modern, avant-garde silhouettes. We envision a world where your attire is the ultimate expression of your majestic persona.
              </p>
            </div>
            
            <div className="relative pl-6 border-l border-accent/30 hover:border-accent transition-colors duration-500">
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-accent/50" />
              <h3 className="text-2xl md:text-3xl font-serif text-accent mb-4 tracking-wide">Our Mission</h3>
              <p className="text-text-muted font-light leading-loose text-sm md:text-base opacity-90">
                To provide an unparalleled, royal experience to every client. From the moment you walk in, to the final fitting, our mission is to ensure you feel absolute exclusivity and power in what you wear.
              </p>
            </div>
            
            <div className="relative pl-6 border-l border-accent/30 hover:border-accent transition-colors duration-500">
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-accent/50" />
              <h3 className="text-2xl md:text-3xl font-serif text-accent mb-4 tracking-wide">Our Craftsmanship</h3>
              <p className="text-text-muted font-light leading-loose text-sm md:text-base opacity-90">
                Every masterpiece is hand-stitched by master artisans who have dedicated their lives to the needle. We source only the rarest silks, velvets, and embellishments, ensuring that perfection is not just a goal, but our standard.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5 mb-32">
          <div className="flex flex-col items-center text-center">
            <span ref={clientsRef} className="text-4xl md:text-5xl font-serif text-text-main mb-2">
              {clientsCount}+
            </span>
            <span className="text-accent text-sm tracking-widest uppercase">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span ref={ratingRef} className="text-4xl md:text-5xl font-serif text-text-main mb-2">
              {ratingCount}★
            </span>
            <span className="text-accent text-sm tracking-widest uppercase">Customer Rating</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span ref={yearsRef} className="text-4xl md:text-5xl font-serif text-text-main mb-2">
              {yearsCount}+
            </span>
            <span className="text-accent text-sm tracking-widest uppercase">Years Experience</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-serif text-text-main mb-2">
              100%
            </span>
            <span className="text-accent text-sm tracking-widest uppercase">Premium Fabrics</span>
          </div>
        </div>

        {/* 6 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard 
              key={feature.title} 
              icon={feature.icon} 
              title={feature.title} 
              desc={feature.desc} 
              delay={idx * 0.1} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
