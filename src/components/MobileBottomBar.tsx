import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatFCFA } from '../data/services';

export const MobileBottomBar: React.FC = () => {
  const { cartCount, cartTotal, setIsCartOpen, isDarkMode } = useApp();

  if (cartCount === 0) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md border-t p-3 shadow-2xl transition-colors"
      style={{
        backgroundColor: isDarkMode ? 'rgba(43, 42, 42, 0.96)' : 'rgba(245, 235, 221, 0.96)',
        borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
      }}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2.5">
          <div
            className="relative w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-xs"
            style={{ backgroundColor: '#FF7A30' }}
          >
            <ShoppingBag className="w-5 h-5" />
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] font-black flex items-center justify-center shadow-xs text-white"
              style={{ backgroundColor: '#465C88' }}
            >
              {cartCount}
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider block font-black" style={{ color: '#FF7A30' }}>
              Total Panier
            </span>
            <span
              className="text-sm font-black font-mono tabular-nums leading-none"
              style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
            >
              {formatFCFA(cartTotal)}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white font-black text-xs shadow-md active:scale-95 cursor-pointer hover:opacity-95"
          style={{ backgroundColor: '#FF7A30' }}
        >
          <span>Commander</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
