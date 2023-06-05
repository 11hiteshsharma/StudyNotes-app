import SingleBlogPage from "@/components/SingleBlogPage";
import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Access the dynamic slug parameter from the router

  // Fetch the blog data based on the slug or perform any necessary operations

  return (
    <div>
      <SingleBlogPage />
    </div>
  );
};

export default BlogPage;
