import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Check, Award, Users, Star, ArrowUpRight } from 'lucide-react';
import InstagramIcon from '../components/icons/InstagramIcon';
import MobileAboutPage from './mobile/MobileAboutPage';

export default function AboutPage() {
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
    return <MobileAboutPage />;
  }

  return (
    <div className="relative min-h-screen text-[#E5E0D5] pt-20 pb-16 overflow-hidden bg-[#0D0D11]">
      {/* =========================================================================
          BACKGROUND: GOLDEN SPOTLIGHT STAGE IMAGE
          With subtle golden ambient gradient glows & particle lighting
      ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/assets/about-spotlight-bg.png"
          alt="Golden Spotlight Stage Background"
          className="w-full h-full object-cover object-top filter brightness-105 contrast-110"
        />
        {/* Subtle dark gradient overlay to guarantee perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D11]/45 via-[#0D0D11]/60 to-[#0D0D11]/85" />
      </div>

      {/* Radiant Floating Gold Orbs */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#D8BD71]/15 via-[#E8C57A]/10 to-transparent rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute top-[48%] -left-20 w-80 h-80 bg-gradient-to-r from-[#D8BD71]/10 to-transparent rounded-full blur-3xl pointer-events-none animate-float" />

      <div className="relative z-10">
        {/* =========================================================================
            SECTION 1: HERO HEADER
            Refined, smaller editorial typography illuminated in spotlight
        ========================================================================= */}
        <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#D8BD71] font-semibold mb-3">
            ABOUT OUR COMPANY
          </p>

          {/* Animated Gold Divider */}
          <div className="flex items-center justify-center gap-2 text-[#D8BD71] mb-3.5">
            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#D8BD71] to-[#E8C57A]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A] shadow-[0_0_8px_#E8C57A] animate-ping" />
            <span className="w-10 h-[1px] bg-gradient-to-l from-transparent via-[#D8BD71] to-[#E8C57A]" />
          </div>

          {/* Main Headline - Same size (text-2xl sm:text-3xl md:text-4xl) & strong bold format */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-3.5 text-center leading-snug">
            <span className="text-white">WHERE CREATIVITY</span> <br />
            <span className="font-serif italic font-bold golden-glow-animate drop-shadow-[0_4px_20px_rgba(216,189,113,0.7)]">
              MEETS PERFECTION.
            </span>
          </h1>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#F5E5BE] font-medium bg-[#141419]/90 px-3.5 py-1 rounded-full border border-[#D8BD71]/40 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#D8BD71]">
            <MapPin className="w-3 h-3 text-[#E8C57A]" />
            <span>Event Management & Production House</span>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: FOUNDER'S MESSAGE & HAASINI'S VISION
            Luxury White-With-Gold Gradient Card with Refined Typography & Smooth Animations
        ========================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative rounded-2xl bg-gradient-to-br from-white/95 via-[#FDFBF7]/92 to-[#F5ECE0]/95 text-[#1C1917] p-6 sm:p-8 lg:p-10 border-2 border-[#D8BD71]/60 shadow-[0_16px_48px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(216,189,113,0.25)]">
            {/* Animated Gold Shimmer Reflection Beam */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Haasini Real Photo - Featured Once with Animated Gold Aura */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-xs lg:max-w-none">
                  {/* Outer Gold Gradient Glow Frame */}
                  <div className="absolute -inset-1.5 bg-gradient-to-br from-[#D8BD71] via-[#E8C57A] to-[#BEA256] rounded-2xl blur-xs opacity-75 animate-pulse" />

                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-[#C5A059] shadow-2xl bg-[#0D0D11] group">
                    <img
                      src="/assets/founder-haasini-portrait.png"
                      alt="Haasini - Founder & Creative Lead, V Do Eventz"
                      className="w-full h-full object-cover object-[center_10%] scale-115 filter brightness-[1.03] contrast-[1.06] transition-transform duration-700 group-hover:scale-120"
                    />

                    {/* Gradient Overlay for Identification */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-2 py-0.5 rounded-sm bg-gradient-to-r from-[#0D0D11]/90 to-[#1C1C24]/90 border border-[#D8BD71]/60 text-[8px] uppercase tracking-[0.2em] font-bold text-[#E8C57A] mb-1 backdrop-blur-xs">
                        Founder & Creative Lead
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-white font-medium tracking-wide">
                        Haasini
                      </h3>
                      <p className="text-[10px] text-[#D8BD71] font-light tracking-wider">
                        V Do Eventz • Event Management
                      </p>
                    </div>
                  </div>

                  {/* Floating Official Crest Badge */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full overflow-hidden border-2 border-[#D8BD71] bg-[#0D0D11] p-1 shadow-2xl hidden sm:block animate-float">
                    <img
                      src="/assets/vdo-logo.png"
                      alt="V Do Eventz Official Crest"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Founder Editorial Narrative & Exact Quotes */}
              <div className="lg:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#87631F] font-bold mb-2">
                  FOUNDER'S MESSAGE
                </p>

                {/* Reduced Heading */}
                <h2 className="font-serif text-lg sm:text-xl lg:text-2xl font-normal text-[#1A1714] uppercase leading-snug mb-4">
                  WELCOME TO V DO EVENTZ — <br />
                  <span className="italic font-serif text-[#87631F]">
                    WHERE CREATIVITY MEETS PERFECTION.
                  </span>
                </h2>

                {/* Founder's Exact Vision Quote Card: White-With-Gold Gradient */}
                <div className="relative p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white via-[#FAF5EC] to-[#F3E7CE] border-l-4 border-[#C5A059] border-t border-r border-b border-[#D8BD71]/35 mb-5 shadow-xs transition-all duration-300 hover:shadow-md">
                  <div className="absolute top-2 right-4 text-3xl font-serif text-[#C5A059]/30 select-none pointer-events-none">
                    “
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#2D2A26] font-normal leading-relaxed mb-2.5">
                    "As the founder, my vision has always been simple: to transform every celebration into an extraordinary experience. From elegant weddings and grand corporate events to celebrity shows, live concerts, stage productions, sound and lighting, décor, and private celebrations, we take care of every detail with passion, precision, and professionalism."
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#87631F] font-serif italic font-semibold tracking-wide">
                    "At V Do Eventz, we don't just manage events—we create emotions, unforgettable moments, and memories that last forever."
                  </p>
                </div>

                {/* Core Values Strip: White-With-Gold Gradient Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {/* Pillar 1 */}
                  <div className="p-3 rounded-lg bg-gradient-to-br from-white via-[#FAF7F2] to-[#F4E9D3] border border-[#D8BD71]/45 hover:border-[#9D7628] hover:shadow-[0_6px_16px_rgba(216,189,113,0.25)] hover:-translate-y-0.5 transition-all duration-300 group shadow-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#FAF5EB] to-[#F3E7CE] border border-[#D8BD71]/60 flex items-center justify-center shrink-0 text-[#87631F] group-hover:bg-[#87631F] group-hover:text-white transition-colors shadow-2xs">
                        <Star className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wide text-[#1A1714] group-hover:text-[#87631F] transition-colors">
                          Passion & Precision
                        </h4>
                        <p className="text-[10px] text-[#5C5549] mt-0.5 leading-snug">
                          Taking care of every detail with uncompromising stage & decor standards.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="p-3 rounded-lg bg-gradient-to-br from-white via-[#FAF7F2] to-[#F4E9D3] border border-[#D8BD71]/45 hover:border-[#9D7628] hover:shadow-[0_6px_16px_rgba(216,189,113,0.25)] hover:-translate-y-0.5 transition-all duration-300 group shadow-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#FAF5EB] to-[#F3E7CE] border border-[#D8BD71]/60 flex items-center justify-center shrink-0 text-[#87631F] group-hover:bg-[#87631F] group-hover:text-white transition-colors shadow-2xs">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wide text-[#1A1714] group-hover:text-[#87631F] transition-colors">
                          Celebrity & Concert Reach
                        </h4>
                        <p className="text-[10px] text-[#5C5549] mt-0.5 leading-snug">
                          Direct management for live playback singers, orchestras, and celebrity emcees.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="p-3 rounded-lg bg-gradient-to-br from-white via-[#FAF7F2] to-[#F4E9D3] border border-[#D8BD71]/45 hover:border-[#9D7628] hover:shadow-[0_6px_16px_rgba(216,189,113,0.25)] hover:-translate-y-0.5 transition-all duration-300 group shadow-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#FAF5EB] to-[#F3E7CE] border border-[#D8BD71]/60 flex items-center justify-center shrink-0 text-[#87631F] group-hover:bg-[#87631F] group-hover:text-white transition-colors shadow-2xs">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wide text-[#1A1714] group-hover:text-[#87631F] transition-colors">
                          Unforgettable Moments
                        </h4>
                        <p className="text-[10px] text-[#5C5549] mt-0.5 leading-snug">
                          Turning weddings, brand launches, and private galas into lasting memories.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 4 */}
                  <div className="p-3 rounded-lg bg-gradient-to-br from-white via-[#FAF7F2] to-[#F4E9D3] border border-[#D8BD71]/45 hover:border-[#9D7628] hover:shadow-[0_6px_16px_rgba(216,189,113,0.25)] hover:-translate-y-0.5 transition-all duration-300 group shadow-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#FAF5EB] to-[#F3E7CE] border border-[#D8BD71]/60 flex items-center justify-center shrink-0 text-[#87631F] group-hover:bg-[#87631F] group-hover:text-white transition-colors shadow-2xs">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wide text-[#1A1714] group-hover:text-[#87631F] transition-colors">
                          Event Architecture
                        </h4>
                        <p className="text-[10px] text-[#5C5549] mt-0.5 leading-snug">
                          Proudly executing milestone events with passion and precision.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instagram Link CTA: Gold Gradient Button with Animated Sweep */}
                <a
                  href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-md hover:brightness-110 hover:shadow-lg hover:scale-102 cursor-pointer group overflow-hidden"
                >
                  {/* Subtle Light Beam Slide Animation on Hover */}
                  <div className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                  <InstagramIcon className="w-3.5 h-3.5 text-[#0D0D11] group-hover:rotate-12 transition-transform duration-300" />
                  <span>Connect on Instagram @vdoeventz</span>
                  <ArrowUpRight className="w-3 h-3 text-[#0D0D11] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SIGNATURE MILESTONE — ELARA 2026
            Radiant Gold Gradient Background & White-With-Gold Highlights
        ========================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#FAF6ED]/95 via-[#F5EAD6]/92 to-[#EBD5AA]/95 text-[#1C1917] p-6 sm:p-8 lg:p-10 border-2 border-[#C5A059] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:shadow-[0_24px_64px_rgba(216,189,113,0.3)]">
            {/* Animated Gold Shimmer Reflection Beam */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Milestone Poster Frame with Interactive Scale */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#9D7628] bg-[#0D0D11] group transition-all duration-500 hover:scale-[1.02]">
                  <img
                    src="/assets/elara-poster.png"
                    alt="ELARA 2026 - Our First Grand Cultural Event"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#0D0D11]/90 border border-[#D8BD71] text-[8px] uppercase tracking-wider font-semibold text-[#E8C57A] backdrop-blur-xs shadow-md">
                    Signature Landmark
                  </div>
                </div>
              </div>

              {/* Milestone Details */}
              <div className="lg:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#87631F] font-bold mb-2">
                  SIGNATURE MILESTONE
                </p>

                <div className="flex items-center gap-2.5 text-[#9D7628] mb-3">
                  <span className="w-8 h-[1.5px] bg-[#9D7628]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87631F]" />
                </div>

                {/* Reduced Heading */}
                <h2 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#1A1714] font-normal uppercase leading-snug mb-3">
                  ELARA 2026 — <br />
                  <span className="italic font-serif text-[#87631F]">
                    OUR FIRST GRAND CULTURAL EVENT
                  </span>
                </h2>

                <p className="text-xs sm:text-[13px] text-[#4A4237] font-normal leading-relaxed mb-4">
                  Organized by V Do Eventz in association with the <strong className="text-[#1A1714] font-bold">Tambaram Builders Welfare & Charitable Trust (TBWACT)</strong> at the prestigious <strong className="text-[#87631F] font-bold">Trade Centre Auditorium</strong>.
                </p>

                {/* Features List: White-With-Gold Gradient Cards */}
                <div className="space-y-2.5 mb-5">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-gradient-to-r from-white/95 via-[#FAF6EE] to-[#F4EAD7] border border-[#C5A059]/40 shadow-2xs hover:border-[#9D7628] hover:shadow-xs hover:translate-x-1 transition-all duration-300">
                    <div className="w-5 h-5 rounded-full bg-[#F4EAE0] border border-[#9D7628] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#87631F]" />
                    </div>
                    <span className="text-[11px] sm:text-xs text-[#26221D]">
                      <strong className="text-[#1A1714] font-bold">Aadhavan's Boss Band:</strong> 17-piece live grand orchestra & 11 celebrity singers.
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-gradient-to-r from-white/95 via-[#FAF6EE] to-[#F4EAD7] border border-[#C5A059]/40 shadow-2xs hover:border-[#9D7628] hover:shadow-xs hover:translate-x-1 transition-all duration-300">
                    <div className="w-5 h-5 rounded-full bg-[#F4EAE0] border border-[#9D7628] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#87631F]" />
                    </div>
                    <span className="text-[11px] sm:text-xs text-[#26221D]">
                      <strong className="text-[#1A1714] font-bold">Celebrity Acts:</strong> Live comedy performances by Madurai Muthu and stage emcees.
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-gradient-to-r from-white/95 via-[#FAF6EE] to-[#F4EAD7] border border-[#C5A059]/40 shadow-2xs hover:border-[#9D7628] hover:shadow-xs hover:translate-x-1 transition-all duration-300">
                    <div className="w-5 h-5 rounded-full bg-[#F4EAE0] border border-[#9D7628] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3 text-[#87631F]" />
                    </div>
                    <span className="text-[11px] sm:text-xs text-[#26221D]">
                      <strong className="text-[#1A1714] font-bold">Noble Cause:</strong> Fundraising & cultural unity celebrating South Indian stage talent.
                    </span>
                  </div>
                </div>

                {/* Inquire CTA Button with interactive shimmer */}
                <Link
                  to="/contact"
                  className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#0D0D11] text-[#E8C57A] hover:text-white text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg hover:shadow-xl border border-[#9D7628] hover:scale-102 cursor-pointer group overflow-hidden"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                  <span>Inquire for Similar Event</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#E8C57A] group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
