import { useState } from 'react';
import { FolderGit2, Github, ExternalLink, ShieldCheck, MapPin, Activity, Radio, Check, Layers, ChevronRight, X, Sparkles } from 'lucide-react';
import { projectsData } from '../data/resumeData';
import { Project } from '../types/portfolio';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Some of My <span className="text-[#ffe600]">Featured Works</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Full-stack web applications engineered for emergency response and healthcare monitoring, with role-based security and real-time mapping APIs.
          </p>
        </div>

        {/* Projects Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0a1020] border border-slate-800/90 hover:border-slate-700/90 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-2xl glow-card"
            >
              <div>
                
                {/* Simulated Browser Frame Top */}
                <div className="bg-[#080d19] px-5 py-3 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-3 py-0.5 rounded-md border border-slate-800/80 truncate max-w-[200px]">
                    https://{project.id}.app
                  </div>
                  <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-[#ffe600] border border-amber-500/20 font-bold">
                    {project.category}
                  </div>
                </div>

                {/* Banner Graphic Header */}
                <div className={`p-8 bg-gradient-to-br ${project.imageBgColor} relative overflow-hidden border-b border-slate-800/80`}>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#ffe600] mb-2 font-semibold">
                      {project.id === 'resqnet' ? <Radio className="w-4 h-4 animate-pulse" /> : <Activity className="w-4 h-4 animate-pulse" />}
                      Full-Stack Architecture
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description & Key Highlights */}
                <div className="p-6 sm:p-8 space-y-6">
                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>

                  <div className="space-y-2.5">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Architecture Features</div>
                    {project.highlights.map((point, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <div className="p-0.5 rounded bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Technologies Used</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-[#0d162b] border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-3 rounded-xl bg-[#ffe600] hover:bg-yellow-300 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-yellow-500/10 transition-all"
                >
                  <span>Explore Architecture & Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0b1222] border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-[#ffe600] text-xs font-mono font-bold mb-3">
              {selectedProject.category}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-slate-400 mb-6 font-mono">
              {selectedProject.subtitle}
            </p>

            <div className="space-y-6">
              
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Detailed System Description</h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-[#080d19] p-4 rounded-2xl border border-slate-800/80">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Core Modular Features</h4>
                <div className="space-y-3">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#090f1f] border border-slate-800">
                      <div className="text-xs font-bold text-white mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#ffe600]"></span>
                        {feat.title}
                      </div>
                      <div className="text-xs text-slate-400">{feat.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProject.architectureNotes && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Stack & Deployment Notes</h4>
                  <p className="text-xs font-mono text-amber-300 bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/20">
                    {selectedProject.architectureNotes}
                  </p>
                </div>
              )}

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Complete Stack Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold border border-slate-700 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-[#ffe600] text-black text-xs font-extrabold"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
