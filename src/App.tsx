import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ResponsibilitiesSection from './components/ResponsibilitiesSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 relative selection:bg-[#ffe600] selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenResume={() => setResumeModalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ResponsibilitiesSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Download / View Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
