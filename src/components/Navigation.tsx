import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-terminal-bg/80 backdrop-blur-sm border-b border-terminal-secondary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-evenly">
          {/* Hide on mobile and show only on medium and larger screens */}
          <Link
            to="/"
            className="hidden md:block terminal-link md:text-lg md:font-bold"
          >
            ~/portfolio
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="terminal-link">
              [h] home
            </Link>
            <Link to="/blog" className="terminal-link">
              [b] blog
            </Link>
            <Link to="/projects" className="terminal-link">
              [p] projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
