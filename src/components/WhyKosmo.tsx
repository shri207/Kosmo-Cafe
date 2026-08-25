import React from 'react';
import { Sparkles, Moon, Utensils, Music, Coffee, Clock, Heart, ShieldCheck } from 'lucide-react';
import { LionEmblem } from './KosmoLogo';

export const WhyKosmo: React.FC = () => {
  const features = [
    {
      id: 'why-milo',
      title: 'SIGNATURE MILO',
      subtitle: 'The Legendary Recipe',
      description: 'Our rich and creamy Milo creations with heavy malt crunch that have turned into Chennai’s favorite guilty pleasure.',
      icon: (
        <svg className="w-8 h-8 text-[#E5C65A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      ),
      highlight: '★ 4.9 Cult Favorite'
    },
    {
      id: 'why-latenight',
      title: 'LATE NIGHT',
      subtitle: 'Open Till 3:30 AM',
      description: 'A go-to spot for late-night cravings, post-work hangouts, midnight drives, and early morning fuel in central Alwarpet.',
      icon: (
        <svg className="w-8 h-8 text-[#E5C65A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          <path d="M19 3v4" />
          <path d="M21 5h-4" />
        </svg>
      ),
      highlight: 'Midnight Sanctuary'
    },
    {
      id: 'why-comfortfood',
      title: 'COMFORT FOOD',
      subtitle: 'Fresh & Sizzling',
      description: 'Burgers, sandwiches, fries, wraps, pastas and crunchy wings freshly cooked to order with bold Chennai flavors.',
      icon: (
        <svg className="w-8 h-8 text-[#E5C65A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z" />
          <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
          <path d="m2.1 21.8 6.4-6.3" />
          <path d="m19 5-7 7" />
        </svg>
      ),
      highlight: 'Veg & Non-Veg 100%'
    },
    {
      id: 'why-goodvibes',
      title: 'GOOD VIBES',
      subtitle: 'Always Buzzing',
      description: 'Lively, casual and vibrant atmosphere with cozy outdoor artificial turf seating, warm lighting, and urban music.',
      icon: (
        <svg className="w-8 h-8 text-[#E5C65A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
      highlight: 'Youthful & Cozy'
    }
  ];

  return (
    <section
      id="why-kosmo"
      className="relative py-20 sm:py-28 bg-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-[#D6B34A]/20"
    >
      {/* Subtle Background Lion Watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <LionEmblem size={600} id="why-kosmo-watermark" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B34A]" />
            THE KOSMO EXPERIENCE
          </span>
          <h2
            id="why-kosmo-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6F0DD]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Kosmo?
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D6B34A] to-transparent mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#F6F0DD]/80 font-light max-w-xl mx-auto">
            We built Kosmo around the simple joy of exceptional drinks, hearty comfort food, and a warm neighborhood spot that never closes early.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              id={`feature-card-${idx}`}
              className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#075C3B]/70 to-[#043C2A]/90 border border-[#D6B34A]/30 hover:border-[#D6B34A] transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Top Icon Badge with Gold Ring */}
                <div className="w-16 h-16 rounded-2xl bg-[#043C2A] border border-[#D6B34A]/40 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:border-[#E5C65A] transition-transform">
                  {feature.icon}
                </div>

                {/* Subtitle tag */}
                <div className="text-[11px] font-semibold text-[#D6B34A] tracking-wider uppercase mb-1">
                  {feature.subtitle}
                </div>

                {/* Feature Title */}
                <h3
                  className="font-brand text-lg sm:text-xl font-bold text-[#FFFDF5] tracking-wide group-hover:text-[#E5C65A] transition-colors"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {feature.title}
                </h3>

                {/* Thin Gold Divider */}
                <div className="w-10 h-[1.5px] bg-[#D6B34A]/40 my-3 group-hover:w-16 transition-all" />

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#F6F0DD]/75 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="mt-6 pt-4 border-t border-[#D6B34A]/15 flex items-center justify-between text-[11px] font-medium text-[#FFF0BE]">
                <span>{feature.highlight}</span>
                <span className="text-[#D6B34A] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
