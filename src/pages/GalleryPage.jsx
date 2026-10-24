import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { galleryData } from '../data/galleryData';
import { Eye, X, ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import InstagramIcon from '../components/icons/InstagramIcon';
import galleryBg from '../assets/gallery-ballroom-bg.jpg';

function GalleryCard({ item, onSelect }) {
  const images = item.images && item.images.length > 0 ? item.images : [item.image];
  const [activeIdx, setActiveIdx] = useState(0);

  // Automatically cycle images every 4 seconds with slight staggered offset per card
  useEffect(() => {
    if (images.length <= 1) return;
    const intervalTime = 3800 + ((item.id * 350) % 1200);
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [images.length, item.id]);

  return (
    <div
      onClick={() => onSelect({ ...item, selectedImageIdx: activeIdx })}
      className="group relative bg-[#0D0D11]/85 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border border-[#D8BD71]/30 hover:border-[#D8BD71] transition-all duration-500 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.6)] sm:shadow-[0_12px_36px_rgba(0,0,0,0.65)] hover:shadow-[0_16px_40px_rgba(216,189,113,0.3)] hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0D0D11]">
        {/* Automatic cross-fading images */}
        {images.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${item.title} - View ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out group-hover:scale-105 filter brightness-95 ${
              idx === activeIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          />
        ))}

        {/* Ambient Gradient Overlay for text clarity */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#0D0D11] via-[#0D0D11]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

        {/* Top Floating Badges: Category (Desktop only) & Slide Dots */}
        <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 z-20 flex items-center justify-between pointer-events-none gap-1">
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-sm bg-[#0D0D11]/90 border border-[#D8BD71]/40 text-[9px] uppercase tracking-wider font-semibold text-[#D8BD71] backdrop-blur-xs shadow-md">
            {item.category}
          </span>

          {/* Automatic slide indicator dots */}
          {images.length > 1 && (
            <div className="ml-auto flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-[#0D0D11]/85 backdrop-blur-xs border border-[#D8BD71]/40 shadow-md shrink-0">
              {images.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
                    dotIdx === activeIdx ? 'w-2.5 sm:w-4 bg-[#D8BD71]' : 'w-1 sm:w-1.5 bg-[#D8BD71]/35'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View Overlay Icon */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 sm:p-3 rounded-full bg-[#0D0D11]/90 border border-[#D8BD71] text-[#D8BD71] backdrop-blur-sm shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* Card Content Overlay: Clean title in gold (clean aesthetic matching mobile view) */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-20">
          <h3 className="font-serif text-[11px] sm:text-sm md:text-[15px] text-[#E8C57A] font-semibold line-clamp-2 group-hover:text-[#FFF0CB] transition-colors leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalItem, setModalItem] = useState(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);

  const categories = ['All', 'Musical Shows', 'Weddings', 'Artist Stage', 'Mega Events'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const handleSelect = (item) => {
    setModalItem(item);
    setModalImageIdx(item.selectedImageIdx || 0);
  };

  const handleModalNext = (e) => {
    e.stopPropagation();
    if (!modalItem || !modalItem.images) return;
    setModalImageIdx((prev) => (prev + 1) % modalItem.images.length);
  };

  const handleModalPrev = (e) => {
    e.stopPropagation();
    if (!modalItem || !modalItem.images) return;
    setModalImageIdx((prev) => (prev - 1 + modalItem.images.length) % modalItem.images.length);
  };

  return (
    <div className="relative pt-28 pb-20 bg-[#0D0D11] text-[#E5E0D5] min-h-screen overflow-hidden">
      {/* Background Image: Grand Luxury Ballroom with Chandelier */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={galleryBg}
          alt="Luxury Ballroom Chandelier Background"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
        />
        {/* Soft edge blend & cinematic lighting so the ballroom is prominent and visible while cards stay readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D11]/75 via-black/35 to-[#0D0D11]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(216,189,113,0.15)_0%,_transparent_75%)]" />
      </div>

      <div className="relative z-10">
        {/* Editorial Header (Pure Text, No Sparkles) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#D8BD71] font-semibold mb-2.5 drop-shadow-md">
            VISUAL PORTFOLIO
          </p>

        <div className="flex items-center justify-center gap-3 text-[#D8BD71] mb-4">
          <span className="w-12 h-[1px] bg-[#D8BD71]/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A] shadow-[0_0_8px_#D8BD71]" />
          <span className="w-12 h-[1px] bg-[#D8BD71]/40" />
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#E5E0D5] font-normal uppercase tracking-tight mb-3 text-center mx-auto max-w-2xl leading-snug">
          EVENT <span className="italic font-serif golden-glow-animate">GALLERY.</span>
        </h1>

        <p className="text-xs uppercase tracking-widest text-[#A39B8B] mb-5">
          Signature Milestone Events & Live Stage Productions
        </p>

        {/* Instagram Profile Quick Callout */}
        <a
          href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141419] border border-[#D8BD71]/40 text-xs text-[#D8BD71] hover:bg-[#D8BD71] hover:text-[#0D0D11] transition-all duration-300 shadow-sm cursor-pointer group"
        >
          <InstagramIcon className="w-4 h-4 text-[#D8BD71] group-hover:text-[#0D0D11] transition-colors" />
          <span>View Live Event Reels on @vdoeventz</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-5 sm:mb-8">
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10.5px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] font-bold border-transparent shadow-[0_2px_10px_rgba(216,189,113,0.3)]'
                  : 'bg-[#141419]/90 text-[#A39B8B] hover:text-[#D8BD71] hover:bg-[#1C1C24] border-[#D8BD71]/25 hover:border-[#D8BD71]/50'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1 opacity-60 text-[8px] sm:text-[9.5px]">
                  (2)
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid of 8 Cards: 2 cards per row on mobile (grid-cols-2), 4 on desktop (lg:grid-cols-4) */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div
          className={`grid gap-2.5 sm:gap-6 ${
            activeCategory === 'All'
              ? 'grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-2 max-w-4xl mx-auto'
          }`}
        >
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </section>
      </div>

      {/* Lightbox Modal with Multi-Image Slide Controls */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141419] rounded-xl sm:rounded-2xl overflow-hidden border border-[#D8BD71]/40 sm:border-2 sm:border-[#D8BD71]/50 shadow-[0_24px_64px_rgba(0,0,0,0.9)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-20 p-1.5 sm:p-2 rounded-full bg-[#0D0D11]/80 text-[#D8BD71] hover:bg-[#D8BD71] hover:text-[#0D0D11] border border-[#D8BD71]/40 transition-all cursor-pointer shadow-lg"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Modal Image Area with Navigation Arrows */}
            <div className="relative max-h-[60vh] sm:max-h-[72vh] overflow-hidden bg-black flex items-center justify-center min-h-[220px] sm:min-h-[320px]">
              <img
                src={modalItem.images ? modalItem.images[modalImageIdx] : modalItem.image}
                alt={`${modalItem.title} - View ${modalImageIdx + 1}`}
                className="max-h-[60vh] sm:max-h-[72vh] w-auto object-contain transition-all duration-500"
              />

              {/* Prev / Next Arrows */}
              {modalItem.images && modalItem.images.length > 1 && (
                <>
                  <button
                    onClick={handleModalPrev}
                    className="absolute left-2 sm:left-3 p-1.5 sm:p-2 rounded-full bg-[#0D0D11]/80 text-[#D8BD71] hover:bg-[#D8BD71] hover:text-[#0D0D11] border border-[#D8BD71]/40 transition-all cursor-pointer shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={handleModalNext}
                    className="absolute right-2 sm:right-3 p-1.5 sm:p-2 rounded-full bg-[#0D0D11]/80 text-[#D8BD71] hover:bg-[#D8BD71] hover:text-[#0D0D11] border border-[#D8BD71]/40 transition-all cursor-pointer shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </>
              )}

              {/* Slide Counter in Modal */}
              {modalItem.images && modalItem.images.length > 1 && (
                <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-[#0D0D11]/80 border border-[#D8BD71]/40">
                  {modalItem.images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalImageIdx(dotIdx);
                      }}
                      className={`h-1.5 sm:h-2 rounded-full transition-all ${
                        dotIdx === modalImageIdx ? 'w-4 sm:w-5 bg-[#D8BD71]' : 'w-1.5 sm:w-2 bg-[#D8BD71]/40'
                      }`}
                      aria-label={`View image ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Modal Bottom Bar: Compact in both Mobile & Desktop Views */}
            <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-[#0D0D11]/95 border-t border-[#D8BD71]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4">
              <div className="min-w-0 flex-1">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D8BD71] font-semibold block">
                  {modalItem.category} • {modalItem.venue}
                </span>
                <h3 className="font-serif text-sm sm:text-base text-[#D8BD71] font-semibold truncate mt-0.5">
                  {modalItem.title}
                </h3>
                <p className="text-[10.5px] sm:text-[11px] text-[#A39B8B] truncate mt-0.5">{modalItem.subtitle}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                <Link
                  to={`/contact?service=${encodeURIComponent(modalItem.category)}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-[10px] sm:text-[11px] uppercase tracking-wider font-bold transition-all shadow-sm hover:brightness-110"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <a
                  href={modalItem.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141419] border border-[#D8BD71]/40 text-[#D8BD71] hover:bg-[#1C1C24] text-[10px] sm:text-[11px] uppercase tracking-wider font-medium transition-all"
                >
                  <InstagramIcon className="w-3 h-3" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
