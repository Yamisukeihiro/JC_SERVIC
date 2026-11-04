import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div
        className="flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-black shadow-2xl border backdrop-blur-md animate-in slide-in-from-bottom-4 duration-300"
        style={{
          backgroundColor: '#2B2A2A',
          color: '#F5EBDD',
          borderColor: 'rgba(255, 122, 48, 0.4)',
        }}
      >
        <CheckCircle2 className="w-4 h-4 text-[#FF7A30] shrink-0" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
