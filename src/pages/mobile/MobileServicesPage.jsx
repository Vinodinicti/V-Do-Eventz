import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { Check, ArrowRight, X, Sparkles } from 'lucide-react';

function MobileServiceCard({ service, index, onSelect, onInquire }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const isGold = index % 2 === 0; // Alternating: 0 Gold, 1 Black, 2 Gold, 3 Black...
  const isFromLeft = index % 2 === 0; // Even comes from left, odd comes from right

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
          ? 'translateX(-35px)'
          : 'translateX(35px)',
        transition:
          'opacity 550ms cubic-bezier(0.16, 1, 0.3, 1), transform 550ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="will-change-transform"
    >
      <div
        onClick={() => onSelect(service)}
        className={`p-3.5 rounded-2xl transition-all duration-300 shadow-xl cursor-pointer ${
          isGold
            ? 'bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] border-2 border-[#D8BD71]/80 text-[#18130B] shadow-[0_12px_36px_rgba(0,0,0,0.45)] active:scale-[0.99]'
            : 'bg-[#141419]/95 border border-[#D8BD71]/40 text-[#E5E0D5] shadow-[0_12px_36px_rgba(0,0,0,0.65)] active:scale-[0.99]'
        }`}
      >
        {/* 16:9 Image Frame with Badges */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black mb-3 shadow-md">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Floating Category Badge */}
          <span
            className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-sm text-[8px] uppercase tracking-wider font-extrabold shadow-sm ${
              isGold
                ? 'bg-[#18130B]/95 text-[#E8C57A] border border-[#18130B]'
                : 'bg-[#0D0D11]/95 text-[#D8BD71] border border-[#D8BD71]/50'
            }`}
          >
            {service.badge}
          </span>

          {/* Brand Tag */}
          <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-xs text-[7.5px] uppercase tracking-widest font-semibold bg-black/85 text-[#FAF5EA] border border-white/10">
            V Do Eventz
          </span>

          {/* Tap to View Details Indicator */}
          <span
            className={`absolute bottom-2 right-2 px-2 py-0.5 rounded-xs text-[8px] uppercase tracking-wider font-bold shadow-md ${
              isGold
                ? 'bg-[#18130B] text-[#E8C57A]'
                : 'bg-gradient-to-r from-[#D8BD71] to-[#BEA256] text-[#0D0D11]'
            }`}
          >
            Tap For Details
          </span>
        </div>

        {/* Subtitle */}
        <p
          className={`text-[9.5px] uppercase tracking-widest font-extrabold mb-0.5 truncate ${
            isGold ? 'text-[#3B2D12]' : 'text-[#D8BD71]'
          }`}
        >
          {service.subtitle.split('•')[0]}
        </p>

        {/* Title */}
        <h2
          className={`font-serif text-base font-bold uppercase leading-snug mb-3 ${
            isGold ? 'text-[#18130B]' : 'text-white'
          }`}
        >
          {service.title}
        </h2>

        {/* Action Buttons Row */}
        <div
          className={`pt-2.5 border-t flex items-center justify-between gap-2.5 ${
            isGold ? 'border-[#3B2D12]/20' : 'border-[#D8BD71]/20'
          }`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(service);
            }}
            className={`flex-1 py-2 px-3 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all text-center cursor-pointer ${
              isGold
                ? 'bg-[#18130B]/12 hover:bg-[#18130B]/20 text-[#18130B] border border-[#18130B]/30'
                : 'bg-white/10 hover:bg-white/15 text-[#E8C57A] border border-[#D8BD71]/35'
            }`}
          >
            View Details
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onInquire(service.title);
            }}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all shadow-md active:scale-95 cursor-pointer ${
              isGold
                ? 'bg-[#18130B] hover:bg-black text-[#E8C57A]'
                : 'bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] hover:brightness-110'
            }`}
          >
            <span>Inquire</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MobileServicesPage() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    if (selectedService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

  const handleInquire = (serviceTitle) => {
    setSelectedService(null);
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-14 text-[#E5E0D5] overflow-x-hidden">
      {/* Grand Stage Background with Light Black Opacity Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/assets/services-bg.jpg"
          alt="Stage Production Background"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      </div>

      <div className="relative z-10 px-3.5 max-w-lg mx-auto">
        {/* Editorial Header */}
        <section className="text-center mb-6 max-w-xs mx-auto">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#D8BD71] font-semibold mb-1">
            WHAT WE DO
          </p>
          <div className="flex items-center justify-center gap-2 text-[#D8BD71] mb-2">
            <span className="w-8 h-[1px] bg-[#D8BD71]/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A]" />
            <span className="w-8 h-[1px] bg-[#D8BD71]/50" />
          </div>
          <h1 className="font-serif text-2xl text-[#FFF9F2] font-normal uppercase tracking-tight mb-1 leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            OUR EVENT <span className="italic font-serif text-gold-gradient">SERVICES.</span>
          </h1>
          <p className="text-[10.5px] uppercase tracking-wider text-[#E5E0D5]/90 font-medium">
            Signature Capabilities & Stagecraft
          </p>
        </section>

        {/* Sequential Alternating Cards with Left & Right Slide-in Animations */}
        <section className="space-y-4 mb-6">
          {servicesData.map((service, index) => (
            <MobileServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={setSelectedService}
              onInquire={handleInquire}
            />
          ))}
        </section>
      </div>

      {/* POPUP BOX (MODAL) WITH ALL DETAILS AS IN DESKTOP VIEW */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg my-auto rounded-2xl bg-[#121217] border-2 border-[#D8BD71]/70 p-4 sm:p-6 shadow-[0_24px_64px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto text-[#E5E0D5]"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1C1C24] border border-[#D8BD71]/40 text-[#E8C57A] flex items-center justify-center hover:bg-[#D8BD71] hover:text-[#0D0D11] transition-all cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black mb-3.5 border border-[#D8BD71]/35 shadow-md">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover filter brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-sm text-[8.5px] uppercase tracking-wider font-extrabold bg-[#0D0D11]/95 text-[#D8BD71] border border-[#D8BD71]/50 shadow-md">
                {selectedService.badge}
              </span>

              <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-xs text-[8px] uppercase tracking-widest font-semibold bg-black/85 text-[#FAF5EA] border border-white/10">
                V Do Eventz • Chennai
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-[10px] uppercase tracking-widest text-[#D8BD71] font-bold mb-1">
              {selectedService.subtitle}
            </p>

            {/* Title */}
            <h2
              id="service-modal-title"
              className="font-serif text-xl sm:text-2xl text-white font-normal uppercase leading-tight mb-2.5"
            >
              {selectedService.title}
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-2 text-[#D8BD71] mb-3">
              <span className="w-8 h-[1px] bg-[#D8BD71]/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A]" />
              <span className="w-16 h-[1px] bg-[#D8BD71]/40" />
            </div>

            {/* Full Desktop Description */}
            <p className="text-xs sm:text-[13px] text-[#D5D0C5] font-light leading-relaxed mb-4">
              {selectedService.description}
            </p>

            {/* All Highlights with Checkmarks (Full Desktop Detail) */}
            <div className="mb-5">
              <h3 className="text-[10px] uppercase tracking-wider text-[#D8BD71] font-bold mb-2">
                Service Highlights & Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2 rounded-lg bg-[#181820] border border-[#D8BD71]/25"
                  >
                    <Check className="w-3.5 h-3.5 text-[#D8BD71] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-[11px] text-[#FAF5EA] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Inquire CTA Button */}
            <button
              onClick={() => handleInquire(selectedService.title)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-xs uppercase tracking-[0.2em] font-bold shadow-[0_4px_20px_rgba(216,189,113,0.35)] hover:brightness-110 active:scale-98 transition-all cursor-pointer"
            >
              <span>Inquire for This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
