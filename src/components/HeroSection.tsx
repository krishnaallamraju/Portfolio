import { ArrowUpRight, Download, Award, Code2, Sparkles, MapPin, CheckCircle2, Terminal, Mail } from 'lucide-react';
import { personalDetails } from '../data/resumeData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const techBadges = [
    { name: 'React.js', color: 'border-cyan-500/30 text-cyan-300 bg-cyan-950/40', position: 'top-12 left-2 xl:left-6' },
    { name: 'Node.js', color: 'border-emerald-500/30 text-emerald-300 bg-emerald-950/40', position: 'top-16 right-2 xl:right-6' },
    { name: 'Firebase', color: 'border-amber-500/30 text-amber-300 bg-amber-950/40', position: 'top-36 left-2 xl:left-4' },
    { name: 'Python', color: 'border-blue-500/30 text-blue-300 bg-blue-950/40', position: 'top-40 right-2 xl:right-4' },
    { name: 'Figma', color: 'border-purple-500/30 text-purple-300 bg-purple-950/40', position: 'top-60 left-2 xl:left-6' },
    { name: 'SQL', color: 'border-indigo-500/30 text-indigo-300 bg-indigo-950/40', position: 'top-64 right-2 xl:right-6' },
  ];

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center justify-center glow-bg">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating tech pill indicators for large screens */}
        <div className="hidden md:block">
          {techBadges.map((badge, idx) => (
            <div
              key={badge.name}
              className={`absolute ${badge.position} ${badge.color} backdrop-blur-md px-3 py-1.5 rounded-xl border text-xs font-mono font-medium shadow-xl shadow-black/40 animate-float-${(idx % 3) + 1} pointer-events-none hidden xl:flex items-center gap-1.5`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
              {badge.name}
            </div>
          ))}
        </div>

        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d162b] border border-slate-700/80 mb-8 shadow-inner shadow-black/60">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300 font-mono">
            Full-Stack Web Developer • B.Tech IT (2024-2028)
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto font-heading">
          Allamraju S G N <br className="hidden sm:inline" />
          <span className="text-[#ffe600]">
            Krishna Priya
          </span>
        </h1>

        {/* Subtitle / Resume Summary */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Hi, I'm <strong className="text-white font-semibold">{personalDetails.fullName}</strong> — an Information Technology undergraduate passionate about full-stack web development, software engineering, and building innovative, real-world solutions.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-2xl bg-[#ffe600] hover:bg-yellow-300 text-black font-extrabold text-sm flex items-center gap-2 shadow-xl shadow-yellow-500/15 hover:shadow-yellow-500/25 transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>View Works</span>
            <ArrowUpRight className="w-4 h-4 text-black stroke-[3]" />
          </a>

          <button
            onClick={onOpenResume}
            className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 flex items-center gap-2 transition-all hover:border-slate-500 shadow-lg shadow-black/40"
          >
            <Download className="w-4 h-4 text-[#ffe600]" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-2xl bg-[#0e172a] hover:bg-[#15233e] text-slate-200 hover:text-white font-semibold text-sm border border-slate-800 flex items-center gap-2 transition-all"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Key Resume Stat Highlights (Cards in Hero) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          
          <div className="p-4 rounded-2xl bg-[#0b1326]/90 border border-slate-800/80 text-left flex items-start gap-3.5 hover:border-slate-700 transition-colors">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-[#ffe600] border border-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white font-heading tracking-tight">9.45 CGPA</div>
              <div className="text-xs text-slate-400 font-medium">B.Tech Information Technology</div>
              <div className="text-[11px] text-slate-500">Vishnu Institute of Technology</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0b1326]/90 border border-slate-800/80 text-left flex items-start gap-3.5 hover:border-slate-700 transition-colors">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white font-heading tracking-tight">SIH 2025</div>
              <div className="text-xs text-slate-400 font-medium">College Level Winner</div>
              <div className="text-[11px] text-slate-500">Smart India Hackathon</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0b1326]/90 border border-slate-800/80 text-left flex items-start gap-3.5 hover:border-slate-700 transition-colors">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white font-heading tracking-tight">Full-Stack</div>
              <div className="text-xs text-slate-400 font-medium">ResQNet & Wellness 360</div>
              <div className="text-[11px] text-slate-500">React • Node • Firebase • APIs</div>
            </div>
          </div>

        </div>

        {/* Location & Quick Contact row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#ffe600]" />
            {personalDetails.location}
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <a href={`mailto:${personalDetails.email}`} className="hover:text-white transition-colors">
            {personalDetails.email}
          </a>
          <span className="hidden sm:inline text-slate-700">•</span>
          <a href={`tel:${personalDetails.phone}`} className="hover:text-white transition-colors">
            {personalDetails.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
