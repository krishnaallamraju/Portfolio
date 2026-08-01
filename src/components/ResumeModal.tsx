import { useState } from 'react';
import { X, Download, Copy, Check, Printer, Sparkles, Phone, Mail, MapPin, Globe, Award, GraduationCap, Code, FolderGit2, Users } from 'lucide-react';
import { personalDetails, projectsData, skillCategoriesData, educationData, certificationsData, responsibilitiesData, achievementsData } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyResumeText = () => {
    const text = `
${personalDetails.fullName}
${personalDetails.location} | ${personalDetails.phone} | ${personalDetails.email}
LinkedIn: ${personalDetails.linkedinDisplay} | GitHub: ${personalDetails.githubDisplay}

SUMMARY
${personalDetails.summary}

TECHNICAL SKILLS
- Languages: C, Java, Python, JavaScript, SQL
- Web Technologies: HTML, CSS, React.js, Node.js, Express.js
- Databases: MySQL, Firebase
- Tools: GitHub, VS Code, Canva, Figma, MS Word, MS PowerPoint, MS Excel
- Concepts: Object Oriented Programming, Software Engineering, Operating Systems, DBMS, Computer Networks

PROJECTS
${projectsData.map(p => `
${p.title} – ${p.subtitle} | ${p.technologies.join(', ')}
${p.highlights.map(h => `• ${h}`).join('\n')}
`).join('\n')}

EDUCATION
${educationData.map(e => `${e.institution} (${e.period})\n${e.degree}; ${e.scoreLabel}: ${e.score}`).join('\n\n')}

CERTIFICATIONS
${certificationsData.map(c => `• ${c.title} – ${c.issuer} (${c.issueDate})`).join('\n')}

RESPONSIBILITIES
${responsibilitiesData.map(r => `${r.role} - ${r.organization} (${r.period})\n${r.points.map(pt => `• ${pt}`).join('\n')}`).join('\n\n')}

ACHIEVEMENTS
${achievementsData.map(a => `• ${a.title}, ${a.event} – ${a.organization} (${a.year})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadDoc = () => {
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset="utf-8">
        <title>Allamraju S G N Krishna Priya - Resume</title>
        <style>
          body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #111827; line-height: 1.4; padding: 20px; }
          h1 { font-size: 20pt; font-weight: bold; margin-bottom: 4px; color: #000; }
          h2 { font-size: 12pt; font-weight: bold; border-bottom: 1.5pt solid #111827; margin-top: 14pt; margin-bottom: 6pt; text-transform: uppercase; color: #000; }
          p, li { font-size: 10.5pt; margin-bottom: 4pt; }
          .contact-info { font-size: 10pt; color: #374151; margin-bottom: 12pt; }
          ul { margin-top: 2pt; margin-bottom: 6pt; padding-left: 18pt; }
          .title-row { font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>${personalDetails.fullName}</h1>
        <div class="contact-info">
          ${personalDetails.location} | Phone: ${personalDetails.phone} | Email: ${personalDetails.email}<br/>
          LinkedIn: ${personalDetails.linkedinDisplay} | GitHub: ${personalDetails.githubDisplay}
        </div>

        <h2>Summary</h2>
        <p>${personalDetails.summary}</p>

        <h2>Technical Skills</h2>
        <p><b>Languages:</b> C, Java, Python, JavaScript, SQL</p>
        <p><b>Web Technologies:</b> HTML, CSS, React.js, Node.js, Express.js</p>
        <p><b>Databases:</b> MySQL, Firebase</p>
        <p><b>Tools:</b> GitHub, VS Code, Canva, Figma, MS Word, MS PowerPoint, MS Excel</p>
        <p><b>Concepts:</b> Object Oriented Programming, Software Engineering, Operating Systems, DBMS, Computer Networks</p>

        <h2>Projects</h2>
        ${projectsData.map(p => `
          <div class="title-row">${p.title} – ${p.subtitle} <span style="font-weight:normal; font-style:italic;">(${p.technologies.join(', ')})</span></div>
          <ul>
            ${p.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        `).join('')}

        <h2>Education</h2>
        ${educationData.map(e => `
          <div><b>${e.institution}</b> (${e.period})</div>
          <div>${e.degree} | <b>${e.scoreLabel}: ${e.score}</b></div>
          <br/>
        `).join('')}

        <h2>Certifications</h2>
        <ul>
          ${certificationsData.map(c => `<li><b>${c.title}</b> – ${c.issuer} (${c.issueDate})</li>`).join('')}
        </ul>

        <h2>Responsibilities</h2>
        ${responsibilitiesData.map(r => `
          <div><b>${r.role}</b> | ${r.organization} (${r.period})</div>
          <ul>
            ${r.points.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
        `).join('')}

        <h2>Achievements</h2>
        <ul>
          ${achievementsData.map(a => `<li><b>${a.title}</b>, ${a.event} – ${a.organization} (${a.year})</li>`).join('')}
        </ul>
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff' + htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Allamraju_Krishna_Priya_Resume.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    try {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${personalDetails.fullName} - Resume</title>
              <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  color: #111827;
                  background: #ffffff;
                  padding: 30px;
                  line-height: 1.5;
                  font-size: 13px;
                }
                h1 { font-size: 24px; font-weight: bold; margin-bottom: 4px; color: #000; }
                h2 { font-size: 14px; font-weight: bold; border-bottom: 2px solid #000; padding-bottom: 3px; margin-top: 18px; margin-bottom: 8px; text-transform: uppercase; color: #000; }
                a { color: #111827; text-decoration: none; }
                ul { margin-top: 4px; margin-bottom: 8px; padding-left: 20px; }
                li { margin-bottom: 3px; }
                .bold { font-weight: bold; }
                .flex-between { display: flex; justify-content: space-between; margin-bottom: 3px; }
                @page { size: A4; margin: 15mm; }
              </style>
            </head>
            <body>
              <div style="text-align: center; margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
                <h1>${personalDetails.fullName}</h1>
                <div style="font-size: 12px; color: #4b5563; margin-top: 4px;">
                  ${personalDetails.location} &nbsp;|&nbsp; ${personalDetails.phone} &nbsp;|&nbsp; ${personalDetails.email}
                </div>
                <div style="font-size: 12px; color: #4b5563; margin-top: 4px;">
                  LinkedIn: ${personalDetails.linkedinDisplay} &nbsp;|&nbsp; GitHub: ${personalDetails.githubDisplay}
                </div>
              </div>

              <h2>Summary</h2>
              <p>${personalDetails.summary}</p>

              <h2>Technical Skills</h2>
              <div style="line-height: 1.6;">
                <div><span class="bold">Languages:</span> C, Java, Python, JavaScript, SQL</div>
                <div><span class="bold">Web Technologies:</span> HTML, CSS, React.js, Node.js, Express.js</div>
                <div><span class="bold">Databases:</span> MySQL, Firebase</div>
                <div><span class="bold">Tools:</span> GitHub, VS Code, Canva, Figma, MS Word, MS PowerPoint, MS Excel</div>
                <div><span class="bold">Concepts:</span> Object Oriented Programming, Software Engineering, Operating Systems, DBMS, Computer Networks</div>
              </div>

              <h2>Projects</h2>
              ${projectsData.map(p => `
                <div style="margin-bottom: 12px;">
                  <div class="flex-between">
                    <span class="bold">${p.title} – ${p.subtitle}</span>
                    <span style="font-size: 11px; color: #6b7280;">${p.technologies.join(', ')}</span>
                  </div>
                  <ul>
                    ${p.highlights.map(h => `<li>${h}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}

              <h2>Education</h2>
              ${educationData.map(e => `
                <div class="flex-between">
                  <div>
                    <div class="bold">${e.institution}</div>
                    <div>${e.degree}</div>
                  </div>
                  <div style="text-align: right;">
                    <div>${e.period}</div>
                    <div class="bold">${e.scoreLabel}: ${e.score}</div>
                  </div>
                </div>
              `).join('')}

              <h2>Certifications</h2>
              <ul>
                ${certificationsData.map(c => `<li><span class="bold">${c.title}</span> – ${c.issuer} (${c.issueDate})</li>`).join('')}
              </ul>

              <h2>Responsibilities</h2>
              ${responsibilitiesData.map(r => `
                <div style="margin-bottom: 10px;">
                  <div class="flex-between">
                    <span class="bold">${r.role} | ${r.organization}</span>
                    <span>${r.period}</span>
                  </div>
                  <ul>
                    ${r.points.map(pt => `<li>${pt}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}

              <h2>Achievements</h2>
              <ul>
                ${achievementsData.map(a => `<li><span class="bold">${a.title}</span>, ${a.event} – ${a.organization} (${a.year})</li>`).join('')}
              </ul>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
        }, 250);
      } else {
        window.print();
      }
    } catch {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="bg-[#0b1222] border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden">
        
        {/* Modal Bar Header */}
        <div className="px-6 py-4 bg-[#080d1a] border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#ffe600] text-black font-extrabold flex items-center justify-center font-heading text-sm">
              PDF
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-heading">
                Allamraju S G N Krishna Priya — Resume
              </h3>
              <p className="text-[10px] font-mono text-slate-400">Verified Resume Document</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyResumeText}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#ffe600]" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadDoc}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Download Word Document"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Download .DOC</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-[#ffe600] text-black text-xs font-bold flex items-center gap-1.5 hover:bg-yellow-300 transition-all shadow-md shadow-yellow-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090f1f] text-slate-200 text-xs sm:text-sm font-sans" id="printable-resume">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-2">
              {personalDetails.fullName}
            </h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-400 font-mono">
              <span>{personalDetails.location}</span>
              <span>•</span>
              <span>{personalDetails.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalDetails.email}`} className="text-[#ffe600] hover:underline">
                {personalDetails.email}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400 mt-2">
              <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                {personalDetails.linkedinDisplay}
              </a>
              <span>•</span>
              <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:text-white">
                {personalDetails.githubDisplay}
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-sm font-bold text-[#ffe600] font-heading uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">
              SUMMARY
            </h2>
            <p className="text-slate-300 leading-relaxed font-sans">
              {personalDetails.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold text-[#ffe600] font-heading uppercase tracking-wider mb-3 border-b border-slate-800 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 font-sans">
              <div><strong className="text-white">Languages:</strong> C, Java, Python, JavaScript, SQL</div>
              <div><strong className="text-white">Web Technologies:</strong> HTML, CSS, React.js, Node.js, Express.js</div>
              <div><strong className="text-white">Databases:</strong> MySQL, Firebase</div>
              <div><strong className="text-white">Tools:</strong> GitHub, VS Code, Canva, Figma, MS Word, MS PowerPoint, MS Excel</div>
              <div><strong className="text-white">Concepts:</strong> Object Oriented Programming, Software Engineering, Operating Systems, DBMS, Computer Networks</div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-bold text-[#ffe600] font-heading uppercase tracking-wider mb-4 border-b border-slate-800 pb-1">
              PROJECTS
            </h2>
            <div className="space-y-5">
              {projectsData.map(p => (
                <div key={p.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between font-bold text-white">
                    <span>{p.title} – {p.subtitle}</span>
                    <span className="text-xs font-mono text-slate-400 font-normal">{p.technologies.join(', ')}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold text-[#ffe600] font-heading uppercase tracking-wider mb-3 border-b border-slate-800 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {educationData.map(e => (
                <div key={e.institution} className="flex flex-wrap justify-between items-start">
                  <div>
                    <div className="font-bold text-white">{e.institution}</div>
                    <div className="text-xs text-slate-300">{e.degree}</div>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <div className="text-slate-400">{e.period}</div>
                    <div className="text-[#ffe600] font-bold">{e.scoreLabel}: {e.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold text-[#ffe600] font-heading uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="space-y-1.5">
              {certificationsData.map(c => (
                <div key={c.title} className="flex justify-between items-center">
                  <span className="text-slate-200"><strong className="text-white">{c.title}</strong> – {c.issuer}</span>
                  <span className="font-mono text-xs text-slate-400">{c.issueDate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h2 className="text-sm font-bold text-[#ffe600] font-heading uppercase tracking-wider mb-3 border-b border-slate-800 pb-1">
              RESPONSIBILITIES
            </h2>
            <div className="space-y-4">
              {responsibilitiesData.map(r => (
                <div key={r.role}>
                  <div className="flex justify-between items-center font-bold text-white mb-1">
                    <span>{r.role} | {r.organization}</span>
                    <span className="text-xs font-mono text-slate-400 font-normal">{r.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                    {r.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-sm font-bold text-[#ffe600] font-heading uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">
              ACHIEVEMENTS
            </h2>
            <div className="space-y-1.5">
              {achievementsData.map(a => (
                <div key={a.event} className="flex justify-between items-center">
                  <span className="text-slate-200"><strong className="text-white">{a.title}</strong>, {a.event} – {a.organization}</span>
                  <span className="font-mono text-xs text-slate-400">{a.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
