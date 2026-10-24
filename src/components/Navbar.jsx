import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isTransparent = !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Event Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 border-none border-b-0 shadow-none'
          : 'bg-[#0D0D11]/95 backdrop-blur-md border-b border-[#D8BD71]/35 shadow-xl py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D8BD71]/60 bg-[#141419] p-0.5 transition-transform duration-300 group-hover:scale-105 shadow-md">
              <img
                src="/assets/vdo-logo.png"
                alt="V Do Eventz Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wide golden-glow-animate drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                V Do Eventz
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#E8C57A] hidden sm:inline-block transition-colors drop-shadow-sm">
                Event Management & Entertainment
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Previous text-xs size, bold weight & bright luminous colors */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-widest transition-all font-bold relative py-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${
                    isActive
                      ? 'text-[#FFE39A] font-extrabold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FFE39A] after:shadow-[0_0_10px_#FFE39A]'
                      : 'text-white hover:text-[#FFE39A]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="V Do Eventz on Instagram"
              className="p-2 rounded-full border border-[#D8BD71]/40 text-[#D8BD71] hover:text-[#0D0D11] hover:bg-[#D8BD71] transition-all duration-200"
              title="Follow @vdoeventz on Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-[#0D0D11] bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] hover:brightness-110 transition-all duration-200 shadow-md shadow-[#D8BD71]/25 border border-[#D8BD71] cursor-pointer"
            >
              <span>Inquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => navigate('/contact')}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-[#0D0D11] bg-gradient-to-r from-[#D8BD71] to-[#BEA256] hover:brightness-110 transition-colors shadow-sm"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 focus:outline-none text-[#D8BD71] hover:text-[#E8C57A]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#141419] border-b border-[#D8BD71]/30 px-6 py-6 shadow-2xl animate-in slide-in-from-top text-[#E5E0D5]">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest py-2.5 font-bold border-b border-[#D8BD71]/20 transition-colors ${
                    isActive ? 'text-[#FFE39A] font-extrabold' : 'text-white hover:text-[#FFE39A]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <a
                href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#D8BD71] hover:text-[#E8C57A]"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@vdoeventz</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs text-[#D8BD71] font-semibold"
              >
                <span>Book Event</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
