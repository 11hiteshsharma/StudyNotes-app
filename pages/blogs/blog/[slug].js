import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Access the dynamic slug parameter from the router

  // Fetch the blog data based on the slug or perform any necessary operations

  return (
    <div>
      <h1>Blog Page</h1>
      <p>Slug: {slug}</p>
      {/* Display the blog content or perform other actions */}
    </div>
  );
};

export default BlogPage;
