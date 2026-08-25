import React from 'react';
import { Link } from 'react-router-dom';
import { LionEmblem } from './KosmoLogo';
import { UtensilsCrossed, Phone, Navigation, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section
      id="final-cta"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#043C2A] via-[#075C3B] to-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-b border-[#D6B34A]/30 text-center"
    >
      {/* Background Ambience & Lion Motifs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-10 pointer-events-none flex items-center justify-center">
        <LionEmblem size={450} id="final-cta-watermark" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Emblem Top Badge */}
        <div className="mb-4 inline-block">
          <LionEmblem size={64} id="cta-lion-emblem" />
        </div>

        {/* Big Heading */}
        <h2
          id="cta-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFFDF5] tracking-tight"
        >
          Hungry <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Yet?</span>
        </h2>

        {/* Gold Accent Line */}
        <div className="w-24 h-[2px] bg-[#D6B34A] mx-auto my-5" />

        {/* Copy */}
        <p className="text-base sm:text-xl text-[#F6F0DD]/90 max-w-xl mx-auto font-light leading-relaxed">
          Come by for a Cold Milo, grab a quick bite, or stay for the vibes.
        </p>

        {/* 3 Prominent CTAs */}
        <div
          id="final-cta-buttons"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <Link
            to="/menu"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-brand text-xs sm:text-sm font-bold tracking-widest uppercase bg-[#043C2A] hover:bg-[#087044] text-[#FFF0BE] border border-[#D6B34A]/50 hover:border-[#D6B34A] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#D6B34A]" />
            VIEW MENU
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-brand text-xs sm:text-sm font-bold tracking-widest uppercase gold-gradient-btn flex items-center justify-center gap-2 shadow-2xl"
          >
            <Navigation className="w-4 h-4 text-[#043C2A]" />
            VISIT CAFE
          </Link>

          <a
            href="tel:09962303090"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-brand text-xs sm:text-sm font-semibold tracking-widest uppercase bg-[#043C2A] hover:bg-[#087044] text-[#FFF0BE] border border-[#D6B34A]/50 hover:border-[#D6B34A] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="w-4 h-4 text-[#D6B34A]" />
            CALL KOSMO
          </a>
        </div>

        {/* Location subtitle reminder */}
        <div className="mt-8 text-xs text-[#E5C65A] font-semibold tracking-wider">
          199, TTK ROAD · ALWARPET · OPEN TILL 3:30 AM
        </div>

      </div>
    </section>
  );
};
