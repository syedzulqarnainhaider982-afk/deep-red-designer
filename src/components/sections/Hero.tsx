"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[var(--color-primary)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[var(--color-accent)]/5 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <Container className="relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase mb-4 block font-medium">
            The Epitome of Elegance
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--color-text-main)] mb-6 leading-tight"
        >
          Exquisite Luxury <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-light)] via-[var(--color-accent)] to-[var(--color-accent-light)]">
            & Timeless Elegance
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[var(--color-text-muted)] text-lg md:text-xl max-w-2xl mb-10 font-sans"
        >
          Discover the rare collection designed exclusively for you. 
          Experience the pinnacle of high-end fashion with our latest arrivals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" variant="primary">
            Explore Collection
          </Button>
          <Button size="lg" variant="outline">
            Book Stitching Service
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
