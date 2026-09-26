import React from 'react';
import { 
  Sparkles, Layers, Layout, Smartphone, Palette, Eye, ArrowUpRight, 
  Coffee, Globe, Image as ImageIcon, CheckCircle, Shield
} from 'lucide-react';

export const GalleryCardVisual = ({ item }) => {
  const { id, title, category, color, tools } = item;

  switch (id) {
    case 'g1': // Minimalist Brand Identity
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 p-6 flex flex-col justify-between border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex justify-between items-start">
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 font-mono">Brand Identity</span>
            <div className="w-6 h-6 rounded-full border border-blue-400/40 flex items-center justify-center text-[10px] text-blue-300">
              ML
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-light tracking-tight text-white font-serif">AURA & CO.</div>
            <div className="text-[10px] text-slate-400 tracking-wider">CREATIVE STUDIO & VISUAL CONSULTING</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
            <span className="w-3 h-3 rounded-full bg-slate-300"></span>
            <span className="w-3 h-3 rounded-full bg-slate-700"></span>
          </div>
        </div>
      );

    case 'g2': // University Tech Summit
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-950 p-6 flex flex-col justify-between border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex justify-between items-start">
            <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400 font-mono">EVENT POSTER</span>
            <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">DLSL 2024</span>
          </div>
          <div className="space-y-0.5">
            <div className="text-xs font-mono text-purple-400">ANNUAL IT SYMPOSIUM</div>
            <div className="text-xl font-extrabold text-white tracking-tight">SYNAPSE 2024</div>
            <p className="text-[11px] text-slate-300">Architecting Tomorrow's Human-Centric AI</p>
          </div>
          <div className="text-[10px] text-slate-400 flex items-center justify-between border-t border-purple-900/40 pt-2">
            <span>De La Salle Lipa Amphitheater</span>
            <span className="text-purple-300 font-mono">OCT 24-26</span>
          </div>
        </div>
      );

    case 'g3': // SaaS Dashboard Dark Mode
      return (
        <div className="w-full h-48 bg-slate-950 p-5 flex flex-col justify-between border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-semibold text-white">Vortex Cloud Analytics</span>
            </div>
            <span className="text-[10px] bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-800/50">Figma UI</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-[9px] text-slate-400 block">Active Users</span>
              <span className="text-xs font-bold text-white">24.8k</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-[9px] text-slate-400 block">Uptime</span>
              <span className="text-xs font-bold text-emerald-400">99.98%</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-[9px] text-slate-400 block">Latency</span>
              <span className="text-xs font-bold text-cyan-400">18ms</span>
            </div>
          </div>
          <div className="w-full bg-slate-900 h-6 rounded flex items-center px-2 justify-between text-[10px] text-slate-400 border border-slate-800">
            <span>Weekly API Throughput</span>
            <span className="text-cyan-400 font-mono">+14.2%</span>
          </div>
        </div>
      );

    case 'g4': // E-Commerce Landing Page
      return (
        <div className="w-full h-48 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 p-5 flex flex-col justify-between border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex justify-between items-center text-xs text-slate-300">
            <span className="font-bold text-emerald-400">NORDIC APPAREL</span>
            <span className="text-[10px] text-slate-400">RESPONSIVE STORE</span>
          </div>
          <div className="space-y-1">
            <div className="text-lg font-bold text-white leading-tight">Minimalist Essentials for Modern Everyday Living</div>
            <p className="text-[11px] text-slate-400">Sustainable Organic Cotton Collection 2024</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-600 text-white text-[10px] font-medium px-2.5 py-1 rounded">Shop Autumn Release</span>
            <span className="text-[10px] text-slate-400">Free Nationwide Shipping</span>
          </div>
        </div>
      );

    case 'g5': // Local Café Social Kit
      return (
        <div className="w-full h-48 bg-gradient-to-br from-amber-950/50 via-slate-900 to-stone-950 p-6 flex flex-col justify-between border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1.5 text-amber-400">
              <Coffee className="w-4 h-4" />
              <span className="text-xs font-serif font-bold tracking-wider">KAPENG BARAKO CRAFT</span>
            </div>
            <span className="text-[10px] text-amber-300/80 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">Social Kit</span>
          </div>
          <div>
            <div className="text-sm font-serif italic text-amber-100">"Authentic Batangas Roast, Brewed with Soul."</div>
            <p className="text-[10px] text-stone-400 mt-1">Specialty Liberica Coffee • Lipa City Heritage</p>
          </div>
          <div className="flex items-center justify-between text-[10px] text-amber-400/90 font-mono">
            <span>INSTAGRAM CAROUSEL & STORIES</span>
            <span>@KAPECRAFT.PH</span>
          </div>
        </div>
      );

    case 'g6': // Mobile Banking Onboarding Flow
      return (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-950/50 via-slate-900 to-slate-950 p-5 flex flex-col justify-between border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex justify-between items-center text-xs">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Mobile UX Flow</span>
            <span className="text-[10px] text-slate-400">Step 2 of 4</span>
          </div>
          <div className="space-y-1.5">
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-1/2 rounded-full"></div>
            </div>
            <div className="text-sm font-semibold text-white">Identity Verification</div>
            <p className="text-[10px] text-slate-300">Biometric setup and government ID scan for student accounts</p>
          </div>
          <div className="bg-slate-800/80 p-2 rounded flex items-center justify-between text-[10px] text-slate-300">
            <span className="flex items-center gap-1.5 text-emerald-400"><CheckCircle className="w-3 h-3" /> Philsys ID Verified</span>
            <span className="text-indigo-400 font-medium">Continue</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-950 p-6 flex flex-col justify-between border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase font-mono text-blue-400 tracking-wider">{category}</span>
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>
          <div className="space-y-1">
            <div className="text-base font-bold text-white">{title}</div>
            <div className="text-[11px] text-slate-400">{tools.join(' • ')}</div>
          </div>
          <div className="flex items-center text-[10px] text-slate-300 gap-2">
            <span>Visual Concept & Production</span>
          </div>
        </div>
      );
  }
};
