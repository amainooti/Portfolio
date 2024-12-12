import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Terminal } from "../components/Terminal";
import { WorkExperience } from "../components/WorkExperience";
import { Projects } from "../components/Projects";
import { ArrowUpRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const workExperience = [
  {
    title: "full-stack engineer",
    company: "Gib Casino",
    period: "nov 2023 - june 2024",
    description:
      " A complete On-chain community owned Gambling platform backed by azuro ",
  },
  {
    title: "freelance developer",
    company: "self-employed",
    period: "2022 - present",
    description:
      "worked on various projects using Python, SQL, TypeScript, and Flutter",
  },
];

const projects = [
  {
    title: "paiyou entertainment",
    description: "A casino gaming platform, users can play and earn ",
    link: "https://playwallet-hub.vercel.app/",
    tags: ["creator", "maintainer"],
    status: "done" as const,
    language: "TypeScript",
  },
  {
    title: "Gib Casino",
    description: "Gib Casino is a web3 online sports gambling platform.",
    link: "https://gib.casino/",
    tags: ["co-contributor"],
    status: "done" as const,
    language: "TypeScript",
  },
  {
    title: "Bland AI",
    description: "AI learning platform that promotes community.",
    link: "https://bland-ai-landing.vercel.app/",
    tags: ["co-contributor"],
    status: "done" as const,
    language: "TypeScript",
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
    title: "why i switched from neovim to vscode and back to vscode?",
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
    <>
      <Helmet>
        <title>Amaino Oti | Home</title>
        <meta
          name="description"
          content="Welcome to Amaino Oti's portfolio. Explore projects, blogs, and more."
        />
        <meta
          name="keywords"
          content="portfolio, Amaino Oti, home, software engineering"
        />
      </Helmet>
      <div className="min-h-screen bg-[#1A1F2C] text-[#8E9196] font-mono">
        <Navigation />
        <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12 max-w-4xl">
          <section className="mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#9b87f5] mb-4">
              Amaino Oti
            </h1>
            <div className="glass-panel p-4 sm:p-6 space-y-4">
              <p className="text-[#8E9196] leading-relaxed text-sm sm:text-base">
                I'm a software engineer with a diverse background in data
                engineering and full-stack development. My expertise spans
                across multiple technologies including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#8E9196] text-sm sm:text-base">
                <li>Python (matplotlib, numpy, pandas, plotly)</li>
                <li>SQL for data manipulation and analysis</li>
                <li>TypeScript and Flutter for application development</li>
                <li>NestJS, React, and FastAPI as primary frameworks</li>
              </ul>
              <p className="text-[#8E9196] leading-relaxed text-sm sm:text-base">
                Currently exploring the exciting world of Web3, diving deep into
                cryptocurrency concepts and learning Solidity for smart contract
                development.
              </p>
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <Terminal commands={commands} />
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg sm:text-xl font-bold text-[#9b87f5] mb-6 flex items-center gap-2">
              <span className="text-[#F97316]">*</span> work
            </h2>
            <WorkExperience items={workExperience} />
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg sm:text-xl font-bold text-[#9b87f5] mb-6 flex items-center gap-2">
              <span className="text-[#F97316]">*</span> projects
            </h2>
            <Projects items={projects} />
            <div className="mt-4 flex items-center group">
              <Link
                to="/projects"
                className="text-[#F97316] hover:underline transition-colors"
              >
                all projects
              </Link>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg sm:text-xl font-bold text-[#9b87f5] mb-6 flex items-center gap-2">
              <span className="text-[#F97316]">*</span> blog
            </h2>
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
                >
                  <Link
                    to={post.link}
                    className="text-[#8E9196] hover:text-[#9b87f5] transition-colors text-sm sm:text-base"
                  >
                    {post.title}
                  </Link>
                  <span className="text-[#6E59A5] text-xs sm:text-sm">
                    {post.date}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center group">
              <Link
                to="/blog"
                className="text-[#F97316] hover:underline transition-colors"
              >
                all posts
              </Link>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg sm:text-xl font-bold text-[#9b87f5] mb-6 flex items-center gap-2">
              <span className="text-[#F97316]">*</span> links
            </h2>
            <div className="flex flex-wrap gap-4 text-sm sm:text-base">
              <a
                href="mailto:email@example.com"
                className="text-[#8E9196] hover:text-[#9b87f5]"
              >
                email
              </a>
              <a
                href="https://x.com/username"
                className="text-[#8E9196] hover:text-[#9b87f5]"
              >
                x.com
              </a>
              <a
                href="https://github.com/username"
                className="text-[#8E9196] hover:text-[#9b87f5]"
              >
                github
              </a>
              <a
                href="https://linkedin.com/in/username"
                className="text-[#8E9196] hover:text-[#9b87f5]"
              >
                linkedin
              </a>
              <a
                href="/calendar"
                className="text-[#8E9196] hover:text-[#9b87f5]"
              >
                book a call
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Index;
