import React from "react";
import Head from "next/head";
import BannerSection from "@/components/Blogs/BannerSection";
import SearchBar from "@/components/Blogs/SearchBar";
import styled from "@emotion/styled";
import Wrapper from "@/styles/Wrapper";
import CardsGrid from "@/components/Blogs/CardsGrid";
import { BlogData } from "@/database/blogcard";
const Blogs = () => {
  const data = BlogData;
  return (
    <div>
      <Head>
        <title>Notio | Blogs</title>
        <meta name="description" content="Created by ❤" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSection />
      <Wrapper>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        <Heading>Popular Blogs</Heading>
        <CardsGrid data={data} />
      </Wrapper>
    </div>
  );
};

export default Blogs;

const SearchBarContainer = styled.div`
  margin: 50px 0px;
`;

const Heading = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 3em;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #151411;
  margin: 0 0 50px 7%;
`;
