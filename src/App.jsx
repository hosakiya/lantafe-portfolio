import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { NotFound } from './components/NotFound';
import { ScrollReveal } from './components/ScrollReveal';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { CircularWipe } from './components/CircularWipe';

export function AppContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isNotFoundView, setIsNotFoundView] = useState(false);
  const [activeWipe, setActiveWipe] = useState(null);

  useEffect(() => {
    // Check URL hash or query parameter for 404 test
    const checkHash = () => {
      if (window.location.hash === '#404' || window.location.pathname === '/404') {
        setIsNotFoundView(true);
      } else {
        setIsNotFoundView(false);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleResetToHome = () => {
    window.location.hash = '';
    setIsNotFoundView(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTriggerWipe = (x, y, targetName, targetId) => {
    setActiveWipe({ x, y, targetName });

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const navOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 220);
      }
    }
  };

  if (isNotFoundView) {
    return <NotFound onReset={handleResetToHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-rose-700 selection:text-white transition-colors duration-200">
      {/* Top Scroll Progress Indicator Bar */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onTriggerWipe={handleTriggerWipe}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <ScrollReveal>
          <Hero 
            onOpenResume={() => setIsResumeOpen(true)} 
            onTriggerWipe={handleTriggerWipe}
          />
        </ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Skills /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Education /></ScrollReveal>
        <ScrollReveal><Certifications /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Floating Back to Top Microinteraction */}
      <BackToTop />

      {/* Circular Screen Transition Wipe from Click Coordinate */}
      <CircularWipe 
        activeWipe={activeWipe} 
        onComplete={() => setActiveWipe(null)} 
      />

      {/* Interactive Resume View/Print Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
