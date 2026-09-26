import React from 'react';
import { Home, ArrowLeft, Compass, Sparkles } from 'lucide-react';

export const NotFound = ({ onReset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-400 mx-auto flex items-center justify-center shadow-lg">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-rose-700 dark:text-rose-400 uppercase tracking-widest">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Lost in the Design Canvas?
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The link or page you are looking for doesn't exist or has moved. Let's get you back to Mikaela's portfolio works.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-semibold text-sm shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
};
