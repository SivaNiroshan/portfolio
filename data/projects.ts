export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Student Management System",
    description:
      "Ongoing",
    tech: ["Java", "Spring Boot", "MySQL", "Spring Data JPA"],
    repo: "https://github.com/yourusername/polygon-dashboard",
  },
  {
    title: "Task Manager Web App",
    description: "In Future",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    repo: "",
  },
  {
    title: "Distributed Task Scheduling System",
    description:
      "In Future",
    tech: ["Java", "Redis", "PostgreSQL", "Docker", "JWT", "REST API"],
    repo: "",
  },
  {
    title: "Personal Finance SaaS Platform",
    description:
      "In Future",
    tech: ["React", "Next.js", "TailwindCSS", "Node.js", "Express", "MongoDB", "Docker", "Cloudinary"],
    repo: "",
  },
  {
    title: "Decentralized Voting & Governance Platform",
    description:
      "In Future",
    tech: ["Solidity", "Ethereum/Polygon", "Node.js", "React", "PostgreSQL", "Web3.js", "Docker"],
    repo: "",
  },
  
];
