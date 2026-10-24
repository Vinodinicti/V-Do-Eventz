import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Check, Star, Users, Award, Building2, ArrowUpRight } from 'lucide-react';
import InstagramIcon from '../../components/icons/InstagramIcon';

export default function MobileAboutPage() {
  const coreValues = [
    {
      icon: Star,
      title: "Passion & Precision",
      desc: "Flawless stagecraft and detail"
    },
    {
      icon: Users,
      title: "Celebrity Talent",
      desc: "Live bands and playback singers"
    },
    {
      icon: Award,
      title: "Unforgettable",
      desc: "Celebrations that last forever"
    },
    {
      icon: Building2,
      title: "Full Production",
      desc: "Turnkey planning to perfection"
    }
  ];

  return (
    <div className="relative min-h-screen text-[#E5E0D5] pt-20 pb-10 overflow-hidden bg-[#0D0D11]">
      {/* Background Spotlight Stage Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/assets/about-spotlight-bg.png"
          alt="Golden Spotlight Stage Background"
          className="w-full h-full object-cover object-top filter brightness-105 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D11]/55 via-[#0D0D11]/70 to-[#0D0D11]/90" />
      </div>

      <div className="relative z-10 px-3.5 max-w-md mx-auto">
        {/* SECTION 1: COMPACT HEADER */}
        <section className="pt-3 pb-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#D8BD71] font-bold mb-1.5">
            ABOUT OUR COMPANY
          </p>

          <div className="flex items-center justify-center gap-2 text-[#D8BD71] mb-2">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#D8BD71] to-[#E8C57A]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A] shadow-[0_0_8px_#E8C57A]" />
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent via-[#D8BD71] to-[#E8C57A]" />
          </div>

          {/* Main Headline - Same size (text-2xl sm:text-3xl) & strong bold format */}
          <h1 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-snug mb-2 text-center">
            <span className="text-white">WHERE CREATIVITY</span> <br />
            <span className="font-serif italic font-bold golden-glow-animate drop-shadow-[0_4px_20px_rgba(216,189,113,0.7)]">
              MEETS PERFECTION.
            </span>
          </h1>

          <div className="inline-flex items-center gap-1.5 text-[9.5px] uppercase tracking-wider text-[#F5E5BE] font-medium bg-[#141419]/90 px-3 py-1 rounded-full border border-[#D8BD71]/40 shadow-sm backdrop-blur-md">
            <MapPin className="w-3 h-3 text-[#E8C57A]" />
            <span>Event Management & Production House</span>
          </div>
        </section>

        {/* SECTION 2: FOUNDER'S MESSAGE (FOCUSED PORTRAIT & SHORT SCROLL) */}
        <section className="mb-6">
          <div className="relative rounded-xl bg-gradient-to-br from-white/95 via-[#FDFBF7]/92 to-[#F5ECE0]/95 text-[#1C1917] p-3.5 border-2 border-[#D8BD71]/60 shadow-xl backdrop-blur-md overflow-hidden">
            {/* Haasini Focused Portrait Showcase */}
            <div className="relative mx-auto max-w-[175px] aspect-[3/4] rounded-xl overflow-hidden border-2 border-[#D8BD71] ring-2 ring-[#D8BD71]/35 shadow-xl bg-[#0D0D11] mb-3 group">
              <img
                src="/assets/founder-haasini-portrait.png"
                alt="Haasini - Founder & Creative Lead, V Do Eventz"
                className="w-full h-full object-cover object-[center_10%] scale-120 filter brightness-[1.03] contrast-[1.08] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-2 right-2 text-center">
                <span className="inline-block px-2 py-0.5 rounded-xs bg-[#0D0D11]/90 border border-[#D8BD71]/60 text-[7.5px] uppercase tracking-wider font-bold text-[#E8C57A] mb-0.5">
                  Founder & Creative Lead
                </span>
                <h2 className="font-serif text-base font-bold text-white leading-tight">
                  Haasini
                </h2>
                <p className="text-[9px] text-[#D8BD71] font-light">
                  V Do Eventz
                </p>
              </div>
            </div>

            {/* Founder Vision Quote: Concise & Elegant */}
            <div className="relative p-2.5 rounded-lg bg-white/80 border-l-3 border-[#C5A059] border border-[#D8BD71]/30 mb-3">
              <p className="text-[10.5px] text-[#2D2A26] leading-snug mb-1">
                "My vision is to transform every celebration into an extraordinary experience with passion, precision, and professionalism."
              </p>
              <p className="font-serif italic text-[10px] text-[#87631F] font-bold">
                "We don't just manage events—we create emotions and memories that last forever."
              </p>
            </div>

            {/* 4 Core Pillars in a 2x2 Compact Grid (No Long Scrolling) */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {coreValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-2 rounded-md bg-white/90 border border-[#D8BD71]/40 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-5 h-5 rounded-xs bg-[#FAF5EB] border border-[#D8BD71]/60 flex items-center justify-center shrink-0 text-[#87631F]">
                        <IconComponent className="w-3 h-3" />
                      </div>
                      <h4 className="text-[10px] font-bold text-[#1A1714] leading-tight">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-[8.5px] text-[#5C5549] leading-tight">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Instagram CTA */}
            <a
              href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-[9.5px] uppercase tracking-wider font-bold shadow-sm active:scale-95 transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#0D0D11]" />
              <span>Connect on Instagram @vdoeventz</span>
              <ArrowUpRight className="w-3 h-3 text-[#0D0D11]" />
            </a>
          </div>
        </section>

        {/* SECTION 3: SIGNATURE MILESTONE (COMPACT CARD) */}
        <section className="mb-4">
          <div className="relative rounded-xl bg-gradient-to-br from-[#FAF6ED]/95 via-[#F5EAD6]/92 to-[#EBD5AA]/95 text-[#1C1917] p-3.5 border-2 border-[#C5A059] shadow-xl backdrop-blur-md overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#9D7628]/20">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-[#87631F] font-bold">
                  SIGNATURE MILESTONE
                </p>
                <h3 className="font-serif text-sm font-bold text-[#1A1714]">
                  ELARA 2026
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#1C1917] text-[#E8C57A] text-[7.5px] uppercase tracking-wider font-bold">
                Grand Cultural Event
              </span>
            </div>

            {/* Poster + Details in 2-Column Split */}
            <div className="grid grid-cols-12 gap-3 items-center mb-3">
              <div className="col-span-5 relative rounded-lg overflow-hidden border border-[#9D7628] shadow-sm bg-black">
                <img
                  src="/assets/elara-poster.png"
                  alt="ELARA 2026 Poster"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="col-span-7 space-y-1.5">
                <p className="text-[9.5px] text-[#4A4237] leading-snug">
                  Presented by V Do Eventz & <strong className="text-[#1A1714]">TBWACT</strong> at the prestigious <strong className="text-[#87631F]">Trade Centre Auditorium</strong>.
                </p>

                <div className="flex items-start gap-1.5 p-1.5 rounded-sm bg-white/90 border border-[#C5A059]/30">
                  <Check className="w-3 h-3 text-[#87631F] shrink-0 mt-0.5" />
                  <span className="text-[8.5px] text-[#26221D] leading-tight">
                    <strong>Boss Band:</strong> 17-piece orchestra & 11 singers
                  </span>
                </div>

                <div className="flex items-start gap-1.5 p-1.5 rounded-sm bg-white/90 border border-[#C5A059]/30">
                  <Check className="w-3 h-3 text-[#87631F] shrink-0 mt-0.5" />
                  <span className="text-[8.5px] text-[#26221D] leading-tight">
                    <strong>Star Acts:</strong> Live comedy & celebrity emcees
                  </span>
                </div>
              </div>
            </div>

            {/* Inquire CTA */}
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-full bg-[#1C1917] text-[#E8C57A] text-[9.5px] uppercase tracking-wider font-bold border border-[#9D7628] active:scale-95 transition-all shadow-md"
            >
              <span>Inquire for Similar Event</span>
              <ArrowRight className="w-3 h-3 text-[#E8C57A]" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
