import SingleBlogPage from "@/components/SingleBlogPage";
import { useRouter } from "next/router";

const BlogPage = ({ blogData }) => {
  return (
    <div>
      <SingleBlogPage data={blogData} />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [], // No paths are pre-rendered at build time
    fallback: blocking, // Enable fallback rendering
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  // Fetch the blog data based on the slug or perform any necessary operations
  const blogData = await fetchBlogData(slug);

  return {
    props: {
      blogData,
    },
  };
}

export default BlogPage;
