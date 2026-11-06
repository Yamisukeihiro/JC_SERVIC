export type ServiceCategory = 'all' | 'ai' | 'design' | 'streaming' | 'music' | 'packs' | 'accessories' | 'storage' | 'training' | 'office';

export interface Service {
  id: string;
  name: string;
  category: 'ai' | 'design' | 'streaming' | 'music' | 'packs' | 'accessories' | 'storage' | 'training' | 'office';
  iconKey:
    | 'netflix'
    | 'prime'
    | 'chatgpt'
    | 'claude'
    | 'canva'
    | 'capcut'
    | 'spotify'
    | 'snapchat'
    | 'iptv'
    | 'pack-cinema'
    | 'pack-crea'
    | 'pack-ia'
    | 'airpods'
    | 'earbuds'
    | 'charger'
    | 'cable'
    | 'google-one'
    | 'nordvpn'
    | 'icloud'
    | 'duolingo'
    | 'notion'
    | 'microsoft-office'
    | 'cursor';
  basePrice: number; // in FCFA
  oldPrice?: number;
  duration: string;
  description: string;
  features: string[];
  tag?: string;
  deliveryTime: string;
  guarantee: string;
  accountType: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
  selectedDuration: string;
  durationMultiplier: number;
  unitPrice: number;
}

export type PaymentMethodId = 'wave' | 'orange' | 'moov' | 'mtn' | 'card';

export interface PaymentMethod {
  id: PaymentMethodId;
  name: string;
  iconKey: 'wave' | 'orange' | 'moov' | 'mtn' | 'card';
  description: string;
  number: string;
  fee: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'activation' | 'payment' | 'guarantee' | 'usage';
}
