import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface ProjectsProps {
  items: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ items }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {items.map((project, index) => (
        <a
          href={project.link}
          key={index}
          className="block glass-panel p-6 transition-all duration-300 hover:scale-[1.02] relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-[#F97316] before:scale-[1.02] before:opacity-0 hover:before:opacity-100 before:transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="space-y-4">
            <h3 className="text-[#9b87f5] text-xl font-bold hover:underline">
              {project.title}
            </h3>
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
  );
};
