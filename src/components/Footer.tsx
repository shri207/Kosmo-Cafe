import React from 'react';
import { Link } from 'react-router-dom';
import { KosmoLogo } from './KosmoLogo';
import { Phone, MapPin, Clock, ArrowUp, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-[#022419] text-[#F6F0DD] pt-16 pb-24 sm:pb-16 border-t border-[#D6B34A]/30 overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-radial from-[#075C3B]/20 via-transparent to-[#022419] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#D6B34A]/20">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="focus:outline-none">
              <KosmoLogo size="lg" id="footer-logo" />
            </Link>
            
            <p className="mt-4 text-sm text-[#F6F0DD]/85 italic font-serif text-base max-w-sm">
              "Good food. Great drinks. Late-night cravings."
            </p>

            <p className="mt-3 text-xs text-[#F6F0DD]/70 max-w-sm leading-relaxed">
              Chennai’s destination for the signature Cold Milo, freshly prepared comfort bites, and midnight conversations in the heart of Alwarpet.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#043C2A] border border-[#D6B34A]/40 text-[#E5C65A] hover:text-[#043C2A] hover:bg-[#D6B34A] transition-all flex items-center justify-center shadow-md"
                aria-label="Kosmo Cafe Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#043C2A] border border-[#D6B34A]/40 text-[#E5C65A] hover:text-[#043C2A] hover:bg-[#D6B34A] transition-all flex items-center justify-center shadow-md"
                aria-label="Kosmo Cafe Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-brand font-bold text-sm tracking-widest uppercase text-[#E5C65A] mb-4">
              PAGES & EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F6F0DD]/80">
              <li>
                <Link to="/" className="hover:text-[#E5C65A] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#E5C65A] transition-colors">Artisanal Menu</Link>
              </li>
              <li>
                <Link to="/signature-milo" className="hover:text-[#E5C65A] transition-colors">Signature Cold Milo</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E5C65A] transition-colors">Our Story & Heritage</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#E5C65A] transition-colors">Atmosphere Gallery</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#E5C65A] transition-colors">Customer Reviews (4.3 ★)</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E5C65A] transition-colors">Location, Timings & Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Timings */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-brand font-bold text-sm tracking-widest uppercase text-[#E5C65A] mb-4">
              VISIT & CONTACT
            </h4>

            <div className="flex items-start gap-3 text-xs text-[#F6F0DD]/80">
              <MapPin className="w-4 h-4 text-[#D6B34A] flex-shrink-0 mt-0.5" />
              <span>
                199, TTK Road, Sriram Colony, <br />
                Alwarpet, Chennai, Tamil Nadu 600018
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#F6F0DD]/80">
              <Phone className="w-4 h-4 text-[#D6B34A] flex-shrink-0" />
              <a href="tel:09962303090" className="hover:text-[#E5C65A] font-bold">
                099623 03090
              </a>
            </div>

            <div className="flex items-start gap-3 text-xs text-[#F6F0DD]/80">
              <Clock className="w-4 h-4 text-[#D6B34A] flex-shrink-0 mt-0.5" />
              <span>
                11:00 AM – 3:30 AM (Open Late Daily)
              </span>
            </div>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/30 text-[10px] font-bold text-[#FFF0BE] uppercase tracking-wider">
                Dine-in · Drive-Through · Curbside Pickup
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6F0DD]/60">
          <p>
            © {new Date().getFullYear()} KOSMO CAFE. All rights reserved. 199 TTK Road, Alwarpet, Chennai.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#075C3B]/60 hover:bg-[#075C3B] text-[#FFF0BE] border border-[#D6B34A]/30 transition-all hover:scale-105"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D6B34A]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
