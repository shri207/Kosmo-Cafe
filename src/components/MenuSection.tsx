import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../data/menuData';
import { MenuCategory, MenuItem } from '../types';
import { Search, Sparkles, Flame, Eye, Info } from 'lucide-react';
import { ItemDetailsModal } from './ItemDetailsModal';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'ALL' | 'VEG' | 'NON_VEG'>('ALL');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories: { id: MenuCategory | 'ALL'; label: string }[] = [
    { id: 'ALL', label: 'All Cravings' },
    { id: 'MILO_SPECIALS', label: 'Signature Milo Range' },
    { id: 'BEVERAGES', label: 'Thickshakes & Coolers' },
    { id: 'VEGETARIAN', label: 'Vegetarian Delights' },
    { id: 'NON_VEGETARIAN', label: 'Non-Veg & Grills' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'ALL' ? true : item.category === activeCategory;

      const matchesDiet =
        dietFilter === 'ALL'
          ? true
          : dietFilter === 'VEG'
          ? item.isVeg
          : !item.isVeg;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(query)));

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [activeCategory, dietFilter, searchQuery]);

  return (
    <section
      id="menu"
      className="relative py-20 sm:py-28 bg-[#043C2A] text-[#F6F0DD] overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial from-[#075C3B]/40 via-transparent to-[#043C2A] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B34A]" />
            ARTISANAL RECIPES & CRAVINGS
          </span>
          <h2
            id="menu-section-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6F0DD] tracking-tight"
          >
            Something for <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Every Craving</span>
          </h2>
          <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#D6B34A] to-transparent mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#F6F0DD]/80 font-light max-w-xl mx-auto">
            From Chennai’s richest chilled malt Milo to sizzled burgers, loaded fries, and midnight pastas, prepared fresh to order.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div
          id="menu-filter-bar"
          className="p-4 sm:p-5 rounded-2xl bg-[#075C3B]/50 border border-[#D6B34A]/30 backdrop-blur-md mb-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#D6B34A] text-[#043C2A] font-bold shadow-md'
                      : 'bg-[#043C2A]/60 text-[#F6F0DD]/80 hover:bg-[#075C3B] hover:text-[#FFF0BE]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search & Veg/Non-veg Toggles */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="flex items-center p-1 rounded-full bg-[#043C2A]/80 border border-[#D6B34A]/25">
              <button
                type="button"
                onClick={() => setDietFilter('ALL')}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                  dietFilter === 'ALL' ? 'bg-[#D6B34A] text-[#043C2A]' : 'text-[#F6F0DD]/70 hover:text-[#F6F0DD]'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('VEG')}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                  dietFilter === 'VEG' ? 'bg-emerald-600 text-white' : 'text-[#F6F0DD]/70 hover:text-emerald-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Veg
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('NON_VEG')}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                  dietFilter === 'NON_VEG' ? 'bg-red-700 text-white' : 'text-[#F6F0DD]/70 hover:text-red-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                Non-Veg
              </button>
            </div>

            <div className="relative flex-1 md:w-48">
              <Search className="w-4 h-4 text-[#D6B34A] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search food & drinks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-full bg-[#043C2A]/80 border border-[#D6B34A]/25 text-xs text-[#F6F0DD] placeholder-[#F6F0DD]/40 focus:outline-none focus:border-[#D6B34A]"
              />
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#075C3B]/20 rounded-2xl border border-[#D6B34A]/20">
            <p className="text-base text-[#FFF0BE]">No items match your selected filter.</p>
            <button
              onClick={() => {
                setActiveCategory('ALL');
                setDietFilter('ALL');
                setSearchQuery('');
              }}
              className="mt-3 px-5 py-2 rounded-full text-xs font-semibold bg-[#D6B34A] text-[#043C2A]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-card-${item.id}`}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl bg-gradient-to-b from-[#075C3B]/80 to-[#043C2A]/90 border border-[#D6B34A]/30 hover:border-[#D6B34A] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Card Image */}
                <div className="relative h-48 w-full overflow-hidden bg-[#042A1D]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A] via-transparent to-[#043C2A]/30" />

                  {/* Veg / Non-veg Emblem */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <div
                      className={`w-4 h-4 rounded-sm border p-0.5 flex items-center justify-center bg-[#043C2A]/90 ${
                        item.isVeg ? 'border-emerald-500' : 'border-red-500'
                      }`}
                      title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                        }`}
                      />
                    </div>
                    {item.isSignature && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D6B34A] text-[#043C2A] shadow-sm">
                        Signature
                      </span>
                    )}
                    {item.isBestseller && !item.isSignature && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#087044] text-[#FFF0BE] border border-[#D6B34A]/40">
                        Bestseller
                      </span>
                    )}
                  </div>

                  {/* Price Pill Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#043C2A]/90 border border-[#D6B34A]/40 backdrop-blur-md">
                    <span className="font-bold text-base text-[#E5C65A]">₹{item.price}</span>
                  </div>

                  {/* Quick Preview Hover Overlay */}
                  <div className="absolute inset-0 bg-[#075C3B]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FFF0BE] bg-[#043C2A]/80 px-3 py-1.5 rounded-full border border-[#D6B34A]/40">
                      <Eye className="w-3.5 h-3.5 text-[#D6B34A]" /> View Details
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif font-bold text-lg text-[#FFFDF5] group-hover:text-[#E5C65A] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      {item.spiceLevel && item.spiceLevel !== 'None' && (
                        <span
                          className="flex-shrink-0 flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/40"
                        >
                          <Flame className="w-3 h-3 text-red-400" />
                          {item.spiceLevel}
                        </span>
                      )}
                    </div>

                    <div className="w-12 h-[1px] bg-[#D6B34A]/40 my-2.5" />

                    <p className="text-xs text-[#F6F0DD]/75 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-5 pt-3 border-t border-[#D6B34A]/20 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 flex-wrap">
                      {item.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-[#D6B34A]/90 bg-[#043C2A] px-2 py-0.5 rounded border border-[#D6B34A]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                      }}
                      className="flex items-center gap-1 text-xs font-semibold text-[#FFF0BE] hover:text-[#E5C65A] underline underline-offset-2"
                    >
                      <Info className="w-3.5 h-3.5 text-[#D6B34A]" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Details Modal */}
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />

        {/* Full Menu Note / Location Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 rounded-2xl bg-[#075C3B]/60 border border-[#D6B34A]/30">
            <span className="text-xs sm:text-sm text-[#F6F0DD]/90">
              Ready to taste? Freshly prepared and served late night till 3:30 AM.
            </span>
            <Link
              to="/contact"
              className="text-xs font-bold text-[#E5C65A] hover:text-[#FFF0BE] underline underline-offset-4 tracking-wider"
            >
              VISIT ALWARPET COUNTER →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
