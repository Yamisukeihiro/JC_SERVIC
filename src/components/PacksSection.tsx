import React from 'react';
import { Check, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA, formatFCFA } from '../data/services';
import { BrandIconBadge } from './ServiceIcons';

export const PacksSection: React.FC = () => {
  const { addToCart, setIsCartOpen, isDarkMode } = useApp();

  const packs = SERVICES_DATA.filter((s) => s.category === 'packs');

  return (
    <section id="tarifs" className="py-14 sm:py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span
            className="text-xs font-black uppercase tracking-widest block mb-1"
            style={{ color: '#FF7A30' }}
          >
            Formules Groupées
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black tracking-tight"
            style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
          >
            Packs Spéciaux avec Réduction
          </h2>
          <p
            className="text-sm font-medium mt-2"
            style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
          >
            Bénéficiez d'une remise immédiate en combinant vos outils d'intelligence artificielle, vos suites de création et vos chaînes de streaming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packs.map((pack) => {
            const isFeatured = pack.id === 'pack-crea' || pack.id === 'pack-cinema';
            const economy = pack.oldPrice ? pack.oldPrice - pack.basePrice : 0;

            return (
              <div
                key={pack.id}
                className="rounded-3xl border flex flex-col justify-between p-7 transition-all duration-300 hover:shadow-2xl relative"
                style={{
                  backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                  borderColor: isFeatured
                    ? '#FF7A30'
                    : isDarkMode
                    ? 'rgba(245, 235, 221, 0.15)'
                    : 'rgba(43, 42, 42, 0.12)',
                  boxShadow: isFeatured ? '0 12px 30px -10px rgba(255, 122, 48, 0.25)' : undefined,
                }}
              >
                {/* Badge économie en haut */}
                {economy > 0 && (
                  <div
                    className="absolute -top-3.5 right-6 text-white font-black text-xs px-3.5 py-1 rounded-full shadow-md"
                    style={{ backgroundColor: '#FF7A30' }}
                  >
                    Économie {formatFCFA(economy)}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <BrandIconBadge iconKey={pack.iconKey} size="lg" />
                    <div>
                      <span
                        className="text-[11px] font-black uppercase tracking-wider block"
                        style={{ color: '#FF7A30' }}
                      >
                        {pack.tag}
                      </span>
                      <h3
                        className="text-base font-black leading-snug"
                        style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                      >
                        {pack.name}
                      </h3>
                    </div>
                  </div>

                  <p
                    className="text-xs font-medium mb-6 leading-relaxed"
                    style={{ color: isDarkMode ? '#C4B9AA' : '#5A5451' }}
                  >
                    {pack.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <p
                      className="text-[11px] font-black uppercase tracking-wider"
                      style={{ color: isDarkMode ? '#E0D6C8' : '#696360' }}
                    >
                      Inclus dans ce pack :
                    </p>
                    {pack.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs font-medium"
                        style={{ color: isDarkMode ? '#E0D6C8' : '#3E3A38' }}
                      >
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: 'rgba(70, 92, 136, 0.15)', color: '#465C88' }}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="pt-5 border-t"
                  style={{ borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.1)' : 'rgba(43, 42, 42, 0.1)' }}
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className="text-2xl font-black font-mono tabular-nums"
                          style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                        >
                          {formatFCFA(pack.basePrice)}
                        </span>
                        <span className="text-xs text-slate-400">/ {pack.duration}</span>
                      </div>
                      {pack.oldPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          {formatFCFA(pack.oldPrice)}
                        </span>
                      )}
                    </div>
                    <div
                      className="flex items-center gap-1 text-[11px] font-bold"
                      style={{ color: '#465C88' }}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Garantie 100%</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      addToCart(pack);
                      setIsCartOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-black text-xs text-white shadow-md transition-all active:scale-98 cursor-pointer hover:opacity-95"
                    style={{ backgroundColor: '#FF7A30' }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Ajouter ce Pack au Panier
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
