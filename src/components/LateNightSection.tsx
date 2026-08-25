import React from 'react';
import { Moon, Sparkles, Clock, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { LionEmblem } from './KosmoLogo';

export const LateNightSection: React.FC = () => {
  return (
    <section
      id="late-night"
      className="relative py-24 sm:py-32 bg-[#022419] text-[#F6F0DD] overflow-hidden border-t border-b border-[#D6B34A]/30"
    >
      {/* Dark Night Atmosphere Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Kosmo Cafe Chennai Late Night Atmosphere"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022419] via-[#043C2A]/85 to-[#022419]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#022419_80%)]" />
      </div>

      {/* Decorative Floating Moon and Lion Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#075C3B]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Neon Late Night Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#043C2A] border border-[#D6B34A] text-[#FFF0BE] text-xs font-brand tracking-widest uppercase shadow-[0_0_20px_rgba(214,179,74,0.3)] mb-6">
          <Moon className="w-3.5 h-3.5 text-[#E5C65A] animate-pulse" />
          <span>OPEN LATE · 11:00 AM – 3:30 AM</span>
        </div>

        {/* Dramatic Headline */}
        <h2
          id="late-night-title"
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#F6F0DD] tracking-tight max-w-3xl mx-auto leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Cravings Don't Have <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">
            a Curfew.
          </span>
        </h2>

        {/* Gold Ornament Line */}
        <div className="w-36 h-[2px] bg-gradient-to-r from-transparent via-[#D6B34A] to-transparent mx-auto my-6" />

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#F6F0DD]/85 max-w-2xl mx-auto font-light leading-relaxed">
          From evening hangouts to late-night bites, Kosmo keeps the cravings going. Hot burgers, steaming cheesy fries, and icy thick Milo when the rest of the city sleeps.
        </p>

        {/* Highlight Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-10 mb-10 text-left">
          <div className="p-4 rounded-2xl bg-[#043C2A]/80 border border-[#D6B34A]/25 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[#E5C65A] text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" /> Timings
            </div>
            <div className="text-sm font-semibold text-[#FFFDF5] mt-1">Open 7 Days a Week</div>
            <div className="text-xs text-[#F6F0DD]/70">Late night kitchen active till 3:30 AM</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#043C2A]/80 border border-[#D6B34A]/25 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[#E5C65A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Night Drive-Through
            </div>
            <div className="text-sm font-semibold text-[#FFFDF5] mt-1">Express Car Delivery</div>
            <div className="text-xs text-[#F6F0DD]/70">Park outside TTK Road & collect in 10 mins</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#043C2A]/80 border border-[#D6B34A]/25 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[#E5C65A] text-xs font-bold uppercase tracking-wider">
              <UtensilsCrossed className="w-4 h-4" /> Full Night Menu
            </div>
            <div className="text-sm font-semibold text-[#FFFDF5] mt-1">Wings, Milo, Burgers</div>
            <div className="text-xs text-[#F6F0DD]/70">No limited night menus here!</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-brand text-xs sm:text-sm font-bold tracking-widest uppercase gold-gradient-btn flex items-center justify-center gap-2 shadow-2xl"
          >
            ORDER LATE NIGHT NOW
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:09962303090"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-brand text-xs sm:text-sm font-semibold tracking-widest uppercase bg-[#075C3B]/80 hover:bg-[#075C3B] text-[#FFF0BE] border border-[#D6B34A]/40 transition-all shadow-lg"
          >
            CALL FOR MIDNIGHT PICKUP
          </a>
        </div>

      </div>
    </section>
  );
};
