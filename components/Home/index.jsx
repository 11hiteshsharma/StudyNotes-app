import React from "react";
import HomePageBanner from "./HomePageBanner";
import styled from "@emotion/styled";
import Wrapper from "@/styles/Wrapper";
import BlogsCarousel from "./BlogsCarousel";
import NotesCarousel from "./NotesCarousel";
import { Button } from "@mui/material";
import Link from "next/link";
function HomePage() {
  return (
    <>
      <BannerSection>
        <HomePageBanner />
      </BannerSection>

      <Wrapper>
        <TopSection>
          <BlogSection>Featured Articles</BlogSection>
          <Button>
            <Link href="/blogs"> View All</Link>
          </Button>
        </TopSection>

        <BlogCardsSection>
          <BlogsCarousel />
        </BlogCardsSection>

        <TopSection>
          <NotesSection>Engineering Notes</NotesSection>
          <Button>
            <Link href="/notes"> View All</Link>
          </Button>
        </TopSection>
        <NotesCardsSection>
          <NotesCarousel />
        </NotesCardsSection>
      </Wrapper>
    </>
  );
}

export default HomePage;

const BannerSection = styled.div``;

const BlogSection = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.07em;
  margin-bottom: 40px;
`;

const BlogCardsSection = styled.div`
  display: flex;
  gap: 4%;
  height: 450px;
  width: 100%;
`;

const NotesSection = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.07em;
  margin-bottom: 20px;
`;

const NotesCardsSection = styled.div`
  margin-bottom: 80px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
