import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BEST_SELLERS } from '../data/menuData';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

export const BestSellers: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="bestsellers"
      className="relative py-20 sm:py-28 bg-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-[#D6B34A]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-2">
              <Star className="w-3.5 h-3.5 fill-[#D6B34A] text-[#D6B34A]" />
              CHENNAI’S TOP PICKS
            </span>
            <h2
              id="bestsellers-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6F0DD]"
            >
              Kosmo <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Favourites</span>
            </h2>
            <div className="w-20 h-[2px] bg-[#D6B34A] my-3" />
            <p className="text-xs sm:text-sm text-[#F6F0DD]/75 font-light">
              The iconic dishes and drinks ordered thousands of times each month across Chennai.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-[#075C3B] border border-[#D6B34A]/30 text-[#FFF0BE] hover:bg-[#D6B34A] hover:text-[#043C2A] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-[#075C3B] border border-[#D6B34A]/30 text-[#FFF0BE] hover:bg-[#D6B34A] hover:text-[#043C2A] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
        >
          {BEST_SELLERS.map((item) => (
            <div
              key={item.id}
              id={`bestseller-item-${item.id}`}
              className="min-w-[280px] sm:min-w-[340px] max-w-[340px] rounded-2xl bg-gradient-to-b from-[#075C3B]/80 to-[#043C2A]/95 border border-[#D6B34A]/30 hover:border-[#D6B34A] shadow-xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 snap-start"
            >
              {/* Image banner */}
              <div className="relative h-48 w-full overflow-hidden bg-[#042A1D]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A] via-transparent to-[#043C2A]/30" />

                {/* Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D6B34A] text-[#043C2A] shadow-sm">
                    {item.isSignature ? 'Signature' : 'Popular'}
                  </span>
                  <div
                    className={`w-3.5 h-3.5 rounded-xs border p-0.5 flex items-center justify-center bg-[#043C2A]/90 ${
                      item.isVeg ? 'border-emerald-500' : 'border-red-500'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#043C2A]/90 border border-[#D6B34A]/40">
                  <span className="font-bold text-base text-[#E5C65A]">₹{item.price}</span>
                </div>
              </div>

              {/* Item Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#FFFDF5] group-hover:text-[#E5C65A] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <div className="w-10 h-[1px] bg-[#D6B34A]/30 my-2" />
                  <p className="text-xs text-[#F6F0DD]/75 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Footer link to menu */}
                <div className="mt-5 pt-3 border-t border-[#D6B34A]/15 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-[#D6B34A] font-semibold">
                    {item.category.toUpperCase()}
                  </span>
                  <Link
                    to="/menu"
                    className="text-xs font-semibold text-[#FFF0BE] hover:text-[#E5C65A] flex items-center gap-1 transition-colors"
                  >
                    <span>View in Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
