import React from "react";
import BlogContent from "./BlogContent";
import Wrapper from "@/styles/Wrapper";
import styled from "@emotion/styled";
import RelatedBlog from "./RelatedBlog";

const SingleBlogPage = () => {
  return (
    <>
      <BlogContentContainer>
        <BlogWrapper>
          <BlogContent />
        </BlogWrapper>
      </BlogContentContainer>
      <Wrapper>
        <RelatedBlogs>
          <RelatedBlog />
        </RelatedBlogs>
      </Wrapper>
    </>
  );
};

export default SingleBlogPage;

const RelatedBlogs = styled.div`
  margin-top: 4rem;
`;

const BlogWrapper = styled.div`
  margin: 0 15%;
`;

const BlogContentContainer = styled.div`
  position: relative;

  ::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/blogbg.jpg");
    opacity: 0.2; /* Set the opacity value (0.0 - 1.0) */
  }
`;
