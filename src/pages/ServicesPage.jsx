import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Check } from 'lucide-react';
import MobileServicesPage from './mobile/MobileServicesPage';

function ServiceCard({ service, index, onInquire }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const isGold = index % 2 === 0; // Alternating: 0 Gold, 1 Black, 2 Gold, 3 Black...
  const isFromLeft = index % 2 === 0; // Even comes from left, odd comes from right
  const isReversed = index % 2 === 1; // Alternating image on left vs image on right

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateX(0)'
          : isFromLeft
          ? 'translateX(-45px)'
          : 'translateX(45px)',
        transition:
          'opacity 650ms cubic-bezier(0.16, 1, 0.3, 1), transform 650ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="will-change-transform max-w-6xl mx-auto"
    >
      {/* Outer Card — Alternating: One in Gold (Inquire Now Shade) and One in Black */}
      <div
        className={`group p-4 sm:p-5 lg:p-6 rounded-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center backdrop-blur-md ${
          isGold
            ? 'bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] border-2 border-[#D8BD71]/70 shadow-[0_16px_48px_rgba(0,0,0,0.55)] text-[#18130B]'
            : 'bg-[#141419]/90 border border-[#D8BD71]/35 shadow-[0_16px_40px_rgba(0,0,0,0.65)] hover:border-[#D8BD71]/70 text-[#E5E0D5]'
        }`}
      >
        {/* Prominent Showcase Image (Dominant 7-Column Visual Focus) */}
        <div
          className={`lg:col-span-7 relative h-64 sm:h-72 lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl ${
            isGold ? 'border-2 border-[#BEA256]/50' : 'border-2 border-[#D8BD71]/35'
          } ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center filter brightness-105 contrast-[1.06] group-hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle bottom gradient for badge legibility */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          {/* Floating Category Badge */}
          <div className="absolute top-3.5 left-3.5">
            <span
              className={`px-3 py-1 rounded-md text-[10px] uppercase tracking-wider font-extrabold shadow-lg backdrop-blur-md ${
                isGold
                  ? 'bg-[#18130B]/95 text-[#E8C57A] border border-[#18130B]'
                  : 'bg-[#0D0D11]/95 text-[#D8BD71] border border-[#D8BD71]/50'
              }`}
            >
              {service.badge}
            </span>
          </div>

          {/* Production Badge */}
          <div className="absolute bottom-3.5 left-3.5">
            <span className="px-2.5 py-0.5 rounded-md text-[9px] uppercase tracking-widest font-semibold bg-black/85 text-[#FAF5EA] backdrop-blur-xs border border-white/10">
              V Do Eventz
            </span>
          </div>
        </div>

        {/* Informative Content (Compact 5-Column Side) */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between h-full py-1 ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div>
            {/* Subtitle */}
            <p
              className={`text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-extrabold mb-1 ${
                isGold ? 'text-[#3B2D12]' : 'text-[#D8BD71]'
              }`}
            >
              {service.subtitle}
            </p>

            {/* Title */}
            <h2
              className={`font-serif text-xl sm:text-2xl lg:text-3xl font-normal uppercase leading-tight mb-2 ${
                isGold ? 'text-[#18130B]' : 'text-white'
              }`}
            >
              {service.title}
            </h2>

            {/* Short Informative Description */}
            <p
              className={`text-xs sm:text-[13px] font-normal leading-relaxed mb-4 max-w-xl ${
                isGold ? 'text-[#2E2412]' : 'text-[#A39B8B]'
              }`}
            >
              {service.description}
            </p>

            {/* Direct Highlights with Tick Symbol on Main Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-5">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check
                    className={`w-4 h-4 shrink-0 stroke-[2.5] ${
                      isGold ? 'text-[#18130B]' : 'text-[#D8BD71]'
                    }`}
                  />
                  <span
                    className={`text-[12px] sm:text-[13px] line-clamp-1 ${
                      isGold ? 'text-[#18130B] font-semibold' : 'text-[#E5E0D5] font-normal'
                    }`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div
            className={`pt-3 border-t flex flex-wrap items-center justify-between gap-2.5 ${
              isGold ? 'border-[#3B2D12]/20' : 'border-[#D8BD71]/20'
            }`}
          >
            <span
              className={`text-xs font-bold ${
                isGold ? 'text-[#3B2D12]' : 'text-[#A39B8B]'
              }`}
            >
              Full-Service Production
            </span>

            <button
              onClick={() => onInquire(service.title)}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.18em] font-bold transition-all duration-300 shadow-md hover:scale-102 cursor-pointer ${
                isGold
                  ? 'bg-[#18130B] hover:bg-black text-[#E8C57A] hover:shadow-lg'
                  : 'bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] hover:brightness-110 shadow-[0_4px_16px_rgba(216,189,113,0.3)] border border-[#D8BD71]'
              }`}
            >
              <span>Inquire for This Service</span>
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return <MobileServicesPage />;
  }

  const handleInquire = (serviceTitle) => {
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 text-[#E5E0D5] overflow-x-hidden">
      {/* Grand Stage Background with Light Black Opacity Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/assets/services-bg.jpg"
          alt="V Do Eventz Stage Production Background"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        {/* Light Black Opacity Overlay */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/85" />
      </div>

      <div className="relative z-10">
        {/* Editorial Header (Pure Text, No Sparkles) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#D8BD71] font-semibold mb-2.5 drop-shadow-sm">
            WHAT WE DO
          </p>
          <div className="flex items-center justify-center gap-3 text-[#D8BD71] mb-3.5">
            <span className="w-12 h-[1px] bg-[#D8BD71]/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A]" />
            <span className="w-12 h-[1px] bg-[#D8BD71]/50" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-3 text-center mx-auto max-w-2xl leading-snug">
            <span className="text-white">OUR EVENT</span> <span className="font-serif italic font-bold golden-glow-animate drop-shadow-[0_4px_20px_rgba(216,189,113,0.7)]">SERVICES.</span>
          </h1>
          <p className="text-sm uppercase tracking-widest text-[#E5E0D5]/90 drop-shadow-sm">
            Signature Capabilities & Stagecraft
          </p>
        </section>

        {/* Services Showcase Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onInquire={handleInquire}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
