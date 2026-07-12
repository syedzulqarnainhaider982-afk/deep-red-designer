"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { LookbookItem } from "./lookbookData";

interface LightboxProps {
  item: LookbookItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function LookbookLightbox({ item, isOpen, onClose, onNext, onPrev }: LightboxProps) {
  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-12 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 lg:top-10 lg:right-10 z-50 p-2 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Navigation Buttons */}
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 lg:left-10 z-50 p-4 text-white/30 hover:text-[var(--color-accent)] transition-colors hidden sm:block"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 lg:right-10 z-50 p-4 text-white/30 hover:text-[var(--color-accent)] transition-colors hidden sm:block"
        >
          <ChevronRight className="w-10 h-10" />
        </button>

        {/* Content Container */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative w-full max-w-6xl max-h-full flex flex-col lg:flex-row bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden rounded-sm"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Side */}
          <div className="relative w-full lg:w-2/3 h-[50vh] lg:h-[80vh]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain lg:object-cover bg-black"
            />
          </div>

          {/* Details Side */}
          <div className="w-full lg:w-1/3 flex flex-col p-8 lg:p-12 justify-center border-t lg:border-t-0 lg:border-l border-white/5">
            <span className="font-heading text-[var(--color-accent)] tracking-[0.3em] text-xs uppercase mb-4">
              {item.category}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-2">
              {item.title}
            </h2>
            <p className="text-white/50 font-sans text-sm tracking-widest uppercase mb-8">
              {item.subtitle}
            </p>
            <p className="text-white/80 font-light leading-relaxed mb-12">
              {item.description}
            </p>
            
            <button className="w-full bg-[var(--color-accent)] hover:bg-[#b5952f] text-black font-heading text-xs tracking-[0.2em] uppercase font-semibold py-4 transition-colors duration-300">
              Inquire About This Design
            </button>
          </div>
        </motion.div>

        {/* Mobile Swipe Indicators (Visual only) */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 sm:hidden pointer-events-none">
          <span className="text-white/30 text-xs tracking-widest uppercase">Swipe to navigate</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
