import Container from "@/components/layout/Container";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 lg:py-32 overflow-hidden bg-transparent">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text-main)] mb-6">
            Begin Your Luxury Journey
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl font-light">
            Whether you&apos;re planning your dream bridal couture or a bespoke masterpiece, our designers are ready to welcome you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[var(--color-accent)]/50 transition-colors duration-500 glass-reflection">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[var(--color-text-main)] mb-2">Boutique Location</h3>
                  <p className="text-[var(--color-text-muted)] font-light leading-relaxed">
                    Shop #. 4-5, 2nd Floor, Rabi Center,<br />
                    Murree Rd, D Block Block D Satellite Town,<br />
                    Rawalpindi, 44000, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[var(--color-accent)]/50 transition-colors duration-500 glass-reflection">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[var(--color-text-main)] mb-2">Phone</h3>
                  <p className="text-[var(--color-text-muted)] font-light tracking-wide">
                    +92 300 5370785
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[var(--color-accent)]/50 transition-colors duration-500 glass-reflection">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <FaRegClock size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[var(--color-text-main)] mb-2">Opening Hours</h3>
                  <p className="text-[var(--color-text-muted)] font-light">
                    Sat - Thu: Open 24 hours<br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a 
                href="https://wa.me/923005370785?text=Hello,%20I%20would%20like%20to%20book%20a%20private%20consultation." 
                target="_blank" 
                rel="noreferrer"
                className="premium-btn flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-black font-medium tracking-wide rounded-sm active:scale-95 transition-all"
              >
                <FaWhatsapp size={20} />
                Book Private Consultation
              </a>
              <a 
                href="https://wa.me/923005370785" 
                target="_blank" 
                rel="noreferrer"
                className="premium-btn flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-medium tracking-wide rounded-sm hover:bg-[var(--color-accent)]/10 active:scale-95 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="relative h-[500px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden glass-panel border border-[var(--color-accent)]/30 group">
            {/* Lazy Loaded Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.657503889104!2d73.1213359!3d33.5467282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dff336b102d58f%3A0x7d6a54bd2a07c39!2sPB%20Collection&#39;s%20Boutique%20and%20stitching%20studio!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%) grayscale(20%)" }} // Dark mode map hack
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Map Overlay Button */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none transition-colors duration-500 group-hover:bg-transparent" />
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Deep+Red+Designer+Rabi+Center+Rawalpindi" // Actual search query
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 premium-btn px-6 py-3 bg-black/80 backdrop-blur-md border border-[var(--color-accent)]/50 text-[var(--color-accent)] rounded-full text-sm font-medium tracking-wider flex items-center gap-2 hover:bg-black active:scale-95 transition-all"
            >
              <FaMapMarkerAlt />
              Open in Google Maps
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}
