import { Users, Palette, CheckCircle2, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { responsibilitiesData } from '../data/resumeData';

export default function ResponsibilitiesSection() {
  return (
    <section id="leadership" className="py-20 relative bg-[#070b16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Campus Roles & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Roles & <span className="text-[#ffe600]">Responsibilities</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Leading visual communication, event organization, and creative workflows across department clubs and student technical chapters.
          </p>
        </div>

        {/* Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {responsibilitiesData.map((item) => (
            <div
              key={item.role}
              className="p-8 rounded-3xl bg-[#0a1020] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 glow-card relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-semibold">
                    {item.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    {item.period}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white font-heading mb-1">
                  {item.role}
                </h3>
                <p className="text-xs font-mono text-[#ffe600] mb-6 font-semibold">
                  {item.organization}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800/80">
                  {item.points.map((pt, index) => (
                    <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <div className="p-1 rounded bg-[#ffe600]/10 text-[#ffe600] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Palette className="w-3.5 h-3.5 text-[#ffe600]" /> Design & Visual Strategy
                </span>
                <span className="text-slate-500">VITB Campus</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
