import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Eye, Check, ExternalLink, X, Flame } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA, formatFCFA } from '../data/services';
import { Service, ServiceCategory } from '../types';
import { BrandIconBadge } from './ServiceIcons';

export const CatalogueSection: React.FC = () => {
  const { addToCart, setIsCartOpen, setSelectedServiceModal, isDarkMode } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryTabs: { id: ServiceCategory; label: string; keywords: string[] }[] = [
    { id: 'all', label: 'Tous les services', keywords: [] },
    { id: 'ai', label: 'Intelligence Artificielle', keywords: ['ia', 'ai', 'gpt', 'chatgpt', 'claude', 'bot', 'prompt', 'code'] },
    { id: 'design', label: 'Design & Création', keywords: ['design', 'video', 'graphisme', 'canva', 'capcut', 'montage', 'photo', 'watermark'] },
    { id: 'streaming', label: 'Streaming & Cinéma', keywords: ['streaming', 'cinema', 'film', 'serie', 'netflix', 'prime', 'iptv', 'tv', '4k', 'uhd'] },
    { id: 'music', label: 'Musique & Social', keywords: ['musique', 'music', 'audio', 'spotify', 'son', 'snapchat', 'social', 'reseaux'] },
    { id: 'accessories', label: 'Accessoires', keywords: ['airpods', 'ecouteurs', 'bluetooth', 'chargeur', 'cable', 'accessoire', 'apple'] },
    { id: 'storage', label: 'Stockage & Sécurité', keywords: ['stockage', 'securite', 'cloud', 'google', 'vpn', 'nord', 'icloud', 'drive'] },
    { id: 'training', label: 'Formation', keywords: ['formation', 'apprentissage', 'langue', 'duolingo', 'cours'] },
    { id: 'office', label: 'Bureautique & Organisation', keywords: ['bureautique', 'notion', 'office', 'excel', 'powerpoint', 'cursor', 'organisation'] },
    { id: 'packs', label: 'Packs Spéciaux', keywords: ['pack', 'bundle', 'combo', 'promo', 'economie', 'reduction'] },
  ];

  const popularKeywords = ['Netflix 4K', 'ChatGPT', 'Canva Pro', 'IPTV Direct', 'AirPods Pro', 'Google One', 'Notion Business', 'Cursor Pro'];

  const filteredServices = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return SERVICES_DATA.filter((service) => {
      let matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;

      if (query) {
        const matchingCategoryTab = categoryTabs.find(
          (t) => t.id !== 'all' && (t.label.toLowerCase().includes(query) || t.keywords.some((kw) => query.includes(kw)))
        );
        if (matchingCategoryTab && service.category === matchingCategoryTab.id) {
          matchesCategory = true;
        }
      }

      if (!query) {
        return matchesCategory;
      }

      const nameMatch = service.name.toLowerCase().includes(query);
      const descMatch = service.description.toLowerCase().includes(query);
      const categoryMatch = service.category.toLowerCase().includes(query);
      const tagMatch = service.tag?.toLowerCase().includes(query);
      const accountMatch = service.accountType.toLowerCase().includes(query);
      const featuresMatch = service.features.some((f) => f.toLowerCase().includes(query));

      return matchesCategory && (nameMatch || descMatch || categoryMatch || tagMatch || accountMatch || featuresMatch);
    });
  }, [selectedCategory, searchQuery, categoryTabs]);

  const handleDirectWhatsApp = (service: Service) => {
    const message = encodeURIComponent(
      `Bonjour J-C PREMIUM HOLDING, je souhaite commander directement l'abonnement : *${service.name}* (${service.duration}) à ${formatFCFA(service.basePrice)}.`
    );
    window.open(`https://wa.me/22660084067?text=${message}`, '_blank');
  };

  return (
    <section
      id="catalogue"
      className="py-14 sm:py-20 border-t transition-colors duration-200"
      style={{
        backgroundColor: isDarkMode ? '#242323' : '#EDE1D1',
        borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-black tracking-widest uppercase block"
                style={{ color: '#FF7A30' }}
              >
                Catalogue Officiel
              </span>
              <span
                className="text-[10px] font-black px-2 py-0.5 rounded-full uppercase"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(70, 92, 136, 0.3)' : 'rgba(70, 92, 136, 0.15)',
                  color: isDarkMode ? '#A5BBE3' : '#465C88',
                }}
              >
                Recherche Intelligente en Direct
              </span>
            </div>
            <h2
              className="text-2xl sm:text-4xl font-black tracking-tight"
              style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
            >
              Abonnements & Licences Numériques
            </h2>
            <p
              className="text-sm font-medium mt-1 max-w-xl"
              style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
            >
              Recherchez instantanément par nom, mot-clé (4K, code, GPT, offline) ou catégorie.
            </p>
          </div>

          <div className="w-full md:w-96 space-y-2">
            <div className="relative">
              <Search
                className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 transition-colors pointer-events-none"
                style={{ color: searchQuery ? '#FF7A30' : '#8A8480' }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher (Netflix, ChatGPT, Canva, IPTV, 4K...)"
                className="w-full pl-11 pr-10 py-3.5 rounded-2xl text-xs font-bold border transition-all focus:outline-none shadow-sm"
                style={{
                  backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                  borderColor: searchQuery
                    ? '#FF7A30'
                    : isDarkMode
                    ? 'rgba(245, 235, 221, 0.2)'
                    : 'rgba(43, 42, 42, 0.2)',
                  color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                  boxShadow: searchQuery ? '0 0 0 2px rgba(255, 122, 48, 0.2)' : undefined,
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="w-6 h-6 rounded-full flex items-center justify-center absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors cursor-pointer hover:opacity-80"
                  style={{
                    backgroundColor: isDarkMode ? '#2B2A2A' : '#EDE1D1',
                    color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                  }}
                  aria-label="Effacer la recherche"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px] font-bold px-1">
              <span style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
                {filteredServices.length}{' '}
                {filteredServices.length > 1 ? 'abonnements disponibles' : 'abonnement disponible'}
              </span>
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="hover:underline cursor-pointer"
                  style={{ color: '#FF7A30' }}
                >
                  Réinitialiser
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 no-scrollbar">
          <span
            className="text-[11px] font-black uppercase tracking-wider whitespace-nowrap mr-1 flex items-center gap-1"
            style={{ color: '#465C88' }}
          >
            <Flame className="w-3 h-3 text-[#FF7A30]" />
            Populaires :
          </span>
          {popularKeywords.map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => {
                setSearchQuery(kw);
                setSelectedCategory('all');
              }}
              className="px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap hover:scale-105"
              style={{
                backgroundColor:
                  searchQuery.toLowerCase() === kw.toLowerCase()
                    ? '#FF7A30'
                    : isDarkMode
                    ? '#343333'
                    : '#FFFFFF',
                color: searchQuery.toLowerCase() === kw.toLowerCase() ? '#FFFFFF' : isDarkMode ? '#F5EBDD' : '#2B2A2A',
                border:
                  searchQuery.toLowerCase() === kw.toLowerCase()
                    ? '1px solid #FF7A30'
                    : isDarkMode
                    ? '1px solid rgba(245, 235, 221, 0.12)'
                    : '1px solid rgba(43, 42, 42, 0.12)',
              }}
            >
              {kw}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className="px-4 py-2.5 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer shadow-2xs"
                style={{
                  backgroundColor: isActive ? '#FF7A30' : isDarkMode ? '#343333' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : isDarkMode ? '#F5EBDD' : '#2B2A2A',
                  border: isActive
                    ? '1px solid #FF7A30'
                    : isDarkMode
                    ? '1px solid rgba(245, 235, 221, 0.12)'
                    : '1px solid rgba(43, 42, 42, 0.12)',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {filteredServices.length === 0 ? (
          <div
            className="py-16 text-center rounded-3xl border p-8 space-y-3"
            style={{
              backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
              borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
            }}
          >
            <div
              className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-white"
              style={{ backgroundColor: '#FF7A30' }}
            >
              <Search className="w-7 h-7" />
            </div>
            <p className="font-black text-base" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
              Aucun abonnement trouvé pour "{searchQuery}"
            </p>
            <p className="text-xs max-w-sm mx-auto font-medium" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
              Vérifiez l'orthographe ou essayez un mot-clé plus court comme "GPT", "Film", "Vidéo", "Netflix" ou "Canva".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-black text-white shadow-sm cursor-pointer hover:opacity-95"
              style={{ backgroundColor: '#465C88' }}
            >
              Voir tout le catalogue ({SERVICES_DATA.length})
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative"
                style={{
                  backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                  borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.12)',
                }}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <BrandIconBadge iconKey={service.iconKey} size="lg" />
                    {service.tag && (
                      <span
                        className="text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider"
                        style={{
                          backgroundColor: isDarkMode ? 'rgba(255, 122, 48, 0.2)' : 'rgba(255, 122, 48, 0.12)',
                          color: '#FF7A30',
                          border: '1px solid rgba(255, 122, 48, 0.3)',
                        }}
                      >
                        {service.tag}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 mb-3">
                    <h3
                      className="text-lg font-black tracking-tight transition-colors"
                      style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                    >
                      {service.name}
                    </h3>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
                    >
                      {service.accountType}
                    </p>
                  </div>

                  <p
                    className="text-xs font-medium leading-relaxed mb-4 line-clamp-2"
                    style={{ color: isDarkMode ? '#C4B9AA' : '#5A5451' }}
                  >
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 font-medium"
                        style={{ color: isDarkMode ? '#E0D6C8' : '#45403D' }}
                      >
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: 'rgba(70, 92, 136, 0.15)', color: '#465C88' }}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="pt-5 border-t"
                  style={{ borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.1)' : 'rgba(43, 42, 42, 0.1)' }}
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className="text-xl font-black font-mono tabular-nums"
                          style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                        >
                          {formatFCFA(service.basePrice)}
                        </span>
                        <span className="text-xs text-slate-400">/ {service.duration}</span>
                      </div>
                      {service.oldPrice && (
                        <span className="text-[11px] text-slate-400 line-through">
                          {formatFCFA(service.oldPrice)}
                        </span>
                      )}
                    </div>
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: isDarkMode ? 'rgba(70, 92, 136, 0.25)' : 'rgba(70, 92, 136, 0.1)',
                        color: isDarkMode ? '#92A5C9' : '#465C88',
                      }}
                    >
                      ~{service.deliveryTime}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(service);
                        setIsCartOpen(true);
                      }}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-black text-xs text-white shadow-sm transition-transform active:scale-95 cursor-pointer hover:opacity-95"
                      style={{ backgroundColor: '#FF7A30' }}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      + Panier
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedServiceModal(service)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs border transition-colors cursor-pointer hover:opacity-90"
                      style={{
                        backgroundColor: isDarkMode ? '#2B2A2A' : '#EDE1D1',
                        borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.18)' : 'rgba(43, 42, 42, 0.18)',
                        color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                      }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Détails
                    </button>
                  </div>

                  <div className="mt-2.5 text-center">
                    <button
                      type="button"
                      onClick={() => handleDirectWhatsApp(service)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold hover:underline cursor-pointer"
                      style={{ color: '#465C88' }}
                    >
                      Commander directement via WhatsApp
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
