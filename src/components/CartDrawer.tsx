import React, { useState, useEffect } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BrandIconBadge } from './ServiceIcons';
import { PAYMENT_METHODS, formatFCFA } from '../data/services';
import { PaymentMethodId } from '../types';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
    selectedPayment,
    setSelectedPayment,
    showToast,
    isDarkMode,
  } = useApp();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setOrderPlaced(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const handleCheckoutWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) return;

    const currentPaymentObj = PAYMENT_METHODS.find((p) => p.id === selectedPayment);
    const paymentLabel = currentPaymentObj ? currentPaymentObj.name : 'Mobile Money';

    let message = `Bonjour *J-C PREMIUM HOLDING*,\n\nJe souhaite valider ma commande en ligne :\n\n`;

    cart.forEach((item, index) => {
      const itemSubtotal = item.unitPrice * item.quantity;
      message += `${index + 1}. *${item.service.name}* (${item.selectedDuration})\n`;
      message += `   Quantité : ${item.quantity} × ${formatFCFA(item.unitPrice)} = *${formatFCFA(itemSubtotal)}*\n\n`;
    });

    message += `💰 *TOTAL À PAYER : ${formatFCFA(cartTotal)}*\n`;
    message += `📲 *Moyen de paiement choisi :* ${paymentLabel}\n`;
    if (customerName.trim()) {
      message += `👤 *Nom du client :* ${customerName.trim()}\n`;
    }
    if (customerPhone.trim()) {
      message += `📞 *WhatsApp de contact :* ${customerPhone.trim()}\n`;
    }
    message += `\n⚡ Merci de me fournir les instructions pour l'activation rapide de mon compte.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/22660084067?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setOrderPlaced(true);
    showToast('Votre commande est prête à être envoyée sur WhatsApp !');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop sombre */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in cursor-pointer"
        aria-hidden="true"
      />

      {/* Tiroir coulissant */}
      <div
        className="relative w-full max-w-md h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-300 border-l"
        style={{
          backgroundColor: isDarkMode ? '#2B2A2A' : '#F5EBDD',
          borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
          color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
        }}
      >
        {/* Entête du panier */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{
            backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
            borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white"
              style={{ backgroundColor: '#FF7A30' }}
            >
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
                Mon Panier
              </h2>
              <p className="text-xs" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
                {cart.length} {cart.length > 1 ? 'services sélectionnés' : 'service sélectionné'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="text-xs font-bold text-red-500 hover:underline px-2 py-1 cursor-pointer"
              >
                Vider
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors cursor-pointer border"
              style={{
                backgroundColor: isDarkMode ? '#2B2A2A' : '#EDE1D1',
                borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
                color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
              }}
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Corps défilant du panier */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {orderPlaced ? (
            <div className="py-10 text-center space-y-4">
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white shadow-lg"
                style={{ backgroundColor: '#25D366' }}
              >
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-black" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
                Commande en cours d'envoi !
              </h3>
              <p className="text-sm font-medium max-w-xs mx-auto" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
                WhatsApp s'est ouvert avec le détail de votre commande. Envoyez le message pour recevoir vos accès sous 15 minutes.
              </p>
              <button
                onClick={() => {
                  setOrderPlaced(false);
                  setIsCartOpen(false);
                }}
                className="px-6 py-3 rounded-xl font-black text-xs text-white shadow-md hover:opacity-90"
                style={{ backgroundColor: '#465C88' }}
              >
                Continuer mes achats
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                  color: isDarkMode ? '#C4B9AA' : '#8A8480',
                }}
              >
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <p className="font-black text-base" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
                  Votre panier est vide
                </p>
                <p className="text-xs max-w-xs mx-auto" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
                  Découvrez nos offres Netflix, ChatGPT, Canva Pro et profitez des promotions actives.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(false);
                  const catalogue = document.querySelector('#catalogue');
                  if (catalogue) catalogue.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-black text-xs shadow-md active:scale-95 cursor-pointer hover:opacity-95"
                style={{ backgroundColor: '#FF7A30' }}
              >
                Explorer le catalogue
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              {/* Articles dans le panier */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={`${item.service.id}-${item.selectedDuration}`}
                    className="p-4 rounded-2xl border flex items-start gap-3.5 shadow-2xs"
                    style={{
                      backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                      borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
                    }}
                  >
                    <BrandIconBadge iconKey={item.service.iconKey} size="md" />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-black truncate" style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}>
                          {item.service.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.service.id, item.selectedDuration)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs font-semibold mt-0.5" style={{ color: '#FF7A30' }}>
                        Formule : {item.selectedDuration}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span
                          className="text-sm font-black font-mono tabular-nums"
                          style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                        >
                          {formatFCFA(item.unitPrice * item.quantity)}
                        </span>

                        <div
                          className="flex items-center gap-1 border rounded-lg p-0.5"
                          style={{
                            backgroundColor: isDarkMode ? '#2B2A2A' : '#EDE1D1',
                            borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.service.id, item.selectedDuration, -1)}
                            className="w-7 h-7 flex items-center justify-center font-bold rounded cursor-pointer active:scale-95"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-black font-mono">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.service.id, item.selectedDuration, 1)}
                            className="w-7 h-7 flex items-center justify-center font-bold rounded cursor-pointer active:scale-95"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sélection moyen de paiement */}
              <div className="pt-2">
                <label
                  className="block text-xs font-black uppercase tracking-wider mb-2"
                  style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                >
                  Moyen de règlement préféré
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PAYMENT_METHODS.map((method) => {
                    const isSelected = selectedPayment === method.id;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedPayment(method.id as PaymentMethodId)}
                        className="p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer"
                        style={{
                          backgroundColor: isSelected
                            ? isDarkMode
                              ? '#3A322C'
                              : '#FFF5EC'
                            : isDarkMode
                            ? '#343333'
                            : '#FFFFFF',
                          borderColor: isSelected
                            ? '#FF7A30'
                            : isDarkMode
                            ? 'rgba(245, 235, 221, 0.12)'
                            : 'rgba(43, 42, 42, 0.12)',
                          color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                          boxShadow: isSelected ? '0 0 0 1px #FF7A30' : undefined,
                        }}
                      >
                        <BrandIconBadge iconKey={method.iconKey} size="sm" />
                        <div className="min-w-0">
                          <p className="text-xs font-black truncate leading-tight">{method.name}</p>
                          <p className="text-[10px] text-slate-400">{method.fee}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Coordonnées */}
              <div className="space-y-2.5 pt-1">
                <label
                  className="block text-xs font-black uppercase tracking-wider"
                  style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                >
                  Vos coordonnées pour activation
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Votre nom complet"
                  className="w-full text-xs px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                  style={{
                    backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                    borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.18)' : 'rgba(43, 42, 42, 0.18)',
                    color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                  }}
                />
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Numéro WhatsApp (ex: +226 XX XX XX XX)"
                  className="w-full text-xs px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                  style={{
                    backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
                    borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.18)' : 'rgba(43, 42, 42, 0.18)',
                    color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                  }}
                />
              </div>

              {/* Badges de confiance */}
              <div
                className="p-3.5 rounded-xl border text-xs flex items-center gap-2.5 font-bold"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(70, 92, 136, 0.2)' : 'rgba(70, 92, 136, 0.12)',
                  borderColor: 'rgba(70, 92, 136, 0.3)',
                  color: isDarkMode ? '#B9C8E3' : '#465C88',
                }}
              >
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#FF7A30]" />
                <span>Remplacement garanti 100% en cas de coupure</span>
              </div>
            </>
          )}
        </div>

        {/* Footer Panier */}
        {cart.length > 0 && !orderPlaced && (
          <div
            className="p-6 border-t space-y-3.5 shadow-xl"
            style={{
              backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
              borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.12)' : 'rgba(43, 42, 42, 0.12)',
            }}
          >
            <div className="space-y-1.5 text-xs font-semibold">
              <div className="flex justify-between" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
                <span>Sous-total :</span>
                <span className="font-mono tabular-nums">{formatFCFA(cartTotal)}</span>
              </div>
              <div className="flex justify-between" style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}>
                <span>Frais d'activation :</span>
                <span className="text-emerald-500 font-bold">0 FCFA (Gratuit)</span>
              </div>
              <div
                className="pt-2 border-t flex justify-between text-base font-black"
                style={{
                  borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.1)' : 'rgba(43, 42, 42, 0.1)',
                  color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                }}
              >
                <span>Total net :</span>
                <span className="font-mono tabular-nums" style={{ color: '#FF7A30' }}>
                  {formatFCFA(cartTotal)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckoutWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-black text-xs text-white shadow-lg transition-transform active:scale-98 cursor-pointer hover:opacity-95"
              style={{ backgroundColor: '#FF7A30' }}
            >
              <Zap className="w-4 h-4 fill-white" />
              Valider ma commande sur WhatsApp
            </button>
            <p className="text-[11px] text-center" style={{ color: isDarkMode ? '#C4B9AA' : '#8A8480' }}>
              Règlement instantané via Wave, Orange Money ou Moov Money
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
