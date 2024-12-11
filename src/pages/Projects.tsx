import { Navigation } from "../components/Navigation";
import { Projects as ProjectsList } from "../components/Projects";
import { useToast } from "../hooks/use-toast";
import { useGithubProjects } from "../hooks/useGithubProjects";
import { Loader } from "lucide-react";

const ProjectsPage = () => {
  const { data: projects = [], isLoading, error } = useGithubProjects();
  const { toast } = useToast();

  if (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to fetch projects",
    });
  }

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text font-mono">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12 max-w-3xl">
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-[#9b87f5] mb-4">
            <span className="text-[#F97316]">*</span> projects
          </h1>
          <p className="text-terminal-text/80 mb-8">
            here are some of the projects i've worked on. i love building tools
            that make developers' lives easier and exploring new technologies
            along the way.
          </p>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-12">
              <Loader className="h-8 w-8 animate-spin text-[#F97316]" />
              <p className="text-terminal-text/60 animate-pulse">
                Loading projects...
              </p>
            </div>
          ) : (
            <ProjectsList items={projects} />
          )}
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
