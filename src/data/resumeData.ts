import { Project, Education, Certification, Responsibility, Achievement, SkillCategory } from '../types/portfolio';

export const personalDetails = {
  fullName: "Allamraju S G N Krishna Priya",
  preferredName: "Krishna Priya",
  title: "Full-Stack Web Developer & IT Undergraduate",
  location: "Bhimavaram, Andhra Pradesh",
  phone: "+91 7416834866",
  email: "sowmyasrinivas0404@gmail.com",
  linkedin: "https://linkedin.com/in/krishna-priya-allamraju-247150378",
  linkedinDisplay: "linkedin.com/in/krishna-priya-allamraju-247150378",
  github: "https://github.com/krishnaallamraju",
  githubDisplay: "github.com/krishnaallamraju",
  summary: `Passionate Information Technology undergraduate with a strong interest in full-stack web development, software engineering, and building innovative solutions for real-world challenges. Experienced in developing scalable web applications through academic projects and hackathons, with a focus on problem solving, collaboration, and continuous learning. Eager to contribute technical expertise and creativity to impactful software development projects while expanding knowledge of emerging technologies.`
};

export const projectsData: Project[] = [
  {
    id: "resqnet",
    title: "ResQNet",
    subtitle: "Disaster Rescue Coordination System",
    category: "Full-Stack System",
    technologies: ["React.js", "Node.js", "Firebase", "RESTful APIs", "HTML", "CSS", "JavaScript"],
    description: "A full-stack disaster response coordination platform that unifies Government agencies, NGOs, and volunteers for synchronized, real-time emergency dispatch and relief ops.",
    highlights: [
      "Engineered a full-stack disaster response coordination platform integrating Government agencies, NGOs, and volunteers on a unified system.",
      "Architected role-based authentication and authorization system with secure, permission-controlled dashboards for three distinct user roles.",
      "Integrated real-time GPS tracking and Google Maps heatmap visualization API to monitor live incidents and dynamically declare disaster zones."
    ],
    features: [
      {
        title: "Multi-Role Command Dashboard",
        detail: "Permission-controlled interfaces tailored specifically for Government Authorities, NGO Coordinators, and Ground Volunteers."
      },
      {
        title: "GPS & Incident Heatmaps",
        detail: "Integrated Google Maps API visualization for live incident tracking and dynamic disaster zone declarations."
      },
      {
        title: "Unified Relief Dispatch",
        detail: "Real-time sync between volunteer task assignments and emergency resource requests."
      }
    ],
    githubUrl: "https://github.com/krishnaallamraju",
    liveDemoAvailable: true,
    architectureNotes: "Built using React frontend, Express/Node API handling real-time requests, and Firebase Firestore/Auth for state management and role permissions.",
    imageBgColor: "from-blue-900/40 via-indigo-950/60 to-slate-900"
  },
  {
    id: "wellness360",
    title: "Wellness 360",
    subtitle: "Health & Lifestyle Monitoring Platform",
    category: "HealthTech Solution",
    technologies: ["React.js", "Node.js", "Firebase", "RESTful APIs", "HTML", "CSS", "JavaScript"],
    description: "A comprehensive health and wellness tracking platform offering daily activity tracking, automated medication/hydration reminders, digital medical records, and location-based emergency healthcare search.",
    highlights: [
      "Designed and developed a full-stack health and wellness tracking platform for daily activity and lifestyle monitoring.",
      "Implemented automated medicine and hydration reminder system alongside secure digital medical record management.",
      "Built emergency alert and appointment booking features, improving user response time during health-critical situations.",
      "Integrated location-based API to enable real-time search and discovery of nearby hospitals and doctors."
    ],
    features: [
      {
        title: "Smart Medication & Hydration Reminders",
        detail: "Automated schedule alerts ensuring strict adherence to prescription routines and daily wellness goals."
      },
      {
        title: "Emergency Alert & Doctor Booking",
        detail: "One-touch emergency dispatch alert system and streamlined appointment scheduling with local specialists."
      },
      {
        title: "Nearby Healthcare Finder",
        detail: "Location-based API integration to instantly locate and navigate to nearby hospitals and clinics."
      }
    ],
    githubUrl: "https://github.com/krishnaallamraju",
    liveDemoAvailable: true,
    architectureNotes: "React-based dynamic user portal integrated with Express API routes and Firebase real-time database.",
    imageBgColor: "from-teal-900/40 via-emerald-950/60 to-slate-900"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "Java", level: "Proficient" },
      { name: "C", level: "Intermediate" },
      { name: "SQL", level: "Proficient" }
    ]
  },
  {
    category: "Web Technologies",
    items: [
      { name: "React.js", level: "Advanced" },
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: "Proficient" },
      { name: "Firebase", level: "Proficient" }
    ]
  },
  {
    category: "Tools & Software",
    items: [
      { name: "GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Figma", level: "Design Lead" },
      { name: "Canva", level: "Proficient" },
      { name: "MS PowerPoint", level: "Proficient" },
      { name: "MS Word", level: "Proficient" },
      { name: "MS Excel", level: "Proficient" }
    ]
  },
  {
    category: "Core Computer Science Concepts",
    items: [
      { name: "Object Oriented Programming (OOP)" },
      { name: "Software Engineering" },
      { name: "Database Management Systems (DBMS)" },
      { name: "Operating Systems" },
      { name: "Computer Networks" }
    ]
  }
];

