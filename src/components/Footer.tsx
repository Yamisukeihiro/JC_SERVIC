import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { BrandIconBadge } from './ServiceIcons';
import { SiteLogo } from './SiteLogo';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { isDarkMode } = useApp();

  return (
    <footer
      className="border-t pt-14 pb-10 transition-colors duration-200"
      style={{
        backgroundColor: isDarkMode ? '#222121' : '#E8DBC9',
        borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
        color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Marque */}
          <div className="md:col-span-2 space-y-4">
            <SiteLogo size="md" showText={true} />

            <p className="text-xs leading-relaxed max-w-sm font-medium" style={{ color: isDarkMode ? '#C4B9AA' : '#5A5451' }}>
              Votre destination de confiance pour l'accès aux technologies d'intelligence artificielle, licences de design pro et plateformes de streaming en Afrique de l'Ouest.
            </p>

            <div className="flex items-center gap-2 pt-1 font-bold text-xs" style={{ color: '#465C88' }}>
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Paiement sécurisé par Wave & Mobile Money · Remplacement garanti 7j/7</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider" style={{ color: '#FF7A30' }}>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-bold" style={{ color: isDarkMode ? '#C4B9AA' : '#5A5451' }}>
              <li>
                <a href="#accueil" className="hover:opacity-80 transition-opacity">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:opacity-80 transition-opacity">
                  Catalogue officiel
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:opacity-80 transition-opacity">
                  Packs & Promotions
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:opacity-80 transition-opacity">
                  Foire Aux Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-80 transition-opacity">
                  Assistance WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Règlements */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider" style={{ color: '#465C88' }}>
              Règlements Acceptés
            </h4>
            <p className="text-xs font-medium" style={{ color: isDarkMode ? '#C4B9AA' : '#5A5451' }}>
              Sans carte bancaire internationale requise :
            </p>
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <BrandIconBadge iconKey="wave" size="sm" />
              <BrandIconBadge iconKey="orange" size="sm" />
              <BrandIconBadge iconKey="moov" size="sm" />
              <BrandIconBadge iconKey="mtn" size="sm" />
            </div>
            <p className="text-[11px] pt-1" style={{ color: isDarkMode ? '#968D81' : '#7A7470' }}>
              Activation dès réception de la confirmation de transfert.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold"
          style={{
            borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.1)' : 'rgba(43, 42, 42, 0.1)',
            color: isDarkMode ? '#968D81' : '#7A7470',
          }}
        >
          <p>© {new Date().getFullYear()} JC SERVICES · Tous droits réservés.</p>
          <p>Abonnements & Services Numériques Sécurisés</p>
        </div>
      </div>
    </footer>
  );
};
