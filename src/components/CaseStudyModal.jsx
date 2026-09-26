import React, { useEffect } from 'react';
import { 
  X, ExternalLink, CheckCircle2, AlertTriangle, 
  Lightbulb, Layers, Sparkles, BookOpen, Compass, ArrowRight, ShieldCheck
} from 'lucide-react';
import { GitHubIcon } from './Icons';
import { IskoMatsMockup, PetGroomingMockup, UIUXMockup, TsongMexMockup } from './ProjectMockups';


export const CaseStudyModal = ({ project, onClose }) => {
  if (!project || !project.caseStudy) return null;

  const { title, shortTitle, role, technologies, caseStudy, githubUrl, demoUrl } = project;

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col overflow-hidden text-neutral-900 dark:text-neutral-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-200 dark:border-rose-900">
                Case Study
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {role}
              </span>
            </div>
            <h2 id="case-study-title" className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              {shortTitle || title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-hidden focus:ring-2 focus:ring-rose-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-10 divide-y divide-neutral-100 dark:divide-neutral-800/80">
          
          {/* Section: Project Visual Mockup */}
          <div className="w-full">
            {project.id === 'iskomats' && <IskoMatsMockup />}
            {project.id === 'pet-grooming' && <PetGroomingMockup />}
            {project.id === 'tsong-mex' && <TsongMexMockup />}
            {project.id === 'uiux-projects' && <UIUXMockup />}
          </div>

          {/* Section: Overview */}
          <div className="pt-8 space-y-4">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              Overview
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              {caseStudy.overview}
            </p>
          </div>

          {/* Section: Problem & Goals */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-base mb-3">
                <AlertTriangle className="w-5 h-5" />
                <h4>The Problem</h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-base mb-3">
                <Lightbulb className="w-5 h-5" />
                <h4>Project Goals</h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                {caseStudy.goals && caseStudy.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: My Role & Responsibilities */}
          <div className="pt-8 space-y-4">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              My Role & Contributions
            </h3>
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
                {caseStudy.myRole}
              </p>
            </div>
          </div>

          {/* Section: Design Process */}
          {caseStudy.designProcess && (
            <div className="pt-8 space-y-4">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                Design Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.designProcess.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                    <h5 className="font-semibold text-xs sm:text-sm text-rose-700 dark:text-rose-400 mb-1">
                      {step.phase}
                    </h5>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Technologies Used */}
          <div className="pt-8 space-y-4">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              Technologies & Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {caseStudy.technologies && caseStudy.technologies.map((tech, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <div className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                    {tech.name}
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {tech.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Key Features */}
          {caseStudy.keyFeatures && (
            <div className="pt-8 space-y-4">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
                    <h5 className="font-bold text-sm text-neutral-900 dark:text-white mb-1">
                      {feat.title}
                    </h5>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Challenges & Solutions */}
          {caseStudy.challenges && (
            <div className="pt-8 space-y-4">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                Challenges & Solutions
              </h3>
              <div className="space-y-3">
                {caseStudy.challenges.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-2">
                    <div className="text-xs sm:text-sm font-semibold text-rose-600 dark:text-rose-400">
                      Challenge: {item.challenge}
                    </div>
                    <div className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800/40">
                      Solution: {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Results & What I Learned */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 space-y-2">
              <h4 className="font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Project Results
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {caseStudy.results}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 space-y-2">
              <h4 className="font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-rose-500" />
                What I Learned
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {caseStudy.whatILearned}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            Mikaela Ysabel Lantafe Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
