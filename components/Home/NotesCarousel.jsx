import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NotesCard from "../Cards/NotesCard";
import styled from "@emotion/styled";
const NotesCarousel = () => {
  return (
    <SliderContainer>
      <Carousel
        arrows
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
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
          <NotesCard />
        </div>
        <div>
          <NotesCard />
        </div>
        <div>
          <NotesCard />
        </div>
        <div>
          <NotesCard />
        </div>
        <div>
          <NotesCard />
        </div>
        <div>
          <NotesCard />
        </div>
        <div>
          <NotesCard />
        </div>
        <div>
          <NotesCard />
        </div>
        <div>
          <NotesCard />
        </div>
        <div>
          <NotesCard />
        </div>
      </Carousel>
    </SliderContainer>
  );
};

export default NotesCarousel;

const SliderContainer = styled.div`
  width: 100%;
`;

const CustomCarousel = styled(Carousel)`
  .react-multi-carousel-arrow {
    background-color: transparent;
    color: black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 24px;
    line-height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .react-multiple-carousel__arrow--left {
    left: calc(-1% + 1px) !important;
  }

  .react-multiple-carousel__arrow--right {
    right: calc(1% + 1px) !important;
  }
`;
