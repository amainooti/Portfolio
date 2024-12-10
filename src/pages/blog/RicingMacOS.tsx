import { BlogPost } from "@/components/BlogPost";
import Content from "@/content/blog/RacingMacro.mdx";

const RicingMacOS = () => {
  return (
    <BlogPost
      title="Ricing MacOS"
      date="November 1, 2023"
      content={<Content />}
    />
  );
};

export default RicingMacOS;
