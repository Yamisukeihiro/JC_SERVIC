import React from 'react';

interface MockupProps {
  className?: string;
}

/**
 * Modern Laptop Mockup (ChatGPT & Claude AI Interface)
 */
export const MockupLaptopAI: React.FC<MockupProps> = ({ className = 'w-full h-48' }) => {
  return (
    <div className={`relative flex items-center justify-center p-2 ${className}`}>
      {/* Laptop Frame */}
      <div className="relative w-full max-w-[340px] bg-[#1e1e1e] rounded-t-xl p-2.5 pb-3 border border-[#465C88]/30 shadow-2xl">
        {/* Webcam */}
        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mx-auto mb-1.5" />
        
        {/* Screen Content */}
        <div className="w-full h-36 bg-[#18181b] rounded-md p-2.5 flex flex-col justify-between text-left font-mono overflow-hidden border border-white/5">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF7A30]" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[9px] text-[#F5EBDD]/60 ml-1 font-sans font-bold">GPT-4o & Claude Pro</span>
            </div>
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#465C88]/40 text-[#F5EBDD] font-sans font-bold">
              Ultra Fast
            </span>
          </div>

          {/* Chat Messages */}
          <div className="space-y-1.5 my-auto">
            <div className="bg-[#2B2A2A] p-1.5 rounded-md text-[9px] text-[#F5EBDD]/90 max-w-[85%] border border-[#465C88]/30">
              <span className="text-[#FF7A30] font-bold">User:</span> Analyse ce code & optimise la stratégie digitale.
            </div>
            <div className="bg-[#465C88]/30 p-1.5 rounded-md text-[9px] text-[#F5EBDD] max-w-[90%] border border-[#465C88]/40">
              <span className="text-emerald-400 font-bold">IA:</span> Accès illimité actif. Vitesse de calcul maximale ⚡
            </div>
          </div>

          {/* Prompt Bar */}
          <div className="flex items-center justify-between bg-[#2B2A2A] px-2 py-1 rounded text-[8px] text-[#F5EBDD]/50 border border-white/5">
            <span>Poser une question avec GPT-4o...</span>
            <div className="w-3.5 h-3.5 rounded bg-[#FF7A30] flex items-center justify-center text-white text-[8px] font-bold">
              ↑
            </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[114%] h-2.5 bg-[#2B2A2A] rounded-b-lg border-t border-white/20 shadow-md flex justify-center">
          <div className="w-12 h-1 bg-white/20 rounded-full mt-0.5" />
        </div>
      </div>
    </div>
  );
};

/**
 * Modern Smart TV Mockup (Netflix 4K & Cinema Interface)
 */
export const MockupCinemaTV: React.FC<MockupProps> = ({ className = 'w-full h-48' }) => {
  return (
    <div className={`relative flex items-center justify-center p-2 ${className}`}>
      {/* TV Bezel */}
      <div className="relative w-full max-w-[340px] bg-[#1a1919] rounded-lg p-2 border border-[#465C88]/40 shadow-2xl">
        {/* Screen */}
        <div className="relative w-full h-36 bg-gradient-to-tr from-[#0a0a0a] via-[#1c120c] to-[#2B2A2A] rounded p-2.5 flex flex-col justify-between overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black tracking-wider text-[#FF7A30]">
              NETFLIX UHD 4K
            </span>
            <span className="text-[8px] font-bold bg-[#E50914] text-white px-1.5 py-0.5 rounded">
              PIN PRIVÉ
            </span>
          </div>

          {/* Center Play Graphic */}
          <div className="my-auto flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF7A30] text-[#2B2A2A] flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
              <svg className="w-5 h-5 ml-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#F5EBDD] leading-tight">Cinéma & Séries HDR</p>
              <p className="text-[9px] text-[#F5EBDD]/70">Dolby Atmos · 2160p Ultra HD</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
            <div className="bg-[#FF7A30] w-3/4 h-full" />
          </div>
        </div>

        {/* TV Stand Legs */}
        <div className="flex justify-between px-12 -mb-2 mt-0.5">
          <div className="w-3 h-2 bg-[#465C88] transform -skew-x-12 rounded-b" />
          <div className="w-3 h-2 bg-[#465C88] transform skew-x-12 rounded-b" />
        </div>
      </div>
    </div>
  );
};

/**
 * Modern Creator Tablet Mockup (Canva Pro & CapCut Studio)
 */
