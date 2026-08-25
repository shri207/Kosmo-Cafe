import React, { useState } from 'react';
import { MILO_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { ItemDetailsModal } from '../components/ItemDetailsModal';
import { LionEmblem } from '../components/KosmoLogo';
import { Sparkles, Award, Star, Eye, ArrowRight, Flame, Heart, Coffee, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SignatureMiloPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const miloHighlights = [
    {
      step: '01',
      title: 'Double Malt Infusion',
      desc: 'We use premium imported malt extract brewed at exact low temperatures to extract maximum cocoa depth without burning the natural milk sugars.'
    },
    {
      step: '02',
      title: 'Velvet Flash Shake',
      desc: 'Shaken vigorously over crushed crystal ice with farm-fresh full-cream milk, creating a dense, micro-foamed velvety texture that coats the palate.'
    },
    {
      step: '03',
      title: 'Crunchy Dino Dust Cap',
      desc: 'Finished with a lavish mound of undissolved Milo crystals that remain crunchy on top and slowly dissolve into luscious chocolate fudge with every sip.'
    }
  ];

  return (
    <div id="signature-milo-page" className="min-h-screen bg-[#043C2A] text-[#F6F0DD] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-[#D6B34A]" />
            THE LEGENDARY RECIPE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F6F0DD] leading-tight">
            The Signature <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">
              Milo Experience
            </span>
          </h1>
          <div className="w-24 h-[2px] bg-[#D6B34A] mx-auto my-4" />
          <p className="text-base sm:text-lg text-[#F6F0DD]/85 leading-relaxed font-light">
            How a Southeast Asian nostalgic classic turned into Chennai’s favorite midnight chocolate obsession at 199 TTK Road, Alwarpet.
          </p>
        </div>

        {/* Featured Big Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#075C3B]/80 via-[#043C2A] to-[#075C3B]/80 border border-[#D6B34A]/40 p-6 sm:p-10 shadow-2xl mb-20 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Showcase Image */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative border border-[#D6B34A]/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=1200&q=85"
                  alt="Kosmo Cafe Signature Cold Milo in Alwarpet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#043C2A]/90 border border-[#D6B34A]/30 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#E5C65A] uppercase font-bold tracking-wider">Number 1 Bestseller</span>
                    <h3 className="text-sm font-bold text-[#FFFDF5]">Signature Cold Milo · ₹220</h3>
                  </div>
                  <button
                    onClick={() => setSelectedItem(MILO_ITEMS[0])}
                    className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#D6B34A] text-[#043C2A] hover:bg-[#FFF0BE] transition-colors"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-6">
              <span className="text-xs uppercase font-brand tracking-widest text-[#E5C65A] font-bold">
                CRAFTED WITH OBSESSION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFDF5] mt-1 mb-4">
                Rich, Malty, and Deeply Nostalgic
              </h2>
              <p className="text-sm text-[#F6F0DD]/80 leading-relaxed font-light">
                Milo is more than a drink at Kosmo — it’s an emotion. We don’t dilute with excess ice or thin milk. Every glass delivers a punchy malt aroma, deep cocoa warmth, and that unmistakable crunchy malt crown that patrons love eating with a spoon before diving into the cold shake.
              </p>

              <div className="grid grid-cols-2 gap-3 my-6">
                <div className="p-3 rounded-xl bg-[#043C2A]/80 border border-[#D6B34A]/25">
                  <div className="text-xs font-bold text-[#FFFDF5]">Whole Farm Milk</div>
                  <div className="text-[11px] text-[#F6F0DD]/60">Full cream richness & velvety body</div>
                </div>
                <div className="p-3 rounded-xl bg-[#043C2A]/80 border border-[#D6B34A]/25">
                  <div className="text-xs font-bold text-[#FFFDF5]">Extra Crunch Topping</div>
                  <div className="text-[11px] text-[#F6F0DD]/60">Generous heap of malt crystals</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/menu"
                  className="px-6 py-2.5 rounded-full font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn"
                >
                  EXPLORE FULL MENU
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#FFF0BE] border border-[#D6B34A]/40 hover:bg-[#075C3B]"
                >
                  Visit Cafe
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Milo Variations Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-brand tracking-widest text-[#E5C65A] font-bold">
              THE COMPLETE LINEUP
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#F6F0DD] mt-1">
              Choose Your Milo Mood
            </h2>
            <div className="w-16 h-[2px] bg-[#D6B34A] mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILO_ITEMS.map((item) => (
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
                  
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#043C2A]/90 border border-[#D6B34A]/40">
                    <span className="font-bold text-sm text-[#E5C65A]">₹{item.price}</span>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#D6B34A] text-[#043C2A]">
                      Signature
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#FFFDF5] group-hover:text-[#E5C65A] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#F6F0DD]/75 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D6B34A]/15 flex items-center justify-between">
                    <span className="text-[11px] text-[#D6B34A] font-semibold flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Details & Pairings
                    </span>
                    <span className="text-xs text-[#FFF0BE] font-bold">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Step Crafting Process */}
        <div className="rounded-3xl bg-[#022419] border border-[#D6B34A]/30 p-8 sm:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-brand tracking-widest text-[#E5C65A] font-bold">
              THE KOSMO TECHNIQUE
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#F6F0DD] mt-1">
              How We Perfect Every Glass
            </h2>
            <div className="w-16 h-[2px] bg-[#D6B34A] mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {miloHighlights.map((hl) => (
              <div
                key={hl.step}
                className="p-6 rounded-2xl bg-[#043C2A]/70 border border-[#D6B34A]/25 relative"
              >
                <div className="text-3xl font-serif font-bold text-[#E5C65A]/40 mb-2">
                  {hl.step}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#FFFDF5] mb-2">
                  {hl.title}
                </h3>
                <p className="text-xs text-[#F6F0DD]/80 leading-relaxed">
                  {hl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFDF5] mb-3">
            Taste the Real Deal Tonight
          </h3>
          <p className="text-xs sm:text-sm text-[#F6F0DD]/80 max-w-md mx-auto mb-6">
            Served ice-cold 7 days a week until 3:30 AM at 199 TTK Road, Alwarpet.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-7 py-3 rounded-full font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn"
            >
              VISIT ALWARPET COUNTER
            </Link>
            <a
              href="tel:09962303090"
              className="px-6 py-3 rounded-full text-xs font-semibold text-[#FFF0BE] border border-[#D6B34A]/40 hover:bg-[#075C3B]"
            >
              Call 099623 03090
            </a>
          </div>
        </div>

      </div>

      {/* Item Details Modal */}
      <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
