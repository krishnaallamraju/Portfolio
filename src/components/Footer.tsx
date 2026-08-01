import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Clock } from 'lucide-react';
import { personalDetails } from '../data/resumeData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format time in IST / India local time
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 py-12 text-slate-400 text-xs font-mono relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#ffe600] text-black font-black flex items-center justify-center text-sm font-heading">
              KP
            </div>
            <div>
              <div className="text-white font-bold text-sm font-heading">{personalDetails.fullName}</div>
              <div className="text-slate-500 text-[11px]">{personalDetails.title}</div>
            </div>
          </div>

          {/* Local Time Display (Inspired by reference design footer) */}
          <div className="p-3 px-4 rounded-xl bg-[#090f1f] border border-slate-800/80 flex items-center gap-2.5 text-slate-300">
            <Clock className="w-4 h-4 text-[#ffe600] animate-pulse" />
            <div>
              <span className="text-[10px] text-slate-500 block">Local Time (IST GMT+5:30)</span>
              <span className="font-bold text-xs text-white">{time || '10:30 AM'} • Bhimavaram, AP</span>
            </div>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#ffe600] text-black font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-500/10"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {personalDetails.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, Tailwind CSS & TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
