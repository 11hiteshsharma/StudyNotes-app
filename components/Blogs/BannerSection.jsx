import React from "react";
import styled from "@emotion/styled";
import BannerCarousel from "./BannerCarousel";
const BannerSection = () => {
  return (
    <BannerContainer>
      <HeadingContainer>
        <Heading> Popular Blogs</Heading>
        <SubHeading>
          Journey into a World of Stories and Perspectives | Fuel Your Mind with
          Our Blog
        </SubHeading>
      </HeadingContainer>
      <CarouselContainer>
        <BannerCarousel />
      </CarouselContainer>
    </BannerContainer>
  );
};

export default BannerSection;

const BannerContainer = styled.div`
  margin-top: 100px;
`;

const Heading = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 130%;
  text-align: center;
  color: #151411;
`;

const HeadingContainer = styled.div``;

const SubHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 180%;
  /* or 32px */

  text-align: center;

  /* Paragraph Color */
  margin-top: 20px;
  color: #afadb5;
`;

const CarouselContainer = styled.div`
  margin-top: 50px;
`;
