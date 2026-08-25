import React from 'react';
import { MapPin, Phone, Navigation, Clock, Car, Utensils, ShieldCheck, ExternalLink } from 'lucide-react';
import { LionEmblem } from './KosmoLogo';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="relative py-20 sm:py-28 bg-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-[#D6B34A]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D6B34A]" />
            CENTRAL ALWARPET LOCATION
          </span>
          <h2
            id="location-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6F0DD]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Find Us in <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Alwarpet</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D6B34A] to-transparent mx-auto my-4" />
          <p className="text-xs sm:text-sm text-[#F6F0DD]/80 font-light max-w-lg mx-auto">
            Conveniently situated on the prominent TTK Road stretch with curbside parking, outdoor seating, and express drive-through collection.
          </p>
        </div>

        {/* Location Info & Dark Map Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address, Phone, Badges, Operating Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#075C3B]/80 to-[#043C2A] border border-[#D6B34A]/35 shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <LionEmblem size={44} id="location-lion-icon" />
                <div>
                  <h3 className="font-brand font-bold text-xl text-[#FFFDF5] tracking-wider">
                    KOSMO CAFE
                  </h3>
                  <span className="text-xs text-[#E5C65A] tracking-widest font-semibold uppercase">
                    Alwarpet Hub · Chennai
                  </span>
                </div>
              </div>

              {/* Address detail */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-[#E5C65A] mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#D6B34A]">Address</h4>
                    <p className="text-sm text-[#FFFDF5] font-medium mt-0.5 leading-snug">
                      199, TTK Rd, Sriram Colony, <br />
                      Alwarpet, Chennai, Tamil Nadu 600018
                    </p>
                    <span className="text-[11px] text-[#F6F0DD]/60 block mt-1">
                      (Near Sriram Colony Junction / Music Academy stretch)
                    </span>
                  </div>
                </div>

                {/* Phone detail */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-[#E5C65A] mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#D6B34A]">Phone & Orders</h4>
                    <a
                      href="tel:09962303090"
                      className="text-base font-bold text-[#FFFDF5] hover:text-[#E5C65A] transition-colors mt-0.5 inline-block"
                    >
                      099623 03090
                    </a>
                    <span className="text-[11px] text-[#F6F0DD]/60 block mt-0.5">
                      Direct Counter Line for Curbside Dispatch
                    </span>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-[#E5C65A] mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#D6B34A]">Operating Hours</h4>
                    <p className="text-sm font-semibold text-[#FFFDF5] mt-0.5">
                      Monday – Sunday: 11:00 AM – 3:30 AM
                    </p>
                    <span className="text-[11px] text-[#E5C65A] font-semibold block mt-0.5">
                      Open late night 7 days a week
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Badges */}
              <div className="mt-8 pt-6 border-t border-[#D6B34A]/20 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-[#043C2A]/80 border border-[#D6B34A]/20">
                  <Utensils className="w-4 h-4 text-[#E5C65A] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#FFFDF5]">Dine-In</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#043C2A]/80 border border-[#D6B34A]/20">
                  <Car className="w-4 h-4 text-[#E5C65A] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#FFFDF5]">Drive-Thru</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#043C2A]/80 border border-[#D6B34A]/20">
                  <ShieldCheck className="w-4 h-4 text-[#E5C65A] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#FFFDF5]">Delivery</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-3">
              <a
                id="btn-location-directions"
                href="https://maps.google.com/?q=Kosmo+Cafe+199+TTK+Road+Alwarpet+Chennai+600018"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full font-brand text-xs font-bold tracking-wider uppercase gold-gradient-btn text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation className="w-3.5 h-3.5 text-[#043C2A]" />
                GET DIRECTIONS
              </a>
              <a
                id="btn-location-call"
                href="tel:09962303090"
                className="flex-1 py-3 px-4 rounded-full font-brand text-xs font-semibold tracking-wider uppercase bg-[#043C2A] hover:bg-[#075C3B] text-[#FFF0BE] border border-[#D6B34A]/40 text-center flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6B34A]" />
                CALL KOSMO
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dark-Styled Map Showcase */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-[#042419] border border-[#D6B34A]/30 relative shadow-2xl flex flex-col min-h-[380px]">
            
            {/* Custom Styled Map Canvas Visual */}
            <div className="relative w-full flex-1 bg-[#031C13] overflow-hidden min-h-[300px] flex items-center justify-center p-6">
              
              {/* Stylized Chennai Map Grid Lines */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#075C3B_1px,transparent_1px),linear-gradient(to_bottom,#075C3B_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              {/* Road Curves Representation */}
              <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none">
                {/* TTK Road main corridor */}
                <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="#D6B34A" strokeWidth="6" />
                <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="#075C3B" strokeWidth="3" />
                
                {/* Cross Roads: Eldams Rd & Sriram Colony */}
                <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="#075C3B" strokeWidth="3" strokeDasharray="6 4" />
                <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#075C3B" strokeWidth="2" />
              </svg>

              {/* Landmarks Pills */}
              <div className="absolute top-8 left-8 p-2 rounded-lg bg-[#043C2A]/90 border border-[#D6B34A]/25 text-[10px] font-semibold text-[#F6F0DD]/80">
                To Mount Road / Anna Salai ↑
              </div>
              <div className="absolute bottom-8 right-8 p-2 rounded-lg bg-[#043C2A]/90 border border-[#D6B34A]/25 text-[10px] font-semibold text-[#F6F0DD]/80">
                To Mylapore / Adyar ↓
              </div>

              {/* Central Map Pin Target for Kosmo Cafe */}
              <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#D6B34A] flex items-center justify-center shadow-[0_0_30px_rgba(214,179,74,0.6)] border-2 border-[#FFF0BE]">
                    <LionEmblem size={44} id="map-pin-lion" />
                  </div>
                  <div className="w-3 h-3 bg-[#D6B34A] rotate-45 mx-auto -mt-1.5" />
                </div>

                <div className="mt-3 px-4 py-2 rounded-xl bg-[#043C2A]/95 border border-[#D6B34A] text-center shadow-2xl backdrop-blur-md">
                  <span className="font-brand font-bold text-xs text-[#FFF0BE] block">
                    KOSMO CAFE
                  </span>
                  <span className="text-[10px] text-[#D6B34A] font-semibold">
                    199 TTK Road, Alwarpet
                  </span>
                </div>
              </div>
            </div>

            {/* Map Action Banner */}
            <div className="p-4 bg-[#043C2A] border-t border-[#D6B34A]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-[#F6F0DD]/80 font-medium">Live GPS Navigation Ready</span>
              </div>
              <a
                href="https://maps.google.com/?q=Kosmo+Cafe+199+TTK+Road+Alwarpet+Chennai+600018"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5C65A] hover:text-[#FFF0BE] transition-colors"
              >
                Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
