import React from 'react';
import { Link } from 'react-router-dom';
import { KosmoLogo } from './KosmoLogo';
import { Navigation, Star, Clock, UtensilsCrossed, Sparkles, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#043C2A]"
    >
      {/* Background Image with Cinematic Slow Zoom & Deep Emerald Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=85"
          alt="Kosmo Cafe Atmosphere in Chennai"
          className="w-full h-full object-cover object-center scale-105 opacity-35 filter brightness-90 contrast-110"
        />
        {/* Multi-layered dark emerald & vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A] via-[#043C2A]/70 to-[#043C2A]/90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#043C2A]/60 to-[#000000]/80" />
        
        {/* Subtle decorative grid/grain accent */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D6B34A_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Floating subtle ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#075C3B]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-[#D6B34A]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Location & Status Tag */}
        <div
          id="hero-location-pill"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#075C3B]/80 border border-[#D6B34A]/40 text-[#FFF0BE] text-xs sm:text-sm font-medium tracking-wide shadow-lg mb-6 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#E5C65A] animate-ping" />
          <span className="text-[#E5C65A] font-semibold">Alwarpet, Chennai</span>
          <span className="text-[#F6F0DD]/40">·</span>
          <span className="flex items-center gap-1 text-[#F6F0DD]/90">
            <Clock className="w-3.5 h-3.5 text-[#D6B34A]" /> Open Late till 3:30 AM
          </span>
        </div>

        {/* Central Crown Lion Emblem Badge */}
        <div className="mb-4">
          <KosmoLogo size="xl" variant="emblem" id="hero-lion-emblem" />
        </div>

        {/* Main Brand Title */}
        <h1
          id="hero-main-title"
          className="font-brand font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5CC] via-[#E5C65A] to-[#B8922C] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          KOSMO CAFE
        </h1>

        {/* Subtle Gold Decorative Line */}
        <div className="w-48 sm:w-72 h-[2px] bg-gradient-to-r from-transparent via-[#D6B34A] to-transparent my-4 sm:my-5" />

        {/* Punchy Headline */}
        <h2
          id="hero-subtitle"
          className="font-display italic text-2xl sm:text-3xl md:text-4xl text-[#F6F0DD] font-semibold max-w-3xl leading-snug drop-shadow-md"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Where Chennai Comes for the Good Stuff.
        </h2>

        {/* Supporting Copy */}
        <p
          id="hero-supporting-copy"
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-[#F6F0DD]/85 max-w-2xl font-light tracking-wide"
        >
          Rich Milo. Comfort food. Late-night cravings. Good vibes.
        </p>

        {/* Call to Actions */}
        <div
          id="hero-cta-group"
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            id="hero-explore-menu-btn"
            to="/menu"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-brand text-xs sm:text-sm font-bold tracking-widest uppercase gold-gradient-btn flex items-center justify-center gap-2 shadow-xl"
          >
            <UtensilsCrossed className="w-4 h-4" />
            EXPLORE MENU
          </Link>
          <Link
            id="hero-get-directions-btn"
            to="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-brand text-xs sm:text-sm font-semibold tracking-widest uppercase bg-[#075C3B]/90 hover:bg-[#087044] text-[#F6F0DD] border border-[#D6B34A]/50 hover:border-[#D6B34A] transition-all flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm"
          >
            <Navigation className="w-4 h-4 text-[#D6B34A]" />
            VISIT & DIRECTIONS
          </Link>
        </div>

        {/* High Credibility Stats Bar */}
        <div
          id="hero-stats-bar"
          className="mt-12 pt-8 border-t border-[#D6B34A]/20 grid grid-cols-3 gap-4 sm:gap-12 text-center max-w-2xl w-full"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#E5C65A] font-bold text-lg sm:text-2xl">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#E5C65A] text-[#E5C65A]" />
              <span>4.3 ★</span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#F6F0DD]/70 tracking-wide mt-0.5">1,923 Google Reviews</span>
          </div>

          <div className="flex flex-col items-center border-x border-[#D6B34A]/20 px-2 sm:px-6">
            <span className="font-brand font-bold text-lg sm:text-2xl text-[#FFF0BE]">
              ₹200–400
            </span>
            <span className="text-[11px] sm:text-xs text-[#F6F0DD]/70 tracking-wide mt-0.5">Per Person Average</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-brand font-bold text-lg sm:text-2xl text-[#E5C65A]">
              199 TTK Rd
            </span>
            <span className="text-[11px] sm:text-xs text-[#F6F0DD]/70 tracking-wide mt-0.5">Alwarpet Hub</span>
          </div>
        </div>
      </div>
    </section>
  );
};
