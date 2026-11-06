import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Authentic Netflix Icon (Red N Ribbon)
 */
export const NetflixIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    aria-label="Netflix logo"
  >
    <path fill="#E50914" d="M5.5 1.5h3.2v21H5.5z" />
    <path fill="#B81D24" d="M15.3 1.5h3.2v21h-3.2z" />
    <path
      fill="#E50914"
      d="M5.5 1.5l10.8 21h2.2L7.7 1.5z"
      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
    />
  </svg>
);

/**
 * Authentic Amazon Prime Video Icon
 */
export const PrimeVideoIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    role="img"
    aria-label="Prime Video"
  >
    <rect width="24" height="24" rx="5" fill="#00A8E1" />
    <text
      x="12"
      y="10.8"
      fill="#FFFFFF"
      fontFamily="Arial, sans-serif"
      fontSize="5.1"
      fontWeight="700"
      textAnchor="middle"
      letterSpacing="-0.2"
    >
      prime
    </text>
    <text
      x="12"
      y="15.2"
      fill="#FFFFFF"
      fontFamily="Arial, sans-serif"
      fontSize="4.3"
      fontWeight="700"
      textAnchor="middle"
      letterSpacing="-0.15"
    >
      video
    </text>
    <path
      d="M7.3 17.2c3.1 1.7 6.7 1.7 9.5-.1"
      stroke="#FFFFFF"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="m15.7 16.3 1.4.7-1.1 1"
      stroke="#FFFFFF"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Authentic ChatGPT / OpenAI Icon (Official Geometric 6-fold Spiral)
 */
export const ChatGPTIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="ChatGPT logo"
  >
    <rect width="24" height="24" rx="5" fill="#10A37F" />
    <g transform="translate(3.6, 3.6) scale(0.7)">
      <path
        fill="#FFFFFF"
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      />
    </g>
  </svg>
);

/**
 * Authentic Claude / Anthropic Icon (Official Geometric Mark)
 */
export const ClaudeIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="Claude logo"
  >
    <rect width="24" height="24" rx="5" fill="#D97706" />
    <g transform="translate(3.6, 3.6) scale(0.7)">
      <path
        fill="#FFFFFF"
        d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"
      />
    </g>
  </svg>
);

/**
 * Authentic Canva Icon (Official Typographic Ligature)
 */
export const CanvaIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="Canva logo"
  >
    <defs>
      <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C4CC" />
        <stop offset="100%" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="5" fill="url(#canvaGrad)" />
    <g transform="translate(3.6, 3.6) scale(0.7)">
      <path
        fill="#FFFFFF"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"
      />
    </g>
  </svg>
);

/**
 * Authentic CapCut Icon (Official Intersecting Blades)
 */
export const CapCutIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="CapCut logo"
  >
    <rect width="24" height="24" rx="5" fill="#0A0A0A" />
    <g transform="translate(3.5, 3.5) scale(0.088)">
      <path
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="14"
        d="M170 42 22 124v14c0 6.627 5.373 12 12 12h78c6.627 0 12-5.373 12-12v-9.5"
      />
      <path
        stroke="#00E5FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="14"
        d="M170 150 22 68V54c0-6.627 5.373-12 12-12h78c6.627 0 12 5.373 12 12v9.5"
      />
    </g>
  </svg>
);

/**
 * Authentic Spotify Icon (Official 3-Soundwaves Mark)
 */
export const SpotifyIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="Spotify logo"
  >
    <circle cx="12" cy="12" r="11" fill="#1ED760" />
    <g transform="translate(3.6, 3.6) scale(0.7)">
      <path
        fill="#000000"
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
      />
    </g>
  </svg>
);

/**
 * Authentic Snapchat Icon (Official Vector Ghost Silhouette)
 */
export const SnapchatIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="Snapchat logo"
  >
    <rect width="24" height="24" rx="5" fill="#FFFC00" />
    <g transform="translate(3.6, 3.6) scale(0.7)">
      <path
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="0.8"
        d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"
      />
    </g>
  </svg>
);

/**
 * Modern IPTV Icon (Display Screen with Live Signal)
 */
export const IPTVIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="IPTV logo"
  >
    <rect width="24" height="24" rx="5" fill="#2563EB" />
    <rect x="4" y="5" width="16" height="11" rx="2" stroke="#ffffff" strokeWidth="1.5" />
    <path d="M9 20h6M12 16v4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    <polygon points="10,8 15,10.5 10,13" fill="#ffffff" />
    <circle cx="18" cy="7" r="1.5" fill="#EF4444" />
  </svg>
);

