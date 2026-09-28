import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';

export const ProjectHoverList = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (hoveredProject) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredProject]);

  return (
    <div className="mt-16 border-t border-neutral-200 dark:border-neutral-800/60 pt-10">
      <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-6 text-center sm:text-left">
        Interactive Hover Index
      </h3>
      
      <div className="flex flex-col border-b border-neutral-200 dark:border-neutral-800/60">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            className="flex items-center justify-between py-4 border-t border-neutral-200 dark:border-neutral-800/60 cursor-pointer hover:bg-white dark:hover:bg-neutral-800/40 px-4 transition-colors group"
          >
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                {project.shortTitle || project.title}
              </span>
              <span className="text-xs text-neutral-500 mt-1">{project.category}</span>
            </div>
            <span className="text-xs font-mono text-neutral-400">Preview</span>
          </div>
        ))}
      </div>

      {hoveredProject && (
        <div 
          className="fixed pointer-events-none z-50 w-72 h-44 rounded-xl overflow-hidden shadow-2xl border border-neutral-700 bg-neutral-950 transition-opacity duration-200 hidden md:block"
          style={{ 
            left: `${mousePos.x + 20}px`, 
            top: `${mousePos.y + 20}px`,
            opacity: mousePos.x === 0 && mousePos.y === 0 ? 0 : 1
          }}
        >
          <img 
            src={hoveredProject.id === 'iskomats' ? '/iskomats-preview.png' : hoveredProject.id === 'tsong-mex' ? '/tsong-mex-preview.png' : '/csj-preview.png'} 
            alt={hoveredProject.title} 
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}
    </div>
  );
};
