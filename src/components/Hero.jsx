import React from 'react';
import { ArrowRight, Music, HeartHandshake, Mic2, Compass } from 'lucide-react';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section id="home" className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#08080a]">
      {/* Background with Dark Warm Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=85"
          alt="Grand Event Stage Production"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/70 to-[#08080a]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center my-auto">
        {/* Subtle Text */}
        <p className="text-xs uppercase tracking-widest text-[#d4af37] font-medium mb-6">
          Event Management & Production House
        </p>

        {/* Brand Headline - Editorial Serif */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-white max-w-2xl leading-snug mb-5 text-center mx-auto">
          TURNING IDEAS INTO{' '}
          <span className="italic font-display font-medium text-gold-gradient">
            GRAND EXPERIENCES.
          </span>
        </h1>

        {/* Tagline Subtext */}
        <p className="max-w-2xl text-base sm:text-lg text-[#bcbab2] font-light leading-relaxed mb-10">
          Premier musical show production, majestic wedding celebrations, artist management, and end-to-end event execution tailored for unforgettable moments.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold text-black bg-[#d4af37] hover:bg-[#e5c378] transition-all duration-300 shadow-lg shadow-[#d4af37]/25 hover:shadow-xl hover:shadow-[#d4af37]/35 cursor-pointer group"
          >
            <span>Plan Your Event</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold text-[#e2dfd7] bg-[#141419]/80 hover:bg-[#1a1a22] border border-[#d4af37]/30 hover:border-[#d4af37]/70 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Editorial Value Strip (Inspired by reference bottom bar) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-8 border-t border-[#d4af37]/15">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="p-2.5 rounded-full bg-[#131317] border border-[#d4af37]/25 text-[#d4af37] shrink-0">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Musical Shows</h4>
              <p className="text-[12px] text-[#9c9991] mt-0.5 font-light">Stage acoustics & lighting</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="p-2.5 rounded-full bg-[#131317] border border-[#d4af37]/25 text-[#d4af37] shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Grand Weddings</h4>
              <p className="text-[12px] text-[#9c9991] mt-0.5 font-light">Floral decor & mandates</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="p-2.5 rounded-full bg-[#131317] border border-[#d4af37]/25 text-[#d4af37] shrink-0">
              <Mic2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Artist Liaison</h4>
              <p className="text-[12px] text-[#9c9991] mt-0.5 font-light">Playback talent & emcees</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="p-2.5 rounded-full bg-[#131317] border border-[#d4af37]/25 text-[#d4af37] shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Premier Enterprise</h4>
              <p className="text-[12px] text-[#9c9991] mt-0.5 font-light">Excellence in production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