export const educationData: Education[] = [
  {
    institution: "Vishnu Institute of Technology",
    degree: "B.Tech in Information Technology",
    period: "2024 - 2028",
    score: "9.45",
    scoreLabel: "CGPA",
    location: "Bhimavaram, Andhra Pradesh",
    highlights: [
      "Department of Information Technology (VITB)",
      "Design Co-Lead at DOIT Club",
      "Member of ISTE Student Chapter",
      "College-level SIH 2025 Winner"
    ]
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate Education (MPC)",
    period: "2022 - 2024",
    score: "98.2%",
    scoreLabel: "Percentage",
    highlights: [
      "Top percentile academic performance in Mathematics, Physics & Chemistry stream"
    ]
  },
  {
    institution: "Sri Bhavani Vidya Nikethan",
    degree: "SSC (Secondary School Certificate)",
    period: "2022",
    score: "97.8%",
    scoreLabel: "Percentage",
    highlights: [
      "Graduated with Distinction honors"
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    issueDate: "July 2025",
    skillsCovered: ["Python Fundamentals", "Data Structures", "Algorithm Logic", "Object Oriented Programming"],
    badgeColor: "from-blue-600 to-cyan-500"
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    issueDate: "June 2026",
    skillsCovered: ["Cloud Data Concepts", "Relational & Non-relational Data", "Data Analytics in Azure", "Azure Storage & SQL"],
    badgeColor: "from-sky-500 to-indigo-600"
  }
];

export const responsibilitiesData: Responsibility[] = [
  {
    role: "Design Co-Lead",
    organization: "DOIT (Department of Information Technology) Club, VITB",
    period: "Present",
    category: "Leadership & Creative Strategy",
    points: [
      "Designed posters, banners, and promotional creatives for technical events.",
      "Collaborated with organizers to transform event ideas into engaging visual designs."
    ]
  },
  {
    role: "Design Team Member",
    organization: "ISTE Student Chapter, VITB",
    period: "Present",
    category: "Visual Communication & Execution",
    points: [
      "Managed design workflows and contributed to visually engaging content for student activities.",
      "Supported event organization and departmental responsibilities."
    ]
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "Winner",
    event: "Smart India Hackathon (SIH) 2025",
    organization: "College Level - Vishnu Institute of Technology",
    year: "2025",
    badge: "1st Place Gold"
  },
  {
    title: "Runner-Up",
    event: "Anusandhan 2025",
    organization: "SRKR Engineering College",
    year: "2025",
    badge: "2nd Place Silver"
  }
];
