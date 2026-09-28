import React from 'react';
import { 
  ArrowRight, Mail, Sparkles, 
  MapPin
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

import { personalInfo } from '../data/profile';

export const Hero = ({ onOpenResume }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image - Higher opacity, visible in both modes, with a fade overlay to protect text readability */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-25 dark:opacity-20" />
        <div className="absolute inset-0 bg-white/50 dark:bg-neutral-950/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left pt-6 lg:pt-0">

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-pink-600 to-rose-600 dark:from-rose-400 dark:via-pink-300 dark:to-rose-400">Mikaela Ysabel Lantafe</span>.
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 pt-1">
                <span className="text-sm sm:text-base md:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                  UI/UX Designer
                </span>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <span className="text-sm sm:text-base md:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Front-End Web Developer
                </span>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <span className="text-sm sm:text-base md:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Graphic Designer
                </span>
              </div>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {personalInfo.heroIntro}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-semibold text-sm shadow-md shadow-rose-700/20 hover:shadow-lg hover:shadow-rose-700/30 transition-all active:scale-98 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-500"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 font-semibold text-sm transition-all active:scale-98 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-500"
              >
                <Mail className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons & Location */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 border-t border-neutral-200 dark:border-neutral-800/80 text-neutral-500 dark:text-neutral-400 text-sm">
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:text-rose-700 dark:hover:text-rose-400 hover:border-rose-400/50 transition-all hover:scale-105"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400/50 transition-all hover:scale-105"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-400/50 transition-all hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>Lipa City, Batangas • De La Salle Lipa</span>
              </div>
            </div>

          </div>

          {/* Profile Photo / Visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 md:w-88 group">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-700 to-pink-600 opacity-20 blur-md group-hover:opacity-35 transition duration-500"></div>

              {/* Main Photo Card Container */}
              <div className="relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 shadow-xl overflow-hidden">
                
                {/* Visual Portrait Frame */}
                <div className="relative aspect-4/5 rounded-2xl bg-gradient-to-b from-rose-50 to-pink-100 dark:from-neutral-800 dark:to-neutral-950 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                  
                  {/* Designer / Developer Vector Artwork Frame */}
                  <div className="relative z-10 w-full flex flex-col items-center">
                    {/* Stylized Modern Avatar Badge */}
                    <div className="relative mb-4">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-rose-700 via-pink-600 to-rose-400 p-1 shadow-lg shadow-rose-600/25">
                        <div className="w-full h-full rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center overflow-hidden">
                          <img src="/profile.png" alt="Mikaela Ysabel L. Lantafe" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      
                      {/* Floating Mini Badges */}
                      <span className="absolute -bottom-1 -right-1 p-2 bg-rose-700 text-white rounded-full shadow-md">
                        <Sparkles className="w-4 h-4" />
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                      Mikaela Ysabel L. Lantafe
                    </h3>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                      BSIT Senior • DLSL
                    </p>

                    {/* Tag Badges */}
                    <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                      <span className="text-[11px] font-medium bg-white/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-700 shadow-2xs">
                        UI/UX Designer
                      </span>
                      <span className="text-[11px] font-medium bg-white/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-700 shadow-2xs">
                        Graphic Designer
                      </span>
                      <span className="text-[11px] font-medium bg-white/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-700 shadow-2xs">
                        QA Tester
                      </span>
                    </div>
                  </div>

                  {/* Geometric accents in background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-xl pointer-events-none"></div>
                </div>

                {/* Card Footer Bar */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">De La Salle Lipa</span>
                  </div>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">Class of 2026</span>
                </div>

              </div>

            </div>
          </div>

        </div>


      </div>
    </section>
  );
};