/**
 * Authentic Wave Mobile Money Icon (Official Sky Blue Penguin Emblem)
 */
export const WaveIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="Wave Mobile Money"
  >
    <rect width="24" height="24" rx="5" fill="#1DA1F2" />
    {/* Penguin White Ring & Body */}
    <circle cx="12" cy="12" r="7.5" fill="#FFFFFF" />
    <ellipse cx="12" cy="12.8" rx="4.5" ry="5.5" fill="#0B1B3D" />
    <ellipse cx="12" cy="13" rx="3" ry="4.2" fill="#FFFFFF" />
    <circle cx="10.8" cy="10" r="0.75" fill="#0B1B3D" />
    <circle cx="13.2" cy="10" r="0.75" fill="#0B1B3D" />
    <polygon points="12,11.2 10.6,12.6 13.4,12.6" fill="#F59E0B" />
  </svg>
);

/**
 * Authentic Orange Money Icon (Official Two-Tone Folding Ribbon)
 */
export const OrangeMoneyIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="Orange Money"
  >
    <rect width="24" height="24" rx="5" fill="#18181B" />
    <g transform="translate(3, 4) scale(0.042 0.14)">
      <path
        d="M90.154 11.052H24.335c-3.542 0-6.94 1.413-9.445 3.929a13.44 13.44 0 0 0-3.913 9.484c0 3.558 1.408 6.969 3.913 9.485a13.332 13.332 0 0 0 9.445 3.929h33.596L3.886 92.097a13.442 13.442 0 0 0-3.914 9.486c0 3.558 1.408 6.97 3.914 9.486a13.33 13.33 0 0 0 9.447 3.929c3.543 0 6.941-1.413 9.447-3.929l53.994-54.225v33.683c0 3.558 1.408 6.97 3.913 9.485a13.328 13.328 0 0 0 9.445 3.929c3.543 0 6.941-1.413 9.446-3.929a13.44 13.44 0 0 0 3.912-9.485V24.465c0-3.553-1.404-6.962-3.904-9.477a13.337 13.337 0 0 0-9.432-3.936Z"
        fill="#FFFFFF"
      />
      <path
        d="M130.236 103.948h65.79c3.542 0 6.94-1.413 9.445-3.929a13.44 13.44 0 0 0 3.913-9.484c0-3.558-1.408-6.969-3.913-9.485a13.328 13.328 0 0 0-9.445-3.929h-33.545l53.994-54.218a13.438 13.438 0 0 0 3.833-9.459 13.441 13.441 0 0 0-3.91-9.428 13.331 13.331 0 0 0-9.387-3.93 13.327 13.327 0 0 0-9.422 3.845l-53.995 54.225V24.465c0-3.557-1.407-6.969-3.913-9.484a13.326 13.326 0 0 0-9.445-3.929 13.329 13.329 0 0 0-9.446 3.929 13.44 13.44 0 0 0-3.912 9.484v66.062a13.48 13.48 0 0 0 1.014 5.136 13.412 13.412 0 0 0 2.896 4.354 13.343 13.343 0 0 0 9.448 3.931Z"
        fill="#FF7900"
      />
    </g>
  </svg>
);

/**
 * Authentic Moov Money Africa Icon
 */
export const MoovMoneyIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="Moov Africa Money"
  >
    <rect width="24" height="24" rx="5" fill="#005CA9" />
    <g transform="translate(3, 5)">
      <text x="0" y="7.5" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="7.2" letterSpacing="-0.5">moov</text>
      <circle cx="15.8" cy="3" r="1.6" fill="#F39200" />
      <text x="0.5" y="12.5" fill="#F39200" fontFamily="sans-serif" fontWeight="800" fontSize="3.5" letterSpacing="0.8">AFRICA</text>
    </g>
  </svg>
);

/**
 * Authentic MTN Mobile Money Icon (Official 2022 Emblem)
 */
