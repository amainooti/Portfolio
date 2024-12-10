import { Navigation } from "../components/Navigation";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-terminal-bg">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#9b87f5] mb-8">Blog Posts</h1>
        <div className="grid gap-6">
          <article 
            onClick={() => navigate("/blog/ricing-macos")}
            className="glass-panel p-4 sm:p-6 animate-fadeIn group cursor-pointer hover:bg-terminal-highlight/40 transition-colors duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#9b87f5] group-hover:text-terminal-text transition-colors duration-200 flex items-center gap-2">
                Ricing MacOS
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </h2>
              <span className="text-sm text-terminal-text/70">November 1, 2023</span>
            </div>
            <p className="text-terminal-text/80">
              Recently a screenshot of my MacOS rice blew up on X (formerly Twitter), eventually becoming my most liked post of all time.
            </p>
          </article>
          
          <article 
            onClick={() => navigate("/blog/future-of-ai")}
            className="glass-panel p-4 sm:p-6 animate-fadeIn group cursor-pointer hover:bg-terminal-highlight/40 transition-colors duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#9b87f5] group-hover:text-terminal-text transition-colors duration-200 flex items-center gap-2">
                The Future of AI in Software Development
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </h2>
              <span className="text-sm text-terminal-text/70">2024-01-10</span>
            </div>
            <p className="text-terminal-text/80">
              How artificial intelligence is transforming the way we write code...
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Blog;



