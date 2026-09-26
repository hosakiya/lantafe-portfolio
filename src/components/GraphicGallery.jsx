import React, { useState } from 'react';
import { 
  Palette, Eye, Sparkles, Filter, Layers, 
  ArrowUpRight, Grid3X3 
} from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/gallery';
import { GalleryCardVisual } from './GalleryVisuals';
import { GalleryLightbox } from './GalleryLightbox';

export const GraphicGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200 dark:border-rose-900/60">
            <span>Visual Arts & Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Graphic Design Gallery
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg mt-3">
            Selected freelance commissions, identity guidelines, social media assets, and digital design experiments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {galleryCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xs hover:border-rose-400 dark:hover:border-rose-500/60 transition-all group flex flex-col"
            >
              <div className="relative overflow-hidden w-full h-full">
                <GalleryCardVisual item={item} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
