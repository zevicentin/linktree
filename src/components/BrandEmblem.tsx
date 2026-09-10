import React from 'react';

interface BrandEmblemProps {
  className?: string;
  size?: number;
}

export const BrandEmblem: React.FC<BrandEmblemProps> = ({ className = '', size = 110 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#c89d56]/20 via-[#dcb36d]/30 to-[#8e682e]/10 blur-md" />

      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative drop-shadow-xl select-none"
      >
        <defs>
          {/* Rich Gold Gradient matching Elegant Dark */}
          <linearGradient id="goldGradient" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EADBCE" />
            <stop offset="35%" stopColor="#D8BA94" />
            <stop offset="70%" stopColor="#C19A6B" />
            <stop offset="100%" stopColor="#8C683B" />
          </linearGradient>

          {/* Light Shimmer Gradient */}
          <linearGradient id="lightShimmer" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5EFE6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#C19A6B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#553F24" stopOpacity="0.9" />
          </linearGradient>

          {/* Elegant Dark Base Gradient */}
          <radialGradient id="tobaccoBase" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E1E1E" />
            <stop offset="75%" stopColor="#141414" />
            <stop offset="100%" stopColor="#0A0A0A" />
          </radialGradient>
        </defs>

        {/* Outer Bezel */}
        <circle cx="80" cy="80" r="76" fill="url(#tobaccoBase)" stroke="url(#goldGradient)" strokeWidth="2.5" />
        <circle cx="80" cy="80" r="71" stroke="#C19A6B" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />

        {/* Outer Ring Trim */}
        <circle cx="80" cy="80" r="66" stroke="url(#goldGradient)" strokeWidth="1.5" />

        {/* Arc text placeholder / circular decorative dots */}
        {[...Array(24)].map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const x = 80 + 68.5 * Math.cos(rad);
          const y = 80 + 68.5 * Math.sin(rad);
          return <circle key={i} cx={x} cy={y} r="0.9" fill="#e8c98d" opacity="0.75" />;
        })}

        {/* Inner Filigree Ring */}
        <circle cx="80" cy="80" r="50" fill="url(#tobaccoBase)" stroke="url(#goldGradient)" strokeWidth="1.2" />

        {/* Tobacco Leaf Wreath (Left side) */}
        <path
          d="M 44 94 C 40 85 41 73 47 62 C 48 68 51 76 53 82 C 49 84 46 89 44 94 Z"
          fill="url(#goldGradient)"
          opacity="0.9"
        />
        <path
          d="M 49 61 C 51 51 58 43 67 38 C 65 44 65 52 64 58 C 59 58 53 59 49 61 Z"
          fill="url(#goldGradient)"
          opacity="0.85"
        />

        {/* Tobacco Leaf Wreath (Right side) */}
        <path
          d="M 116 94 C 120 85 119 73 113 62 C 112 68 109 76 107 82 C 111 84 114 89 116 94 Z"
          fill="url(#goldGradient)"
          opacity="0.9"
        />
        <path
          d="M 111 61 C 109 51 102 43 93 38 C 95 44 95 52 96 58 C 101 58 107 59 111 61 Z"
          fill="url(#goldGradient)"
          opacity="0.85"
        />

        {/* Crown / Heritage Top Crest */}
        <path
          d="M 72 45 L 75 49 L 80 43 L 85 49 L 88 45 L 87 52 L 73 52 Z"
          fill="url(#goldGradient)"
        />
        <circle cx="72" cy="44" r="1.2" fill="#fff3d6" />
        <circle cx="80" cy="42" r="1.5" fill="#fff3d6" />
        <circle cx="88" cy="44" r="1.2" fill="#fff3d6" />

        {/* Monogram "DF" / Brand Mark */}
        <text
          x="80"
          y="83"
          textAnchor="middle"
          fill="url(#goldGradient)"
          fontSize="24"
          fontFamily="'Cinzel', serif"
          fontWeight="700"
          letterSpacing="1.5"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
        >
          DF
        </text>

        {/* Brand Banner Text inside Inner Ring */}
        <text
          x="80"
          y="95"
          textAnchor="middle"
          fill="#C19A6B"
          fontSize="7.5"
          fontFamily="'Cinzel', serif"
          fontWeight="600"
          letterSpacing="2"
        >
          DONA FLOR
        </text>

        <text
          x="80"
          y="104"
          textAnchor="middle"
          fill="#8E6D45"
          fontSize="5.5"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="600"
          letterSpacing="1.8"
        >
          BAHIA • 1977
        </text>

        {/* Bottom Ribbon / Artisan Seal Accent */}
        <path
          d="M 64 117 L 80 114 L 96 117 L 91 123 L 80 120 L 69 123 Z"
          fill="url(#goldGradient)"
        />
      </svg>
    </div>
  );
};
