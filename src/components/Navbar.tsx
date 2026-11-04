import React, { useState } from 'react';
import { Sun, Moon, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SiteLogo } from './SiteLogo';

export const Navbar: React.FC = () => {
  const { isDarkMode, toggleDarkMode, cartCount, setIsCartOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Catalogue', href: '#catalogue' },
    { label: 'Packs Promo', href: '#tarifs' },
    { label: 'F.A.Q', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header fixe élégant inspiré du style MockupHive (Ticker retiré comme demandé) */}
      <header
        className="sticky top-0 z-40 backdrop-blur-md transition-colors duration-200 border-b"
        style={{
          backgroundColor: isDarkMode ? 'rgba(43, 42, 42, 0.92)' : 'rgba(245, 235, 221, 0.92)',
          borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
          color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4 sm:gap-8">
            {/* Zone 1: Official Uploaded Brand Logo */}
            <a
              href="#accueil"
              className="flex items-center gap-3 font-extrabold text-base sm:text-xl tracking-tight whitespace-nowrap shrink-0 group"
            >
              <SiteLogo size="md" showText={true} />
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-bold">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="transition-colors whitespace-nowrap cursor-pointer py-1 hover:opacity-80"
                  style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Zone 3: Header Actions & Controls */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Bouton Thème Sombre / Clair (Testé et 100% réactif) */}
              <button
                type="button"
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
                title={isDarkMode ? 'Passer au mode clair' : 'Passer au mode sombre'}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 border cursor-pointer active:scale-95 shadow-xs"
                style={{
                  backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                  borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
                  color: isDarkMode ? '#FF7A30' : '#465C88',
                }}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-[#FF7A30] transition-transform rotate-0 hover:rotate-45" />
                ) : (
                  <Moon className="w-5 h-5 text-[#465C88] transition-transform -rotate-12 hover:rotate-0" />
                )}
              </button>

              {/* Bouton Panier */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                aria-label={`Panier (${cartCount} articles)`}
                className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 border cursor-pointer active:scale-95 shadow-xs"
                style={{
                  backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                  borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
                  color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                }}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 font-black text-xs rounded-full flex items-center justify-center shadow-md animate-pulse"
                    style={{ backgroundColor: '#FF7A30', color: '#FFFFFF' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Bouton Commander Desktop */}
              <a
                href="#catalogue"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs lg:text-sm font-extrabold rounded-xl shadow-md transition-all duration-200 whitespace-nowrap active:scale-95 hover:opacity-95 text-white"
                style={{ backgroundColor: '#FF7A30' }}
              >
                Commander
              </a>

              {/* Hamburger Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu principal"
                className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border cursor-pointer active:scale-95"
                style={{
                  backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                  borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
                  color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Déroulant */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t px-5 pt-4 pb-6 space-y-2 shadow-2xl transition-all"
            style={{
              backgroundColor: isDarkMode ? '#2B2A2A' : '#F5EBDD',
              borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3.5 py-3 rounded-xl text-sm font-bold transition-colors"
                style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
              >
                {link.label}
              </button>
            ))}

            <div
              className="pt-4 border-t flex flex-col gap-2.5"
              style={{
                borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
              }}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-extrabold text-white shadow-sm"
                style={{ backgroundColor: '#FF7A30' }}
              >
                <ShoppingBag className="w-4 h-4" />
                Mon Panier ({cartCount})
              </button>

              <a
                href="https://wa.me/22660084067?text=Bonjour%20J-C%20PREMIUM%2C%20je%20souhaite%20des%20renseignements."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold border transition-colors"
                style={{
                  backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                  borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.2)' : 'rgba(43, 42, 42, 0.2)',
                  color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                }}
              >
                <MessageCircle className="w-4 h-4 text-[#FF7A30]" />
                WhatsApp Direct (+226 60 08 40 67)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
