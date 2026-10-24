import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, HeartHandshake, Mic2, CalendarCheck, Utensils, Store, Star, Sliders, ShieldCheck } from 'lucide-react';
import InstagramIcon from '../components/icons/InstagramIcon';
import { servicesData } from '../data/servicesData';
import { galleryData } from '../data/galleryData';
import MobileHomePage from './mobile/MobileHomePage';

export default function HomePage() {
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
      title: "Musical Shows & Concerts",
      badge: "Live Stages",
      line1: "17-Piece Live Grand Orchestra",
      line2: "Concert Stage Acoustics & Audio",
      tagline: "Sound & Stage",
      bg: "#141419",
      hoverBg: "#1C1C24",
      border: "rgba(216, 189, 113, 0.25)",
      hoverBorder: "#D8BD71",
    },
    {
      title: "Royal Weddings",
      badge: "Celebrations",
      line1: "Bespoke Floral Mandaps & Decor",
      line2: "Mirror Aisles & Grand Receptions",
      tagline: "End-to-End",
      bg: "#16161C",
      hoverBg: "#1E1E26",
      border: "rgba(190, 162, 86, 0.25)",
      hoverBorder: "#BEA256",
    },
    {
      title: "Artist Management",
      badge: "Talent Liaison",
      line1: "Playback Singers & Live Bands",
      line2: "Celebrity Anchors & Stage Emcees",
      tagline: "Direct Access",
      bg: "#141419",
      hoverBg: "#1C1C24",
      border: "rgba(232, 197, 122, 0.25)",
      hoverBorder: "#E8C57A",
    },
    {
      title: "Corporate Galas",
      badge: "Conferences",
      line1: "Brand Summits & Conferences",
      line2: "Curved LED Visual Walls & Audio",
      tagline: "High-Tech Galas",
      bg: "#16161C",
      hoverBg: "#1E1E26",
      border: "rgba(216, 189, 113, 0.25)",
      hoverBorder: "#D8BD71",
    },
    {
      title: "Store Inaugurations",
      badge: "Brand Launches",
      line1: "Storefront Floral Arches & Media",
      line2: "Ribbon Ceremonies & VIP Welcome",
      tagline: "Grand Openings",
      bg: "#141419",
      hoverBg: "#1C1C24",
      border: "rgba(190, 162, 86, 0.25)",
      hoverBorder: "#BEA256",
    },
    {
      title: "Celebrity Visits",
      badge: "VIP Protocols",
      line1: "Red Carpet & VIP Protocols",
      line2: "Media Wall & Security Liaison",
      tagline: "Red Carpet",
      bg: "#16161C",
      hoverBg: "#1E1E26",
      border: "rgba(232, 197, 122, 0.25)",
      hoverBorder: "#E8C57A",
    },
    {
      title: "Gourmet Catering",
      badge: "Hospitality",
      line1: "Royal Multi-Cuisine Banquets",
      line2: "Curated Menus & Luxury Tableware",
      tagline: "Curated Dining",
      bg: "#141419",
      hoverBg: "#1C1C24",
      border: "rgba(216, 189, 113, 0.25)",
      hoverBorder: "#D8BD71",
    },
    {
      title: "Social Media Hype",
      badge: "Digital Promo",
      line1: "Pre-Event Teaser Countdowns",
      line2: "Viral Reels & Live Ground Coverage",
      tagline: "Digital Reach",
      bg: "#16161C",
      hoverBg: "#1E1E26",
      border: "rgba(190, 162, 86, 0.25)",
      hoverBorder: "#BEA256",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardsRef = useRef(null);

  // Scroll reveal observer for the service cards section
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCardsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
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

  if (isMobile) {
    return <MobileHomePage />;
  }

  return (
    <div className="bg-[#0D0D11] text-[#E5E0D5]">
      {/* 1. CINEMATIC AUTO-CHANGING HERO SECTION */}
      <section className="relative min-h-screen h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
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
              {/* Balanced Dark Gradient Overlay - Slightly darker for dramatic luxury contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/45 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Hero Editorial Content */}
        <div className="relative z-20 max-w-4xl mx-auto my-auto text-center flex flex-col items-center w-full py-8">
          {/* Headline - Previous Size (text-2xl sm:text-3xl md:text-4xl), Bold Weight & Bright Colors */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase leading-snug tracking-tight mb-4 text-center max-w-2xl mx-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">TURNING IDEAS INTO</span> <br />
            <span className="font-serif italic font-bold golden-glow-animate drop-shadow-[0_4px_20px_rgba(216,189,113,0.7)]">GRAND EXPERIENCES.</span>
          </h1>

          {/* Delicate Flourish Line */}
          <div className="flex items-center justify-center gap-3 text-[#FFE39A] mb-6 drop-shadow-[0_0_8px_rgba(255,227,154,0.5)]">
            <span className="w-14 h-[1.5px] bg-[#FFE39A]" />
            <span className="w-2 h-2 rounded-full bg-[#FFE39A] shadow-[0_0_10px_#FFE39A]" />
            <span className="w-14 h-[1.5px] bg-[#FFE39A]" />
          </div>

          {/* Action Buttons in Luxury Gold & Dark Styling (Curved & Elegant) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] font-bold text-[11px] uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_4px_16px_rgba(216,189,113,0.25)] hover:brightness-110 active:scale-95 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <span className="text-sm">→</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141419]/90 hover:bg-[#1C1C24] text-[#E5E0D5] hover:text-[#D8BD71] text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-sm border border-[#D8BD71]/35 active:scale-95 cursor-pointer"
            >
              <span>Plan Your Event</span>
            </Link>
          </div>
        </div>

        {/* Hero Bottom Bar with Luxury Dark & Gold Styling */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pt-4 pb-3.5 px-6 rounded-b-xl border-t border-[#D8BD71]/25 bg-[#141419]/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A39B8B] shadow-sm">
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-widest text-[11px] font-bold golden-glow-animate">V Do Eventz</span>
            <span className="text-[#D8BD71]/40">•</span>
            <span className="text-[11px] tracking-wider text-[#E5E0D5] font-medium hidden md:inline">
              {heroSlides[currentSlide].caption}
            </span>
          </div>

          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-2">
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

          <span className="tracking-wider text-[11px] text-[#D8BD71] font-semibold">Event Production House</span>
        </div>
      </section>

      {/* 2. INTRODUCTION TO V DO EVENTZ */}
      <section className="relative py-8 sm:py-10 border-b border-[#D8BD71]/35 text-center overflow-hidden">
        {/* Background Image: Royal Sunset Banquet & Mandap Pavilion (This section alone) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/home-who-we-are-bg.jpg"
            alt="Royal Sunset Indian Wedding Banquet and Mandap"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />
          {/* Balanced dark gradient overlay to ensure perfect readability while showcasing the sunset banquet */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D11]/78 via-[#0D0D11]/60 to-[#0D0D11]/82" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 text-[#D8BD71] mb-3">
            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#D8BD71]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A] shadow-[0_0_8px_#D8BD71]" />
            <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#D8BD71]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal uppercase leading-tight mb-3 drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
            WHERE CREATIVITY <span className="italic font-serif text-gold-gradient">MEETS PERFECTION</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#F5E5BE] font-light leading-relaxed max-w-2xl mx-auto mb-7 drop-shadow-md">
            At V Do Eventz, we don't just manage events—we create emotions, unforgettable moments, and memories that last forever.
          </p>

          {/* Compact Alternating Rectangles (Left & Right Side Animation) */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 max-w-4xl mx-auto text-left mb-7 overflow-hidden">
            {eventOfferings.map((item, idx) => {
              const isHovered = hoveredCard === idx;
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  style={{
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible
                      ? 'translateX(0)'
                      : isLeft
                      ? 'translateX(-35px)'
                      : 'translateX(35px)',
                    transition: `opacity 450ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 90}ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 90}ms`,
                  }}
                >
                  <Link
                    to={`/contact?service=${encodeURIComponent(item.title)}`}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      background: isHovered
                        ? 'linear-gradient(135deg, rgba(253, 240, 208, 0.85) 0%, rgba(232, 205, 130, 0.80) 50%, rgba(212, 178, 88, 0.85) 100%)'
                        : 'linear-gradient(135deg, rgba(243, 222, 170, 0.70) 0%, rgba(223, 191, 110, 0.65) 50%, rgba(199, 158, 67, 0.70) 100%)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      borderColor: isHovered ? 'rgba(255, 248, 231, 0.8)' : 'rgba(255, 245, 215, 0.55)',
                      boxShadow: isHovered
                        ? '0 14px 30px -4px rgba(0, 0, 0, 0.55), 0 0 22px rgba(243, 222, 170, 0.45)'
                        : '0 6px 18px -2px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(216, 189, 113, 0.25)',
                      transform: isHovered ? 'translateY(-3px)' : 'none',
                      transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl border backdrop-blur-md transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Dark Gold Numeral */}
                      <span className="font-serif text-sm sm:text-base font-extrabold text-[#1F170A] shrink-0 w-6">
                        0{idx + 1}
                      </span>
                      {/* Vertical separator */}
                      <span className="w-[1px] h-7 bg-[#4A3D1E]/30 shrink-0" />
                      {/* Content */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-xs sm:text-[13px] font-bold uppercase tracking-tight text-[#161208] truncate">
                            {item.title}
                          </h3>
                          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[8px] uppercase tracking-wider font-bold bg-[#161208] text-[#F3DEAA] border border-[#2B2312] shadow-xs">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#3A2E16] font-medium truncate mt-0.5">
                          {item.line1}
                        </p>
                      </div>
                    </div>

                    {/* Arrow circle */}
                    <div className="w-5 h-5 rounded-full border border-[#2B2312] bg-[#161208] text-[#F3DEAA] flex items-center justify-center shrink-0 ml-2 group-hover:bg-[#FFF] group-hover:text-[#161208] group-hover:border-white transition-all text-[10px]">
                      →
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>Discover Our Story</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* 3. SHOWCASE OF SPECIALIZED SERVICES */}
      <section className="relative py-10 sm:py-12 border-y border-[#D8BD71]/35 text-[#E5E0D5] overflow-hidden">
        {/* Background Image: Luxury Grand Floral Stage (Specialized Services Section) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/home-specialized-services-bg.jpg"
            alt="V Do Eventz Grand Floral Stage"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.05]"
          />
          {/* Black shade overlay for text and card contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#D8BD71] font-semibold mb-3">
              OUR COMPLETE CAPABILITIES
            </p>

            <div className="flex items-center justify-center gap-3 text-[#D8BD71] mb-4">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D8BD71] to-[#E8C57A]" />
              <span className="w-2 h-2 rounded-full bg-[#E8C57A] shadow-[0_0_10px_#D8BD71]" />
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[#D8BD71] to-[#E8C57A]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              SPECIALIZED <span className="italic font-serif text-gold-gradient">SERVICES.</span>
            </h2>
          </div>

          {/* Service Cards Grid (Top 4 Featured Services on Home Page) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="flex flex-col bg-[#0D0D11]/85 backdrop-blur-md p-4 rounded-xl border border-[#D8BD71]/25 shadow-xl hover:border-[#D8BD71] hover:shadow-[0_10px_30px_rgba(216,189,113,0.25)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#0D0D11] mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-sm text-[9px] uppercase tracking-wider font-semibold bg-[#0D0D11]/95 text-[#D8BD71] border border-[#D8BD71]/50 shadow-md backdrop-blur-xs">
                    {service.badge}
                  </span>
                </div>

                <p className="text-[10px] uppercase tracking-widest text-[#D8BD71] font-medium mb-1">
                  {service.subtitle.split('•')[0]}
                </p>
                <h3 className="font-serif text-base font-semibold tracking-wide uppercase text-white group-hover:text-[#D8BD71] transition-colors mb-3 line-clamp-1">
                  {service.title}
                </h3>

                <div className="pt-3 border-t border-[#D8BD71]/20 flex items-center justify-between mt-auto">
                  <span className="text-[10px] text-[#A39B8B]">Premium Production</span>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#D8BD71] hover:text-[#E8C57A] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-7 sm:mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] hover:brightness-110 text-[#0D0D11] text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-[0_4px_20px_rgba(216,189,113,0.35)] cursor-pointer group"
            >
              <span>View Full Service Details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. COMPANY MISSION & VISION OVER GRAND STAGE */}
      <section className="relative py-9 sm:py-11 overflow-hidden border-b border-[#D8BD71]/20 flex items-center justify-center">
        {/* Full Grand Stage Background Image (Highly Visible) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-beach-infinity.jpg"
            alt="V Do Eventz Grand Stage Production"
            className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.08]"
          />
          {/* Edge Blends with Clear Center for High Stage Visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D11]/80 via-black/20 to-[#0D0D11]/80" />
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        </div>

        {/* Content Floating Over Grand Stage (Compact Sizing) */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#D8BD71] font-semibold mb-3 drop-shadow-md">
            COMPANY MISSION & VISION
          </p>

          {/* Main Headline (Reduced Size & High Contrast Shadow) */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight uppercase leading-snug mb-3 text-[#E5E0D5] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            YOUR VISION. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8BD71] via-[#F0C465] to-[#BEA256] italic font-serif">OUR EXPERTISE.</span>
          </h2>

          {/* Delicate Flourish Line */}
          <div className="flex items-center justify-center gap-3 text-[#D8BD71] mb-4">
            <span className="w-10 h-[1px] bg-[#D8BD71]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A]" />
            <span className="w-10 h-[1px] bg-[#D8BD71]/40" />
          </div>

          {/* Mission Glassmorphism Card (Compact & Semi-Translucent) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0D0D11]/70 backdrop-blur-md border border-[#D8BD71]/30 max-w-xl mx-auto mb-5 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
            <p className="font-serif italic text-base sm:text-lg text-[#F5E5BE] font-normal leading-relaxed mb-2">
              "Every celebration deserves its own story."
            </p>
            <p className="text-[11px] sm:text-xs text-[#E5E0D5] font-light leading-relaxed tracking-wide">
              Let's bring your ideas to life with <span className="text-[#D8BD71] font-medium">passion</span>, <span className="text-[#D8BD71] font-medium">precision</span>, and <span className="text-[#D8BD71] font-medium">professionalism</span>.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-3 gap-2.5 pt-3 mt-3 border-t border-[#D8BD71]/20 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#D8BD71] font-bold">Passion</p>
                <p className="text-[9px] text-[#A39B8B] mt-0.5">Heartfelt Emotion</p>
              </div>
              <div className="border-x border-[#D8BD71]/20 px-1.5">
                <p className="text-[10px] uppercase tracking-wider text-[#D8BD71] font-bold">Precision</p>
                <p className="text-[9px] text-[#A39B8B] mt-0.5">Flawless Stagecraft</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#D8BD71] font-bold">Professionalism</p>
                <p className="text-[9px] text-[#A39B8B] mt-0.5">Premier Standards</p>
              </div>
            </div>
          </div>

          {/* Action Button (Reduced Size) */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-[11px] uppercase tracking-[0.18em] font-bold transition-all duration-300 shadow-[0_4px_16px_rgba(216,189,113,0.3)] hover:brightness-110 cursor-pointer group"
          >
            <span>Discuss Your Event</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* 5. SELECTED EVENT PHOTOGRAPHY GALLERY PREVIEW */}
      <section className="relative py-9 sm:py-11 bg-gradient-to-b from-[#1C1811] via-[#241E14] to-[#12110D] text-[#E5E0D5] border-y border-[#D8BD71]/25 overflow-hidden">
        {/* Luminous Golden Ambient Glow Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(216,189,113,0.22)_0%,_rgba(190,162,86,0.08)_50%,_transparent_75%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(216,189,113,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,189,113,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#D8BD71] font-semibold mb-2">
                EVENT HIGHLIGHTS
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#E5E0D5] font-normal uppercase">
                SELECTED EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8BD71] via-[#F0C465] to-[#BEA256] italic font-serif">PHOTOGRAPHY</span>
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-xs uppercase tracking-wider font-bold shadow-[0_2px_14px_rgba(216,189,113,0.35)] hover:brightness-110 mt-4 md:mt-0 transition-all cursor-pointer group"
            >
              <span>Explore All 9 Highlights</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#0D0D11]/90 backdrop-blur-sm rounded-xl overflow-hidden border border-[#D8BD71]/30 hover:border-[#D8BD71] transition-all shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_32px_rgba(216,189,113,0.25)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11]/95 via-[#0D0D11]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D8BD71]">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-[#E5E0D5] font-medium line-clamp-1 mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A39B8B] font-light mt-0.5 line-clamp-1">{item.venue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM 4-BAR VALUE STRIP (LUXURY GOLD BANNER) */}
      <section className="bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] border-t border-[#BEA256] py-4 sm:py-5 text-[#0D0D11] shadow-[0_4px_24px_rgba(216,189,113,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-black/15">
            <div className="flex items-center gap-3 justify-center md:justify-start px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <Music className="w-5 h-5 text-[#0D0D11]" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#0D0D11]">LIVE ARENA CONCERTS</h4>
                <p className="text-[11px] text-[#2C271E] font-medium mt-0.5">17-Piece orchestra & playback stars</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-[#0D0D11]" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#0D0D11]">ROYAL TAMIL WEDDINGS</h4>
                <p className="text-[11px] text-[#2C271E] font-medium mt-0.5">Bespoke floral mandaps & decor</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-[#0D0D11]" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#0D0D11]">CELEBRITY MANAGEMENT</h4>
                <p className="text-[11px] text-[#2C271E] font-medium mt-0.5">Playback singers & stage emcees</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#0D0D11]" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#0D0D11]">MEGA CULTURAL GALAS</h4>
                <p className="text-[11px] text-[#2C271E] font-medium mt-0.5">Large-scale corporate & festival shows</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
