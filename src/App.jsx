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

export function AppContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isNotFoundView, setIsNotFoundView] = useState(false);

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

  if (isNotFoundView) {
    return <NotFound onReset={handleResetToHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-rose-700 selection:text-white transition-colors duration-200">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <ScrollReveal><Hero onOpenResume={() => setIsResumeOpen(true)} /></ScrollReveal>
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
