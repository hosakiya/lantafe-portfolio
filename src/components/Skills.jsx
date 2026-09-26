import React from 'react';
import { 
  Code2, Palette, FileCode, Atom, Zap, Layers, Smartphone,
  DatabaseZap, Database, Network, Table, Layout, Compass,
  Grid, PlaySquare, Brush, GitBranch, CheckCircle2, Cpu, 
  FileSpreadsheet, Bot, Sparkles, Check, Server, Settings, Wrench, FileText, User
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import { skillsData } from '../data/skills';

// Helper icon mapper
const getSkillIcon = (iconName) => {
  const iconMap = {
    Code2: Code2,
    Palette: Palette,
    FileCode: FileCode,
    Atom: Atom,
    Zap: Zap,
    Layers: Layers,
    Smartphone: Smartphone,
    DatabaseZap: DatabaseZap,
    Database: Database,
    Network: Network,
    Table: Table,
    Figma: FigmaIcon,
    Layout: Layout,
    Compass: Compass,
    Grid: Grid,
    PlaySquare: PlaySquare,
    Brush: Brush,
    GitBranch: GitBranch,
    CheckCircle2: CheckCircle2,
    Cpu: Cpu,
    FileSpreadsheet: FileSpreadsheet,
    Bot: Bot,
    Sparkles: Sparkles,
    Server: Server,
    Settings: Settings,
    Wrench: Wrench,
    FileText: FileText,
    User: User,
  };
  const IconComponent = iconMap[iconName] || Code2;
  return <IconComponent className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200 dark:border-rose-900/60">
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg mt-3">
            Practical technical proficiencies structured around user experience, component architecture, and modern workflows.
          </p>
        </div>

        {/* 4 Main Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((categoryGroup, index) => (
            <div 
              key={categoryGroup.category}
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-7 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
                    {categoryGroup.category}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                  {categoryGroup.description}
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categoryGroup.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 hover:border-rose-400/50 dark:hover:border-rose-500/50 transition-colors flex items-start gap-3"
                    >
                      <div className="p-1.5 rounded-lg bg-white dark:bg-neutral-700/80 shadow-2xs shrink-0 mt-0.5">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-white truncate">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
                          {skill.highlight}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
