import React from 'react';
import { MapPin, Share2 } from 'lucide-react';

interface BrandHeaderProps {
  onOpenShare: () => void;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({ onOpenShare }) => {
  return (
    <header className="relative flex flex-col items-center text-center pt-2 pb-6 px-2 w-full">
      {/* Action button centered */}
      <div className="w-full flex justify-center items-center mb-6">
        <button
          id="share-profile-btn"
          onClick={onOpenShare}
          aria-label="Compartilhar perfil"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-[#C19A6B] bg-[#0C2016] hover:bg-[#C19A6B]/15 border border-[#C19A6B]/25 hover:border-[#C19A6B] rounded transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5 text-[#C19A6B]" />
          <span>Compartilhar</span>
        </button>
      </div>

      {/* Official Brand Logo */}
      <div className="relative mb-3 w-full flex flex-col items-center">
        <div className="relative flex items-center justify-center max-w-[280px] sm:max-w-[340px] px-2 py-1">
          <img
            src="/logo-menendez.png"
            alt="Dona Flor - Menendez Amerino"
            className="w-full h-auto object-contain drop-shadow-md filter brightness-105 transition-transform duration-300 hover:scale-[1.02]"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://iili.io/nJs4Icb.png';
            }}
          />
        </div>
        <h1 className="sr-only">Dona Flor Cigars - Menendez Amerino</h1>
      </div>

      {/* Sub-label with horizontal dividers from Elegant Dark */}
      <div className="mt-1 mb-4 flex items-center justify-center gap-2.5">
        <div className="h-[1px] w-8 bg-[#C19A6B]/40" />
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#888888] font-sans font-medium">
          Cigarros & Charutos Premium
        </p>
        <div className="h-[1px] w-8 bg-[#C19A6B]/40" />
      </div>

      {/* Bio / Description */}
      <p className="max-w-md text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-4 font-sans">
        Tradição, arte e sabor em charutos premium 100% feitos à mão no Recôncavo Baiano pela Menendez Amerino. Conecte-se aos nossos canais oficiais.
      </p>

      {/* Location / Craftsmanship Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-[#888888]">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0B1E14] border border-[#C19A6B]/25 text-[#BAC7BF] tracking-wider uppercase">
          <MapPin className="w-3 h-3 text-[#C19A6B]" />
          São Gonçalo dos Campos, Bahia
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0B1E14] border border-[#C19A6B]/25 text-[#BAC7BF] tracking-wider uppercase">
          100% Feito à Mão
        </span>
      </div>
    </header>
  );
};
