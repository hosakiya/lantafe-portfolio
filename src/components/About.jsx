import React from 'react';
import { 
  GraduationCap, School, Calendar, Sparkles, Briefcase, 
  MapPin, CheckCircle2, ArrowRight, Code2, Layers, HeartHandshake
} from 'lucide-react';
import { personalInfo } from '../data/profile';

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
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg mt-3">
            A 4th-year IT student dedicated to designing delightful experiences and shipping robust front-end web applications.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Narrative */}
          <div className="lg:col-span-7 space-y-5 text-neutral-700 dark:text-neutral-300 text-base leading-relaxed">
            {personalInfo.aboutBio.map((paragraph, idx) => (
              <p key={idx} className="font-normal">
                {paragraph}
              </p>
            ))}

            {/* Design & Engineering Philosophy Quote/Callout */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 relative mt-6">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                    Design-to-Code Synergy
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    "I believe great digital products happen when thoughtful UX empathy meets clean, maintainable front-end code. Having both design and engineering skills allows me to communicate effectively with stakeholders, prototype quickly, and build without losing fidelity."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Information Cards */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-50 dark:bg-neutral-900/80 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <h3 className="font-bold text-neutral-900 dark:text-white text-base">
                  Profile Snapshot
                </h3>
                <span className="text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950 px-2.5 py-0.5 rounded-full border border-rose-200 dark:border-rose-900">
                  Active Candidate
                </span>
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
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  <span>Connect for OJT Placement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
