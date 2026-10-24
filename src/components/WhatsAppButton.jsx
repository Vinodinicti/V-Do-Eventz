import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappMessage = encodeURIComponent(
    'Hello V Do Eventz, I would like to inquire about event management and musical show services.'
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Sleek Theme Tooltip (Hidden on small mobile screens to keep view clean) */}
      <div
        className={`px-3 py-1 rounded-full bg-[#141419]/95 border border-[#D8BD71]/40 text-[#E5E0D5] text-[11px] font-medium shadow-xl transition-all duration-300 pointer-events-none hidden sm:block ${
          showTooltip
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A] animate-pulse" />
          <span className="tracking-wide">Chat with V Do Eventz</span>
        </span>
      </div>

      {/* Floating Action Button — Small & Luxury Gold Theme */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with V Do Eventz on WhatsApp"
        className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] shadow-[0_4px_16px_rgba(216,189,113,0.35)] hover:shadow-[0_6px_22px_rgba(216,189,113,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#FFF3D1]/50 cursor-pointer"
      >
        <svg
          className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
        </svg>

        {/* Subtle Luxury Gold Ping Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#D8BD71]/30 animate-ping -z-10 opacity-70" />
      </a>
    </aside>
  );
}
