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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((project, index) => (
        <a
          href={project.link}
          key={index}
          className="glass-panel p-6 hover:bg-terminal-highlight/40 transition-colors duration-200 animate-fadeIn"
          style={{ animationDelay: `${index * 100}ms` }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-terminal-accent font-bold mb-2">
            {project.title}
          </h3>
          <p className="text-terminal-text/80 text-sm mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 text-xs rounded-full bg-terminal-secondary/30 text-terminal-text/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
};
