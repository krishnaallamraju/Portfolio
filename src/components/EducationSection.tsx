import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/resumeData';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative bg-[#070b16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Education & <span className="text-[#ffe600]">Academic Excellence</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Consistently outstanding academic trajectory with top percentile achievements across B.Tech Information Technology, Intermediate, and SSC.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={edu.institution}
              className="p-6 sm:p-8 rounded-3xl bg-[#0a1020] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between glow-card relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-[#ffe600] to-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#ffe600]" />
                    {edu.period}
                  </span>

                  <div className="text-right">
                    <span className="text-2xl font-black text-[#ffe600] font-heading block">
                      {edu.score}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">
                      {edu.scoreLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-1 group-hover:text-[#ffe600] transition-colors">
                  {edu.institution}
                </h3>

                <p className="text-xs font-semibold text-slate-300 mb-4 font-mono">
                  {edu.degree}
                </p>

                {edu.location && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {edu.location}
                  </div>
                )}

                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-slate-800/60">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/50 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Verified Credential</span>
                <span className="text-slate-400">Rank #{index + 1}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