export const MtnMomoIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="MTN MoMo"
  >
    <rect width="24" height="24" rx="5" fill="#FFCC00" />
    <g transform="translate(2, 6) scale(0.0156 0.0187)">
      <path
        fill="#000000"
        d="M640,0C286.5,0,0,143.3,0,320s286.5,320,640,320s640-143.3,640-320S993.5,0,640,0z M640,589.5 C314.4,589.5,50.5,468.8,50.5,320S314.4,50.5,640,50.5s589.5,120.7,589.5,269.5S965.6,589.5,640,589.5z M559.3,263.9v-50.5h180.5 v50.5h-65v162.8h-50.5V263.9H559.3z M957.8,213.3v213.3h-50.5l-91.6-127v127h-50.5V213.3h50.5l91.6,127v-127L957.8,213.3z M320.7,426.7V213.3h50.5l56.1,86.3l56.1-86.3H534v213.3h-50.5V306l-38.3,58.9h-35.6L371.2,306v120.7H320.7z"
      />
    </g>
  </svg>
);

/**
 * Pack Bundle Icons
 */
export const PackCinemaIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
    <div className="absolute -left-1 top-0 w-5 h-5 rounded-md shadow-sm">
      <NetflixIcon className="w-full h-full" />
    </div>
    <div className="absolute -right-1 bottom-0 w-5 h-5 rounded-md shadow-sm">
      <PrimeVideoIcon className="w-full h-full" />
    </div>
  </div>
);

export const PackCreaIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
    <div className="absolute -left-1 top-0 w-5 h-5 rounded-md shadow-sm">
      <CanvaIcon className="w-full h-full" />
    </div>
    <div className="absolute -right-1 bottom-0 w-5 h-5 rounded-md shadow-sm">
      <CapCutIcon className="w-full h-full" />
    </div>
  </div>
);

export const PackIAIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
    <div className="absolute -left-1 top-0 w-5 h-5 rounded-md shadow-sm">
      <ChatGPTIcon className="w-full h-full" />
    </div>
    <div className="absolute -right-1 bottom-0 w-5 h-5 rounded-md shadow-sm">
      <ClaudeIcon className="w-full h-full" />
    </div>
  </div>
);

/**
 * Universal Brand Icon Dispatcher
 */
interface BrandIconBadgeProps {
  iconKey: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'rounded' | 'square' | 'circle';
  className?: string;
}

export const BrandIconBadge: React.FC<BrandIconBadgeProps> = ({
  iconKey,
  size = 'md',
  variant = 'rounded',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  const roundedMap = {
    rounded: 'rounded-xl',
    square: 'rounded-md',
    circle: 'rounded-full',
  };

  const renderIcon = () => {
    switch (iconKey) {
      case 'netflix':
        return <NetflixIcon className="w-full h-full object-contain" />;
      case 'prime':
        return <PrimeVideoIcon className="w-full h-full object-contain" />;
      case 'chatgpt':
        return <ChatGPTIcon className="w-full h-full object-contain" />;
      case 'claude':
        return <ClaudeIcon className="w-full h-full object-contain" />;
      case 'canva':
        return <CanvaIcon className="w-full h-full object-contain" />;
      case 'capcut':
        return <CapCutIcon className="w-full h-full object-contain" />;
      case 'spotify':
        return <SpotifyIcon className="w-full h-full object-contain" />;
      case 'snapchat':
        return <SnapchatIcon className="w-full h-full object-contain" />;
      case 'iptv':
        return <IPTVIcon className="w-full h-full object-contain" />;
      case 'wave':
        return <WaveIcon className="w-full h-full object-contain" />;
      case 'orange':
        return <OrangeMoneyIcon className="w-full h-full object-contain" />;
      case 'moov':
        return <MoovMoneyIcon className="w-full h-full object-contain" />;
      case 'mtn':
        return <MtnMomoIcon className="w-full h-full object-contain" />;
      case 'pack-cinema':
        return <PackCinemaIcon className="w-full h-full" />;
      case 'pack-crea':
        return <PackCreaIcon className="w-full h-full" />;
      case 'pack-ia':
        return <PackIAIcon className="w-full h-full" />;
      default:
        return <div className="w-full h-full bg-[#FF7A30] rounded-md flex items-center justify-center font-bold text-white">JC</div>;
    }
  };

  return (
    <div
      className={`inline-flex items-center justify-center p-1.5 transition-transform duration-200 hover:scale-105 shadow-sm bg-white dark:bg-[#343333] border border-[#2B2A2A]/15 dark:border-[#F5EBDD]/15 ${sizeMap[size]} ${roundedMap[variant]} ${className}`}
    >
      {renderIcon()}
    </div>
  );
};
