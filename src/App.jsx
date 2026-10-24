import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyModal from './components/PrivacyModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0D0D11] text-[#E5E0D5] flex flex-col selection:bg-[#D8BD71] selection:text-[#0D0D11]">
        {/* Persistent Multi-Page Navigation Header */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        {/* Privacy Policy Modal */}
        <PrivacyModal
          isOpen={privacyModalOpen}
          onClose={() => setPrivacyModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
