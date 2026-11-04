import React, { useState, useEffect } from 'react';
import { X, Check, ShoppingBag, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BrandIconBadge } from './ServiceIcons';
import { formatFCFA } from '../data/services';

export const ServiceDetailModal: React.FC = () => {
  const { selectedServiceModal, setSelectedServiceModal, addToCart, setIsCartOpen, isDarkMode } = useApp();

  const [selectedDurationOption, setSelectedDurationOption] = useState<{
    label: string;
    multiplier: number;
    discountPercent: number;
  }>({
    label: '1 mois',
    multiplier: 1,
    discountPercent: 0,
  });

  useEffect(() => {
    if (selectedServiceModal) {
      if (selectedServiceModal.duration.includes('an')) {
        setSelectedDurationOption({
          label: '1 an',
          multiplier: 1,
          discountPercent: 0,
        });
      } else if (selectedServiceModal.duration === 'Pack') {
        setSelectedDurationOption({
          label: 'Pack Formule',
          multiplier: 1,
          discountPercent: 0,
        });
      } else {
        setSelectedDurationOption({
          label: '1 mois',
          multiplier: 1,
          discountPercent: 0,
        });
      }
    }
  }, [selectedServiceModal]);

  if (!selectedServiceModal) return null;

  const service = selectedServiceModal;

  const durationOptions = service.duration.includes('an')
    ? [
        { label: '1 an (365 jours)', multiplier: 1, discountPercent: 0 },
        { label: '2 ans (Remise)', multiplier: 1.8, discountPercent: 10 },
      ]
    : service.duration === 'Pack'
    ? [{ label: 'Formule Complète', multiplier: 1, discountPercent: 0 }]
    : [
        { label: '1 mois', multiplier: 1, discountPercent: 0 },
        { label: '3 mois (-5%)', multiplier: 2.85, discountPercent: 5 },
        { label: '6 mois (-10%)', multiplier: 5.4, discountPercent: 10 },
      ];

  const calculatedPrice = Math.round(service.basePrice * selectedDurationOption.multiplier);

  const handleAddToCart = () => {
    addToCart(
      service,
      selectedDurationOption.label,
      selectedDurationOption.multiplier,
      calculatedPrice
    );
    setSelectedServiceModal(null);
    setIsCartOpen(true);
  };

  const handleDirectWhatsApp = () => {
    const msg = encodeURIComponent(
      `Bonjour J-C PREMIUM HOLDING, je souhaite commander l'abonnement : *${service.name}* en formule *${selectedDurationOption.label}* pour un montant de *${formatFCFA(calculatedPrice)}*. Merci de me donner la procédure de paiement.`
    );
    window.open(`https://wa.me/22660084067?text=${msg}`, '_blank');
    setSelectedServiceModal(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={() => setSelectedServiceModal(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in cursor-pointer"
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-xl rounded-3xl shadow-2xl border overflow-hidden z-10 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        style={{
          backgroundColor: isDarkMode ? '#2B2A2A' : '#F5EBDD',
          borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
          color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-6 border-b"
          style={{
            backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
            borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
          }}
        >
          <div className="flex items-center gap-3.5">
            <BrandIconBadge iconKey={service.iconKey} size="lg" />
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest block" style={{ color: '#FF7A30' }}>
                {service.tag || 'Service Premium'}
              </span>
              <h3 className="text-lg font-black leading-tight" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
                {service.name}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelectedServiceModal(null)}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors cursor-pointer border"
            style={{
              backgroundColor: isDarkMode ? '#2B2A2A' : '#EDE1D1',
              borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider mb-1.5" style={{ color: '#FF7A30' }}>
              Description de l'accès
            </h4>
            <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: isDarkMode ? '#C4B9AA' : '#5A5451' }}>
              {service.description}
            </p>
          </div>

          <div
            className="p-4 rounded-2xl border flex items-center justify-between gap-4 text-xs font-bold"
            style={{
              backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
              borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
            }}
          >
            <div>
              <span className="block text-[10px] text-slate-400">Type d'accès :</span>
              <span>{service.accountType}</span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] text-slate-400">Délai moyen :</span>
              <span style={{ color: '#FF7A30' }}>{service.deliveryTime}</span>
            </div>
          </div>

          {/* Durées */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider mb-2" style={{ color: '#465C88' }}>
              Choisir la formule de durée
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {durationOptions.map((opt, i) => {
                const isSelected = selectedDurationOption.label === opt.label;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedDurationOption(opt)}
                    className="py-2.5 px-3 rounded-xl border text-xs font-black transition-all cursor-pointer"
                    style={{
                      backgroundColor: isSelected
                        ? '#FF7A30'
                        : isDarkMode
                        ? '#343333'
                        : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : isDarkMode ? '#F5EBDD' : '#2B2A2A',
                      borderColor: isSelected
                        ? '#FF7A30'
                        : isDarkMode
                        ? 'rgba(245, 235, 221, 0.15)'
                        : 'rgba(43, 42, 42, 0.15)',
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Inclus */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider mb-2.5" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
              Avantages inclus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
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
            className="p-4 rounded-2xl border text-xs space-y-1.5"
            style={{
              backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
              borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
            }}
          >
            <h5 className="font-black flex items-center gap-1.5" style={{ color: '#FF7A30' }}>
              <Zap className="w-3.5 h-3.5" />
              Procédure de réception
            </h5>
            <ol className="list-decimal list-inside space-y-1 text-xs" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
              <li>Ajoutez au panier ou cliquez sur commande WhatsApp.</li>
              <li>Réglez par Wave, Orange Money ou Moov Money.</li>
              <li>Recevez vos identifiants sécurisés en moins de 15 minutes.</li>
            </ol>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold" style={{ color: '#465C88' }}>
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Garantie : {service.guarantee}</span>
          </div>
        </div>

        {/* Footer Modal */}
        <div
          className="p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg"
          style={{
            backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
            borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
          }}
        >
          <div>
            <span className="text-xs text-slate-400 block font-bold">Total formule :</span>
            <span className="text-2xl font-black font-mono tabular-nums" style={{ color: '#FF7A30' }}>
              {formatFCFA(calculatedPrice)}
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs text-white shadow-md active:scale-95 cursor-pointer hover:opacity-95"
              style={{ backgroundColor: '#FF7A30' }}
            >
              <ShoppingBag className="w-4 h-4" />
              Ajouter au panier
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl font-bold text-xs border cursor-pointer hover:opacity-90"
              style={{
                backgroundColor: isDarkMode ? '#2B2A2A' : '#EDE1D1',
                borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.2)' : 'rgba(43, 42, 42, 0.2)',
                color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
              }}
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
