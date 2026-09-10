/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { LinkItem } from './types';
import { BrandHeader } from './components/BrandHeader';
import { LinkCard } from './components/LinkCard';
import { Footer } from './components/Footer';
import { QRCodeModal } from './components/QRCodeModal';
import { ShareModal } from './components/ShareModal';

const OFFICIAL_LINKS: LinkItem[] = [
  {
    id: 'site-oficial',
    title: 'Site Oficial',
    subtitle: 'Conheça nossa história, fábricas e portfólio completo de marcas',
    url: 'https://menendezamerino.com/',
    iconName: 'website',
    featured: true,
    tag: 'Portal Oficial',
  },
  {
    id: 'blog',
    title: 'Blog',
    subtitle: 'Artigos, rituais de degustação, harmonizações e novidades',
    url: 'https://donaflorcigar.blog/',
    iconName: 'blog',
    featured: true,
    tag: 'Novo Conteúdo',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    subtitle: 'Acompanhe nosso dia a dia, ensaios e lançamentos exclusivos',
    url: 'https://www.instagram.com/donaflorcigar',
    iconName: 'instagram',
    tag: 'Destaque',
  },
  {
    id: 'youtube',
    title: 'YouTube',
    subtitle: 'Vídeos da manufatura artesanal, degustações e eventos',
    url: 'https://www.youtube.com/@donaflorcigar',
    iconName: 'youtube',
    tag: 'Vídeos',
  },
  {
    id: 'facebook',
    title: 'Facebook',
    subtitle: 'Notícias, novidades e interação com apreciadores de charuto',
    url: 'https://www.facebook.com/DonaFlorCigar',
    iconName: 'facebook',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: 'Canal corporativo, relações institucionais e mercado',
    url: 'https://br.linkedin.com/company/menendez-amerino',
    iconName: 'linkedin',
    tag: 'Institucional',
  },
  {
    id: 'spotify',
    title: 'Spotify',
    subtitle: 'Playlist oficial para harmonizar com sua degustação de charutos',
    url: 'https://open.spotify.com/playlist/0TCgOEpCmkWOrJl4sQIJZa?si=ijtM1WaoQT6wk8LEoKgp-Q&utm_source=whatsapp&pi=NYgIHEzDT2qzG',
    iconName: 'spotify',
    tag: 'Playlist',
  },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isQROpen, setIsQROpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter links based on user query
  const filteredLinks = useMemo(() => {
    if (!searchQuery.trim()) return OFFICIAL_LINKS;
    const query = searchQuery.toLowerCase();
    return OFFICIAL_LINKS.filter(
      (link) =>
        link.title.toLowerCase().includes(query) ||
        link.subtitle.toLowerCase().includes(query) ||
        link.url.toLowerCase().includes(query) ||
        (link.tag && link.tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const showToast = (url: string, title: string) => {
    setToastMessage(`Link de "${title}" copiado!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://menendezamerino.com/';

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Dona Flor Cigars - Links Oficiais',
          text: 'Confira os canais oficiais da Dona Flor Cigars e Menendez Amerino:',
          url: currentUrl,
        })
        .catch(() => {
          setIsShareOpen(true);
        });
    } else {
      setIsShareOpen(true);
    }
  };

  return (
    <div
      className="relative min-h-screen w-full bg-[#06140D] text-[#E5E5E5] flex flex-col items-center justify-center p-3 sm:p-6 overflow-x-hidden selection:bg-[#C19A6B]/30 selection:text-white"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 40%, #0E261A 0%, #05100A 100%)',
      }}
    >
      {/* Subtle Background Elements with gold tint */}
      <div className="fixed bottom-[-100px] right-[-100px] w-[400px] h-[400px] border border-[#C19A6B]/10 rounded-full pointer-events-none" />
      <div className="fixed top-[-100px] left-[-100px] w-[300px] h-[300px] border border-[#C19A6B]/10 rounded-full pointer-events-none" />

      {/* Main centered Linktree container with dark green card & gold accents */}
      <main className="relative z-10 w-full max-w-lg flex flex-col items-center p-5 sm:p-8 border border-[#C19A6B]/25 bg-[#091A11]/90 backdrop-blur-md rounded-lg shadow-2xl shadow-black/60 my-auto">
        {/* Decorative Frame Corners */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t border-l border-[#C19A6B]/30 pointer-events-none" />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t border-r border-[#C19A6B]/30 pointer-events-none" />
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b border-l border-[#C19A6B]/30 pointer-events-none" />
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b border-r border-[#C19A6B]/30 pointer-events-none" />

        {/* Top Header Section */}
        <BrandHeader onOpenShare={handleShareClick} />

        {/* Search input with Dark Green & Gold styling */}
        <div className="w-full mb-5 px-1 font-sans">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-[#777777] pointer-events-none" />
            <input
              id="search-links-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar links, redes ou canais..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#0C2016] border border-[#C19A6B]/25 focus:border-[#C19A6B] rounded text-[#E5E5E5] placeholder-[#7A9284] focus:outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-xs text-[#888888] hover:text-[#C19A6B] p-1 cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Links List with Staggered Entrance Animation */}
        <div className="w-full flex flex-col gap-3">
          <AnimatePresence>
            {filteredLinks.length > 0 ? (
              filteredLinks.map((link, idx) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                >
                  <LinkCard link={link} onCopyUrl={showToast} />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-10 px-4 bg-[#0C2016] border border-[#C19A6B]/20 rounded font-sans">
                <p className="text-xs text-[#888888] mb-2">
                  Nenhum canal encontrado para "{searchQuery}".
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs uppercase tracking-wider text-[#C19A6B] hover:underline cursor-pointer"
                >
                  Mostrar todos os links
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Social Bar */}
        <div className="w-full mt-6 pt-5 border-t border-[#C19A6B]/20 flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#777777] font-sans font-medium mb-3">
            Siga-nos nas redes
          </p>
          <div className="flex items-center gap-2.5">
            {OFFICIAL_LINKS.map((link) => (
              <a
                key={`quick-${link.id}`}
                id={`quick-link-${link.id}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="p-2.5 rounded border border-[#C19A6B]/25 bg-[#0C2016] text-[#C19A6B] hover:text-white hover:border-[#C19A6B] hover:bg-[#C19A6B]/15 transition-all duration-300 active:scale-95 shadow-sm cursor-pointer"
              >
                {link.iconName === 'instagram' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                )}
                {link.iconName === 'facebook' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                )}
                {link.iconName === 'youtube' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
                  </svg>
                )}
                {link.iconName === 'linkedin' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )}
                {link.iconName === 'blog' && (
                  <Sparkles className="w-4 h-4" />
                )}
                {link.iconName === 'website' && (
                  <Globe className="w-4 h-4" />
                )}
                {link.iconName === 'spotify' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.436-5.308-1.76-8.793-.964-.337.077-.674-.135-.75-.472-.077-.337.135-.674.472-.751 3.815-.872 7.085-.503 9.721 1.112.294.18.387.563.207.858zm1.227-2.727c-.227.369-.71.487-1.079.26-2.69-1.654-6.79-2.133-9.97-1.167-.413.125-.85-.11-.975-.523-.125-.413.11-.85.523-.975 3.633-1.103 8.163-.57 11.24 1.326.37.227.488.71.261 1.079zm.106-2.842c-3.226-1.916-8.548-2.093-11.642-1.154-.495.15-1.02-.13-1.17-.625-.15-.495.13-1.02.625-1.17 3.553-1.078 9.426-.873 13.134 1.33.447.265.594.843.329 1.29-.265.446-.843.593-1.29.329z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Footer info & age restriction notice */}
        <Footer />
      </main>

      {/* Interactive Modals */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        url={currentUrl}
      />

      <QRCodeModal
        isOpen={isQROpen}
        onClose={() => setIsQROpen(false)}
        url={currentUrl}
      />

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-[#151515] text-[#E5E5E5] border border-[#C19A6B]/40 rounded shadow-2xl backdrop-blur-md text-xs font-medium font-sans"
          >
            <CheckCircle2 className="w-4 h-4 text-[#73cf82]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
