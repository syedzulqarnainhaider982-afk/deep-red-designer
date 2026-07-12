"use client";

import { motion } from "framer-motion";

const processSteps = [
  { id: "step1", title: "Consultation", desc: "Understanding your vision and personal style." },
  { id: "step2", title: "Design & Fabric", desc: "Selecting premium materials and sketching the silhouette." },
  { id: "step3", title: "Precision Fittings", desc: "Meticulous adjustments for a flawless, bespoke fit." },
  { id: "step4", title: "Final Masterpiece", desc: "Delivery of your handcrafted luxury couture." },
];

export function ProcessTimeline() {
  return (
    <div className="w-full py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="font-heading text-[var(--color-accent)] tracking-[0.2em] text-xs uppercase mb-4 block">
          The Craft Journey
        </span>
        <h2 className="font-heading text-3xl lg:text-4xl text-white tracking-widest uppercase">
          From Concept to Couture
        </h2>
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Line for Desktop */}
        <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-white/10" />
        
        {/* Vertical Line for Mobile */}
        <div className="block lg:hidden absolute top-8 bottom-8 left-[2.25rem] w-[1px] bg-white/10" />

        <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-12 lg:gap-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex lg:flex-col items-center lg:text-center gap-6 lg:gap-8 w-full lg:w-1/4 group"
            >
              {/* Timeline Node */}
              <div className="relative shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-black border border-white/20 glass-panel flex items-center justify-center group-hover:border-[var(--color-accent)] transition-colors duration-500 z-10">
                <span className="font-heading text-xl text-white/40 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  0{index + 1}
                </span>
                {/* Active Glow */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow duration-500" />
              </div>

              {/* Text Content */}
              <div className="flex-1 lg:flex-none">
                <h4 className="font-heading text-lg lg:text-xl text-white mb-2 tracking-wide group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  {step.title}
                </h4>
                <p className="text-white/60 font-sans text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
