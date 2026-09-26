import React from 'react';
import { 
  GraduationCap, School, BookOpen, Award, 
  Calendar, MapPin, CheckCircle, Sparkles 
} from 'lucide-react';
import { educationData } from '../data/education';

export const Education = () => {
  const { college, highSchool } = educationData;

  return (
    <section id="education" className="py-20 md:py-28 bg-white dark:bg-neutral-900/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200 dark:border-rose-900/60">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg mt-3">
            Academic training and foundational IT coursework.
          </p>
        </div>

        <div className="space-y-6">

          {/* College Card */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-rose-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-600/20">
                  <School className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-0.5">
                    {college.institution}
                  </h3>
                  <div className="text-base font-semibold text-neutral-700 dark:text-neutral-300 mt-1">
                    {college.degree}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {college.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {college.location}
                    </span>
                  </div>
                  {/* Dean's Lister */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {college.achievements.map((ach, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        <Award className="w-3 h-3" />
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:text-right">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                  {college.level}
                </span>
              </div>

            </div>

            {/* Grid of Coursework & Academic Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              
              {/* Relevant Coursework */}
              <div>
                <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-white text-base mb-4">
                  <BookOpen className="w-4 h-4 text-rose-700 dark:text-rose-400" />
                  <h4>Relevant Coursework</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {college.coursework.map((course, idx) => (
                    <div 
                      key={idx}
                      className="p-2.5 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-xs font-medium text-neutral-700 dark:text-neutral-200 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0"></span>
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Projects */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-white text-base">
                  <Award className="w-4 h-4 text-rose-700 dark:text-rose-400" />
                  <h4>Academic Projects</h4>
                </div>

                <div className="space-y-3">
                  {college.academicProjects.map((proj, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-xs space-y-1"
                    >
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {proj.title}
                      </div>
                      <div className="text-neutral-500 dark:text-neutral-400 text-[11px] leading-relaxed">
                        {proj.description}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>

          {/* High School Card */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Secondary Education
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight mt-0.5">
                    {highSchool.institution}
                  </h3>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                    {highSchool.subtitle}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {highSchool.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {highSchool.location}
                    </span>
                  </div>
                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {highSchool.achievements.map((ach, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                        <Award className="w-3 h-3" />
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
