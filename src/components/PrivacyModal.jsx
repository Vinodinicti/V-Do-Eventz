import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, FileText } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#121217] rounded-2xl border border-[#D8BD71]/35 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-[#E5E0D5]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#181820] text-[#D8BD71] hover:bg-[#D8BD71] hover:text-[#0D0D11] border border-[#D8BD71]/30 transition-all cursor-pointer"
          aria-label="Close Privacy Policy"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-full bg-[#181820] border border-[#D8BD71]/40 text-[#D8BD71]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#D8BD71] font-medium">Privacy Policy</h3>
            <p className="text-xs uppercase tracking-wider text-[#BEA256] font-semibold">
              V Do Eventz • Event Management
            </p>
          </div>
        </div>

        <div className="space-y-6 text-sm text-[#A39B8B] font-light leading-relaxed border-t border-[#D8BD71]/20 pt-6">
          <div>
            <h4 className="text-[#D8BD71] font-medium text-base flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-[#BEA256]" />
              1. Information Collection
            </h4>
            <p className="text-xs text-[#C5BFB2]">
              When you submit an event booking enquiry via our website, we collect your name, email address, contact phone number, proposed event date, venue location, and event brief. We only request information directly relevant to planning and coordinating your event.
            </p>
          </div>

          <div>
            <h4 className="text-[#D8BD71] font-medium text-base flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-[#BEA256]" />
              2. Use of Information
            </h4>
            <p className="text-xs text-[#C5BFB2]">
              Your information is solely used to prepare tailored event proposals, confirm event availability, contact you regarding stage or decor requirements, and fulfill client agreements.
            </p>
          </div>

          <div>
            <h4 className="text-[#D8BD71] font-medium text-base flex items-center gap-2 mb-2">
              <EyeOff className="w-4 h-4 text-[#BEA256]" />
              3. Non-Disclosure & Confidentiality
            </h4>
            <p className="text-xs text-[#C5BFB2]">
              We respect your privacy unconditionally. V Do Eventz does not sell, lease, trade, or distribute your personal contact information to third-party marketing companies.
            </p>
          </div>

          <div>
            <h4 className="text-[#D8BD71] font-medium text-base mb-2">
              4. Event Media & Photography Notice
            </h4>
            <p className="text-xs text-[#C5BFB2]">
              Photographs and videos displayed in our portfolio represent live shows, stage productions, and public event setups. We maintain discretion and adhere to agreed confidentiality agreements for private family celebrations.
            </p>
          </div>

          <div>
            <h4 className="text-[#D8BD71] font-medium text-base mb-2">
              5. Contact Us Regarding Your Data
            </h4>
            <p className="text-xs text-[#C5BFB2]">
              For any questions concerning your privacy or to update your submitted enquiry information, please reach out to V Do Eventz or connect with us directly through our official Instagram profile (@vdoeventz).
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#D8BD71]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-[#0D0D11] bg-gradient-to-r from-[#D8BD71] to-[#BEA256] hover:brightness-110 transition-colors cursor-pointer border border-[#D8BD71] shadow-md shadow-[#D8BD71]/20"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
}
