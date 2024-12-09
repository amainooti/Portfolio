import { Navigation } from "../components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-terminal-bg">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-terminal-accent mb-8">
          Blog Posts
        </h1>
        <div className="grid gap-6">
          <article className="glass-panel p-6 animate-fadeIn cursor-pointer hover:bg-terminal-highlight/40 transition-colors duration-200">
            <span className="text-sm text-terminal-text/70">2024-01-15</span>
            <h2 className="text-xl font-bold text-terminal-accent mt-2 mb-3">
              Building a Modern Web Application
            </h2>
            <p className="text-terminal-text/80">
              Exploring the latest technologies and best practices in web
              development...
            </p>
          </article>
          <article className="glass-panel p-6 animate-fadeIn cursor-pointer hover:bg-terminal-highlight/40 transition-colors duration-200">
            <span className="text-sm text-terminal-text/70">2024-01-10</span>
            <h2 className="text-xl font-bold text-terminal-accent mt-2 mb-3">
              The Future of AI in Software Development
            </h2>
            <p className="text-terminal-text/80">
              How artificial intelligence is transforming the way we write
              code...
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Blog;
