import React from 'react';
import { MenuItem } from '../types';
import { X, Flame, Sparkles, Utensils, Heart, Info, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ItemDetailsModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      id="item-details-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="item-details-modal-card"
        className="relative w-full max-w-lg bg-[#043C2A] border border-[#D6B34A]/40 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 text-[#F6F0DD]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          id="item-details-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-[#F6F0DD] border border-[#D6B34A]/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A] via-transparent to-black/40" />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md ${
                item.isVeg
                  ? 'bg-emerald-900/90 text-emerald-300 border border-emerald-500/50'
                  : 'bg-red-950/90 text-red-300 border border-red-500/50'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-400' : 'bg-red-400'}`} />
              {item.isVeg ? 'Pure Veg' : 'Non-Veg'}
            </span>

            {item.isBestseller && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D6B34A] text-[#043C2A] shadow-md">
                <Sparkles className="w-3 h-3 fill-[#043C2A]" /> Bestseller
              </span>
            )}

            {item.isSignature && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#075C3B] text-[#FFF0BE] border border-[#D6B34A]/60 shadow-md">
                ★ Signature
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D6B34A] font-semibold">
                {item.category.replace('_', ' ')}
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#FFF5CC] leading-tight">
                {item.name}
              </h3>
            </div>
            <div className="text-2xl font-bold font-brand text-[#E5C65A] bg-[#043C2A]/90 px-3 py-1 rounded-xl border border-[#D6B34A]/30">
              ₹{item.price}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {/* Description */}
          <p className="text-[#F6F0DD]/90 text-sm sm:text-base leading-relaxed">
            {item.description}
          </p>

          {/* Quick Metrics (Spice, Calories, Tags) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 border-y border-[#D6B34A]/20">
            {item.spiceLevel && item.spiceLevel !== 'None' && (
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#075C3B]/40 border border-[#D6B34A]/20">
                <Flame className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="text-[10px] uppercase text-[#F6F0DD]/60 block font-medium">Spice Level</span>
                  <span className="text-xs font-bold text-[#FFF0BE]">{item.spiceLevel}</span>
                </div>
              </div>
            )}

            {item.calories && (
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#075C3B]/40 border border-[#D6B34A]/20">
                <Info className="w-4 h-4 text-[#D6B34A]" />
                <div>
                  <span className="text-[10px] uppercase text-[#F6F0DD]/60 block font-medium">Energy</span>
                  <span className="text-xs font-bold text-[#FFF0BE]">{item.calories}</span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#075C3B]/40 border border-[#D6B34A]/20 col-span-2 sm:col-span-1">
              <Heart className="w-4 h-4 text-rose-400" />
              <div>
                <span className="text-[10px] uppercase text-[#F6F0DD]/60 block font-medium">Prepared Fresh</span>
                <span className="text-xs font-bold text-[#FFF0BE]">Made to Order</span>
              </div>
            </div>
          </div>

          {/* Ingredients Breakdown */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D6B34A] mb-2 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" /> Key Ingredients & Flavors
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#075C3B]/60 text-[#F6F0DD]/90 border border-[#D6B34A]/25"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Chef's Pairing Recommendation */}
          {item.pairWith && (
            <div className="p-3 rounded-xl bg-[#075C3B]/30 border border-[#D6B34A]/30">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5C65A] block mb-1">
                ★ Chef's Recommended Pairing:
              </span>
              <p className="text-xs text-[#F6F0DD]/90 italic">
                Pairs extraordinarily with <strong className="text-[#FFF0BE] font-semibold">{item.pairWith}</strong>.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-[#032a1d] border-t border-[#D6B34A]/20 flex items-center justify-between gap-3">
          <Link
            to="/contact"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-full bg-[#075C3B] hover:bg-[#087044] text-[#FFF0BE] border border-[#D6B34A]/40 text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D6B34A]" /> Visit Cafe in Alwarpet
          </Link>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F6F0DD] text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
