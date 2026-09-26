import React, { useEffect } from 'react';
import { X, Sparkles, Calendar, Tag, Wrench, User } from 'lucide-react';
import { GalleryCardVisual } from './GalleryVisuals';

export const GalleryLightbox = ({ item, onClose }) => {
  if (!item) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Lightbox Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
              {item.category}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              {item.year}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Preview */}
        <div className="bg-neutral-950 p-2 sm:p-4 flex items-center justify-center border-b border-neutral-200 dark:border-neutral-800">
          <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg">
            <GalleryCardVisual item={item} />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>Context: {item.client}</span>
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {item.description}
          </p>

          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 flex items-center gap-1">
                <Wrench className="w-3.5 h-3.5" /> Tools:
              </span>
              <div className="flex flex-wrap gap-1">
                {item.tools.map((t) => (
                  <span key={t} className="text-xs font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {item.tags && item.tags.map((tag) => (
                <span key={tag} className="text-[11px] text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
