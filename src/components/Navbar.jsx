import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Menu, X, FileDown, ArrowUpRight, 
  Sparkles, Code, User, Briefcase, Award, Mail, FolderGit2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/profile';
import { CircularWipe } from './CircularWipe';

export const Navbar = ({ onOpenResume, onTriggerWipe }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeWipe, setActiveWipe] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, targetName) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Calculate click coordinates for circular wipe expansion
    const rect = e.currentTarget ? e.currentTarget.getBoundingClientRect() : null;
    const x = e.clientX || (rect ? rect.left + rect.width / 2 : window.innerWidth / 2);
    const y = e.clientY || (rect ? rect.top + rect.height / 2 : 40);

    const targetId = href.replace('#', '');

    if (onTriggerWipe) {
      onTriggerWipe(x, y, targetName, targetId);
    } else {
      // Fallback
      setActiveWipe({ x, y, targetName });
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-xs' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo / Brand Name */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home', 'Home')}
            className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-rose-500 rounded-lg p-1"
          >
            <div className="w-11 h-11 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-spring">
              <img 
                src="/logo.png" 
                alt="Mikaela Logo" 
                className="w-full h-full object-contain drop-shadow-sm" 
              />
            </div>
            <div>
              <span className="font-bold text-neutral-900 dark:text-white tracking-tight text-base sm:text-lg block leading-tight group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors duration-200">
                Mikaela Ysabel
              </span>
              <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 block tracking-wider uppercase">
                UI/UX • Front-End IT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {personalInfo.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ease-spring relative group ${
                    isActive 
                      ? 'text-rose-600 dark:text-rose-400 font-semibold bg-rose-500/10 dark:bg-rose-500/15' 
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:scale-105 active:scale-95'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full animate-in fade-in zoom-in-50 duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="group p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-90 transition-all duration-200 ease-spring focus:outline-hidden focus:ring-2 focus:ring-rose-500 cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-rose-700 dark:hover:bg-rose-600 dark:hover:text-white shadow-xs hover:shadow-lg hover:shadow-rose-700/20 hover:scale-105 active:scale-95 transition-all duration-200 ease-spring cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-500"
            >
              <FileDown className="w-4 h-4 text-rose-500 dark:text-rose-600 group-hover:text-white transition-all duration-200 group-hover:-translate-y-0.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Trigger & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-hidden focus:ring-2 focus:ring-rose-500"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {personalInfo.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    isActive 
                      ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 font-semibold' 
                      : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-rose-600 dark:bg-rose-400" />}
                </a>
              );
            })}
          </nav>
          
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-rose-700 text-white hover:bg-rose-800 transition-colors shadow-xs"
            >
              <FileDown className="w-4 h-4" />
              <span>Download / Preview Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
