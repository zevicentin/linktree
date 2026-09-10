import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, url }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Safe encoded URL for public QR rendering
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=15&color=161009&bgcolor=f5e2b8&data=${encodeURIComponent(
    url
  )}`;

  return (
    <div
      id="qr-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        id="qr-modal-container"
        className="relative w-full max-w-sm p-6 bg-[#091A11] border border-[#C19A6B]/25 rounded-lg shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner brackets from Elegant Dark */}
        <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-[#C19A6B]/40" />
        <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-[#C19A6B]/40" />
        <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-[#C19A6B]/40" />
        <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-[#C19A6B]/40" />

        {/* Close Button */}
        <button
          id="close-qr-modal-btn"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 p-1.5 text-[#888888] hover:text-[#C19A6B] hover:bg-[#122A1E] rounded transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center mb-4">
          <div className="max-w-[180px] mb-2 px-1">
            <img
              src="/logo-menendez.png"
              alt="Dona Flor - Menendez Amerino"
              className="w-full h-auto max-h-12 object-contain filter brightness-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://iili.io/nJs4Icb.png';
              }}
            />
          </div>
          <h2 className="text-base font-bold font-serif tracking-[0.2em] text-[#C19A6B] uppercase">
            QR Code Oficial
          </h2>
          <p className="text-xs text-[#888888] mt-1 font-sans">
            Aponte a câmera do celular para abrir esta página
          </p>
        </div>

        {/* QR Code Container */}
        <div className="relative mx-auto my-2 p-3.5 bg-[#FFFFFF] rounded border border-[#C19A6B]/40 shadow-md inline-block">
          <img
            src={qrApiUrl}
            alt="QR Code Dona Flor Cigars Links"
            className="w-48 h-48 object-contain rounded"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* URL Box & Copy */}
        <div className="mt-4 flex items-center justify-between gap-2 p-2 bg-[#0C2016] border border-[#C19A6B]/20 rounded text-xs">
          <span className="truncate text-[#AAAAAA] font-mono select-all text-left">
            {url}
          </span>
          <button
            id="copy-qr-url-btn"
            onClick={handleCopy}
            className="shrink-0 flex items-center gap-1 px-3 py-1.5 bg-[#C19A6B] hover:bg-[#D8B991] text-[#0A0A0A] font-semibold uppercase tracking-wider text-[10px] rounded transition-colors active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#666666] mt-4 font-sans">
          Ideal para exibir em lounges, degustações e charutarias
        </p>
      </div>
    </div>
  );
};
