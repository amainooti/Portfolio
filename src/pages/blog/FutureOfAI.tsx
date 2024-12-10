import { BlogPost } from "../../components/BlogPost";
import Content from "@/content/blog/RacingMacro.mdx";

const FutureOfAI = () => {
  return (
    <BlogPost
      title="Future of AI"
      date="December 2, 2024"
      content={<Content />}
    />
  );
};

export default FutureOfAI;
