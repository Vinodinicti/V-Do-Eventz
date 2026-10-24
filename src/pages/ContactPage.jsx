import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import InstagramIcon from '../components/icons/InstagramIcon';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: preselectedService || 'Musical Events',
    eventDate: '',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        eventType: preselectedService
      }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please brief us about your event requirements.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: 'Musical Show Production',
        eventDate: '',
        location: '',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="relative pt-20 sm:pt-28 pb-14 sm:pb-20 bg-[#0D0D11] text-[#E5E0D5] min-h-screen overflow-hidden">
      {/* Fixed Background Image: Outdoor Fairy Light Canopy Banquet */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/assets/contact-bg.jpg"
          alt="Outdoor Fairy Light Canopy Banquet Background"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Balanced dark gradient overlay to ensure perfect readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D11]/75 via-[#0D0D11]/65 to-[#0D0D11]/85" />
      </div>

      <div className="relative z-10">
        {/* Editorial Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-14 text-center">
          <p className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D8BD71] font-semibold mb-2 sm:mb-3">
            GET IN TOUCH
          </p>
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[#D8BD71] mb-3 sm:mb-4">
            <span className="w-8 sm:w-12 h-[1px] bg-[#D8BD71]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C57A]" />
            <span className="w-8 sm:w-12 h-[1px] bg-[#D8BD71]/40" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#E5E0D5] font-normal uppercase tracking-tight mb-2 sm:mb-3 text-center mx-auto max-w-2xl leading-snug">
            PLAN YOUR <span className="italic font-serif golden-glow-animate">EVENT.</span>
          </h1>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#A39B8B] mb-4 sm:mb-0">
            Premier Event Management
          </p>

          {/* Mobile Quick 1-Tap Action Chips (WhatsApp & Instagram) */}
          <div className="flex sm:hidden items-center justify-center gap-2 mt-3">
            <a
              href="https://wa.me/?text=Hello%20V%20Do%20Eventz%2C%20I%20would%20like%20to%20inquire%20about%20event%20management%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold text-[#0D0D11] bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] shadow-[0_2px_12px_rgba(216,189,113,0.3)] active:scale-95 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-semibold text-[#D8BD71] bg-[#141419]/90 border border-[#D8BD71]/35 active:scale-95 transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#D8BD71]" />
              <span>@vdoeventz</span>
            </a>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            {/* Form Card (Order 1 on mobile for immediate access, Order 2 on desktop) */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-[#141419]/90 border border-[#D8BD71]/35 shadow-2xl backdrop-blur-md">
                {submittedData ? (
                  <div className="py-10 sm:py-12 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0D0D11] border border-[#D8BD71] text-[#D8BD71] flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-md">
                      <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#E5E0D5] mb-2">
                      Enquiry Received
                    </h3>
                    <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#D8BD71] font-semibold mb-3 sm:mb-4">
                      Thank You, {submittedData.name}
                    </p>
                    <p className="text-xs sm:text-sm text-[#A39B8B] max-w-md mx-auto leading-relaxed mb-6 font-light">
                      Our production team will contact you shortly regarding your enquiry for{' '}
                      <strong className="text-[#D8BD71]">{submittedData.eventType}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmittedData(null)}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-[0_4px_16px_rgba(216,189,113,0.25)] hover:brightness-110 active:scale-95 cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="grid grid-cols-2 gap-3 sm:gap-5">
                    {/* Pair 1: Full Name & Email Address */}
                    <div className="min-w-0">
                      <label htmlFor="name" className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#E5E0D5] font-semibold mb-1 truncate">
                        Full Name <span className="text-[#D8BD71]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0D0D11] text-[#E5E0D5] text-[12.5px] sm:text-sm border focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#D8BD71]/25 focus:border-[#D8BD71]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate">{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="min-w-0">
                      <label htmlFor="email" className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#E5E0D5] font-semibold mb-1 truncate">
                        Email Address <span className="text-[#D8BD71]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0D0D11] text-[#E5E0D5] text-[12.5px] sm:text-sm border focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#D8BD71]/25 focus:border-[#D8BD71]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate">{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Pair 2: Phone Number & Service Category */}
                    <div className="min-w-0">
                      <label htmlFor="phone" className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#E5E0D5] font-semibold mb-1 truncate">
                        Phone Number <span className="text-[#D8BD71]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 Phone"
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0D0D11] text-[#E5E0D5] text-[12.5px] sm:text-sm border focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#D8BD71]/25 focus:border-[#D8BD71]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate">{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div className="min-w-0">
                      <label htmlFor="eventType" className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#E5E0D5] font-semibold mb-1 truncate">
                        Service Category
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-2.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0D0D11] text-[#E5E0D5] text-[12.5px] sm:text-sm border border-[#D8BD71]/25 focus:border-[#D8BD71] focus:outline-none truncate"
                      >
                        <option value="Musical Events" className="bg-[#141419] text-[#E5E0D5]">Musical Events</option>
                        <option value="Artist Management" className="bg-[#141419] text-[#E5E0D5]">Artist Management</option>
                        <option value="Corporate Events" className="bg-[#141419] text-[#E5E0D5]">Corporate Events</option>
                        <option value="Wedding Events" className="bg-[#141419] text-[#E5E0D5]">Wedding Events</option>
                        <option value="Social Media Marketing" className="bg-[#141419] text-[#E5E0D5]">Social Media Marketing</option>
                        <option value="Catering Services" className="bg-[#141419] text-[#E5E0D5]">Catering Services</option>
                        <option value="Shop Opening & Store Launches" className="bg-[#141419] text-[#E5E0D5]">Store Launches</option>
                        <option value="Celebrity Visits" className="bg-[#141419] text-[#E5E0D5]">Celebrity Visits</option>
                      </select>
                    </div>

                    {/* Pair 3: Proposed Event Date & Venue Location */}
                    <div className="min-w-0">
                      <label htmlFor="eventDate" className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#E5E0D5] font-semibold mb-1 truncate">
                        Proposed Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-2.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0D0D11] text-[#E5E0D5] text-[12.5px] sm:text-sm [color-scheme:dark] border border-[#D8BD71]/25 focus:border-[#D8BD71] focus:outline-none"
                      />
                    </div>

                    <div className="min-w-0">
                      <label htmlFor="location" className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#E5E0D5] font-semibold mb-1 truncate">
                        Venue / Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Venue / City"
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0D0D11] text-[#E5E0D5] text-[12.5px] sm:text-sm border border-[#D8BD71]/25 focus:border-[#D8BD71] focus:outline-none"
                      />
                    </div>

                    {/* Event Brief & Submit Button (Full Width Col-Span-2) */}
                    <div className="col-span-2">
                      <label htmlFor="message" className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#E5E0D5] font-semibold mb-1">
                        Event Brief <span className="text-[#D8BD71]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Brief details about your concert, wedding, or event scale..."
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0D0D11] text-[#E5E0D5] text-[12.5px] sm:text-sm border focus:outline-none transition-colors resize-none ${
                          errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#D8BD71]/25 focus:border-[#D8BD71]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="col-span-2 pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] text-[#0D0D11] text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold transition-all duration-200 shadow-[0_4px_16px_rgba(216,189,113,0.25)] hover:brightness-110 active:scale-95 disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Sending Your Request...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>Submit Booking Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Company & WhatsApp Details (Order 2 on mobile, Order 1 on desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Company Info Card */}
                <div className="p-5 sm:p-8 rounded-2xl bg-[#141419]/90 border border-[#D8BD71]/35 shadow-2xl backdrop-blur-md mb-6 sm:mb-8">
                  <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0D0D11] border border-[#D8BD71] p-0.5 overflow-hidden shadow-sm shrink-0">
                      <img
                        src="/assets/vdo-logo.png"
                        alt="V Do Eventz Logo"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="font-serif text-lg sm:text-xl text-[#E5E0D5] font-medium">V Do Eventz</h2>
                      <p className="text-[9.5px] sm:text-[10px] text-[#D8BD71] uppercase tracking-wider font-semibold">
                        Event Management & Entertainment
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-5 pt-4 border-t border-[#D8BD71]/20">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#D8BD71] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] sm:text-xs font-semibold text-[#E5E0D5] uppercase tracking-wider">Services</p>
                        <p className="text-xs text-[#A39B8B] mt-0.5">Full-Service Event Production</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <InstagramIcon className="w-4 h-4 text-[#D8BD71] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] sm:text-xs font-semibold text-[#E5E0D5] uppercase tracking-wider">Official Instagram</p>
                        <a
                          href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#D8BD71] hover:text-[#E8C57A] hover:underline mt-0.5 block"
                        >
                          @vdoeventz
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#D8BD71] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] sm:text-xs font-semibold text-[#E5E0D5] uppercase tracking-wider">Consultation Hours</p>
                        <p className="text-xs text-[#A39B8B] mt-0.5">Monday – Saturday: 10:00 AM – 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Consultation Card (In Theme Gold, NOT Green) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#141419]/90 border border-[#D8BD71]/30 text-[#E5E0D5] shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#E8C57A] animate-pulse" />
                    <h3 className="text-xs uppercase tracking-widest text-[#D8BD71] font-bold">
                      Instant WhatsApp Consultation
                    </h3>
                  </div>
                  <p className="text-xs text-[#A39B8B] leading-relaxed mb-4 font-light">
                    Have an immediate query for a concert, wedding, or artist booking? Message our team directly.
                  </p>
                  <a
                    href="https://wa.me/?text=Hello%20V%20Do%20Eventz%2C%20I%20would%20like%20to%20inquire%20about%20event%20management%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-wider font-bold text-[#0D0D11] bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_4px_16px_rgba(216,189,113,0.3)] w-full sm:w-auto cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
