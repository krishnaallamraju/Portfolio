import { useState } from 'react';
import { Cpu, Code, Database, Wrench, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillCategoriesData } from '../data/resumeData';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', ...skillCategoriesData.map(c => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages': return <Code className="w-4 h-4 text-amber-400" />;
      case 'Web Technologies': return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'Databases': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Tools & Software': return <Wrench className="w-4 h-4 text-purple-400" />;
      default: return <BookOpen className="w-4 h-4 text-indigo-400" />;
    }
  };

  const filteredCategories = activeTab === 'All' 
    ? skillCategoriesData 
    : skillCategoriesData.filter(c => c.category === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-[#070b16]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[#ffe600] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Skills & <span className="text-[#ffe600]">Technical Proficiency</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Detailed breakdown of programming languages, frameworks, cloud databases, software tools, and core computer science fundamentals from my resume.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                activeTab === cat
                  ? 'bg-[#ffe600] text-black border-[#ffe600] font-bold shadow-lg shadow-yellow-500/15'
                  : 'bg-[#0a1020] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-3xl bg-[#090f1f]/90 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 glow-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="text-base font-bold text-white font-heading">{group.category}</h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {group.items.length} {group.items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-2 rounded-xl bg-[#0d162b] border border-slate-800/80 hover:border-slate-700 text-xs font-medium text-slate-200 hover:text-white flex items-center justify-between gap-2 transition-all group-hover:bg-[#101b33]"
                    >
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe600]" />
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verified Skill Set</span>
                <span className="text-[#ffe600]">• Resume Authenticated</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
