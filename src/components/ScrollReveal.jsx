import React, { useEffect, useRef } from 'react';

export const ScrollReveal = ({ children, className = "", direction = "up", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
              ref.current.classList.remove('opacity-0', 'translate-y-8', '-translate-x-8', 'translate-x-8');
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getInitialClasses = () => {
    switch (direction) {
      case 'left': return 'opacity-0 -translate-x-8';
      case 'right': return 'opacity-0 translate-x-8';
      case 'up': default: return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${getInitialClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
