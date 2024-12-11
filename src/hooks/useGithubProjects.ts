import { useQuery } from "@tanstack/react-query";

interface GithubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  archived: boolean;
  language: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  status: "working" | "done" | "abandoned";
  language: string;
}

const fetchGithubProjects = async (): Promise<Project[]> => {
  const response = await fetch("https://api.github.com/users/amainooti/repos");
  const data: GithubProject[] = await response.json();

  return data.map((repo) => ({
    title: repo.name,
    description: repo.description || "",
    link: repo.html_url,
    tags: repo.topics,
    status: repo.archived ? "abandoned" : "done",
    language: repo.language || "Unknown",
  }));
};

export const useGithubProjects = () => {
  return useQuery({
    queryKey: ["github-projects"],
    queryFn: fetchGithubProjects,
  });
};
