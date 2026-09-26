import React, { useState } from 'react';
import { 
  Award, ExternalLink, CheckCircle, ShieldCheck, 
  FileCheck, Calendar, Hash, X, PlusCircle 
} from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 md:py-28 bg-neutral-100/60 dark:bg-neutral-900/30 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200 dark:border-rose-900/60">
            <span>Verified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg mt-3">
            Industry courses, foundational credentials, and technical workshops completing my IT degree program.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 rounded-full">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
                  {cert.name}
                </h3>
                <div className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1">
                  Issued by: <span className="text-neutral-900 dark:text-neutral-200 font-semibold">{cert.issuer}</span>
                </div>

                {cert.credentialId && (
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-3">
                    <Hash className="w-3.5 h-3.5 text-neutral-400" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}

                {/* Skills Learned Badges */}
                {cert.skillsLearned && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {cert.skillsLearned.map((s) => (
                      <span 
                        key={s}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* View Credential Button */}
              <div className="pt-5 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Completion
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 transition-colors cursor-pointer"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Easy to Add Note */}
        <div className="mt-8 p-4 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/30 text-center">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            More certifications can be added seamlessly by editing <code className="font-mono text-neutral-700 dark:text-neutral-300">src/data/certifications.js</code>.
          </p>
        </div>

      </div>

      {/* Credential Viewer Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              aria-label="Close credential preview"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Credential Verification</h4>
                <div className="text-sm font-semibold text-neutral-900 dark:text-white">{selectedCert.issuer}</div>
              </div>
            </div>

            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
              {selectedCert.name}
            </h3>

            <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/60 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <div className="flex justify-between">
                <span>Issued Year:</span>
                <span className="font-medium text-neutral-900 dark:text-white">{selectedCert.issueDate}</span>
              </div>
              <div className="flex justify-between">
                <span>Credential ID:</span>
                <span className="font-mono text-neutral-900 dark:text-white">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between">
                <span>Recipient:</span>
                <span className="font-medium text-neutral-900 dark:text-white">Mikaela Ysabel Lantafe</span>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="flex-1 py-2 text-xs font-semibold rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Close
              </button>
              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-xs font-semibold rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Verify Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
