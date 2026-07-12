"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { ServiceCard } from "./ServiceCard";
import { ProcessTimeline } from "./ProcessTimeline";
import { servicesData } from "./servicesData";
import { Button } from "@/components/ui/Button";

export default function Services() {
  return (
    <section className="relative w-full bg-transparent min-h-screen overflow-hidden pt-32 pb-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-accent)]/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
        >
          <span className="font-heading text-[var(--color-accent)] tracking-[0.3em] text-xs lg:text-sm uppercase mb-6 block">
            Exquisite Craftsmanship
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl text-white tracking-widest uppercase mb-8">
            Premium Services
          </h2>
          <p className="text-white/60 font-sans text-base lg:text-lg font-light leading-relaxed">
            Elevating your wardrobe with meticulous attention to detail. Experience unparalleled luxury and personalized service tailored exclusively for you.
          </p>
        </motion.div>

        {/* Services Grid (2x2 on Desktop, 1x4 on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-32">
          {servicesData.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Process Timeline */}
        <div className="border-t border-white/5 pt-10">
          <ProcessTimeline />
        </div>

        {/* Conversion CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <h3 className="font-heading text-3xl lg:text-4xl text-white tracking-widest uppercase mb-8">
            Begin Your Private Couture Journey
          </h3>
          <Button variant="primary" size="lg" className="px-12 py-6 text-sm tracking-[0.2em]">
            BOOK PRIVATE APPOINTMENT
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
