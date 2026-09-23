export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  year: string;
  category: string;
  role: string;
  status: string;
  technologies: string[];
  thumbnail: string;
  heroImage: string;
  screenshots: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  githubUrl?: string;
  liveUrl?: string;
  accent: "indigo" | "blue" | "amber" | "mint";
}
