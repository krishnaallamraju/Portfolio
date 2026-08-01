import { User, GraduationCap, Code2, ShieldCheck, Sparkles, Trophy } from 'lucide-react';
import { personalDetails } from '../data/resumeData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            About <span className="text-[#ffe600]">{personalDetails.preferredName}</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Information Technology undergraduate specializing in full-stack architecture, API integration, and creative UI/UX design.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Bio Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0a1020] border border-slate-800/90 glow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <h3 className="text-xl font-bold text-white font-heading mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ffe600]" />
              Summary
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {personalDetails.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
              <div className="p-3.5 rounded-2xl bg-[#080d1a] border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-[#ffe600]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Education</div>
                  <div className="text-xs font-bold text-white">B.Tech IT (CGPA: 9.45)</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#080d1a] border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Hackathons</div>
                  <div className="text-xs font-bold text-white">SIH 2025 Winner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#090f1f] border border-slate-800/80 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1 font-heading">Full-Stack Development</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building responsive React interfaces powered by Express/Node API backends and Firebase cloud sync.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#090f1f] border border-slate-800/80 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1 font-heading">UI/UX & Creative Design</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Design Co-Lead creating promotional artwork, event posters, and user-centric interfaces on Figma & Canva.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
