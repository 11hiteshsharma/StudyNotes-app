import SingleBlogPage from "@/components/SingleBlogPage";
import { SingleBlogData } from "@/database/SingleBlogData";

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
    fallback: "blocking", // Enable fallback rendering
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

async function fetchBlogData(slug) {
  // Perform your logic to fetch the blog data here
  // You can use the slug parameter to determine which blog data to fetch
  // For this example, we'll use the hardcoded BlogData array
  const blog = SingleBlogData.find((blog) => blog.slug === slug);

  return blog;
}

export default BlogPage;
