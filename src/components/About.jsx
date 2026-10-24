import React from 'react';
import { CheckCircle2, MapPin, Award, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function About({ onOpenEnquiry }) {
  return (
    <section id="about" className="py-24 bg-[#0c0c10] border-t border-b border-[#d4af37]/15 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Official Logo Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl shadow-black/80 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
                  alt="V Do Eventz Production & Atmosphere"
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">Premier Production</p>
                  <p className="font-serif text-xl text-white mt-1">Turning Ideas into Grand Experiences</p>
                </div>
              </div>

              {/* Floating Official Circular Badge */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#08080a] p-2.5 rounded-full border-2 border-[#d4af37] shadow-2xl hidden sm:block">
                <img
                  src="/assets/vdo-logo.png"
                  alt="V Do Eventz Official Crest"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
              <span className="w-6 h-[1.5px] bg-[#d4af37]" />
              <span>About V Do Eventz</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-6">
              CREATING EXTRAORDINARY SHOWS &{' '}
              <span className="font-display italic text-[#e5c378]">CELEBRATIONS.</span>
            </h2>

            <p className="text-base text-[#cfccc4] font-light leading-relaxed mb-6">
              <strong className="text-white font-medium">V Do Eventz</strong> is a premier event management and entertainment enterprise dedicated to transforming ambitious visions into seamlessly orchestrated live spectacles.
            </p>

            <p className="text-sm text-[#a3a097] leading-relaxed mb-8">
              Whether producing high-decibel live musical concerts with state-of-the-art stage acoustics, styling majestic wedding mandaps and banquets, coordinating acclaimed playback talent, or fueling digital brand resonance, we merge meticulous engineering with artistic elegance.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#131318] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Musical Show Production</h4>
                    <p className="text-xs text-[#98958d] mt-1">Live concert stage rigging, acoustic line arrays, and synchronized intelligent illumination.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#131318] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Bespoke Wedding Design</h4>
                    <p className="text-xs text-[#98958d] mt-1">From grand traditional mandaps to modern reception styling, curated with floral elegance.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#131318] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Direct Artist Liaison</h4>
                    <p className="text-xs text-[#98958d] mt-1">Professional booking and stage management for celebrated singers, emcees, and instrumentalists.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#131318] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Digital Event Reach</h4>
                    <p className="text-xs text-[#98958d] mt-1">Strategic social media marketing, countdowns, and real-time event buzz creation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Instagram strip */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-[#b8b5ac]">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>Full-Service Event Production & Stagecraft</span>
              </div>

              <a
                href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-[#f3e5ab] font-medium transition-colors ml-auto"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow on Instagram (@vdoeventz)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
