import React from 'react';
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, 
  Sparkles, ArrowUpRight, Clock
} from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200 dark:border-rose-900/60">
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Work & Creative Experience
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg mt-3">
            A track record of translating client goals into visual assets and preparing for upcoming industry placement.
          </p>
        </div>

        {/* Clean Timeline Structure */}
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-6 md:ml-8 space-y-12">
          
          {experienceData.map((item, index) => {
            const isUpcoming = item.id === 'ojt-placeholder';

            return (
              <div key={item.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot */}
                <div 
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                    isUpcoming 
                      ? 'bg-emerald-500 border-white dark:border-neutral-950 ring-4 ring-emerald-500/20' 
                      : 'bg-rose-700 border-white dark:border-neutral-950 ring-4 ring-rose-700/20'
                  }`}
                />

                {/* Timeline Card */}
                <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-7 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
                  
                  {/* Role Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                          isUpcoming
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                            : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'
                        }`}>
                          {item.type}
                        </span>
                        <span className="text-xs text-neutral-400 dark:text-neutral-500 flex items-center gap-1 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                        {item.role}
                      </h3>
                      <div className="text-sm font-medium text-neutral-600 dark:text-neutral-300 flex items-center gap-2 mt-0.5">
                        <span>{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center text-xs text-neutral-400">
                          <MapPin className="w-3 h-3 mr-0.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {isUpcoming && (
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Available for Hire
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
