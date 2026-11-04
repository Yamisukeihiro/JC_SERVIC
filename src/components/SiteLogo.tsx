import React, { useState } from 'react';

interface SiteLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const SiteLogo: React.FC<SiteLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [imageError, setImageError] = useState(false);

  const heightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Uploaded logo image with fallback vector recreation */}
      {!imageError ? (
        <img
          src="/Gemini_Generated_Image_2f5ata2f5ata2f5a.webp"
          alt="JC Services"
          onError={() => setImageError(true)}
          className={`${heightMap[size]} w-auto object-contain rounded-lg drop-shadow-md transition-transform hover:scale-105`}
        />
      ) : (
        /* Faithful vector SVG reproduction of the uploaded futuristic JC Services emblem */
        <div className={`relative flex items-center justify-center ${heightMap[size]} aspect-[16/9] rounded-xl bg-[#090b14] p-1.5 border border-[#465C88]/40 shadow-lg`}>
          <svg viewBox="0 0 320 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="jcCyanPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="50%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
              <linearGradient id="jcSilver" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>
              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing waves */}
            <path d="M 60 90 Q 140 60, 260 85" stroke="#7C3AED" strokeWidth="1.5" opacity="0.4" />
            <path d="M 70 100 Q 150 70, 270 95" stroke="#00E5FF" strokeWidth="1.2" opacity="0.4" />

            {/* Mini digital icons around JC */}
            {/* Video Play */}
            <rect x="90" y="45" width="16" height="12" rx="3" stroke="#00E5FF" strokeWidth="1.5" />
            <polygon points="96,48 102,51 96,54" fill="#00E5FF" />

            {/* Snapchat / Ghost shape */}
            <path d="M 152 35 C 148 35, 146 38, 146 41 C 146 44, 149 46, 152 46 C 155 46, 158 44, 158 41 C 158 38, 156 35, 152 35 Z" fill="#E2E8F0" opacity="0.8" />

            {/* Brain / AI Network */}
            <circle cx="230" cy="75" r="8" stroke="#D946EF" strokeWidth="1.5" opacity="0.9" />
            <circle cx="230" cy="75" r="3" fill="#D946EF" />

            {/* Brush */}
            <line x1="225" y1="110" x2="235" y2="100" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />

            {/* Crescent */}
            <path d="M 148 115 A 5 5 0 0 0 154 122 A 4 4 0 0 1 148 115" stroke="#00E5FF" strokeWidth="1.5" fill="none" />

            {/* Main JC Logo Monogram */}
            {/* Letter J */}
            <path
              d="M 125 40 L 110 95 C 105 110, 90 120, 75 120 L 65 120"
              stroke="url(#jcCyanPurple)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#neonGlow)"
            />
            {/* Interconnecting ribbon and C */}
            <path
              d="M 130 90 L 175 90 C 190 90, 205 60, 225 60 L 235 60"
              stroke="url(#jcCyanPurple)"
              strokeWidth="14"
              strokeLinecap="round"
              filter="url(#neonGlow)"
            />
            <path
              d="M 235 130 C 195 130, 160 115, 175 90"
              stroke="url(#jcCyanPurple)"
              strokeWidth="14"
              strokeLinecap="round"
              filter="url(#neonGlow)"
            />

            {/* Inner highlight core */}
            <path d="M 124 44 L 110 93 C 106 106, 92 116, 76 116 L 68 116" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <path d="M 132 89 L 174 89 C 188 89, 203 62, 223 62 L 232 62" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

            {/* SERVICES Text */}
            <text
              x="160"
              y="160"
              textAnchor="middle"
              fill="url(#jcSilver)"
              fontFamily="sans-serif"
              fontWeight="900"
              fontSize="22"
              letterSpacing="7"
            >
              SERVICES
            </text>
          </svg>
        </div>
      )}

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="tracking-wide font-black text-base sm:text-lg">
            JC SERVICES
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: '#FF7A30' }}>
            PREMIUM DIGITAL
          </span>
        </div>
      )}
    </div>
  );
};
