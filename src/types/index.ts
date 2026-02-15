export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  results: string;
  techStack: string[];
  category: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  achievements: string[];
  techStack: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
}
