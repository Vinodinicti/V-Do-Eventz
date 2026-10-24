import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';
import { Eye, X, ArrowUpRight, Camera } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Musical Shows', 'Weddings & Decor', 'Artists & Stage', 'Corporate & Launches'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0e] border-t border-[#d4af37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            Visual Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
            EVENT HIGHLIGHTS &{' '}
            <span className="italic font-display text-gold-gradient">STAGE ARCHITECTURE.</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#d4af37] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#a3a097] font-light">
            Glimpses of live concerts, floral wedding design, stage sound engineering, and artist performances across Tamil Nadu.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/25 font-semibold'
                  : 'bg-[#14141a] text-[#b8b5ab] hover:text-white hover:bg-[#1c1c24] border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-[#111116] rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-black/60 border border-[#d4af37] text-[#d4af37] backdrop-blur-sm shadow-xl">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#d4af37]">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg text-white font-medium line-clamp-1 mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#9c9991] font-light mt-0.5">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Callout Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#121217] via-[#16161d] to-[#121217] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-full bg-black border border-[#d4af37]/40 text-[#d4af37] shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
                Discover More Moments on Instagram
              </h3>
              <p className="text-xs text-[#a09c93] mt-0.5 font-light">
                Follow @vdoeventz for behind-the-scenes stage setups, artist clips, and real-time show updates.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold text-black bg-[#d4af37] hover:bg-[#e5c378] transition-colors shadow-md shadow-[#d4af37]/20 whitespace-nowrap"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Visit @vdoeventz</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0e0e13] rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:text-[#d4af37] border border-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-[#0e0e13] border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mt-0.5">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-[#99968d] mt-1">{selectedImage.location}</p>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedImage(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-black bg-[#d4af37] hover:bg-[#e5c378] transition-colors"
              >
                Inquire Similar Event
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
