import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { src: '/iskomats-preview.png', label: 'iskoMats', caption: 'Smart Scholarship Matching System' },
  { src: '/tsong-mex-preview.png', label: 'Tsong-Mex', caption: 'Food Ordering System' },
  { src: '/csj-preview.png', label: 'CSJ Pet Grooming', caption: 'Pet Grooming Booking Platform' },
];

export const Showcase = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200 dark:border-rose-900/60">
            <span>Work Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            A Glimpse at My Projects
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">

          {/* Main image window */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-2xl group">
            
            {/* Browser chrome bar */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-neutral-900/90 backdrop-blur-sm px-4 py-2.5 flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span className="text-[11px] text-neutral-400 ml-2 font-mono hidden sm:inline">{slides[current].label.toLowerCase()}.preview</span>
              </div>
              <span className="text-[10px] text-neutral-500 font-mono">{current + 1} / {slides.length}</span>
            </div>

            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-600 ease-in-out ${
                  index === current
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.label}
                  className="w-full h-full object-cover object-top pt-10"
                  draggable={false}
                />
              </div>
            ))}

            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-neutral-950/90 to-transparent pointer-events-none" />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
              <h3 className="text-white font-bold text-lg sm:text-xl">{slides[current].label}</h3>
              <p className="text-neutral-300 text-xs sm:text-sm mt-0.5">{slides[current].caption}</p>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail strip & dots */}
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer border-2 ${
                  index === current
                    ? 'border-rose-500 shadow-lg shadow-rose-500/20 scale-105'
                    : 'border-transparent opacity-60 hover:opacity-90'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.label}
                  className="w-20 h-12 sm:w-28 sm:h-16 object-cover object-top"
                  draggable={false}
                />
                {/* Active indicator bar */}
                {index === current && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500" />
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
