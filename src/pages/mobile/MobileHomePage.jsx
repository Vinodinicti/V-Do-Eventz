import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, HeartHandshake, Mic2, CalendarCheck, Utensils, Store, Star, Sliders, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { galleryData } from '../../data/galleryData';

export default function MobileHomePage() {
  const heroSlides = [
    {
      image: "/assets/vdo-concert-hero.jpg",
      alt: "V Do Eventz Arena Concert Stage",
      caption: "LIVE ARENA CONCERTS & STAGE ACOUSTICS"
    },
    {
      image: "/assets/hero-royal-wedding.jpg",
      alt: "Grand Royal Wedding Palace Stage & Mirror Aisle",
      caption: "PALACE WEDDINGS & BESPOKE FLORAL ARCHITECTURE"
    },
    {
      image: "/assets/hero-beach-infinity.jpg",
      alt: "Sunset Beach Infinity Floral Stage",
      caption: "LUXURY BEACHFRONT CELEBRATIONS"
    },
    {
      image: "/assets/hero-live-orchestra.png",
      alt: "Live Orchestra & Stage Illumination",
      caption: "17-PIECE LIVE ORCHESTRA & SOUND ENGINEERING"
    },
    {
      image: "/assets/hero-corporate-gala.jpg",
      alt: "Curved LED Visual Wall & Gala Banquet",
      caption: "CORPORATE GALAS & HIGH-TECH LED PRODUCTIONS"
    },
    {
      image: "/assets/hero-royal-stage.jpg",
      alt: "Grand Royal Wedding & Reception Stage Decor",
      caption: "ROYAL STAGE ARCHITECTURE & LUXURY BANQUETS"
    }
  ];

  const eventOfferings = [
    {
      title: "Musical Shows",
      badge: "Concerts",
      detail: "17-Piece Live Orchestra",
      path: "/contact?service=Musical%20Shows%20%26%20Concerts"
    },
    {
      title: "Royal Weddings",
      badge: "Mandaps",
      detail: "Bespoke Floral Decor",
      path: "/contact?service=Royal%20Weddings"
    },
    {
      title: "Artist Management",
      badge: "Talent",
      detail: "Singers & Stage Emcees",
      path: "/contact?service=Artist%20Management"
    },
    {
      title: "Corporate Galas",
      badge: "Summits",
      detail: "Curved LED Visual Stages",
      path: "/contact?service=Corporate%20Galas"
    },
    {
      title: "Store Launches",
      badge: "Openings",
      detail: "Floral Ribbon Ceremonies",
      path: "/contact?service=Store%20Inaugurations"
    },
    {
      title: "Celebrity Visits",
      badge: "VIP Protocols",
      detail: "Red Carpet & Media Wall",
      path: "/contact?service=Celebrity%20Visits"
    },
    {
      title: "Gourmet Catering",
      badge: "Banquets",
      detail: "Curated Royal Dining",
      path: "/contact?service=Gourmet%20Catering"
    },
    {
      title: "Social Media",
      badge: "Digital",
      detail: "Viral Video & Live Reels",
      path: "/contact?service=Social%20Media%20Hype"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef(null);

  // Scroll reveal observer for the service cards section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Automatic slide rotation every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="bg-[#0D0D11] text-[#E5E0D5] w-full overflow-x-hidden">
      {/* 1. CINEMATIC AUTO-CHANGING HERO SECTION (AS IT IS IN DESKTOP VIEW) */}
      <section className="relative h-screen h-[100dvh] min-h-[560px] max-h-[920px] w-full flex flex-col justify-between pt-22 pb-3.5 px-3 sm:px-6 overflow-hidden bg-black">
        {/* Automatic Cross-fade Background Slideshow (100% fit) */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center filter brightness-[0.86] contrast-[1.05] scale-100"
              />
              {/* Balanced Dark Gradient Overlay - matching desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/45 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Hero Editorial Content */}
        <div className="relative z-20 max-w-4xl mx-auto my-auto text-center flex flex-col items-center w-full px-2 py-4">
          {/* Headline - Exact Desktop Text and Styling */}
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase leading-snug tracking-tight mb-4 text-center max-w-md mx-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">TURNING IDEAS INTO</span> <br />
            <span className="font-serif italic font-bold golden-glow-animate drop-shadow-[0_4px_20px_rgba(216,189,113,0.7)]">GRAND EXPERIENCES.</span>
          </h1>

          {/* Delicate Flourish Line */}
          <div className="flex items-center justify-center gap-3 text-[#FFE39A] mb-5 drop-shadow-[0_0_8px_rgba(255,227,154,0.5)]">
            <span className="w-12 h-[1.5px] bg-[#FFE39A]" />
            <span className="w-2 h-2 rounded-full bg-[#FFE39A] shadow-[0_0_10px_#FFE39A]" />
            <span className="w-12 h-[1.5px] bg-[#FFE39A]" />
          </div>

          {/* Action Buttons - Exact Desktop Text "Explore Our Services" and "Plan Your Event" */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full max-w-xs mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] font-bold text-[11px] uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_4px_16px_rgba(216,189,113,0.25)] hover:brightness-110 active:scale-95 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <span className="text-xs">→</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#141419]/90 hover:bg-[#1C1C24] text-[#E5E0D5] hover:text-[#D8BD71] text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-sm border border-[#D8BD71]/35 active:scale-95 cursor-pointer"
            >
              <span>Plan Your Event</span>
            </Link>
          </div>
        </div>

        {/* Hero Bottom Bar - Matching Desktop Content, Labels & Indicators */}
        <div className="relative z-20 w-full pt-2.5 pb-2.5 px-3 rounded-lg border border-[#D8BD71]/25 bg-[#141419]/80 backdrop-blur-md flex flex-col gap-2 shadow-sm text-xs text-[#A39B8B]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 truncate pr-2">
              <span className="uppercase tracking-widest text-[10.5px] font-bold golden-glow-animate">V Do Eventz</span>
              <span className="text-[#D8BD71]/40">•</span>
              <span className="text-[10px] tracking-wide text-[#E5E0D5] font-medium truncate">
                {heroSlides[currentSlide].caption}
              </span>
            </div>

            <span className="tracking-wider text-[10px] text-[#D8BD71] font-semibold shrink-0">
              Event Production House
            </span>
          </div>

          {/* Slide Indicator Pills - Matching Desktop Style (w-8 active, w-2 inactive) */}
          <div className="flex items-center justify-center gap-2 w-full pt-1.5 border-t border-[#D8BD71]/15">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Jump to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  i === currentSlide ? 'w-8 bg-[#D8BD71]' : 'w-2 bg-[#D8BD71]/30 hover:bg-[#D8BD71]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION TO V DO EVENTZ (COMPACT 2x2 RECTANGLE GRID OVER SUNSET BANQUET) */}
      <section className="relative py-4 border-b border-[#D8BD71]/35 text-center overflow-hidden">
        {/* Background Image: Royal Sunset Indian Wedding Banquet and Mandap */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/home-who-we-are-bg.jpg"
            alt="Royal Sunset Indian Wedding Banquet and Mandap"
            className="w-full h-full object-cover object-center filter brightness-[0.86] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/45" />
        </div>

        <div className="px-3 relative z-10">
          <div className="flex items-center justify-center gap-2 text-[#D8BD71] mb-1">
            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#D8BD71]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A] shadow-[0_0_8px_#D8BD71]" />
            <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#D8BD71]" />
          </div>
          <h2 className="font-serif text-[15px] text-white font-normal uppercase leading-tight mb-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            WHERE CREATIVITY <span className="italic font-serif text-gold-gradient">MEETS PERFECTION</span>
          </h2>
          <p className="text-[10px] text-[#F5E5BE] font-light leading-snug max-w-[270px] mx-auto mb-2 drop-shadow-sm">
            At V Do Eventz, we don't just manage events—we create emotions and everlasting memories.
          </p>

          {/* 2-Column Grid with Distinct Spacing & Same Gold Button Color (No Numbers, No Arrow Space) */}
          <div ref={cardsRef} className="grid grid-cols-2 gap-2.5 sm:gap-3 text-left mb-3 overflow-hidden">
            {eventOfferings.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  style={{
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible
                      ? 'translateX(0)'
                      : isLeft
                      ? 'translateX(-20px)'
                      : 'translateX(20px)',
                    transition: `opacity 350ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 60}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 60}ms`,
                  }}
                >
                  <Link
                    to={item.path}
                    className="flex flex-col justify-center p-2.5 rounded-xl bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] border border-[#D8BD71] shadow-[0_4px_16px_rgba(216,189,113,0.35)] active:scale-[0.97] transition-all h-full"
                  >
                    <h3 className="font-serif text-[11px] font-bold uppercase tracking-tight text-[#0D0D11] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[9px] text-[#241A0B] font-medium leading-snug mt-0.5">
                      {item.detail}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-[9.5px] uppercase tracking-[0.18em] font-bold shadow-md active:scale-95 transition-all"
          >
            <span>Discover Our Story</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </Link>
        </div>
      </section>

      {/* 3. SHOWCASE OF SPECIALIZED SERVICES (2x2 FORMAT GRID OVER FLORAL STAGE) */}
      <section className="relative py-5 border-y border-[#D8BD71]/35 text-[#E5E0D5] overflow-hidden">
        {/* Background Image: Luxury Grand Floral Stage */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/home-specialized-services-bg.jpg"
            alt="V Do Eventz Grand Floral Stage"
            className="w-full h-full object-cover object-center filter brightness-[0.86] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/45" />
        </div>

        <div className="relative z-10 px-3.5">
          {/* Section Heading */}
          <div className="text-center max-w-xs mx-auto mb-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D8BD71] font-semibold mb-1">
              OUR COMPLETE CAPABILITIES
            </p>

            <div className="flex items-center justify-center gap-2 text-[#D8BD71] mb-1.5">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#D8BD71] to-[#E8C57A]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A] shadow-[0_0_8px_#D8BD71]" />
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent via-[#D8BD71] to-[#E8C57A]" />
            </div>

            <h2 className="font-serif text-xl font-normal text-white tracking-tight uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              SPECIALIZED <span className="italic font-serif text-gold-gradient">SERVICES.</span>
            </h2>
          </div>

          {/* 2x2 Format Grid (Top 4 Featured Services, 2x2 Layout) */}
          <div className="grid grid-cols-2 gap-2.5">
            {servicesData.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="flex flex-col bg-[#0D0D11]/90 backdrop-blur-md p-2 rounded-lg border border-[#D8BD71]/30 shadow-lg active:border-[#D8BD71] transition-all"
              >
                {/* 4:3 Aspect Image with Badge */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-black mb-1.5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded-xs text-[7px] uppercase tracking-wider font-bold bg-[#0D0D11]/95 text-[#D8BD71] border border-[#D8BD71]/50 shadow-sm">
                    {service.badge}
                  </span>
                </div>

                <p className="text-[8px] uppercase tracking-widest text-[#D8BD71] font-semibold mb-0.5 truncate">
                  {service.subtitle.split('•')[0]}
                </p>
                <h3 className="font-serif text-[11px] font-bold tracking-wide uppercase text-white mb-1.5 leading-snug">
                  {service.title}
                </h3>

                <div className="pt-1.5 border-t border-[#D8BD71]/20 flex items-center justify-between mt-auto text-[8.5px]">
                  <span className="text-[#A39B8B]">Premium Production</span>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1 uppercase tracking-wider font-bold text-[#D8BD71] active:text-[#E8C57A]"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-3.5">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-[9.5px] uppercase tracking-[0.18em] font-bold shadow-[0_4px_16px_rgba(216,189,113,0.3)] active:scale-95 transition-all"
            >
              <span>View Full Service Details</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. COMPANY MISSION & VISION OVER GRAND STAGE */}
      <section className="relative py-5 overflow-hidden border-b border-[#D8BD71]/20 flex items-center justify-center">
        {/* Full Grand Stage Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/hero-beach-infinity.jpg"
            alt="V Do Eventz Grand Stage Production"
            className="w-full h-full object-cover object-center filter brightness-[0.86] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/45" />
        </div>

        {/* Content Floating Over Grand Stage */}
        <div className="relative z-10 px-3.5 text-center flex flex-col items-center w-full">
          <p className="text-[9.5px] uppercase tracking-[0.2em] text-[#D8BD71] font-semibold mb-1 drop-shadow-md">
            COMPANY MISSION & VISION
          </p>

          <h2 className="font-serif text-lg font-normal tracking-tight uppercase leading-snug mb-1.5 text-[#E5E0D5] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            YOUR VISION. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8BD71] via-[#F0C465] to-[#BEA256] italic font-serif">OUR EXPERTISE.</span>
          </h2>

          <div className="flex items-center justify-center gap-2 text-[#D8BD71] mb-2">
            <span className="w-8 h-[1px] bg-[#D8BD71]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A]" />
            <span className="w-8 h-[1px] bg-[#D8BD71]/40" />
          </div>

          {/* Mission Card */}
          <div className="p-3 rounded-xl bg-[#0D0D11]/75 backdrop-blur-md border border-[#D8BD71]/30 w-full max-w-sm mb-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <p className="font-serif italic text-xs text-[#F5E5BE] font-normal leading-snug mb-1">
              "Every celebration deserves its own story."
            </p>
            <p className="text-[10px] text-[#E5E0D5] font-light leading-relaxed">
              Let's bring your ideas to life with <span className="text-[#D8BD71] font-medium">passion</span>, <span className="text-[#D8BD71] font-medium">precision</span>, and <span className="text-[#D8BD71] font-medium">professionalism</span>.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-3 gap-1.5 pt-2 mt-2 border-t border-[#D8BD71]/20 text-center">
              <div>
                <p className="text-[8.5px] uppercase tracking-wider text-[#D8BD71] font-bold">Passion</p>
                <p className="text-[7.5px] text-[#A39B8B] mt-0.5">Heartfelt Emotion</p>
              </div>
              <div className="border-x border-[#D8BD71]/20 px-1">
                <p className="text-[8.5px] uppercase tracking-wider text-[#D8BD71] font-bold">Precision</p>
                <p className="text-[7.5px] text-[#A39B8B] mt-0.5">Flawless Stagecraft</p>
              </div>
              <div>
                <p className="text-[8.5px] uppercase tracking-wider text-[#D8BD71] font-bold">Professionalism</p>
                <p className="text-[7.5px] text-[#A39B8B] mt-0.5">Premier Standards</p>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-[9.5px] uppercase tracking-[0.18em] font-bold shadow-[0_4px_16px_rgba(216,189,113,0.3)] active:scale-95 transition-all"
          >
            <span>Discuss Your Event</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </Link>
        </div>
      </section>

      {/* 5. SELECTED EVENT PHOTOGRAPHY (2x2 FORMAT GRID) */}
      <section className="relative py-5 bg-gradient-to-b from-[#1C1811] via-[#241E14] to-[#12110D] text-[#E5E0D5] border-y border-[#D8BD71]/25 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(216,189,113,0.22)_0%,_transparent_75%)] pointer-events-none" />

        <div className="relative z-10 px-3.5">
          <div className="text-center mb-3">
            <p className="text-[9.5px] uppercase tracking-[0.2em] text-[#D8BD71] font-semibold mb-1">
              EVENT HIGHLIGHTS
            </p>
            <h2 className="font-serif text-lg text-[#E5E0D5] font-normal uppercase leading-tight">
              SELECTED EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8BD71] via-[#F0C465] to-[#BEA256] italic font-serif">PHOTOGRAPHY</span>
            </h2>
          </div>

          {/* 2x2 Format Grid (4 Featured Highlights) */}
          <div className="grid grid-cols-2 gap-2.5">
            {galleryData.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                className="group relative bg-[#0D0D11]/90 rounded-lg overflow-hidden border border-[#D8BD71]/30 shadow-md block active:border-[#D8BD71]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11]/95 via-[#0D0D11]/30 to-transparent" />
                  
                  {/* Category Badge Top Left */}
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-xs text-[7px] uppercase tracking-wider font-bold bg-[#0D0D11]/90 text-[#D8BD71] border border-[#D8BD71]/40">
                    {item.category}
                  </span>

                  {/* Clean Simple Title in Gold Text at Bottom */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-serif text-[10px] text-[#E8C57A] font-semibold uppercase leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[7.5px] text-[#A39B8B] mt-0.5">{item.venue.split(',')[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-3">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-[9.5px] uppercase tracking-wider font-bold shadow-[0_2px_14px_rgba(216,189,113,0.35)] active:scale-95 transition-all"
            >
              <span>Explore All Highlights</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM 4-BAR VALUE STRIP (EVEN MORE SMALL & COMPACT) */}
      <section className="bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] border-t border-[#BEA256] py-2.5 text-[#0D0D11] shadow-[0_4px_24px_rgba(216,189,113,0.3)]">
        <div className="px-3">
          <div className="grid grid-cols-2 gap-1.5 text-left">
            <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-black/5 border border-black/10">
              <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <Music className="w-2.5 h-2.5 text-[#0D0D11]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[8px] uppercase tracking-wider font-extrabold text-[#0D0D11] leading-tight">LIVE ARENA CONCERTS</h4>
                <p className="text-[7px] text-[#2C271E] font-medium leading-tight mt-0.5 truncate">17-Piece orchestra & stars</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-black/5 border border-black/10">
              <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-2.5 h-2.5 text-[#0D0D11]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[8px] uppercase tracking-wider font-extrabold text-[#0D0D11] leading-tight">ROYAL TAMIL WEDDINGS</h4>
                <p className="text-[7px] text-[#2C271E] font-medium leading-tight mt-0.5 truncate">Bespoke floral mandaps</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-black/5 border border-black/10">
              <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <Star className="w-2.5 h-2.5 text-[#0D0D11]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[8px] uppercase tracking-wider font-extrabold text-[#0D0D11] leading-tight">CELEBRITY MANAGEMENT</h4>
                <p className="text-[7px] text-[#2C271E] font-medium leading-tight mt-0.5 truncate">Playback singers & emcees</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-black/5 border border-black/10">
              <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-2.5 h-2.5 text-[#0D0D11]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[8px] uppercase tracking-wider font-extrabold text-[#0D0D11] leading-tight">MEGA CULTURAL GALAS</h4>
                <p className="text-[7px] text-[#2C271E] font-medium leading-tight mt-0.5 truncate">Corporate & festival shows</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
