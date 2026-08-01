import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalDetails } from '../data/resumeData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#060a13] overflow-hidden">
      
      {/* Background glow and geometric elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[#ffe600] text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Contact <span className="text-[#ffe600]">Information</span>
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Reach out directly via email, phone, or connect on LinkedIn and GitHub regarding software engineering and full-stack development opportunities.
          </p>
        </div>

        {/* Direct Details Card */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0a1020] border border-slate-800/90 glow-card space-y-6">
            
            <h3 className="text-xl font-extrabold text-white font-heading text-center sm:text-left">
              Direct Contact Details
            </h3>

            {/* Email Box */}
            <div className="p-4 rounded-2xl bg-[#080d1a] border border-slate-800/80 flex items-center justify-between group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-3 rounded-xl bg-amber-500/10 text-[#ffe600] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                  <a href={`mailto:${personalDetails.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-[#ffe600] transition-colors truncate block">
                    {personalDetails.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalDetails.email, 'email')}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white shrink-0"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Box */}
            <div className="p-4 rounded-2xl bg-[#080d1a] border border-slate-800/80 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Phone Number</div>
                  <a href={`tel:${personalDetails.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                    {personalDetails.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalDetails.phone, 'phone')}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Box */}
            <div className="p-4 rounded-2xl bg-[#080d1a] border border-slate-800/80 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {personalDetails.location}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 uppercase mb-3">Connect Online</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-between transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-sky-400" /> LinkedIn Profile
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-between transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#ffe600]" /> GitHub Profile
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
