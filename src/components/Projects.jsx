import React, { useState } from 'react';
import { Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects = ({ onNavigateToGallery }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const featuredProject = projectsData.find((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 bg-neutral-100/60 dark:bg-neutral-900/30 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200 dark:border-rose-900/60">
            <span>Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg mt-3">
            Real-world academic systems, responsive front-end builds, and user interface prototypes engineered with user focus and modern technology.
          </p>
        </div>

        {/* 1. Prominent Primary Featured Project (iskoMats) */}
        {featuredProject && (
          <div className="mb-12">
            <ProjectCard 
              project={featuredProject} 
              onOpenCaseStudy={setSelectedCaseStudy}
            />
          </div>
        )}

        {/* 2. Secondary Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {otherProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenCaseStudy={setSelectedCaseStudy}
              onOpenGallery={onNavigateToGallery}
            />
          ))}
        </div>


      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal 
          project={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
        />
      )}
    </section>
  );
};
