import React from 'react';
import { AlertCircle, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-6 pb-6 px-2 text-center">
      {/* Age Warning Notice */}
      <div className="max-w-md mx-auto mb-6 p-3 rounded bg-[#121212] border border-[#C19A6B]/20 text-[11px] text-[#888888] leading-relaxed flex items-start gap-2.5 text-left font-sans">
        <AlertCircle className="w-4 h-4 text-[#C19A6B] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#C19A6B] uppercase tracking-wider block mb-0.5 font-sans font-semibold text-[10px]">
            Aviso Legal de Responsabilidade:
          </strong>
          Aprecie com moderação. Produto derivado do tabaco destinado exclusivamente a maiores de 18 anos. Venda proibida para menores.
        </div>
      </div>

      {/* Decorative gradient divider from Elegant Dark */}
      <div className="mb-4 h-[1px] w-full bg-gradient-to-r from-transparent via-[#C19A6B]/30 to-transparent" />

      {/* Craftsmanship Seal */}
      <div className="flex items-center justify-center gap-2 mb-2 text-xs">
        <Award className="w-3.5 h-3.5 text-[#C19A6B]" />
        <span className="font-serif tracking-[0.25em] text-[#C19A6B] uppercase text-[11px] font-medium">
          Menendez Amerino & Cia
        </span>
      </div>

      <p className="text-[10px] uppercase tracking-[0.2em] text-[#666666] mb-1 font-sans">
        Fábrica em São Gonçalo dos Campos, Recôncavo Baiano • Bahia, Brasil
      </p>

      <p className="text-[9px] uppercase tracking-[0.4em] text-[#444444] font-sans">
        © {currentYear} Dona Flor Cigars
      </p>
    </footer>
  );
};
