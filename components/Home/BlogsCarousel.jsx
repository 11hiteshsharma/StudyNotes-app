import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Cards/Card";
import styled from "@emotion/styled";

const BlogsCarousel = () => {
  return (
    <SliderContainer>
      <Carousel
        arrows
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
      >
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </Carousel>
    </SliderContainer>
  );
};

export default BlogsCarousel;

const SliderContainer = styled.div`
  width: 100%;
`;
