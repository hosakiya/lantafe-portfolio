import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { personalInfo } from '../data/profile';


export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-12 text-neutral-600 dark:text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-100 dark:border-neutral-800/80">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-700 flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <div>
              <div className="font-bold text-sm text-neutral-900 dark:text-white">
                Mikaela Ysabel Lantafe
              </div>
              <div className="text-[11px] text-neutral-400">
                UI/UX Designer • Front-End Web Developer
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400/50 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              aria-label="Email"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-400/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            © {new Date().getFullYear()} Mikaela Ysabel Lantafe. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>De La Salle Lipa • BS Information Technology</span>
            <span>•</span>
            <span>Built with React & Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
