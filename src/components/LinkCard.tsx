import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Globe, BookOpen } from 'lucide-react';
import { LinkItem } from '../types';

interface LinkCardProps {
  link: LinkItem;
  onCopyUrl?: (url: string, title: string) => void;
}

// Dedicated brand icons for pixel-perfect social representations
const SocialIcon: React.FC<{ type: LinkItem['iconName'] }> = ({ type }) => {
  switch (type) {
    case 'instagram':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'spotify':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.436-5.308-1.76-8.793-.964-.337.077-.674-.135-.75-.472-.077-.337.135-.674.472-.751 3.815-.872 7.085-.503 9.721 1.112.294.18.387.563.207.858zm1.227-2.727c-.227.369-.71.487-1.079.26-2.69-1.654-6.79-2.133-9.97-1.167-.413.125-.85-.11-.975-.523-.125-.413.11-.85.523-.975 3.633-1.103 8.163-.57 11.24 1.326.37.227.488.71.261 1.079zm.106-2.842c-3.226-1.916-8.548-2.093-11.642-1.154-.495.15-1.02-.13-1.17-.625-.15-.495.13-1.02.625-1.17 3.553-1.078 9.426-.873 13.134 1.33.447.265.594.843.329 1.29-.265.446-.843.593-1.29.329z" />
        </svg>
      );
    case 'blog':
      return <BookOpen className="w-5 h-5" />;
    case 'website':
    default:
      return <Globe className="w-5 h-5" />;
  }
};

export const LinkCard: React.FC<LinkCardProps> = ({ link, onCopyUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(link.url);
    setCopied(true);
    if (onCopyUrl) {
      onCopyUrl(link.url, link.title);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={`link-card-container-${link.id}`}
      className="relative group w-full transition-all duration-300 transform hover:-translate-y-0.5"
    >
      <a
        id={`link-btn-${link.id}`}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-between w-full p-3.5 sm:p-4 rounded-lg transition-all duration-300 bg-[#0B2016] hover:bg-[#0F2A1D] border border-[#C19A6B]/20 hover:border-[#C19A6B] shadow-md shadow-black/40"
      >
        <div className="flex items-center gap-3.5 min-w-0 pr-2">
          {/* Icon Badge */}
          <div
            className="shrink-0 flex items-center justify-center w-10 h-10 rounded transition-transform duration-200 group-hover:scale-105 bg-[#081810] text-[#C19A6B] border border-[#C19A6B]/20 group-hover:border-[#C19A6B] group-hover:text-white"
          >
            <SocialIcon type={link.iconName} />
          </div>

          {/* Text Content */}
          <div className="min-w-0 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#E5E5E5] group-hover:text-white transition-colors truncate">
                {link.title}
              </h2>
              {link.tag && (
                <span className="shrink-0 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] rounded bg-[#C19A6B]/15 text-[#C19A6B] border border-[#C19A6B]/30">
                  {link.tag}
                </span>
              )}
            </div>
            <p className="text-[11px] sm:text-xs text-[#8BA094] truncate group-hover:text-[#A7BAAF] transition-colors mt-0.5 font-sans">
              {link.subtitle}
            </p>
          </div>
        </div>

        {/* Right side Actions */}
        <div className="flex items-center gap-1.5 shrink-0 pl-2">
          {/* Copy URL micro button */}
          <button
            id={`copy-btn-${link.id}`}
            type="button"
            onClick={handleCopy}
            title={copied ? 'Copiado!' : 'Copiar endereço'}
            aria-label={`Copiar link para ${link.title}`}
            className="p-2 rounded text-[#7A9284] hover:text-[#C19A6B] hover:bg-[#122A1E] transition-colors active:scale-90 cursor-pointer"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#73cf82]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>

          {/* External link arrow */}
          <div className="p-1 text-[#C19A6B] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </a>
    </div>
  );
};
