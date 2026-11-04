import React, { createContext, useContext, useState, useEffect } from 'react';
import { Service, CartItem, PaymentMethodId } from '../types';

interface AppContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  cart: CartItem[];
  addToCart: (service: Service, duration?: string, durationMultiplier?: number, unitPrice?: number) => void;
  removeFromCart: (serviceId: string, duration?: string) => void;
  updateQuantity: (serviceId: string, duration: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedPayment: PaymentMethodId;
  setSelectedPayment: (method: PaymentMethodId) => void;
  selectedServiceModal: Service | null;
  setSelectedServiceModal: (service: Service | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Dark Mode State with persistence and initial check
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('jc_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return false; // Default to Light theme (#F5EBDD)
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('jc_theme', 'dark');
      document.body.style.backgroundColor = '#2B2A2A';
      document.body.style.color = '#F5EBDD';
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('jc_theme', 'light');
      document.body.style.backgroundColor = '#F5EBDD';
      document.body.style.color = '#2B2A2A';
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // 2. Cart State
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('jc_cart');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('jc_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethodId>('wave');
  const [selectedServiceModal, setSelectedServiceModal] = useState<Service | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const addToCart = (
    service: Service,
    duration = service.duration,
    durationMultiplier = 1,
    unitPrice = service.basePrice
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.service.id === service.id && item.selectedDuration === duration
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            service,
            quantity: 1,
            selectedDuration: duration,
            durationMultiplier,
            unitPrice,
          },
        ];
      }
    });

    showToast(`"${service.name}" ajouté à votre panier`);
  };

  const removeFromCart = (serviceId: string, duration?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.service.id === serviceId && (!duration || item.selectedDuration === duration))
      )
    );
  };

  const updateQuantity = (serviceId: string, duration: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.service.id === serviceId && item.selectedDuration === duration) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        selectedPayment,
        setSelectedPayment,
        selectedServiceModal,
        setSelectedServiceModal,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
