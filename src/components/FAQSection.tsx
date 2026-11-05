import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/services';
import { useApp } from '../context/AppContext';

export const FAQSection: React.FC = () => {
  const { isDarkMode } = useApp();
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeTab, setActiveTab] = useState<'all' | 'activation' | 'payment' | 'guarantee' | 'usage'>('all');

  const tabs: { id: 'all' | 'activation' | 'payment' | 'guarantee' | 'usage'; label: string }[] = [
    { id: 'all', label: 'Toutes les questions' },
    { id: 'activation', label: 'Activation & Livraison' },
    { id: 'payment', label: 'Paiements Mobile Money' },
    { id: 'usage', label: 'Comptes & Fonctionnement' },
    { id: 'guarantee', label: 'Garanties & Support' },
  ];

  const filteredFaqs = FAQ_DATA.filter((item) =>
    activeTab === 'all' ? true : item.category === activeTab
  );

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-14 sm:py-20 border-t transition-colors duration-200"
      style={{
        backgroundColor: isDarkMode ? '#242323' : '#EDE1D1',
        borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
      }}
    >
      <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span
            className="text-xs font-black tracking-widest uppercase block mb-1"
            style={{ color: '#FF7A30' }}
          >
            Aide & Réponses
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black tracking-tight"
            style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
          >
            Foire Aux Questions (F.A.Q)
          </h2>
          <p
            className="text-sm font-medium mt-2"
            style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
          >
            Toutes les réponses pour commander en toute tranquillité sans carte bancaire internationale.
          </p>
        </div>

        {/* Filtres de catégories FAQ */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer shadow-2xs"
                style={{
                  backgroundColor: isActive
                    ? '#FF7A30'
                    : isDarkMode
                    ? '#343333'
                    : '#FFFFFF',
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

        {/* Accordéon FAQ */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                  borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.14)' : 'rgba(43, 42, 42, 0.12)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer hover:opacity-90 transition-opacity"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-sm sm:text-base font-black leading-snug"
                    style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    style={{
                      backgroundColor: isDarkMode ? '#2B2A2A' : '#FAF3EB',
                      color: '#FF7A30',
                    }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm font-medium leading-relaxed border-t"
                    style={{
                      borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.08)' : 'rgba(43, 42, 42, 0.08)',
                      color: isDarkMode ? '#C4B9AA' : '#5A5451',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer d'assistance sous la FAQ */}
        <div
          className="mt-10 p-6 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
            borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
          }}
        >
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md"
              style={{ backgroundColor: '#465C88' }}
            >
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-black" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
                Vous avez une question non listée ?
              </p>
              <p className="text-xs font-medium" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
                Notre assistance WhatsApp vous répond en direct en moins de 15 minutes.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/22660084067?text=Bonjour%20J-C%20PREMIUM%20HOLDING%2C%20j%27ai%20une%20question%20sp%C3%A9cifique."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-black text-xs text-white shadow-md transition-transform active:scale-95 whitespace-nowrap cursor-pointer hover:opacity-95"
            style={{ backgroundColor: '#FF7A30' }}
          >
            <MessageCircle className="w-4 h-4" />
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
