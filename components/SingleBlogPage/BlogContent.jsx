import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import TableOfContents from "./Toc";

const BlogContent = ({ BlogData }) => {
  return (
    <BlogContainer>
      <TitleContainer>{BlogData?.title}</TitleContainer>

      <ShortDescription>{BlogData.shortDescription}</ShortDescription>

      <ImageContainer>
        <CustomImage
          src={BlogData?.image}
          alt="Forest"
          width={1920}
          height={1080}
        />
      </ImageContainer>
      <TableOfContent>
        <TableOfContents />
      </TableOfContent>
      <div id="blog-content">
        <DescriptionContainer
          dangerouslySetInnerHTML={{ __html: BlogData?.blogContent }}
        />
      </div>
    </BlogContainer>
  );
};

export default BlogContent;

const BlogContainer = styled.div``;

const TitleContainer = styled.h2`
  padding-top: 5rem;
  font-style: normal;
  font-weight: 700;
  font-size: 4em;
  line-height: 130%;
  text-align: center;
  color: #151411;
  margin-bottom: 20px;

  @media (max-width: 750px) {
    font-size: 2em;
  }
`;

const ShortDescription = styled.p`
  margin-bottom: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 180%;
  text-align: center;
  color: #afadb5;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
`;

const CustomImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescriptionContainer = styled.div`
  margin-top: 50px;
  font-size: 16px;
  line-height: 150%;
  h2 {
    padding-top: 100px;
    margin-top: -100px;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }

  p {
    margin-bottom: 10px;
  }
`;

const TableOfContent = styled.div`
  margin-top: 15px;
`;
