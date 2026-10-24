import React from 'react';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Check } from 'lucide-react';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-24 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            Signature Services
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
            DETAILS THAT DEFINE THE{' '}
            <span className="italic font-display text-gold-gradient">EXPERIENCE.</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#d4af37] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#a3a097] font-light">
            Comprehensive production capabilities tailored for musical spectacles, royal weddings, corporate occasions, and digital reach.
          </p>
        </div>

        {/* Featured Large Showcase: Musical Shows & Weddings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {servicesData.slice(0, 2).map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#0e0e12] rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/30 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-black/80 text-[#d4af37] border border-[#d4af37]/40 backdrop-blur-sm">
                  {service.badge}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between -mt-6 relative z-10">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#c59d4e] font-medium mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#bab7ae] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#cfccc4]">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#87847c]">Bespoke Planning</span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#d4af37] hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>Inquire For This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Secondary Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.slice(2).map((service) => (
            <div
              key={service.id}
              className="group bg-[#0e0e12] rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/20 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-semibold bg-black/80 text-[#d4af37] border border-[#d4af37]/40 backdrop-blur-sm">
                  {service.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between -mt-4 relative z-10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#c59d4e] font-medium mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="font-serif text-xl font-medium text-white mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#a8a59c] leading-relaxed mb-4 font-light">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-[#cfccc4]">
                        <Check className="w-3 h-3 text-[#d4af37] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#87847c]">Full Coordination</span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#d4af37] hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
