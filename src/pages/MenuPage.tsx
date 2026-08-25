import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuCategory, MenuItem } from '../types';
import { ItemDetailsModal } from '../components/ItemDetailsModal';
import { Search, Sparkles, Flame, Eye, MapPin, Phone, Info, Heart, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'ALL' | 'VEG' | 'NON_VEG'>('ALL');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories: { id: MenuCategory | 'ALL'; label: string }[] = [
    { id: 'ALL', label: 'All Items' },
    { id: 'MILO_SPECIALS', label: 'Milo Specials' },
    { id: 'BEVERAGES', label: 'Thickshakes & Coolers' },
    { id: 'VEGETARIAN', label: 'Vegetarian Delights' },
    { id: 'NON_VEGETARIAN', label: 'Non-Veg & Grills' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'ALL' ? true : item.category === activeCategory;

      // Dietary filter
      const matchesDiet =
        dietFilter === 'ALL'
          ? true
          : dietFilter === 'VEG'
          ? item.isVeg
          : !item.isVeg;

      // Search query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(query))) ||
        (item.ingredients && item.ingredients.some((ing) => ing.toLowerCase().includes(query)));

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [activeCategory, dietFilter, searchQuery]);

  return (
    <div id="menu-page" className="min-h-screen bg-[#043C2A] text-[#F6F0DD] pt-28 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#D6B34A]" />
            ARTISANAL RECIPES & CRAVINGS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F6F0DD]">
            The Kosmo <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Menu</span>
          </h1>
          <div className="w-24 h-[2px] bg-[#D6B34A] mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#F6F0DD]/85 leading-relaxed font-light">
            Every dish and beverage at Kosmo Cafe is crafted fresh to order. Explore our signature malt Milos, gourmet thickshakes, loaded burgers, sizzled chicken wings, and late-night comfort bites.
          </p>

          {/* Quick Notice Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#075C3B]/60 border border-[#D6B34A]/25 text-xs text-[#FFF0BE]">
            <Info className="w-3.5 h-3.5 text-[#D6B34A]" />
            <span>Average ₹200–₹400 per person · 100% Segregated Veg & Non-Veg Kitchens</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div
          id="menu-filter-container"
          className="p-4 sm:p-5 rounded-2xl bg-[#075C3B]/60 border border-[#D6B34A]/30 backdrop-blur-md mb-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#D6B34A] text-[#043C2A] font-bold shadow-md'
                      : 'bg-[#043C2A]/70 text-[#F6F0DD]/80 hover:bg-[#075C3B] hover:text-[#FFF0BE]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search & Veg/Non-Veg Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            {/* Dietary Toggle */}
            <div className="flex items-center p-1 rounded-full bg-[#043C2A]/90 border border-[#D6B34A]/25">
              <button
                type="button"
                onClick={() => setDietFilter('ALL')}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                  dietFilter === 'ALL' ? 'bg-[#D6B34A] text-[#043C2A]' : 'text-[#F6F0DD]/70 hover:text-white'
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

            {/* Search Input */}
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-[#D6B34A] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search food, drinks, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-full bg-[#043C2A]/90 border border-[#D6B34A]/30 text-xs text-[#F6F0DD] placeholder-[#F6F0DD]/40 focus:outline-none focus:border-[#D6B34A]"
              />
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#F6F0DD]/70 mb-6 px-1">
          <span>
            Showing <strong className="text-[#E5C65A]">{filteredItems.length}</strong> delicious creations
          </span>
          <span className="italic">Tap any dish for ingredients & tasting notes</span>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#075C3B]/20 rounded-2xl border border-[#D6B34A]/20">
            <p className="text-base text-[#FFF0BE]">No dishes match your filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('ALL');
                setDietFilter('ALL');
                setSearchQuery('');
              }}
              className="mt-3 px-5 py-2 rounded-full text-xs font-semibold bg-[#D6B34A] text-[#043C2A]"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-card-${item.id}`}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl bg-gradient-to-b from-[#075C3B]/80 to-[#043C2A]/95 border border-[#D6B34A]/30 hover:border-[#D6B34A] transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-[#042A1D]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A] via-transparent to-[#043C2A]/30" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <div
                      className={`w-4 h-4 rounded-sm border p-0.5 flex items-center justify-center bg-[#043C2A]/90 ${
                        item.isVeg ? 'border-emerald-500' : 'border-red-500'
                      }`}
                      title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`} />
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

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#043C2A]/90 border border-[#D6B34A]/40 backdrop-blur-md">
                    <span className="font-bold text-base text-[#E5C65A]">₹{item.price}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#075C3B]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FFF0BE] bg-[#043C2A]/90 px-3.5 py-1.5 rounded-full border border-[#D6B34A]/50">
                      <Eye className="w-3.5 h-3.5 text-[#D6B34A]" /> Tap to View Ingredients
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif font-bold text-lg text-[#FFFDF5] group-hover:text-[#E5C65A] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      {item.spiceLevel && item.spiceLevel !== 'None' && (
                        <span
                          className="flex-shrink-0 flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/40"
                          title={`Spice Level: ${item.spiceLevel}`}
                        >
                          <Flame className="w-3 h-3 text-red-400" />
                          {item.spiceLevel}
                        </span>
                      )}
                    </div>

                    <div className="w-10 h-[1px] bg-[#D6B34A]/40 my-2.5" />

                    <p className="text-xs text-[#F6F0DD]/75 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 pt-3 border-t border-[#D6B34A]/20 flex items-center justify-between">
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
                      onClick={() => setSelectedItem(item)}
                      className="text-xs font-semibold text-[#FFF0BE] hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Details</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Dining & Visiting Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#075C3B]/80 via-[#043C2A] to-[#075C3B]/80 border border-[#D6B34A]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#E5C65A] block mb-1">
              VISIT KOSMO CAFE IN ALWARPET
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#FFFDF5]">
              Craving these in person?
            </h3>
            <p className="text-xs sm:text-sm text-[#F6F0DD]/80 mt-1 max-w-md">
              Enjoy hot food, cold drinks, cozy outdoor seating, and late-night vibes at 199 TTK Road until 3:30 AM daily.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn flex items-center gap-2 shadow-xl"
            >
              <MapPin className="w-3.5 h-3.5 text-[#043C2A]" />
              FIND LOCATION & HOURS
            </Link>
            <a
              href="tel:09962303090"
              className="px-5 py-3 rounded-full text-xs font-semibold text-[#FFF0BE] border border-[#D6B34A]/40 bg-[#043C2A]/80 hover:bg-[#043C2A] flex items-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6B34A]" />
              099623 03090
            </a>
          </div>
        </div>
      </div>

      {/* Item Details Modal */}
      <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
