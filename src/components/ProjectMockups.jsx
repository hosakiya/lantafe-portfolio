import React from 'react';
import { 
  GraduationCap, Search, CheckCircle, Clock, ShieldCheck, 
  FileText, Calendar, Scissors, Heart, User, Filter, ArrowRight 
} from 'lucide-react';

export const IskoMatsMockup = () => {
  return (
    <div className="w-full h-full bg-slate-950 rounded-xl overflow-hidden flex flex-col font-sans select-none border border-slate-700/60 shadow-lg">
      <div className="bg-slate-950 px-3 py-2 flex items-center justify-between border-b border-slate-800 text-xs shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span className="text-[11px] text-slate-400 ml-1">iskomats.surge.sh</span>
        </div>
        <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded">Live — Lipa City Portal</span>
      </div>
      {/* Real screenshot */}
      <div className="flex-1 overflow-hidden">
        <img
          src="/iskomats-preview.png"
          alt="iskoMats — Smart Scholarship Matching & Application Management System"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export const TsongMexMockup = () => {
  return (
    <div className="w-full h-full bg-slate-950 rounded-xl overflow-hidden flex flex-col font-sans select-none border border-slate-700/60 shadow-lg">
      <div className="bg-slate-950 px-3 py-2 flex items-center justify-between border-b border-slate-800 text-xs shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span className="text-[11px] text-slate-400 ml-1">Tsong-Mex Taqueria System</span>
        </div>
        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">HTML/CSS/JS + PHP</span>
      </div>
      <div className="flex-1 overflow-hidden">
        <img
          src="/tsong-mex-preview.png"
          alt="Tsong-Mex Taqueria Ordering System"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export const PetGroomingMockup = () => {
  return (
    <div className="w-full h-full bg-slate-950 rounded-xl overflow-hidden flex flex-col font-sans select-none border border-slate-700/60 shadow-lg">
      <div className="bg-slate-950 px-3 py-2 flex items-center justify-between border-b border-slate-800 text-xs shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span className="text-[11px] text-slate-400 ml-1">CSJ Pet Grooming Services</span>
        </div>
        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">React + Vite + Supabase</span>
      </div>
      <div className="flex-1 overflow-hidden">
        <img
          src="/csj-preview.png"
          alt="CSJ Pet Grooming Services"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export const UIUXMockup = () => {
  return (
    <div className="w-full h-full bg-slate-900 text-slate-100 rounded-xl overflow-hidden flex flex-col font-sans select-none border border-slate-700/60 shadow-lg">
      <div className="bg-slate-950 px-3 py-2 flex items-center justify-between border-b border-slate-800 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span className="text-[11px] text-slate-400 ml-1">Figma Design System • v3.0</span>
        </div>
        <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded">UI/UX Prototype</span>
      </div>
      <div className="p-4 bg-slate-900 flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-pink-400 tracking-wider">Design Token Library</span>
            <h5 className="font-semibold text-xs text-white">Mobile UX & Responsive Web Components</h5>
          </div>
          <div className="flex -space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-blue-500 border border-slate-900"></span>
            <span className="w-5 h-5 rounded-full bg-indigo-500 border border-slate-900"></span>
            <span className="w-5 h-5 rounded-full bg-purple-500 border border-slate-900"></span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 my-2 text-xs">
          <div className="p-2 bg-slate-800/80 rounded border border-slate-700">
            <div className="w-full h-1.5 bg-pink-500/60 rounded mb-1.5"></div>
            <div className="w-2/3 h-1.5 bg-slate-600 rounded mb-2"></div>
            <span className="text-[10px] text-slate-400">Accessible Contrast 4.5:1+</span>
          </div>
          <div className="p-2 bg-slate-800/80 rounded border border-slate-700">
            <div className="flex gap-1 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            </div>
            <span className="text-[10px] text-slate-400">8pt Grid & Auto Layout</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
          <span>Wireframe to Hi-Fi</span>
          <span className="text-pink-400 font-medium">Interactive States →</span>
        </div>
      </div>
    </div>
  );
};

export const GraphicDesignMockup = () => {
  return (
    <div className="w-full h-full min-h-[220px] bg-slate-900 text-slate-100 rounded-xl overflow-hidden flex flex-col font-sans select-none border border-slate-700/60 shadow-lg">
      <div className="bg-slate-950 px-3 py-2 flex items-center justify-between border-b border-slate-800 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span className="text-[11px] text-slate-400 ml-1">Visual Identity & Assets</span>
        </div>
        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">Creative Showcase</span>
      </div>
      <div className="p-4 bg-gradient-to-tr from-slate-900 to-amber-950/20 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase">Visual Communication</span>
          <h5 className="font-semibold text-xs text-white">Brand Assets, Social Banners & Typographic Posters</h5>
        </div>

        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 bg-slate-800/80 p-2.5 rounded border border-slate-700/60 text-center">
            <span className="text-sm font-bold text-amber-300 font-serif">Aa</span>
            <span className="text-[10px] block text-slate-400 mt-0.5">Typographic Harmony</span>
          </div>
          <div className="flex-1 bg-slate-800/80 p-2.5 rounded border border-slate-700/60 text-center">
            <span className="text-xs font-bold text-emerald-400 block">RGB / CMYK</span>
            <span className="text-[10px] block text-slate-400 mt-0.5">Print & Digital Ready</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
          <span>Adobe Illustrator • Photoshop</span>
          <span className="text-amber-400 font-medium">Explore Gallery →</span>
        </div>
      </div>
    </div>
  );
};
