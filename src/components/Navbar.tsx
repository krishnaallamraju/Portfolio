import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Download, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { personalDetails } from '../data/resumeData';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 border ${
          scrolled 
            ? 'bg-[#0a0f1d]/90 backdrop-blur-md border-slate-800/80 shadow-2xl shadow-black/50' 
            : 'bg-[#0b1222]/60 backdrop-blur-sm border-slate-800/50'
        }`}>
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffe600] to-amber-500 flex items-center justify-center text-black font-extrabold text-lg shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              KP
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold text-white tracking-tight font-heading block leading-tight group-hover:text-[#ffe600] transition-colors">
                Krishna Priya
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#080d1a]/80 p-1.5 rounded-xl border border-slate-800/60 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-2 rounded-xl border border-slate-700/80 hover:border-slate-500 bg-slate-900/60 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-[#ffe600]" />
              Resume
            </button>

            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-[#ffe600] hover:bg-yellow-300 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-yellow-500/10 hover:shadow-yellow-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white sm:hidden"
              title="Resume Download"
            >
              <Download className="w-4 h-4 text-[#ffe600]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#ffe600]" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 z-50 bg-[#0c1327]/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ffe600]" />
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">Navigation Menu</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="grid grid-cols-2 gap-2 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-200 hover:text-[#ffe600] hover:border-amber-500/40 text-xs font-medium transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#ffe600]" />
              View & Download Resume
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-[#ffe600] text-black font-bold text-xs flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-4 pt-2 text-slate-400 text-xs">
              <a href={personalDetails.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <span>•</span>
              <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
