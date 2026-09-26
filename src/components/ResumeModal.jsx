import React, { useEffect } from 'react';
import { X, Printer } from 'lucide-react';
import { personalInfo } from '../data/profile';
import { educationData } from '../data/education';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import { certificationsData } from '../data/certifications';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const freelanceExp = experienceData.find(e => e.id === 'freelance-designer');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col overflow-hidden text-neutral-900 dark:text-neutral-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-white dark:bg-neutral-900 sticky top-0 z-10 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
              Resume Preview
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:inline">
              Mikaela Ysabel Linatoc Lantafe
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-rose-700 hover:bg-rose-800 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded-xl text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Paper Body */}
        <div className="overflow-y-auto p-6 sm:p-10 md:p-12 bg-neutral-50 dark:bg-neutral-950 print:bg-white print:p-0">
          <div className="max-w-[800px] mx-auto bg-white dark:bg-neutral-900 text-black dark:text-white p-8 sm:p-12 shadow-sm print:shadow-none print:border-none print:p-0 font-sans">
            
            {/* Resume Header */}
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-2 text-black dark:text-white">
                {personalInfo.name}
              </h1>
              
              <div className="border-t border-b border-black dark:border-neutral-500 py-1.5 mb-4 text-[11px] sm:text-xs">
                Lipa City, Batangas | mikyla0888@gmail.com | https://sites.google.com/dlsl.edu.ph/mikaelaseportfolio/
              </div>
              
              <p className="text-[11px] sm:text-xs text-justify leading-relaxed">
                {personalInfo.aboutBio.join(' ')}
              </p>
            </div>

            {/* AREA OF EXPERTISE */}
            <div className="mb-6">
              <h2 className="text-[13px] font-bold uppercase mb-2 border-b border-black dark:border-neutral-500 pb-1 text-black dark:text-white">
                AREA OF EXPERTISE
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1 text-[11px] sm:text-xs">
                <ul className="list-disc list-inside space-y-1">
                  <li>UI/UX Design</li>
                  <li>Web Development</li>
                </ul>
                <ul className="list-disc list-inside space-y-1">
                  <li>Visual Design & Layouting</li>
                  <li>Front-End Development<br/><span className="ml-4">(HTML/CSS/React)</span></li>
                </ul>
                <ul className="list-disc list-inside space-y-1">
                  <li>Data Encoding &<br/><span className="ml-4">Documentation</span></li>
                  <li>Microsoft Excel</li>
                </ul>
              </div>
            </div>

            {/* KEY ACHIEVEMENTS */}
            <div className="mb-6">
              <h2 className="text-[13px] font-bold uppercase mb-2 border-b border-black dark:border-neutral-500 pb-1 text-black dark:text-white">
                KEY ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-inside text-[11px] sm:text-xs space-y-1">
                <li>High School Honors Awardee at Philippine International English School of Kuwait.</li>
                <li>Conduct Awardee</li>
                <li>Developed design and front-end contributions for the capstone project iskoMats.</li>
                <li>Created commissioned graphic design projects and simple websites for clients</li>
              </ul>
            </div>

            {/* PROFESSIONAL EXPERIENCE */}
            <div className="mb-6">
              <h2 className="text-[13px] font-bold uppercase mb-2 border-b border-black dark:border-neutral-500 pb-1 text-black dark:text-white">
                PROFESSIONAL EXPERIENCE
              </h2>
              {freelanceExp && (
                <div className="text-[11px] sm:text-xs mb-3">
                  <div className="flex justify-between font-bold text-black dark:text-white">
                    <span>{freelanceExp.role}</span>
                    <span>{freelanceExp.company} | {freelanceExp.period}</span>
                  </div>
                  <ul className="list-disc list-inside mt-1 space-y-1 ml-1">
                    {freelanceExp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* EDUCATION */}
            <div className="mb-6">
              <h2 className="text-[13px] font-bold uppercase mb-2 border-b border-black dark:border-neutral-500 pb-1 text-black dark:text-white">
                EDUCATION
              </h2>
              <div className="text-[11px] sm:text-xs space-y-3">
                <div>
                  <div className="font-bold text-black dark:text-white">{educationData.college.degree}</div>
                  <ul className="list-disc list-inside ml-1 space-y-0.5">
                    <li>{educationData.college.institution} | {educationData.college.period}
                      <ul className="list-[circle] list-inside ml-5 mt-0.5">
                        {educationData.college.achievements.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-black dark:text-white">{educationData.highSchool.institution} | {educationData.highSchool.period}</div>
                  <ul className="list-disc list-inside ml-1 mt-0.5 space-y-0.5">
                    {educationData.highSchool.achievements.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="mb-6">
              <h2 className="text-[13px] font-bold uppercase mb-2 border-b border-black dark:border-neutral-500 pb-1 text-black dark:text-white">
                PROJECTS
              </h2>
              <div className="text-[11px] sm:text-xs space-y-4">
                {projectsData.map(proj => (
                  <div key={proj.id}>
                    <div className="font-bold text-black dark:text-white mb-1">{proj.title}</div>
                    <ul className="list-disc list-inside space-y-1 ml-1">
                      {proj.highlights.map((h, i) => (
                        <li key={i}>{h}.</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CERTIFICATIONS AND TRAININGS */}
            <div className="mb-6 page-break-inside-avoid">
              <h2 className="text-[13px] font-bold uppercase mb-2 border-b border-black dark:border-neutral-500 pb-1 text-black dark:text-white">
                CERTIFICATIONS AND TRAININGS
              </h2>
              <div className="text-[11px] sm:text-xs space-y-3">
                {certificationsData.map(cert => (
                  <div key={cert.id}>
                    <div className="font-bold text-black dark:text-white">{cert.name}</div>
                    <div className="text-gray-800 dark:text-gray-300">{cert.issuer}, {cert.issueDate}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS */}
            <div className="mb-2 page-break-inside-avoid">
              <h2 className="text-[13px] font-bold uppercase mb-2 border-b border-black dark:border-neutral-500 pb-1 text-black dark:text-white">
                SKILLS
              </h2>
              <ul className="list-disc list-inside text-[11px] sm:text-xs space-y-1.5 ml-1">
                <li><span className="font-bold text-black dark:text-white">IT Support & Troubleshooting:</span> Software troubleshooting, operating system support, user & account support.</li>
                <li><span className="font-bold text-black dark:text-white">Quality Assurance (QA):</span> Manual testing, functional testing, usability testing, UI testing, test case creation, bug identification, defect reporting, documentation.</li>
                <li><span className="font-bold text-black dark:text-white">Web Development:</span> HTML, CSS, JavaScript, PHP, React, responsive web design, basic front-end/back-end integration.</li>
                <li><span className="font-bold text-black dark:text-white">UI/UX & Graphic Design:</span> Figma, Canva, wireframing, prototyping, interface design, visual design and layout.</li>
                <li><span className="font-bold text-black dark:text-white">Productivity Tools:</span> Microsoft Word, Excel, PowerPoint, Google Workspace.</li>
                <li><span className="font-bold text-black dark:text-white">Development Tools:</span> GitHub, Visual Studio Code.</li>
                <li><span className="font-bold text-black dark:text-white">Documentation:</span> Technical documentation, report preparation, system documentation, presentation materials.</li>
                <li><span className="font-bold text-black dark:text-white">AI & Emerging Technologies:</span> Generative AI tools, prompt engineering, AI-assisted research and development, basic machine learning concepts.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 print:hidden">
          <span>De La Salle Lipa — Student Portfolio</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
