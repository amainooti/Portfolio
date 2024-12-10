import { Navigation } from "../components/Navigation";
import { Projects as ProjectsList } from "../components/Projects";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    title: "Gib Casino",
    description:
      " A complete On-chain community owned Gambling platform backed by azuro",
    link: "https://gib.casino/",
    tags: ["typescript", "next.js", "graphQL", "tailwind css", "web3.js"],
  },
  {
    title: "portfolio",
    description:
      "My personal portfolio website built with React and TypeScript",
    link: "https://portfolio-u12i.vercel.app/",
    tags: ["react", "typescript", "tailwind"],
  },
  {
    title: "Paiyou entertainment",
    description:
      "A chineese based casino for multiplayer interaction and gambling experince",
    link: "https://portfolio-u12i.vercel.app/",
    tags: [
      "react",
      "typescript",
      "tailwind",
      "nestjs",
      "websockets",
      "prisma",
      "docker",
    ],
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="Welcome to Amaino Oti's portfolio. Explore projects, blogs, and more."
        />
        <meta name="keywords" content="Few projects I've done over time." />
      </Helmet>
      <div className="min-h-screen bg-terminal-bg text-terminal-text font-mono">
        <Navigation />
        <main className="container mx-auto px-6 pt-24 pb-12 max-w-3xl">
          <section className="mb-16">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#9b87f5] dark:text-[#6a4bc5] mb-2 sm:mb-3 md:mb-4">
              <span className="text-[#F97316]">*</span> projects
            </h1>
            <p className="text-terminal-text/80 mb-8">
              Here are some of the projects i've worked on. i love building and
              experimenting on new things
            </p>
            <ProjectsList items={projects} />
          </section>
        </main>
      </div>
    </>
  );
};

export default ProjectsPage;
