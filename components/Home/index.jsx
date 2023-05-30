import React from "react";
import HomePageBanner from "./HomePageBanner";
import styled from "@emotion/styled";
import Wrapper from "@/styles/Wrapper";
import Card from "../Cards/Card";
function HomePage() {
  return (
    <>
      <BannerSection>
        <HomePageBanner />
      </BannerSection>

      <Wrapper>
        <BlogSection>Featured Articles</BlogSection>
        <BlogCardsSection>
          <Card />
          <Card />
          <Card />
          <Card />
        </BlogCardsSection>
      </Wrapper>
    </>
  );
}

export default HomePage;

const BannerSection = styled.div``;

const BlogSection = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.07em;
  margin-bottom: 20px;
`;

const BlogCardsSection = styled.div`
  display: flex;
  gap: 4%;
`;
