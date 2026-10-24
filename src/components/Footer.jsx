import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function Footer({ onOpenPrivacy }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090C] border-t border-[#D8BD71]/25 text-[#E5E0D5] pt-8 sm:pt-14 pb-5 sm:pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-6 sm:pb-10 border-b border-[#D8BD71]/15">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 mb-2.5 sm:mb-3.5 group">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#D8BD71] bg-[#141419] p-0.5 shadow-md shrink-0">
                <img
                  src="/assets/vdo-logo.png"
                  alt="V Do Eventz Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-display text-lg sm:text-2xl font-bold tracking-wide golden-glow-animate block leading-tight">
                  V Do Eventz
                </span>
                <span className="text-[8.5px] sm:text-[10px] tracking-widest uppercase text-[#BEA256] font-medium block">
                  Event Management & Entertainment
                </span>
              </div>
            </Link>

            <p className="font-serif italic text-xs sm:text-base text-[#F5E5BE] mb-2 sm:mb-3">
              "Turning Ideas into Grand Experiences."
            </p>

            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#A39B8B] mb-3 sm:mb-5">
              <MapPin className="w-3.5 h-3.5 text-[#D8BD71] shrink-0" />
              <span>Event Production House</span>
            </div>

            <a
              href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141419] border border-[#D8BD71]/40 text-[10.5px] sm:text-xs text-[#D8BD71] hover:bg-[#D8BD71] hover:text-[#0D0D11] transition-all duration-300 shadow-sm"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@vdoeventz on Instagram</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Quick Links & Services in a compact 2-column group on mobile */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            {/* Quick Pages */}
            <div>
              <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D8BD71] font-bold mb-2.5 sm:mb-4">
                Pages
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-[10.5px] sm:text-xs text-[#A39B8B]">
                <li>
                  <Link to="/" className="hover:text-[#D8BD71] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#D8BD71] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#D8BD71] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-[#D8BD71] transition-colors">
                    Event Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#D8BD71] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Quick Access */}
            <div>
              <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D8BD71] font-bold mb-2.5 sm:mb-4">
                Our Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 sm:gap-y-1.5 text-[10.5px] sm:text-xs text-[#A39B8B]">
                <Link to="/services" className="hover:text-[#D8BD71] transition-colors">
                  Musical Shows
                </Link>
                <Link to="/services" className="hover:text-[#D8BD71] transition-colors">
                  Artist Liaison
                </Link>
                <Link to="/services" className="hover:text-[#D8BD71] transition-colors">
                  Corporate Galas
                </Link>
                <Link to="/services" className="hover:text-[#D8BD71] transition-colors">
                  Royal Weddings
                </Link>
                <Link to="/services" className="hover:text-[#D8BD71] transition-colors">
                  Social Media
                </Link>
                <Link to="/services" className="hover:text-[#D8BD71] transition-colors">
                  Catering
                </Link>
                <Link to="/services" className="hover:text-[#D8BD71] transition-colors">
                  Store Launches
                </Link>
                <Link to="/services" className="hover:text-[#D8BD71] transition-colors">
                  Celebrity Visits
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Privacy Policy */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[10px] sm:text-xs text-[#A39B8B] text-center sm:text-left">
          <p>© {currentYear} V Do Eventz. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="inline-flex items-center gap-1 text-[#C5BFB2] hover:text-[#D8BD71] transition-colors cursor-pointer text-[10px] sm:text-xs"
            >
              <ShieldCheck className="w-3 h-3 text-[#D8BD71]" />
              <span>Privacy Policy</span>
            </button>
            <span className="text-[#D8BD71]/30">•</span>
            <span className="text-[#C5BFB2]">V Do Eventz</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
