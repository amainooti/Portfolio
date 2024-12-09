import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Terminal } from "../components/Terminal";
import { WorkExperience } from "../components/WorkExperience";
import { Projects } from "../components/Projects";

const workExperience = [
  {
    title: "full-stack engineer",
    company: "dimension",
    period: "nov 2023 - jan 2024",
    description: "contributed to a large-scale t3 stack app. worked on real-time presence and chat features",
  },
  {
    title: "freelance developer",
    company: "self-employed",
    period: "2022 - present",
    description: "worked on various projects using Python, SQL, TypeScript, and Flutter",
  },
];

const projects = [
  {
    title: "create-t3-app",
    description: "open-source project for initializing full-stack next.js apps. 24k+ stars, 200+ contributors",
    link: "https://github.com/username/create-t3-app",
    tags: ["creator", "maintainer"],
  },
  {
    title: "mini-git",
    description: "simplified version of git from scratch",
    link: "https://github.com/username/mini-git",
    tags: ["creator"],
  },
];

const blogPosts = [
  {
    title: "implementing string pattern matching using dfas",
    date: "jul 5, 2024",
    link: "/blog/implementing-string-pattern-matching",
  },
  {
    title: "ricing macos",
    date: "nov 1, 2023",
    link: "/blog/ricing-macos",
  },
  {
    title: "how i organise my life",
    date: "aug 3, 2023",
    link: "/blog/how-i-organize-my-life",
  },
  {
    title: "why i switched from neovim to vscode",
    date: "jun 23, 2023",
    link: "/blog/neovim-to-vscode",
  },
];

const commands = [
  "echo 'Welcome to my portfolio'",
  "ls projects/",
  "cat about.md",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-[#8E9196] font-mono">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12 max-w-3xl">
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-[#9b87f5] mb-4">Amaino Oti</h1>
          <div className="glass-panel p-6 space-y-4">
            <p className="text-[#8E9196] leading-relaxed">
              I'm a software engineer with a diverse background in data engineering and full-stack development. 
              My expertise spans across multiple technologies including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#8E9196]">
              <li>Python (matplotlib, numpy, pandas, plotly)</li>
              <li>SQL for data manipulation and analysis</li>
              <li>TypeScript and Flutter for application development</li>
              <li>NestJS, React, and FastAPI as primary frameworks</li>
            </ul>
            <p className="text-[#8E9196] leading-relaxed">
              Currently exploring the exciting world of Web3, diving deep into cryptocurrency concepts and learning Solidity for smart contract development.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <Terminal commands={commands} />
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold text-[#9b87f5] mb-6 flex items-center gap-2">
            <span className="text-[#F97316]">*</span> work
          </h2>
          <WorkExperience items={workExperience} />
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold text-[#9b87f5] mb-6 flex items-center gap-2">
            <span className="text-[#F97316]">*</span> projects
          </h2>
          <Projects items={projects} />
          <div className="mt-4">
            <Link to="/projects" className="text-[#F97316] hover:underline">
              all projects ↗
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold text-[#9b87f5] mb-6 flex items-center gap-2">
            <span className="text-[#F97316]">*</span> blog
          </h2>
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex justify-between items-center">
                <Link
                  to={post.link}
                  className="text-[#8E9196] hover:text-[#9b87f5] transition-colors"
                >
                  {post.title}
                </Link>
                <span className="text-[#6E59A5] text-sm">{post.date}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/blog" className="text-[#F97316] hover:underline">
              all posts ↗
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold text-[#9b87f5] mb-6 flex items-center gap-2">
            <span className="text-[#F97316]">*</span> links
          </h2>
          <div className="flex gap-4">
            <a href="mailto:email@example.com" className="text-[#8E9196] hover:text-[#9b87f5]">
              email
            </a>
            <a href="https://x.com/username" className="text-[#8E9196] hover:text-[#9b87f5]">
              x.com
            </a>
            <a href="https://github.com/username" className="text-[#8E9196] hover:text-[#9b87f5]">
              github
            </a>
            <a href="https://linkedin.com/in/username" className="text-[#8E9196] hover:text-[#9b87f5]">
              linkedin
            </a>
            <a href="/calendar" className="text-[#8E9196] hover:text-[#9b87f5]">
              book a call
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;