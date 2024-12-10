import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Terminal, X } from "lucide-react";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-terminal-bg/80 backdrop-blur-sm border-b border-terminal-secondary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="terminal-link text-lg font-bold">
            ~/portfolio
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-terminal-text hover:text-terminal-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Terminal size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6">
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

        {/* Mobile navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col gap-4 pt-4 pb-2 border-t border-terminal-secondary/20 mt-4">
              <Link
                to="/"
                className="terminal-link"
                onClick={() => setIsOpen(false)}
              >
                [h] home
              </Link>
              <Link
                to="/blog"
                className="terminal-link"
                onClick={() => setIsOpen(false)}
              >
                [b] blog
              </Link>
              <Link
                to="/projects"
                className="terminal-link"
                onClick={() => setIsOpen(false)}
              >
                [p] projects
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
