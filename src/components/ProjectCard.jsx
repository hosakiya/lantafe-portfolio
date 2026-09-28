import React from 'react';
import { 
  ExternalLink, BookOpen, Sparkles, 
  Layers, CheckCircle, ArrowRight 
} from 'lucide-react';
import { GitHubIcon } from './Icons';

import { 
  IskoMatsMockup, PetGroomingMockup, 
  UIUXMockup, GraphicDesignMockup,
  TsongMexMockup
} from './ProjectMockups';

export const ProjectCard = ({ project, onOpenCaseStudy, onOpenGallery }) => {
  const { 
    id, title, shortTitle, description, role, 
    technologies, githubUrl, demoUrl, featured, hasCaseStudy,
    highlights, metrics, tagline
  } = project;

  // Render the appropriate visual component
  const renderVisual = () => {
    switch (id) {
      case 'iskomats':
        return <IskoMatsMockup />;
      case 'tsong-mex':
        return <TsongMexMockup />;
      case 'pet-grooming':
        return <PetGroomingMockup />;
      case 'uiux-projects':
        return <UIUXMockup />;
      case 'graphic-design-portfolio':
        return <GraphicDesignMockup />;
      default:
        return null;
    }
  };

  // If featured project (iskoMats) -> Larger, prominent spotlight layout!
  if (featured) {
    return (
      <div className="bg-white dark:bg-neutral-900 rounded-3xl border-2 border-rose-500/30 dark:border-rose-500/40 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden group">
        
        {/* Decorative ambient gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 dark:bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-700 text-white text-xs font-bold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Primary Capstone Project</span>
            </span>
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700">
              Lipa City, Batangas
            </span>
          </div>
          <span className="text-xs font-semibold text-rose-700 dark:text-rose-400">
            Role: {role}
          </span>
        </div>

        {/* Two Column Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-7 w-full order-2 lg:order-1">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-video rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
              {renderVisual()}
            </div>
          </div>

          {/* Details & Action */}
          <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                {title}
              </h3>
              <p className="text-sm font-medium text-rose-700 dark:text-rose-400 mt-1">
                {tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              {description}
            </p>

            {/* Quick Metrics */}
            {metrics && (
              <div className="grid grid-cols-2 gap-3 py-2 border-y border-neutral-200 dark:border-neutral-800">
                {metrics.map((m, idx) => (
                  <div key={idx} className="text-xs">
                    <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">{m.label}</span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {hasCaseStudy && (
                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-rose-700/20 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Full Case Study</span>
                </button>
              )}

              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-rose-500" />
                  <span>Live Demo</span>
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-sm transition-all"
                >
                  <GitHubIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                  <span>GitHub</span>
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    );
  }

  // Standard Secondary Project Cards
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between group">
      
      <div>
        {/* Screenshot / Mockup Preview */}
        <div className="w-full aspect-video bg-neutral-950 p-2 sm:p-3 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden">
          <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.01]">
            {renderVisual()}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1.5">
              <span>{project.category}</span>
              <span className="font-semibold text-rose-700 dark:text-rose-400">{role}</span>
            </div>
            <h4 className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
              {title}
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 mt-auto flex flex-wrap items-center gap-2.5">
        {hasCaseStudy && (
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 text-xs font-semibold transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Case Study</span>
          </button>
        )}

        {id === 'graphic-design-portfolio' && onOpenGallery && (
          <button
            onClick={onOpenGallery}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>Explore Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}

        {demoUrl && demoUrl !== '#gallery' && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
            title="Live Demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
            title="GitHub Repository"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
        )}
      </div>

    </div>
  );
};
