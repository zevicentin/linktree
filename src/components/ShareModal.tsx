import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare, Send } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, url }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareText = 'Dona Flor Cigars - Links Oficiais e Canais de Comunicação da Menendez Amerino';

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      color: 'hover:bg-[#25D366]/20 hover:border-[#25D366]',
      iconColor: 'text-[#25D366]',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${url}`)}`,
    },
    {
      id: 'telegram',
      name: 'Telegram',
      color: 'hover:bg-[#229ED9]/20 hover:border-[#229ED9]',
      iconColor: 'text-[#229ED9]',
      href: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      id: 'facebook',
      name: 'Facebook',
      color: 'hover:bg-[#1877F2]/20 hover:border-[#1877F2]',
      iconColor: 'text-[#1877F2]',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      color: 'hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]',
      iconColor: 'text-[#0A66C2]',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div
      id="share-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        id="share-modal-container"
        className="relative w-full max-w-sm p-6 bg-[#091A11] border border-[#C19A6B]/25 rounded-lg shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner brackets */}
        <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-[#C19A6B]/40" />
        <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-[#C19A6B]/40" />
        <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-[#C19A6B]/40" />
        <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-[#C19A6B]/40" />

        <button
          id="close-share-modal-btn"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 p-1.5 text-[#888888] hover:text-[#C19A6B] hover:bg-[#1A1A1A] rounded transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <h2 className="text-base font-bold font-serif tracking-[0.2em] text-[#C19A6B] uppercase mb-1">
          Compartilhar Perfil
        </h2>
        <p className="text-xs text-[#888888] mb-5 font-sans">
          Envie os canais oficiais da Dona Flor Cigars
        </p>

        {/* Share buttons grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          {shareLinks.map((item) => (
            <a
              key={item.id}
              id={`share-channel-${item.id}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 p-3 bg-[#0C2016] border border-[#C19A6B]/20 hover:border-[#C19A6B] rounded text-xs font-semibold uppercase tracking-wider text-[#E5E5E5] transition-all duration-300 ${item.color}`}
            >
              <span className={item.iconColor}>
                {item.id === 'whatsapp' && (
                  <MessageSquare className="w-4 h-4" />
                )}
                {item.id === 'telegram' && (
                  <Send className="w-4 h-4" />
                )}
                {item.id === 'facebook' && (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                )}
                {item.id === 'linkedin' && (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                )}
              </span>
              <span className="text-[11px]">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Direct Link Copy */}
        <div className="flex items-center justify-between gap-2 p-2 bg-[#0C2016] border border-[#C19A6B]/20 rounded text-xs">
          <span className="truncate text-[#AAAAAA] font-mono select-all text-left">
            {url}
          </span>
          <button
            id="copy-share-url-btn"
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
      </div>
    </div>
  );
};
