import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (totalHeight > 0) {
        const percentage = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollPercentage(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ease-spring ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 shadow-lg shadow-neutral-900/10 dark:shadow-black/40 hover:border-rose-400 dark:hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-500"
      >
        {/* Circular Progress Ring */}
        <svg 
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r="18"
            className="stroke-neutral-200 dark:stroke-neutral-800"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="22"
            cy="22"
            r="18"
            className="stroke-rose-600 dark:stroke-rose-400 transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Arrow Icon with Hover Microinteraction */}
        <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
};
