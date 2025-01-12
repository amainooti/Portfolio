import { BlogPost } from "../../components/BlogPost";
import Content from "@/content/blog/Ethereum.mdx";

const Ethereum = () => {
  return (
    <BlogPost
      title="World Computer: The Ethereum Blockchain"
      date="Jan 11, 2025"
      content={<Content />}
    />
  );
};

export default Ethereum;
