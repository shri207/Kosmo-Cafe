import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/galleryData';
import { GalleryPhoto } from '../types';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Atmosphere' | 'Drinks' | 'Comfort Food' | 'Nightlife'>('All');

  const filteredPhotos = GALLERY_PHOTOS.filter(
    (photo) => activeFilter === 'All' || photo.category === activeFilter
  );

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 bg-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-[#D6B34A]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B34A]" />
            VISUAL ATMOSPHERE
          </span>
          <h2
            id="gallery-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6F0DD]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Kosmo <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Gallery</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D6B34A] to-transparent mx-auto my-4" />
          <p className="text-xs sm:text-sm text-[#F6F0DD]/80 font-light max-w-lg mx-auto">
            Glimpses into our emerald cafe walls, sizzling comfort bites, signature chocolate beverages, and vibrant midnight conversations.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {(['All', 'Atmosphere', 'Drinks', 'Comfort Food', 'Nightlife'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  activeFilter === filter
                    ? 'bg-[#D6B34A] text-[#043C2A] font-bold shadow-md'
                    : 'bg-[#075C3B]/60 text-[#F6F0DD]/80 hover:bg-[#075C3B] hover:text-[#FFF0BE] border border-[#D6B34A]/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Modern Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[240px]">
          {filteredPhotos.map((photo, index) => {
            const isSpan2 = index === 0 || index === 4;
            return (
              <div
                key={photo.id}
                id={`gallery-item-${photo.id}`}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#075C3B]/40 border border-[#D6B34A]/30 hover:border-[#D6B34A] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  isSpan2 ? 'sm:col-span-2 sm:row-span-2' : 'col-span-1 row-span-1'
                }`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 contrast-105"
                  loading="lazy"
                />

                {/* Dark Green Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#043C2A]/90 via-[#043C2A]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Center Gold VIEW Icon Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#043C2A]/90 border border-[#D6B34A] flex flex-col items-center justify-center text-[#E5C65A] shadow-2xl backdrop-blur-md transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                    <span className="text-[9px] font-brand tracking-widest font-bold uppercase mt-0.5">VIEW</span>
                  </div>
                </div>

                {/* Bottom Caption Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#043C2A]/90 border border-[#D6B34A]/25 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#E5C65A] block">
                    {photo.category}
                  </span>
                  <span className="text-xs font-semibold text-[#FFFDF5] truncate block">
                    {photo.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          id="gallery-lightbox-modal"
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-[#041E15]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#075C3B] border border-[#D6B34A] text-[#FFF0BE] hover:bg-[#D6B34A] hover:text-[#043C2A] transition-all z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#075C3B]/80 border border-[#D6B34A] text-[#FFF0BE] hover:bg-[#D6B34A] hover:text-[#043C2A] transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#075C3B]/80 border border-[#D6B34A] text-[#FFF0BE] hover:bg-[#D6B34A] hover:text-[#043C2A] transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#043C2A] border border-[#D6B34A]/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            <div className="p-6 bg-gradient-to-r from-[#075C3B] to-[#043C2A] border-t border-[#D6B34A]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs uppercase font-brand tracking-widest text-[#E5C65A] font-bold">
                  {selectedPhoto.category} · KOSMO CAFE
                </span>
                <h3 className="text-lg font-bold text-[#FFFDF5] mt-0.5">
                  {selectedPhoto.title}
                </h3>
              </div>
              <a
                href="#menu"
                onClick={() => setSelectedPhoto(null)}
                className="px-5 py-2 rounded-full text-xs font-brand tracking-widest font-bold uppercase gold-gradient-btn"
              >
                ORDER THIS ITEM
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
