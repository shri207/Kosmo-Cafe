import React from 'react';
import { LionEmblem } from '../components/KosmoLogo';
import { MapPin, Utensils, Coffee, Car, ShieldCheck, Clock, CheckCircle, Heart, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div id="about-page" className="min-h-screen bg-[#043C2A] text-[#F6F0DD] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
            <LionEmblem size={18} id="about-page-lion-badge" />
            OUR CHENNAI STORY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F6F0DD] leading-tight">
            More Than <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">
              Just a Cafe
            </span>
          </h1>
          <div className="w-24 h-[2px] bg-[#D6B34A] mx-auto my-4" />
          <p className="text-base sm:text-lg text-[#F6F0DD]/85 leading-relaxed font-light">
            Born out of a love for chilled malt drinks, sizzling comfort food, and Chennai's electric midnight energy.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Visual Ambiance Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-3 bg-gradient-to-br from-[#D6B34A]/40 via-[#075C3B] to-[#043C2A] border border-[#D6B34A]/40 shadow-2xl">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
                  alt="Kosmo Cafe Alwarpet Warm Ambience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#043C2A]/90 border border-[#D6B34A]/30 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#075C3B] border border-[#D6B34A] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#E5C65A]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#E5C65A] font-semibold uppercase">Alwarpet Landmark</div>
                      <div className="text-sm font-bold text-[#FFFDF5]">199, TTK Road, Chennai</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D6B34A] bg-[#075C3B] px-2.5 py-1 rounded-full border border-[#D6B34A]/30">
                    Open Late
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFDF5] mb-4">
              Where TTK Road Meets Midnight Conversations
            </h2>
            <p className="text-sm sm:text-base text-[#F6F0DD]/85 leading-relaxed font-light mb-4">
              Kosmo Cafe is a vibrant neighbourhood cafe in the heart of Alwarpet, Chennai, built around great drinks, comfort food and a cozy place to satisfy those late-night cravings.
            </p>
            <p className="text-sm sm:text-base text-[#F6F0DD]/80 leading-relaxed font-light mb-6">
              Nestled along TTK Road, Kosmo blends the energy of youthful Chennai nightlife with the warmth of European bistro aesthetics. Whether you’re stopping by for a fast drive-through Cold Milo on your way home or sitting outdoors under the cafe lights with friends sharing peri peri wings, Kosmo is your everyday sanctuary.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25">
                <CheckCircle className="w-4 h-4 text-[#E5C65A] mb-1" />
                <span className="text-xs font-bold text-[#FFFDF5] block">Cozy Dine-In</span>
                <span className="text-[11px] text-[#F6F0DD]/70">Outdoor turf & warm indoor seating</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25">
                <Car className="w-4 h-4 text-[#E5C65A] mb-1" />
                <span className="text-xs font-bold text-[#FFFDF5] block">Fast Drive-Thru</span>
                <span className="text-[11px] text-[#F6F0DD]/70">Quick curbside car collection</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25">
                <Clock className="w-4 h-4 text-[#E5C65A] mb-1" />
                <span className="text-xs font-bold text-[#FFFDF5] block">Open Till 3:30 AM</span>
                <span className="text-[11px] text-[#F6F0DD]/70">7 days a week late night service</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25">
                <ShieldCheck className="w-4 h-4 text-[#E5C65A] mb-1" />
                <span className="text-xs font-bold text-[#FFFDF5] block">Strictly Segregated</span>
                <span className="text-[11px] text-[#F6F0DD]/70">Separate veg & non-veg preparation</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#022419] border border-[#D6B34A]/30 mb-20 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#E5C65A]">4.3 ★</div>
            <div className="text-xs text-[#F6F0DD]/70 mt-1">Google Rating (1,923+ Reviews)</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#E5C65A]">3:30 AM</div>
            <div className="text-xs text-[#F6F0DD]/70 mt-1">Midnight Kitchen Closing</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#E5C65A]">₹200–₹400</div>
            <div className="text-xs text-[#F6F0DD]/70 mt-1">Accessible Price Per Person</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#E5C65A]">100%</div>
            <div className="text-xs text-[#F6F0DD]/70 mt-1">Freshly Cooked to Order</div>
          </div>
        </div>

        {/* Kitchen Ethics & Quality */}
        <div className="rounded-3xl bg-[#075C3B]/40 border border-[#D6B34A]/30 p-8 sm:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs uppercase font-brand tracking-widest text-[#E5C65A] font-bold">
              OUR KITCHEN PHILOSOPHY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFDF5] mt-1 mb-4">
              Real Ingredients, No Compromise
            </h2>
            <p className="text-xs sm:text-sm text-[#F6F0DD]/85 leading-relaxed font-light mb-8">
              We believe comfort food should feel indulgent, satisfying, and prepared with uncompromising hygiene. We use whole farm dairy milk for our drinks, unadulterated spice rubs for our chicken wings and burgers, and dedicated oil fryers to guarantee pure vegetarian integrity for all our veg specialties.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/menu"
                className="px-7 py-3 rounded-full font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn"
              >
                VIEW THE MENU
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full text-xs font-semibold text-[#FFF0BE] border border-[#D6B34A]/40 hover:bg-[#075C3B]"
              >
                VISIT US IN ALWARPET
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
