import { Trophy, Award, Sparkles, Star, Medal } from 'lucide-react';
import { achievementsData } from '../data/resumeData';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[#ffe600] text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Honors & <span className="text-[#ffe600]">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Recognized in national hackathons and inter-college engineering technology summits for innovative problem solving.
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievementsData.map((item, idx) => (
            <div
              key={item.event}
              className="p-8 rounded-3xl bg-[#0a1020] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 glow-card relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#ffe600] to-amber-500 text-black font-extrabold shadow-lg shadow-amber-500/20">
                    {idx === 0 ? <Trophy className="w-6 h-6" /> : <Medal className="w-6 h-6" />}
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#ffe600] text-xs font-mono font-bold">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  {item.year} Competition
                </div>

                <h3 className="text-2xl font-extrabold text-white font-heading tracking-tight mb-2 group-hover:text-[#ffe600] transition-colors">
                  {item.title}, {item.event}
                </h3>

                <p className="text-sm text-slate-300 font-medium">
                  {item.organization}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-[#ffe600]">
                  <Star className="w-3.5 h-3.5 fill-[#ffe600]" /> Hackathon Winner
                </span>
                <span className="text-slate-500">Official Recognition</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
