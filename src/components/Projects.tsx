import React, { useState } from "react";
import { Filter, Layers, ChevronDown } from "lucide-react";

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
  const [showAll, setShowAll] = useState(false);

  const languages = [
    "all",
    ...new Set(items.map((project) => project.language)),
  ];

  const isProductionLink = (link: string): boolean => {
    const devDomains = [
      "github.com",
      "gitlab.com",
      "bitbucket.org",
      "localhost",
      "test",
      "staging",
      "dev",
    ];
    return !devDomains.some((domain) => link.toLowerCase().includes(domain));
  };

  // Filter out template projects and prioritize projects with production websites
  const filteredProjects = items
    .filter((project) => {
      const statusMatch =
        statusFilter === "all" ? true : project.status === statusFilter;
      const languageMatch =
        languageFilter === "all" ? true : project.language === languageFilter;
      const isNotTemplate = !project.tags.some(
        (tag) =>
          tag.toLowerCase().includes("template") ||
          tag.toLowerCase().includes("boilerplate")
      );
      return statusMatch && languageMatch && isNotTemplate;
    })
    .sort((a, b) => {
      // Prioritize projects with production website links
      const aIsProduction = isProductionLink(a.link);
      const bIsProduction = isProductionLink(b.link);
      if (aIsProduction && !bIsProduction) return -1;
      if (!aIsProduction && bIsProduction) return 1;
      return 0;
    });

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="h-5 w-5 text-[#F97316] shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="w-full sm:w-auto bg-terminal-bg text-terminal-text border border-terminal-secondary/20 rounded px-3 py-1"
          >
            <option value="all">All Status</option>
            <option value="working">Currently Working</option>
            <option value="done">Completed</option>
            <option value="abandoned">Abandoned</option>
          </select>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Layers className="h-5 w-5 text-[#F97316] shrink-0" />
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="w-full sm:w-auto bg-terminal-bg text-terminal-text border border-terminal-secondary/20 rounded px-3 py-1"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang === "all" ? "All Languages" : lang}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            className="block glass-panel p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] relative group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <h3 className="text-[#9b87f5] text-lg sm:text-xl font-bold group-hover:underline line-clamp-1">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 items-center">
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
              <p className="text-terminal-text/90 text-sm sm:text-base line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[#F97316] text-xs sm:text-sm bg-[#F97316]/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {filteredProjects.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-terminal-highlight text-terminal-text hover:bg-terminal-secondary transition-colors"
          >
            {showAll ? "Show Less" : "View More"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
};
