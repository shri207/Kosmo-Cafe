import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhyKosmo } from '../components/WhyKosmo';
import { LateNightSection } from '../components/LateNightSection';
import { BEST_SELLERS } from '../data/menuData';
import { MenuItem } from '../types';
import { ItemDetailsModal } from '../components/ItemDetailsModal';
import { LionEmblem } from '../components/KosmoLogo';
import { Sparkles, Star, Utensils, Award, ArrowRight, Eye, Phone, MapPin, Clock, Quote } from 'lucide-react';
import { REVIEWS_LIST } from '../data/reviewsData';

export const HomePage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <div id="home-page" className="min-h-screen bg-[#043C2A] text-[#F6F0DD]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Signature Milo Feature Spotlight */}
      <section className="relative py-20 sm:py-28 bg-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-b border-[#D6B34A]/25">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <LionEmblem size={360} id="home-milo-bg-lion" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image banner */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl p-3 bg-gradient-to-br from-[#D6B34A]/40 via-[#075C3B] to-[#043C2A] border border-[#D6B34A]/40 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=1000&q=85"
                    alt="Kosmo Signature Cold Milo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A]/90 via-transparent to-[#043C2A]/20" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#043C2A]/90 border border-[#D6B34A] text-xs font-brand tracking-widest text-[#FFF0BE] shadow-xl">
                      <Award className="w-3.5 h-3.5 text-[#D6B34A]" /> CHENNAI CULT FAVORITE
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3.5 rounded-xl bg-[#043C2A]/90 border border-[#D6B34A]/30 backdrop-blur-md">
                    <div>
                      <div className="text-[11px] text-[#D6B34A] uppercase font-semibold">The Original Formula</div>
                      <div className="text-base font-bold text-[#FFFDF5]">Signature Cold Milo</div>
                    </div>
                    <span className="text-xl font-bold text-[#E5C65A]">₹220</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-semibold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B34A]" />
                THE CULT PHENOMENON
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F6F0DD] font-bold leading-tight font-serif">
                The Cold Milo Everyone <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">
                  Talks About.
                </span>
              </h2>

              <div className="w-20 h-[2px] bg-[#D6B34A] my-4" />

              <p className="text-base sm:text-lg text-[#F6F0DD]/90 leading-relaxed">
                Rich, creamy, chocolatey and seriously addictive. Our signature Cold Milo has become one of the top reasons people visit TTK Road at midnight.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#F6F0DD]/75 leading-relaxed">
                Prepared with double-strength whole milk malt infusion, shaken over ice, and crowned with a heap of crunchy Milo crystals that slowly melt into molten chocolate fudge.
              </p>

              {/* Quick stats pills */}
              <div className="grid grid-cols-3 gap-2.5 w-full my-6">
                <div className="p-3 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25 text-center">
                  <span className="text-[10px] uppercase font-semibold text-[#E5C65A] block">Texture</span>
                  <span className="text-xs font-bold text-[#FFF0BE] mt-0.5 block">Velvet & Crunch</span>
                </div>
                <div className="p-3 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25 text-center">
                  <span className="text-[10px] uppercase font-semibold text-[#E5C65A] block">Popularity</span>
                  <span className="text-xs font-bold text-[#FFF0BE] mt-0.5 block">★ 4.9 / 5.0</span>
                </div>
                <div className="p-3 rounded-xl bg-[#075C3B]/50 border border-[#D6B34A]/25 text-center">
                  <span className="text-[10px] uppercase font-semibold text-[#E5C65A] block">Serving</span>
                  <span className="text-xs font-bold text-[#FFF0BE] mt-0.5 block">Ice Chilled</span>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/signature-milo"
                  className="px-7 py-3 rounded-full font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn flex items-center gap-2 shadow-xl"
                >
                  DISCOVER MILO RANGE
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/menu"
                  className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider text-[#FFF0BE] hover:text-white border border-[#D6B34A]/40 bg-[#075C3B]/40 hover:bg-[#075C3B] transition-all"
                >
                  View Full Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers Showcase */}
      <section className="relative py-20 sm:py-28 bg-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-[#D6B34A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-2">
                <Star className="w-3.5 h-3.5 fill-[#D6B34A] text-[#D6B34A]" />
                POPULAR CRAVINGS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6F0DD] font-serif">
                Chennai's Top <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Favorites</span>
              </h2>
              <div className="w-20 h-[2px] bg-[#D6B34A] my-3" />
              <p className="text-xs sm:text-sm text-[#F6F0DD]/75 font-light">
                Explore the highest-rated dishes and drinks at Kosmo Alwarpet.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#075C3B] hover:bg-[#087044] text-[#FFF0BE] border border-[#D6B34A]/40 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Utensils className="w-4 h-4 text-[#D6B34A]" />
              View Complete Menu ({BEST_SELLERS.length}+ Items) →
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BEST_SELLERS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group rounded-2xl bg-gradient-to-b from-[#075C3B]/80 to-[#043C2A]/95 border border-[#D6B34A]/30 hover:border-[#D6B34A] shadow-xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-44 w-full overflow-hidden bg-[#042A1D]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A] via-transparent to-[#043C2A]/30" />

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <div
                      className={`w-4 h-4 rounded-xs border p-0.5 flex items-center justify-center bg-[#043C2A]/90 ${
                        item.isVeg ? 'border-emerald-500' : 'border-red-500'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`} />
                    </div>
                    {item.isSignature && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#D6B34A] text-[#043C2A]">
                        Signature
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#043C2A]/90 border border-[#D6B34A]/40">
                    <span className="font-bold text-sm text-[#E5C65A]">₹{item.price}</span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#FFFDF5] group-hover:text-[#E5C65A] transition-colors leading-snug line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#F6F0DD]/75 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D6B34A]/15 flex items-center justify-between">
                    <span className="text-[11px] text-[#D6B34A] font-semibold flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> View Details
                    </span>
                    <span className="text-xs text-[#FFF0BE] font-bold">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Kosmo Pillars */}
      <WhyKosmo />

      {/* 5. Late Night Atmosphere */}
      <LateNightSection />

      {/* 6. Customer Love Teaser */}
      <section className="relative py-20 bg-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-[#D6B34A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
              <Star className="w-3.5 h-3.5 fill-[#D6B34A] text-[#D6B34A]" />
              GOOGLE RATING 4.3 ★ (1,923 REVIEWS)
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F6F0DD]">
              What Chennai <span className="italic text-[#E5C65A]">Says</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#D6B34A] mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_LIST.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-[#075C3B]/50 border border-[#D6B34A]/25 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#E5C65A] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E5C65A] text-[#E5C65A]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#D6B34A]/40 mb-1 rotate-180" />
                  <p className="text-xs sm:text-sm text-[#F6F0DD]/90 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#D6B34A]/15 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#FFFDF5]">{rev.author}</span>
                  <span className="text-[#D6B34A] text-[11px]">{rev.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#E5C65A] hover:text-[#FFF0BE] uppercase tracking-wider border-b border-[#D6B34A] pb-1"
            >
              Read All Verified Google Reviews & Press Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Location & Visit Invitation Banner */}
      <section className="relative py-16 bg-gradient-to-r from-[#022419] via-[#043C2A] to-[#022419] border-t border-[#D6B34A]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D6B34A] tracking-wider uppercase mb-2">
              <MapPin className="w-4 h-4" /> 199 TTK Road, Alwarpet, Chennai
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FFFDF5]">
              Join Us at Kosmo Cafe
            </h3>
            <p className="text-xs sm:text-sm text-[#F6F0DD]/75 mt-1">
              Open 7 days a week from 11:00 AM till 3:30 AM. Outdoor garden seating & curbside pickup available.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn shadow-lg"
            >
              GET DIRECTIONS & HOURS
            </Link>
            <a
              href="tel:09962303090"
              className="px-5 py-3 rounded-full text-xs font-semibold text-[#FFF0BE] border border-[#D6B34A]/40 bg-[#075C3B]/60 hover:bg-[#075C3B] flex items-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6B34A]" />
              099623 03090
            </a>
          </div>
        </div>
      </section>

      {/* Item Details Modal */}
      <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
