import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  className?: string;
}

export const GabeUpLogo: React.FC<LogoProps> = ({
  size = 'md',
  showSlogan = false,
  className = '',
}) => {
  const sizeMap = {
    sm: { height: 32, icon: 28, text: 'text-lg', slogan: 'text-[9px]' },
    md: { height: 42, icon: 38, text: 'text-2xl', slogan: 'text-[11px]' },
    lg: { height: 60, icon: 56, text: 'text-4xl', slogan: 'text-xs' },
    xl: { height: 84, icon: 80, text: 'text-5xl md:text-6xl', slogan: 'text-sm md:text-base' },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* 3D Embellished Icon Mark: Upward dynamic chevron / G emblem */}
      <div className="relative group shrink-0" style={{ width: current.icon, height: current.icon }}>
        {/* Ambient Back Glow */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#16A34A] to-[#0EA58F] rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
        
        {/* 3D Glossy Surface */}
        <svg
          viewBox="0 0 100 100"
          className="relative w-full h-full drop-shadow-[0_10px_15px_rgba(11,61,46,0.6)] transform group-hover:scale-105 transition-transform duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Main Body Gradient */}
            <linearGradient id="gabeUpGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#16A34A" />
              <stop offset="50%" stopColor="#0EA58F" />
              <stop offset="100%" stopColor="#0B3D2E" />
            </linearGradient>

            {/* Lime Dynamic Accent Gradient */}
            <linearGradient id="limeUpGrad" x1="30" y1="10" x2="90" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A3E635" />
              <stop offset="50%" stopColor="#16A34A" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Bevel Highlight */}
            <linearGradient id="bevelLight" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
            </linearGradient>

            {/* Inner Shadow Filter */}
            <filter id="innerDepth" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="3" stdDeviation="2" floodColor="#051510" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Rounded Base Tile */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="24"
            fill="#0F172A"
            stroke="url(#gabeUpGrad)"
            strokeWidth="2.5"
          />

          {/* Diagonal Glass Sheen */}
          <path
            d="M 4 28 C 4 14.745 14.745 4 28 4 L 92 4 C 94 4 95 6 93 8 L 8 93 C 6 95 4 94 4 92 Z"
            fill="white"
            fillOpacity="0.06"
          />

          {/* "G" and Ascending Arrow Geometric Path */}
          {/* Main G arc curving up */}
          <path
            d="M 68 32 C 60 22 42 21 31 31 C 20 41 20 59 31 69 C 42 79 61 79 70 68 C 74 63 76 56 76 48 L 52 48"
            stroke="url(#gabeUpGrad)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#innerDepth)"
          />

          {/* Dynamic 3D Ascending Arrow (The "Up" component) */}
          <path
            d="M 52 48 L 76 24 L 76 38"
            stroke="url(#limeUpGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 76 24 L 62 24"
            stroke="url(#limeUpGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Specular Light Dot */}
          <circle cx="76" cy="24" r="3.5" fill="#FFFFFF" />
          <circle cx="76" cy="24" r="6" stroke="#84CC16" strokeWidth="1.5" opacity="0.8" />
        </svg>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center">
        <div className={`font-display font-extrabold tracking-tight text-white flex items-baseline gap-1.5 ${current.text}`}>
          <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">Gabe</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#84CC16] drop-shadow-[0_2px_12px_rgba(22,163,74,0.4)]">
            Up
          </span>
          <span className="text-xs uppercase tracking-[0.22em] text-[#14B8A6] font-bold ml-0.5">
            Digital
          </span>
        </div>
        {showSlogan && (
          <span className={`text-slate-300 font-medium tracking-wide ${current.slogan}`}>
            Elevando negócios no digital.
          </span>
        )}
      </div>
    </div>
  );
};

export const WhatsApp3DIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 28,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 transition-transform duration-300 hover:scale-110 drop-shadow-[0_8px_16px_rgba(22,163,74,0.45)] ${className}`}
  >
    <defs>
      <linearGradient id="waBodyGrad" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#25D366" />
        <stop offset="40%" stopColor="#1EBE5D" />
        <stop offset="100%" stopColor="#128C7E" />
      </linearGradient>
      <linearGradient id="waGloss" x1="10" y1="4" x2="54" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
      </linearGradient>
      <filter id="waShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#073B2C" floodOpacity="0.5" />
      </filter>
    </defs>
    {/* 3D Round Base */}
    <circle cx="32" cy="32" r="28" fill="url(#waBodyGrad)" filter="url(#waShadow)" />
    {/* Specular Highlight Arc */}
    <ellipse cx="32" cy="18" rx="20" ry="11" fill="url(#waGloss)" />
    {/* Speech Tail */}
    <path
      d="M 18 45 L 14 53 L 23 50 Z"
      fill="#128C7E"
    />
    {/* White Receiver Phone Icon with 3D Emboss */}
    <path
      d="M24.2 20.8C23.6 19.4 22.9 19.4 22.3 19.4C21.7 19.4 21.1 19.4 20.5 20C19.9 20.6 18.3 22.1 18.3 25.1C18.3 28.1 20.5 31 20.8 31.4C21.1 31.8 25.1 38.3 31.4 40.8C36.6 42.9 37.7 42.5 38.8 42.4C40 42.3 42.4 41 42.9 39.6C43.4 38.2 43.4 37 43.2 36.7C43 36.4 42.5 36.3 41.7 35.9C40.9 35.5 37.2 33.7 36.5 33.4C35.8 33.2 35.3 33.1 34.8 33.9C34.3 34.7 32.8 36.5 32.4 37C32 37.5 31.5 37.5 30.7 37.1C29.9 36.7 26.6 35.6 24.3 33.5C22.5 31.9 21.3 29.9 20.9 29.2C20.5 28.5 20.9 28.1 21.3 27.7C21.7 27.3 22.1 26.8 22.5 26.3C22.9 25.8 23.1 25.5 23.3 25C23.5 24.5 23.4 24.1 23.2 23.7C23 23.3 21.7 20.1 21.1 18.7"
      fill="#FFFFFF"
      stroke="#FFFFFF"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]"
    />
  </svg>
);

export const Instagram3DIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 28,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 transition-transform duration-300 hover:scale-110 drop-shadow-[0_8px_16px_rgba(225,48,108,0.4)] ${className}`}
  >
    <defs>
      <radialGradient id="igGlow" cx="20%" cy="100%" r="90%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#FD1D1D" />
        <stop offset="60%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#833AB4" />
      </radialGradient>
      <linearGradient id="igGloss" x1="12" y1="6" x2="52" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
      </linearGradient>
    </defs>
    {/* Rounded Squircle */}
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#igGlow)" />
    {/* Glass sheen */}
    <path
      d="M 6 22 C 6 13.163 13.163 6 22 6 L 50 6 C 54 6 56 9 52 13 L 13 52 C 9 56 6 54 6 50 Z"
      fill="url(#igGloss)"
    />
    {/* Outer Camera Contour */}
    <rect
      x="17"
      y="17"
      width="30"
      height="30"
      rx="9"
      stroke="#FFFFFF"
      strokeWidth="3.2"
      className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
    />
    {/* Lens Center */}
    <circle
      cx="32"
      cy="32"
      r="7"
      stroke="#FFFFFF"
      strokeWidth="3.2"
      className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
    />
    {/* Flash Dot */}
    <circle cx="41.5" cy="22.5" r="2" fill="#FFFFFF" />
  </svg>
);
