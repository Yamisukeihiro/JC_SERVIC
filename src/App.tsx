/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CatalogueSection } from './components/CatalogueSection';
import { PacksSection } from './components/PacksSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Toast } from './components/Toast';
import { MessageCircle } from 'lucide-react';

function AppContent() {
  const { isDarkMode } = useApp();

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-200"
      style={{
        backgroundColor: isDarkMode ? '#2B2A2A' : '#F5EBDD',
        color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
      }}
    >
      {/* Barre de navigation sans bandeau ticker */}
      <Navbar />

      {/* Contenu principal */}
      <main className="flex-1">
        <HeroSection />
        <CatalogueSection />
        <PacksSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Pied de page */}
      <Footer />

      {/* Tiroir latéral de Panier & Checkout */}
      <CartDrawer />

      {/* Modal d'inspection détaillée du service */}
      <ServiceDetailModal />

      {/* Notification Toast */}
      <Toast />

      {/* Barre mobile rapide de panier */}
      <MobileBottomBar />

      {/* Bouton d'assistance flottant WhatsApp (Desktop & Tablet) */}
      <a
        href="https://wa.me/22660084067?text=Bonjour%20J-C%20PREMIUM%20HOLDING%2C%20j%27aimerais%20avoir%20des%20informations%20sur%20vos%20abonnements."
        target="_blank"
        rel="noreferrer"
        aria-label="Discussion directe WhatsApp"
        className="hidden sm:flex fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full text-white items-center justify-center shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        style={{ backgroundColor: '#25D366' }}
        title="Discuter sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