export const MockupCreatorTablet: React.FC<MockupProps> = ({ className = 'w-full h-48' }) => {
  return (
    <div className={`relative flex items-center justify-center p-2 ${className}`}>
      {/* Tablet Frame */}
      <div className="relative w-full max-w-[320px] bg-[#222121] rounded-2xl p-2.5 border border-[#465C88]/40 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-36 bg-[#161b26] rounded-xl p-2 flex flex-col justify-between overflow-hidden border border-white/10">
          {/* Canvas Header */}
          <div className="flex items-center justify-between pb-1 border-b border-white/10">
            <span className="text-[9px] font-bold text-[#F5EBDD]">Canva Pro & CapCut Studio</span>
            <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-[#FF7A30] text-[#2B2A2A]">
              Licence 365J
            </span>
          </div>

          {/* Graphic Design Artboard Area */}
          <div className="my-auto grid grid-cols-3 gap-1.5 p-1">
            <div className="h-14 rounded-lg bg-gradient-to-br from-[#465C88] to-[#2B2A2A] border border-white/10 p-1 flex flex-col justify-end">
              <span className="text-[7px] text-[#F5EBDD] font-bold">Post Insta</span>
            </div>
            <div className="h-14 rounded-lg bg-gradient-to-br from-[#FF7A30] to-[#b34c17] p-1 flex flex-col justify-end">
              <span className="text-[7px] text-white font-bold">Vidéo 4K</span>
            </div>
            <div className="h-14 rounded-lg bg-gradient-to-br from-[#465C88]/70 to-[#00C4CC] p-1 flex flex-col justify-end">
              <span className="text-[7px] text-white font-bold">Kit Marque</span>
            </div>
          </div>

          {/* Timeline / Tools bar */}
          <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-[#F5EBDD]/60 font-sans">
            <span>Exportation 4K sans watermark</span>
            <span className="text-[#FF7A30] font-bold">Activé sur votre Email</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Smartphone Mockup (Spotify & Snapchat+ Player)
 */
export const MockupSmartphone: React.FC<MockupProps> = ({ className = 'w-full h-48' }) => {
  return (
    <div className={`relative flex items-center justify-center p-2 ${className}`}>
      {/* Phone Frame */}
      <div className="relative w-44 bg-[#1e1d1d] rounded-3xl p-2 border-2 border-[#465C88]/50 shadow-2xl">
        {/* Dynamic Island */}
        <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1.5" />

        {/* Screen */}
        <div className="w-full h-34 bg-gradient-to-b from-[#1b2230] to-[#121721] rounded-2xl p-2 flex flex-col justify-between text-center overflow-hidden">
          <div className="flex justify-between items-center text-[7px] text-[#F5EBDD]/60 font-bold">
            <span>Spotify Premium</span>
            <span className="text-emerald-400">En ligne</span>
          </div>

          {/* Soundwaves / Disk */}
          <div className="my-auto flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1ED760] to-[#465C88] flex items-center justify-center shadow-md animate-spin" style={{ animationDuration: '8s' }}>
              <div className="w-3 h-3 rounded-full bg-[#2B2A2A]" />
            </div>
            <p className="text-[9px] font-bold text-[#F5EBDD] mt-1">Zapping Illimité</p>
            <p className="text-[7px] text-[#F5EBDD]/60">Son Haute Définition 320 kbps</p>
          </div>

          <div className="flex justify-center gap-1">
            <span className="w-1 h-2 bg-[#FF7A30] rounded-full" />
            <span className="w-1 h-3 bg-[#FF7A30] rounded-full" />
            <span className="w-1 h-4 bg-[#FF7A30] rounded-full" />
            <span className="w-1 h-2 bg-[#FF7A30] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Holographic Member Pass (MockupHive Card Style)
 */
export const MockupPassHolo: React.FC<MockupProps> = ({ className = 'w-full h-48' }) => {
  return (
    <div className={`relative flex items-center justify-center p-2 ${className}`}>
      <div className="relative w-full max-w-[320px] h-40 rounded-2xl p-4 bg-gradient-to-br from-[#465C88] via-[#2B2A2A] to-[#1a1919] border border-[#FF7A30]/50 shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Subtle glow orb */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF7A30]/20 rounded-full blur-xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A30]" />
            <span className="text-[10px] font-black tracking-widest text-[#F5EBDD]">
              J-C PREMIUM PASS
            </span>
          </div>
          <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-[#FF7A30] text-[#2B2A2A]">
            GARANTIE 100%
          </span>
        </div>

        {/* Golden Chip */}
        <div className="flex items-center justify-between">
          <div className="w-8 h-6 rounded bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 border border-amber-200/80 shadow-sm" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#F5EBDD]/90">
            •••• 4067 · BURKINA
          </span>
        </div>

        {/* Bottom Details */}
        <div className="flex items-end justify-between border-t border-white/10 pt-2">
          <div>
            <span className="text-[7px] text-[#F5EBDD]/60 uppercase tracking-widest block font-bold">
              Activation Instantanée
            </span>
            <span className="text-[9px] font-bold text-[#F5EBDD]">Wave · Orange · Moov</span>
          </div>
          <span className="text-[9px] font-bold text-[#FF7A30]">Support 7j/7</span>
        </div>
      </div>
    </div>
  );
};
