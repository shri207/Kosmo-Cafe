import React from 'react';
import { LionEmblem } from './KosmoLogo';
import { MapPin, Utensils, Coffee, Car, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-[#D6B34A]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atmospheric Cafe Image with Gold Borders */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-3 bg-gradient-to-br from-[#D6B34A]/40 via-[#075C3B] to-[#043C2A] border border-[#D6B34A]/40 shadow-2xl">
              <div className="rounded-2xl overflow-hidden relative aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
                  alt="Kosmo Cafe Alwarpet Warm Ambience & Seating"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A]/80 via-transparent to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#043C2A]/90 border border-[#D6B34A]/30 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#075C3B] border border-[#D6B34A] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#E5C65A]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#E5C65A] font-semibold tracking-wider uppercase">Alwarpet Landmark</div>
                      <div className="text-sm font-bold text-[#FFFDF5]">199, TTK Road, Chennai</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D6B34A] bg-[#075C3B] px-2.5 py-1 rounded-full border border-[#D6B34A]/30">
                    Open Late
                  </span>
                </div>
              </div>
            </div>

            {/* Corner Decorative Lion Seal */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="p-2 rounded-full bg-[#043C2A] border border-[#D6B34A] shadow-2xl">
                <LionEmblem size={70} id="about-lion-seal" />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Brand Story & Service Options */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-4">
              OUR CHENNAI STORY
            </span>

            <h2
              id="about-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6F0DD] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              More Than <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Just a Cafe</span>
            </h2>

            <div className="w-20 h-[2px] bg-[#D6B34A] my-4" />

            <p className="text-base sm:text-lg text-[#F6F0DD]/90 leading-relaxed font-normal">
              Kosmo Cafe is a lively neighbourhood cafe in the heart of Alwarpet, Chennai, built around great drinks, comfort food and a place to satisfy those late-night cravings.
            </p>

            <p className="mt-3 text-sm sm:text-base text-[#F6F0DD]/75 leading-relaxed font-light">
              Nestled along TTK Road, Kosmo blends the energy of youthful Chennai nightlife with the warmth of European bistro aesthetics. Whether you’re stopping by for a fast drive-through Cold Milo on your way home or sitting outdoors under the cafe lights with friends sharing peri peri wings, Kosmo is your everyday sanctuary.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-3.5 w-full my-6">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25">
                <CheckCircle className="w-4 h-4 text-[#E5C65A] flex-shrink-0" />
                <span className="text-xs sm:text-sm text-[#F6F0DD] font-medium">Cozy Dine-In Ambience</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25">
                <Car className="w-4 h-4 text-[#E5C65A] flex-shrink-0" />
                <span className="text-xs sm:text-sm text-[#F6F0DD] font-medium">Fast Drive-Through Pickup</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25">
                <Clock className="w-4 h-4 text-[#E5C65A] flex-shrink-0" />
                <span className="text-xs sm:text-sm text-[#F6F0DD] font-medium">Late-Night Service (3:30 AM)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25">
                <ShieldCheck className="w-4 h-4 text-[#E5C65A] flex-shrink-0" />
                <span className="text-xs sm:text-sm text-[#F6F0DD] font-medium">Hygienic Express Delivery</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#menu"
                className="px-7 py-3 rounded-full font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn"
              >
                VIEW FULL MENU
              </a>
              <a
                href="#location"
                className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider text-[#FFF0BE] hover:text-white border border-[#D6B34A]/40 bg-[#075C3B]/40 hover:bg-[#075C3B] transition-all"
              >
                VISIT ALWARPET
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
