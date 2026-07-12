"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CollectionItem {
  id: string;
  title: string;
  desc: string;
  img: string;
}

const collections: CollectionItem[] = [
  {
    id: "bridal",
    title: "Bridal Couture",
    desc: "Intricate hand-embroidered masterpieces designed for your most majestic moments.",
    img: "/images/royal-velvet-green.jpg",
  },
  {
    id: "luxury-pret",
    title: "Luxury Pret",
    desc: "Ready-to-wear elegance featuring premium silk and chiffon for the modern royal.",
    img: "/images/user-pic-2.jpg",
  },
  {
    id: "formal",
    title: "Formal Collection",
    desc: "Elegant silhouettes crafted from premium fabrics for your evening soirées.",
    img: "/images/user-pic-3.jpg",
  },
  {
    id: "casual",
    title: "Casual Elegance",
    desc: "Effortless everyday luxury combining supreme comfort with immaculate style.",
    img: "/images/formal-new.webp",
  },
  {
    id: "festive",
    title: "Festive Wear",
    desc: "Vibrant hues and rich fabrics tailored specifically to celebrate life's grand occasions.",
    img: "/images/user-pic-4.jpg",
  },
  {
    id: "custom",
    title: "Custom Stitching",
    desc: "Bespoke tailoring services ensuring a flawless fit tailored to your unique measurements.",
    img: "/images/custom-new.webp",
  }
];

// Reusable Collection Card with 3D Tilt and Mouse Follow Glow
function CollectionCard({ item, index }: { item: CollectionItem, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // 3D Tilt calculations
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setRotateX(yPct * 10); // Subtle 10 deg tilt
    setRotateY(xPct * -10);

    // Mouse Glow calculations
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <Link href={`/collections/${item.id}`} className="block w-full lg:w-[35vw] shrink-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="flex flex-col gap-4"
      >
        {/* Card Container */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 100, damping: 30, mass: 0.5 }}
          style={{ perspective: 1000 }}
          className="relative h-[75vh] min-h-[500px] w-full rounded-[24px] overflow-hidden group border border-white/5 bg-primary cursor-pointer shadow-2xl"
        >
          {/* Animated Gold Border on Hover */}
          <div className="absolute inset-0 rounded-[24px] border-2 border-transparent group-hover:border-accent/40 transition-colors duration-700 z-30 pointer-events-none" />

          {/* Mouse Follow Glow */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(212,175,55,0.2), transparent 80%)`,
                }}
              />
            )}
          </AnimatePresence>

          {/* Background Image with Zoom */}
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover scale-110 transition-transform duration-1000 group-hover:scale-100 opacity-90 filter contrast-110 saturate-50"
          />

          {/* Persistent Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary via-primary/80 to-transparent z-10" />

          {/* Glass Overlay on Hover */}
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

          {/* Hover Reveal Content */}
          <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end">
            <motion.div
              initial={false}
              animate={{ y: isHovered ? -20 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-3"
            >
              <h3 className="text-3xl lg:text-4xl font-serif text-text-main group-hover:text-accent transition-colors duration-500">
                {item.title}
              </h3>
              
              <div className="overflow-hidden">
                <p className="text-text-muted text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                <div className="mt-8 flex items-center text-[var(--color-accent)] font-heading text-sm tracking-widest font-semibold group-hover:tracking-[0.2em] transition-all duration-500 cursor-pointer">
                  <span>VIEW COLLECTION</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* External Tags */}
        <div className="flex flex-wrap items-center gap-4 px-2 opacity-80">
          <span className="text-[10px] uppercase tracking-widest text-text-muted border border-white/10 rounded-full px-3 py-1">Premium Fabric</span>
          <span className="text-[10px] uppercase tracking-widest text-text-muted border border-white/10 rounded-full px-3 py-1">Handcrafted</span>
          <span className="text-[10px] uppercase tracking-widest text-accent border border-accent/20 bg-accent/5 rounded-full px-3 py-1">Custom Stitching Available</span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Collections() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Desktop Horizontal Scroll Logic
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]); // Adjust based on number of items (6 items)
  const introX = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="collections" className="relative bg-transparent">
      
      {/* Unique Transition Divider (Animated Particles Fade) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent z-40 pointer-events-none flex justify-center">
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent mt-4"
        />
      </div>

      {/* Unique Background for Collections */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_15%)] opacity-5 blur-[150px]" />
        {/* Soft gold particles mock */}
        <motion.div 
          animate={{ y: [0, -50, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full blur-[2px]"
        />
        <motion.div 
          animate={{ y: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-accent rounded-full blur-[1px]"
        />
        {/* Subtle noise */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />
      </div>

      {/* Desktop Horizontal Scroll Wrapper */}
      <div ref={targetRef} className="lg:h-[300vh] relative">
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center overflow-hidden pt-32 lg:pt-0">
          
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-center relative z-10 px-6 lg:px-0">
            
            {/* Intro Section (Sticky on Desktop Left, Normal on Mobile) */}
            <motion.div 
              style={{ x: isMobile ? 0 : introX }}
              className="lg:w-[30vw] shrink-0 flex flex-col items-start justify-center pl-0 lg:pl-20 mb-16 lg:mb-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <span className="w-8 h-[1px] bg-accent" />
                <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">Our Collections</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-main leading-tight mb-6"
              >
                Crafted for Women Who <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-light to-white italic">
                  Define Elegance
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-text-muted font-light leading-relaxed max-w-md"
              >
                Explore our carefully curated masterpieces. Each piece tells a story of royal heritage, unparalleled craftsmanship, and timeless beauty.
              </motion.p>
            </motion.div>

            {/* Collections Track */}
            <motion.div 
              style={{ x: isMobile ? 0 : x }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:px-20 w-full lg:w-max pb-20 lg:pb-0"
            >
              {collections.map((item, index) => (
                <CollectionCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Grand CTA Section */}
      <Container className="relative z-10 py-32 border-t border-white/5 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-serif text-text-main mb-6"
        >
          Ready to Experience <span className="italic text-accent">True Luxury?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-text-muted max-w-xl mx-auto mb-10 font-light"
        >
          Book an exclusive appointment with our master designers or explore our latest arrivals to find your next masterpiece.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" variant="primary" withArrow>
            Discover the Complete Collection
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
