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
    description:"A role-based platform for managing students, teachers, courses, and departments, providing a structured system for academic administration.",
    tech: ["Java", "Spring Boot", "MySQL", "Spring Security (JWT)", "Spring Data JPA"],
    repo: "https://github.com/SivaNiroshan/student-management-system",
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
