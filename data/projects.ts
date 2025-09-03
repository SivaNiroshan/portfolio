export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project 1",
    description:
      "lorem ipsum dolor sit amet.",
    tech: ["a", "b", "c", "d"],
    repo: "https://github.com/yourusername/polygon-dashboard",
  },
  {
    title: "Project 2",
    description: "lorem ipsum dolor sit amet",
    tech: ["Next.js", "Tailwind"],
    link: "https://niroshan",
    repo: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Project 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    repo: "https://github.com/yourusername/polygon-dashboar",
  },
  {
    title: "Project 4",
    description:
      "lore ipsum dolor sit amet, consectetur adipiscing elit.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    repo: "https://github.com/yourusername/polygon-dashboar",
  },
  
];
