import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Musical Show Production',
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

    // Simulate immediate processing with realistic response
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
    <section id="contact" className="py-24 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
            LET'S PLAN YOUR{' '}
            <span className="italic font-display text-gold-gradient">GRAND OCCASION.</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#d4af37] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#a3a097] font-light">
            Share your event vision with our team. We'll consult with you to craft a bespoke stage, sound, decor, and management proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Company Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="p-6 rounded-2xl bg-[#0f0f14] border border-[#d4af37]/25 shadow-xl mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black border border-[#d4af37]/50 p-0.5 overflow-hidden">
                    <img
                      src="/assets/vdo-logo.png"
                      alt="V Do Eventz Logo"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-white font-medium">V Do Eventz</h3>
                    <p className="text-[11px] text-[#c59d4e] uppercase tracking-wider">
                      Turning Ideas into Grand Experiences
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#a09d94] leading-relaxed mb-6 font-light">
                  Dedicated event management and production team for concert productions, celebrity musical nights, grand wedding ceremonies, and artist logistics.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-semibold text-white">Production House</p>
                      <p className="text-xs text-[#9c9990]">Event Management & Production House</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <InstagramIcon className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-semibold text-white">Official Social Presence</p>
                      <a
                        href="https://www.instagram.com/vdoeventz?psln=MWdlaG5oN2V5dDFjaA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#d4af37] hover:underline"
                      >
                        instagram.com/vdoeventz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-semibold text-white">Consultation Hours</p>
                      <p className="text-xs text-[#9c9990]">Monday – Saturday: 10:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Booking Highlight */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121218] to-[#1a1a24] border border-white/10">
                <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                  Immediate WhatsApp Consultation
                </h4>
                <p className="text-xs text-[#a3a097] leading-relaxed mb-4">
                  Need a rapid quote or have artist booking inquiries? Message our team directly on WhatsApp for an immediate consultation.
                </p>
                <a
                  href="https://wa.me/?text=Hello%20V%20Do%20Eventz%2C%20I%20would%20like%20to%20inquire%20about%20event%20management%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-wider font-bold text-[#0D0D11] bg-gradient-to-r from-[#D8BD71] via-[#E8C57A] to-[#BEA256] hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_16px_rgba(216,189,113,0.3)]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0f0f14] border border-[#d4af37]/25 shadow-2xl relative">
              {submittedData ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2">
                    Enquiry Received Successfully
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">
                    Thank You, {submittedData.name}
                  </p>
                  <p className="text-sm text-[#a3a097] max-w-md mx-auto leading-relaxed mb-6 font-light">
                    Our event director will review your enquiry for{' '}
                    <strong className="text-white">{submittedData.eventType}</strong> and contact you via{' '}
                    <strong className="text-white">{submittedData.phone}</strong> or{' '}
                    <strong className="text-white">{submittedData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmittedData(null)}
                    className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-black bg-[#d4af37] hover:bg-[#e5c378] transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#cfccc4] font-medium mb-2">
                        Full Name <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Arun Kumar"
                        className={`w-full px-4 py-3 rounded-xl bg-[#14141a] text-white text-sm border focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#cfccc4] font-medium mb-2">
                        Email Address <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="arun@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#14141a] text-white text-sm border focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#cfccc4] font-medium mb-2">
                        Phone Number <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-[#14141a] text-white text-sm border focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Category */}
                    <div>
                      <label htmlFor="eventType" className="block text-xs uppercase tracking-wider text-[#cfccc4] font-medium mb-2">
                        Service Category <span className="text-[#d4af37]">*</span>
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#14141a] text-white text-sm border border-white/10 focus:border-[#d4af37] focus:outline-none transition-colors"
                      >
                        <option value="Musical Show Production">Musical Show Production</option>
                        <option value="Wedding Events & Celebrations">Wedding Events & Celebrations</option>
                        <option value="Artist Management">Artist Management</option>
                        <option value="Complete Event Management">Complete Event Management</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Other Bespoke Event">Other Bespoke Event</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Proposed Date */}
                    <div>
                      <label htmlFor="eventDate" className="block text-xs uppercase tracking-wider text-[#cfccc4] font-medium mb-2">
                        Proposed Event Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#14141a] text-white text-sm border border-white/10 focus:border-[#d4af37] focus:outline-none transition-colors"
                      >
                      </input>
                    </div>

                    {/* Event Location / City */}
                    <div>
                      <label htmlFor="location" className="block text-xs uppercase tracking-wider text-[#cfccc4] font-medium mb-2">
                        Event Location / Venue
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Grand Ballroom, Auditorium, Resort"
                        className="w-full px-4 py-3 rounded-xl bg-[#14141a] text-white text-sm border border-white/10 focus:border-[#d4af37] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Requirements Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#cfccc4] font-medium mb-2">
                      Event Brief & Special Requests <span className="text-[#d4af37]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event scale, expected audience, artist preferences, decor theme, or specific production needs..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#14141a] text-white text-sm border focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-xs uppercase tracking-widest font-semibold text-black bg-[#d4af37] hover:bg-[#e5c378] transition-all duration-200 shadow-lg shadow-[#d4af37]/20 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Booking Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
