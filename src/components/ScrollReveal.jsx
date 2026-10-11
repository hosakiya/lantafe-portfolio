import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({ 
  children, 
  className = "", 
  direction = "up", 
  delay = 0,
  duration = 700 
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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

  const getTransformClasses = () => {
    if (isVisible) {
      return 'opacity-100 translate-y-0 translate-x-0 scale-100';
    }

    switch (direction) {
      case 'left': 
        return 'opacity-0 -translate-x-6 scale-[0.99]';
      case 'right': 
        return 'opacity-0 translate-x-6 scale-[0.99]';
      case 'down':
        return 'opacity-0 -translate-y-6 scale-[0.99]';
      case 'scale':
        return 'opacity-0 scale-95 translate-y-2';
      case 'fade':
        return 'opacity-0 scale-100';
      case 'up': 
      default: 
        return 'opacity-0 translate-y-6 scale-[0.99]';
    }
  };

  return (
    <div 
      ref={ref} 
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' 
      }}
      className={`transition-[opacity,transform] will-change-transform ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
