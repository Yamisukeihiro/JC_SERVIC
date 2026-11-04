import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Clock, Smartphone } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroCarousel } from './HeroCarousel';

export const HeroSection: React.FC = () => {
  const { isDarkMode } = useApp();

  return (
    <section id="accueil" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Subtle organic ambient background orbs */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: '#FF7A30' }}
      />
      <div
        className="absolute top-1/3 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: '#465C88' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Colonne Gauche : Editorial Headline & Value proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border shadow-2xs"
              style={{
                backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.12)',
                color: '#FF7A30',
              }}
            >
              <Zap className="w-3.5 h-3.5 fill-[#FF7A30]" />
              <span>Abonnements Numériques & Outils IA de Pointe</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] [text-wrap:balance]"
              style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
            >
              Vos accès premium activés en{' '}
              <span style={{ color: '#FF7A30' }}>15 minutes</span>{' '}
              au meilleur tarif.
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl font-medium"
              style={{ color: isDarkMode ? '#C4B9AA' : '#5A5451' }}
            >
              Plus besoin de carte bancaire internationale pour utiliser ChatGPT Plus, Canva Pro, Netflix 4K, Spotify et CapCut. Réglez simplement par Wave, Orange Money ou Moov Money avec garantie de remplacement 7j/7.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#catalogue"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-black text-sm text-white shadow-lg transition-transform active:scale-95 hover:opacity-95"
                style={{ backgroundColor: '#FF7A30', boxShadow: '0 10px 25px -5px rgba(255, 122, 48, 0.4)' }}
              >
                Explorer le catalogue
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#tarifs"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm border transition-all hover:opacity-90"
                style={{
                  backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                  borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.2)' : 'rgba(43, 42, 42, 0.2)',
                  color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                }}
              >
                Découvrir les packs
              </a>
            </div>

            {/* Trust markers */}
            <div
              className="pt-4 flex flex-wrap items-center gap-5 text-xs font-bold"
              style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
            >
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FF7A30]" />
                <span>Livraison en 15 min</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#465C88]" />
                <span>Wave & Mobile Money</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FF7A30]" />
                <span>Remplacement Garanti 100%</span>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Interactive Photorealistic Carousel Showcase */}
          <div className="lg:col-span-5">
            <HeroCarousel />
          </div>
        </div>

        {/* 4-Column Feature Strip */}
        <div
          className="mt-14 sm:mt-20 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)' }}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-black text-sm" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
              <Zap className="w-4 h-4 text-[#FF7A30]" />
              <span>Activation Express</span>
            </div>
            <p className="text-xs" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
              Identifiants remis en 15 à 30 min sur WhatsApp
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 font-black text-sm" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
              <Smartphone className="w-4 h-4 text-[#465C88]" />
              <span>Sans Carte Bancaire</span>
            </div>
            <p className="text-xs" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
              Règlement Wave, Orange, Moov & MTN
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 font-black text-sm" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
              <ShieldCheck className="w-4 h-4 text-[#FF7A30]" />
              <span>Garantie 100%</span>
            </div>
            <p className="text-xs" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
              Remplacement immédiat pendant toute la durée
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 font-black text-sm" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
              <Clock className="w-4 h-4 text-[#465C88]" />
              <span>Assistance Continue</span>
            </div>
            <p className="text-xs" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
              Support réactif 7 jours/7 de 08h à 23h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
