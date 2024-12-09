import React from "react";
import { Navigation } from "./Navigation";

interface BlogPostProps {
  title: string;
  date: string;
  content: React.ReactNode;
}

export const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
  return (
    <div className="min-h-screen bg-terminal-bg">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12 max-w-3xl">
        <article>
          <header className="mb-8">
            <div className="flex flex-col gap-2">
              <span className="text-terminal-text/70">{date}</span>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#9b87f5]">{title}</h1>
            </div>
          </header>
          <div className="blog-content">
            {content}
          </div>
        </article>
      </main>
    </div>
  );
};