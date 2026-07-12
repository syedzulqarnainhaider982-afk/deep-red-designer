"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import LookbookCard from "./LookbookCard";
import LookbookLightbox from "./LookbookLightbox";
import { lookbookData, LookbookItem } from "./lookbookData";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

export default function Lookbook() {
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);

  const handleOpen = (item: LookbookItem) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = lookbookData.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % lookbookData.length;
    setSelectedItem(lookbookData[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = lookbookData.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + lookbookData.length) % lookbookData.length;
    setSelectedItem(lookbookData[prevIndex]);
  };

  return (
    <section className="relative w-full bg-transparent py-24 lg:py-32 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[var(--color-accent)] tracking-[0.3em] text-xs uppercase mb-4 block"
          >
            The Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl text-white mb-6"
          >
            Luxury Lookbook
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-2xl font-light leading-relaxed"
          >
            Explore our curated selection of masterpieces. Each design is a testament to PB Collection&apos;s dedication to unparalleled craftsmanship and timeless elegance.
          </motion.p>
        </div>

        {/* Masonry Grid (CSS Columns approach for pure masonry) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8 pb-20">
          {lookbookData.map((item, index) => (
            <div key={item.id} className="break-inside-avoid">
              <LookbookCard 
                item={item} 
                index={index} 
                onClick={handleOpen} 
              />
            </div>
          ))}
        </div>

        {/* End of Section Conversion Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative border border-white/10 bg-white/5 p-10 lg:p-16 text-center mt-12 flex flex-col items-center overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-accent)]/5 pointer-events-none" />
          
          <h3 className="font-serif text-3xl text-white mb-4 relative z-10">
            Didn&apos;t Find Your Dream Design?
          </h3>
          <p className="text-white/60 mb-10 max-w-lg font-light relative z-10">
            Let PB Collection create an exclusive masterpiece designed only for you.
          </p>
          
          <div className="relative z-10">
            <LuxuryButton>
              Book Private Consultation
            </LuxuryButton>
          </div>
        </motion.div>
      </Container>

      {/* Fullscreen Lightbox Modal */}
      <LookbookLightbox 
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
