import React from "react";

interface WorkItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface WorkExperienceProps {
  items: WorkItem[];
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ items }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="glass-panel p-6 animate-fadeIn"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h3 className="text-terminal-accent font-bold">{item.title}</h3>
            <span className="text-terminal-text/70 text-sm">{item.period}</span>
          </div>
          <p className="text-terminal-text/90 mb-2">{item.company}</p>
          <p className="text-terminal-text/80 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};