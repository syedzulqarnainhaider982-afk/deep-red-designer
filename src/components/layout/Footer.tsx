import Container from "@/components/layout/Container";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#050505] pt-24 pb-8 overflow-hidden">
      
      {/* Animated Gold Divider (Premium Ending Transition) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)] animate-pulse" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl font-serif text-[var(--color-text-main)] mb-4 tracking-widest">
            <span className="font-serif text-xl tracking-widest text-[var(--color-accent)] font-semibold">DEEP RED DESIGNER</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 font-light">
              Crafting timeless elegance and uncompromising luxury. Where centuries-old tradition meets modern haute couture.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://instagram.com/" aria-label="Visit our Instagram" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-muted)] hover:text-black hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1 active:scale-95 transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="https://wa.me/923005370785" aria-label="Chat with us on WhatsApp" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-muted)] hover:text-black hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1 active:scale-95 transition-all duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-6">Explore</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#collections" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm font-light">Collections</Link></li>
              <li><Link href="#services" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm font-light">Premium Services</Link></li>
              <li><Link href="#bridal-consultation" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm font-light">Bridal Consultation</Link></li>
              <li><Link href="#lookbook" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm font-light">Lookbook</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-6">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start justify-center lg:justify-start gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm font-light group cursor-pointer">
                <FaMapMarkerAlt className="mt-1 shrink-0" />
                <span>Phase 4 Bahria Town,<br/>Rawalpindi, Pakistan</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm font-light group cursor-pointer">
                <FaWhatsapp className="shrink-0" />
                <a href="https://wa.me/923005370785">+92 300 5370785</a>
              </li>
            </ul>
          </div>

          {/* Newsletter (Future Ready) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-6">The Insider</h3>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4 font-light">
              Subscribe to receive exclusive invitations and early access to our new couture collections.
            </p>
            <form className="w-full relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              />
              <button 
                type="button" 
                aria-label="Subscribe to newsletter"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--color-accent)] text-xs uppercase tracking-widest font-semibold hover:opacity-80 active:scale-95 transition-transform"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4 text-xs text-white/40 font-light tracking-wide">
          <p>&copy; {currentYear} Deep Red Designer. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--color-accent)] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}
