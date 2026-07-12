"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

const journeySteps = [
  "Private Consultation",
  "Design Discussion",
  "Fabric Selection",
  "Final Fittings"
];

const trustIndicators = [
  "500+ Happy Brides",
  "Private Designer Sessions",
  "Premium Imported Fabrics",
  "Personal Measurements"
];

export default function BridalConsultation() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Very gentle scale parallax as requested
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={containerRef} className="relative w-full bg-transparent py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-heading text-[var(--color-accent)] tracking-[0.3em] text-xs lg:text-sm uppercase mb-4 block">
                The Royal Journey
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl text-white tracking-widest uppercase mb-6 leading-tight">
                Every unforgettable bridal story begins with a private couture consultation.
              </h2>
              <p className="text-white/60 font-sans text-base lg:text-lg font-light leading-relaxed mb-12">
                Designed exclusively for the bride who deserves perfection. Our master artisans work closely with you to craft a silhouette that reflects your unique aura and heritage.
              </p>
            </motion.div>

            {/* Bridal Journey Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="text-white/80 font-sans tracking-wide text-sm">{step}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <LuxuryButton>
                Reserve Your Private Bridal Consultation
              </LuxuryButton>
            </motion.div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-[var(--color-accent)] font-heading text-lg font-semibold tracking-wider">
                    {indicator.split(" ")[0]}
                  </span>
                  <span className="text-white/50 text-xs tracking-wider uppercase font-light">
                    {indicator.substring(indicator.indexOf(" ") + 1)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-[var(--color-accent)]/20 glass-panel shadow-[0_0_50px_rgba(212,175,55,0.1)] group"
            >
              {/* Subtle Gold Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)]/20 via-transparent to-transparent opacity-50 z-10 pointer-events-none mix-blend-overlay" />
              
              <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
                <Image
                  src="/images/user-pic-3.jpg"
                  alt="Private Bridal Consultation"
                  fill
                  className="object-cover scale-105 transition-transform duration-1000"
                />
              </motion.div>
              
              {/* Subtle Floating Particles Layer (CSS based) */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI0Q0QUYzNyIvPjwvc3ZnPg==')] bg-repeat animate-[pulse_4s_ease-in-out_infinite]" />

              {/* Premium Frame Border Glow */}
              <div className="absolute inset-0 border border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 transition-colors duration-700 z-30 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
