export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  description: string;
  highlights: string[];
  features: {
    title: string;
    detail: string;
  }[];
  githubUrl?: string;
  liveDemoAvailable: boolean;
  architectureNotes?: string;
  imageBgColor: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
  location?: string;
  highlights?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialCode?: string;
  skillsCovered: string[];
  badgeColor: string;
}

export interface Responsibility {
  role: string;
  organization: string;
  period: string;
  points: string[];
  category: string;
}

export interface Achievement {
  title: string;
  event: string;
  organization: string;
  year: string;
  badge: string;
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}
