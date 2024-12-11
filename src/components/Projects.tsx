import React, { useState } from "react";
import { Filter, Layers } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  status: "working" | "done" | "abandoned";
  language: string;
}

interface ProjectsProps {
  items: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ items }) => {
  const [statusFilter, setStatusFilter] = useState<
    "all" | "working" | "done" | "abandoned"
  >("all");
  const [languageFilter, setLanguageFilter] = useState<string>("all");

  // Get unique languages from projects
  const languages = [
    "all",
    ...new Set(items.map((project) => project.language)),
  ];

  const filteredProjects = items.filter((project) => {
    const statusMatch =
      statusFilter === "all" ? true : project.status === statusFilter;
    const languageMatch =
      languageFilter === "all" ? true : project.language === languageFilter;
    return statusMatch && languageMatch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-[#F97316]" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="bg-terminal-bg text-terminal-text border border-terminal-secondary/20 rounded px-3 py-1"
          >
            <option value="all">All Status</option>
            <option value="working">Currently Working</option>
            <option value="done">Completed</option>
            <option value="abandoned">Abandoned</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-[#F97316]" />
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="bg-terminal-bg text-terminal-text border border-terminal-secondary/20 rounded px-3 py-1"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang === "all" ? "All Languages" : lang}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            className="block glass-panel p-6 transition-all duration-300 hover:scale-[1.02] relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-[#F97316] before:scale-[1.02] before:opacity-0 hover:before:opacity-100 before:transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-[#9b87f5] text-xl font-bold hover:underline">
                  {project.title}
                </h3>
                <div className="flex gap-2 items-center">
                  <span className="text-xs px-2 py-1 rounded bg-[#F97316]/10 text-[#F97316]">
                    {project.language}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      project.status === "working"
                        ? "bg-green-500/20 text-green-500"
                        : project.status === "done"
                        ? "bg-blue-500/20 text-blue-500"
                        : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <p className="text-terminal-text/90">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[#F97316] text-sm bg-[#F97316]/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
