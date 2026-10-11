import React from 'react';
import { 
  GraduationCap, School, Calendar, Sparkles, Briefcase, 
  MapPin, CheckCircle2, ArrowRight, Code2, Layers, HeartHandshake
} from 'lucide-react';
import { personalInfo } from '../data/profile';
import { SpotlightCard } from './SpotlightCard';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-neutral-900/50 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200 dark:border-rose-900/60">
            <span>About Mikaela</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Bridging intuitive design with clean, accessible code.
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Bio Narrative Container */}
          <div className="lg:col-span-7 flex flex-col">
            <SpotlightCard 
              spotlightColor="rgba(225, 29, 72, 0.12)"
              spotlightBorderColor="rgba(244, 63, 94, 0.35)"
              className="h-full bg-neutral-50 dark:bg-neutral-900/80 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <h3 className="font-bold text-neutral-900 dark:text-white text-base">
                    Biography & Overview
                  </h3>
                  <span className="text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950 px-2.5 py-0.5 rounded-full border border-rose-200 dark:border-rose-900">
                    BSIT Senior
                  </span>
                </div>

                <div className="space-y-4 pt-1 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {personalInfo.aboutBio.map((paragraph, idx) => (
                    <p key={idx} className="font-normal">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Design & Engineering Philosophy Quote/Callout */}
              <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 relative mt-6 shadow-2xs">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium italic text-neutral-800 dark:text-neutral-200 leading-relaxed">
                      “The only way to do great work is to love what you do.”
                    </p>
                    <span className="text-xs text-rose-600 dark:text-rose-400 font-semibold block mt-1.5 not-italic">
                      — Steve Jobs
                    </span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Quick Facts Information Cards */}
          <div className="lg:col-span-5 flex flex-col">
            <SpotlightCard 
              spotlightColor="rgba(225, 29, 72, 0.12)"
              spotlightBorderColor="rgba(244, 63, 94, 0.35)"
              className="h-full bg-neutral-50 dark:bg-neutral-900/80 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <h3 className="font-bold text-neutral-900 dark:text-white text-base">
                    Profile Snapshot
                  </h3>
                  <span className="text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950 px-2.5 py-0.5 rounded-full border border-rose-200 dark:border-rose-900">
                    Active Candidate
                  </span>
                </div>
              </div>

              <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800/80">
                
                {/* Degree */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Degree</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white text-right">
                    BS Information Technology
                  </span>
                </div>

                {/* University */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      <School className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">University</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white text-right">
                    De La Salle Lipa
                  </span>
                </div>

                {/* Year Level */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Current Standing</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white text-right">
                    4th Year Senior
                  </span>
                </div>

                {/* Focus Specialization */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Core Focus</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white text-right">
                    UI/UX & Front-End
                  </span>
                </div>

                {/* Availability */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Availability</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Open to OJT / Internship
                  </span>
                </div>

                {/* Location */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Location</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white text-right">
                    Lipa City, Batangas, PH
                  </span>
                </div>

              </div>

              {/* Bottom Card CTA */}
              <div className="pt-5 mt-2">
                <a
                  href="#contact"
                  className="group w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-rose-700 dark:hover:bg-rose-600 dark:hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-200 ease-spring shadow-2xs hover:shadow-md cursor-pointer"
                >
                  <span>Connect for OJT Placement</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>

            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
