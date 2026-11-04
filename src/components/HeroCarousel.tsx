import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Zap, Play, Sparkles, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA, formatFCFA } from '../data/services';
import { BrandIconBadge } from './ServiceIcons';

import aiImage from '../assets/carousel/ai-productivity.webp';
import cinemaImage from '../assets/carousel/cinema-vip.webp';
import mobileImage from '../assets/carousel/mobile-activation.webp';

interface CarouselSlide {
  id: string;
  image: string;
  badge: string;
  badgeIcon: React.ReactNode;
  title: string;
  subtitle: string;
  serviceId: string;
}

const SLIDES: CarouselSlide[] = [
  {
    id: 'ai-productivity',
    image: aiImage,
    badge: 'Intelligence Artificielle',
    badgeIcon: <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />,
    title: 'ChatGPT Plus & Claude Pro',
    subtitle: 'Modèles avancés GPT-4o, génération d\'images & Claude 3.5 Sonnet pour coder et créer sans limite.',
    serviceId: 'chatgpt',
  },
  {
    id: 'cinema-vip',
    image: cinemaImage,
    badge: 'Cinéma & Séries HDR',
    badgeIcon: <Play className="w-3.5 h-3.5 fill-[#FF7A30] text-[#FF7A30]" />,
    title: 'Netflix UHD 4K & Prime Video',
    subtitle: 'Votre profil 100% privé verrouillé par code PIN secret. Dolby Atmos et 2160p Ultra HD.',
    serviceId: 'netflix',
  },
  {
    id: 'mobile-activation',
    image: mobileImage,
    badge: 'Paiement Mobile Money',
    badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
    title: 'Activation Garantie en 15 Min',
    subtitle: 'Paiement sans carte bancaire par Wave, Orange Money, Moov ou MTN avec garantie 100% 7j/7.',
    serviceId: 'pack-cinema',
  },
];

export const HeroCarousel: React.FC = () => {
  const { addToCart, setIsCartOpen, isDarkMode } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = SLIDES[currentIndex];
  const activeService =
    SERVICES_DATA.find((s) => s.id === currentSlide.serviceId) || SERVICES_DATA[0];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  return (
    <div
      className="rounded-3xl p-4 sm:p-5 border shadow-2xl relative overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? '#1e1e24' : '#FFFFFF',
        borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.14)' : 'rgba(43, 42, 42, 0.12)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Slide Tab Navigation */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className="px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
                style={{
                  backgroundColor: isActive
                    ? '#FF7A30'
                    : isDarkMode
                    ? 'rgba(255, 255, 255, 0.06)'
                    : '#EDE1D1',
                  color: isActive ? '#FFFFFF' : isDarkMode ? '#F5EBDD' : '#2B2A2A',
                }}
              >
                <span>{slide.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Arrow Navigation */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Diapositive précédente"
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 border cursor-pointer"
            style={{
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#F5EBDD',
              borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.1)' : 'rgba(43, 42, 42, 0.1)',
              color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
            }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Diapositive suivante"
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 border cursor-pointer"
            style={{
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#F5EBDD',
              borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.1)' : 'rgba(43, 42, 42, 0.1)',
              color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
            }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Image Showcase Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border group bg-black">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Gradient Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              {/* Slide Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black tracking-wide uppercase bg-black/60 backdrop-blur-md border border-white/20 text-white w-fit mb-2">
                  {slide.badgeIcon}
                  <span>{slide.badge}</span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-md">
                  {slide.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-2 mt-1 drop-shadow-sm max-w-lg">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          );
        })}

        {/* Progress Bars at the bottom */}
        <div className="absolute bottom-2 left-4 right-4 z-20 flex items-center gap-1.5">
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className="h-1 flex-1 rounded-full overflow-hidden bg-white/25 cursor-pointer transition-all"
            >
              <div
                className="h-full bg-[#FF7A30] transition-all duration-300"
                style={{
                  width: idx === currentIndex ? '100%' : '0%',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Quick-Order Bar */}
      <div
        className="mt-4 pt-3.5 border-t flex items-center justify-between gap-3"
        style={{ borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.1)' : 'rgba(43, 42, 42, 0.1)' }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <BrandIconBadge iconKey={activeService.iconKey} size="md" />
          <div className="min-w-0">
            <h4
              className="text-xs sm:text-sm font-black truncate"
              style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
            >
              {activeService.name}
            </h4>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black font-mono tabular-nums text-[#FF7A30]">
                {formatFCFA(activeService.basePrice)}
              </span>
              <span className="text-[11px] text-slate-400">/ {activeService.duration}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            addToCart(activeService);
            setIsCartOpen(true);
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black text-white shadow-md transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
          style={{ backgroundColor: '#FF7A30', boxShadow: '0 4px 14px rgba(255, 122, 48, 0.35)' }}
        >
          <Zap className="w-3.5 h-3.5 fill-white" />
          <span>Ajouter au panier</span>
        </button>
      </div>
    </div>
  );
};
