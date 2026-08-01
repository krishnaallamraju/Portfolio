import { ShieldCheck, Award, Calendar, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/resumeData';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Professional <span className="text-[#ffe600]">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Verified technical certifications in Python programming and Cloud Data Architecture from Microsoft & Cisco Networking Academy.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="p-8 rounded-3xl bg-[#0a1020] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 glow-card relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 text-[#ffe600]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ffe600]" />
                    {cert.issueDate}
                  </div>
                </div>

                <div className="text-xs font-mono text-[#ffe600] uppercase tracking-wider mb-1 font-semibold">
                  {cert.issuer}
                </div>

                <h3 className="text-xl font-extrabold text-white font-heading tracking-tight mb-4 group-hover:text-[#ffe600] transition-colors">
                  {cert.title}
                </h3>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Competencies & Skills Covered</div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-[#0d162b] border border-slate-800 text-xs text-slate-300 font-medium flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> Verified Credential
                </span>
                <span className="text-slate-500">Resume Authenticated</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
