import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Award, ArrowRight } from 'lucide-react';
import { LionEmblem } from './KosmoLogo';

export const SignatureMilo: React.FC = () => {
  return (
    <section
      id="signature-milo"
      className="relative py-20 sm:py-28 bg-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-b border-[#D6B34A]/25"
    >
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none">
        <LionEmblem size={380} id="milo-bg-lion-left" />
      </div>
      <div className="absolute -right-24 bottom-10 w-96 h-96 opacity-10 pointer-events-none">
        <LionEmblem size={380} id="milo-bg-lion-right" />
      </div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#075C3B]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-3xl p-3 sm:p-4 bg-gradient-to-br from-[#D6B34A]/30 via-[#075C3B] to-[#043C2A] border border-[#D6B34A]/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=1000&q=85"
                  alt="Kosmo Signature Cold Milo with Crunchy Malt Dust"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A]/90 via-transparent to-[#043C2A]/20" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#043C2A]/90 border border-[#D6B34A] text-xs font-brand tracking-widest text-[#FFF0BE] shadow-xl backdrop-blur-md">
                    <Award className="w-3.5 h-3.5 text-[#D6B34A]" />
                    KOSMO SIGNATURE
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3.5 rounded-xl bg-[#043C2A]/90 border border-[#D6B34A]/30 backdrop-blur-md">
                  <div>
                    <div className="text-[11px] text-[#D6B34A] tracking-wider uppercase font-semibold">The Original Blend</div>
                    <div className="text-lg font-bold text-[#FFFDF5]">Signature Cold Milo</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-extrabold text-[#E5C65A]">₹220</span>
                    <div className="text-[10px] text-[#F6F0DD]/70">Best enjoyed chilled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B34A]" />
              THE PHENOMENON
            </div>

            <h2
              id="signature-milo-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F6F0DD] font-bold leading-tight font-serif"
            >
              The Cold Milo Everyone <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A] italic">Talks About.</span>
            </h2>

            <div className="w-24 h-[2px] bg-[#D6B34A] my-5" />

            <p className="text-base sm:text-lg text-[#F6F0DD]/90 leading-relaxed font-normal">
              Rich, creamy, chocolatey and seriously addictive. Our signature Cold Milo has become one of the reasons people keep coming back to TTK Road at midnight.
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#F6F0DD]/75 leading-relaxed font-light">
              Brewed fresh using double-strength whole milk malt infusion, shaken over crystal ice, and crowned with a generous heap of raw, crunchy Milo crystals that slowly melt into molten chocolate fudge.
            </p>

            <div className="grid grid-cols-3 gap-3 w-full my-6">
              <div className="p-3 rounded-xl bg-[#075C3B]/60 border border-[#D6B34A]/25 text-center">
                <span className="block text-xs font-semibold text-[#E5C65A] uppercase tracking-wider">Texture</span>
                <span className="text-xs sm:text-sm text-[#F6F0DD] font-medium mt-0.5 block">Velvet & Crunch</span>
              </div>
              <div className="p-3 rounded-xl bg-[#075C3B]/60 border border-[#D6B34A]/25 text-center">
                <span className="block text-xs font-semibold text-[#E5C65A] uppercase tracking-wider">Origin</span>
                <span className="text-xs sm:text-sm text-[#F6F0DD] font-medium mt-0.5 block">Kosmo Alwarpet</span>
              </div>
              <div className="p-3 rounded-xl bg-[#075C3B]/60 border border-[#D6B34A]/25 text-center">
                <span className="block text-xs font-semibold text-[#E5C65A] uppercase tracking-wider">Fan Score</span>
                <span className="text-xs sm:text-sm text-[#F6F0DD] font-medium mt-0.5 block">★ 4.9 / 5.0</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full">
              <Link
                to="/signature-milo"
                className="px-8 py-3.5 rounded-full font-brand text-xs sm:text-sm font-bold tracking-widest uppercase gold-gradient-btn flex items-center justify-center gap-2.5 shadow-xl"
              >
                <span>EXPLORE ALL MILO FLAVORS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/menu"
                className="px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider text-[#FFF0BE] hover:text-[#FFF] border border-[#D6B34A]/40 bg-[#075C3B]/60 hover:bg-[#075C3B] transition-all"
              >
                View Full Menu
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
