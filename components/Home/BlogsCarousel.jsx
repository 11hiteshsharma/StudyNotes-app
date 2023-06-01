import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Cards/Card";
import styled from "@emotion/styled";

const BlogsCarousel = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13];
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        {array?.map((e, index) => {
          return (
            <CardContainer key={index}>
              <Card />
            </CardContainer>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};

export default BlogsCarousel;

const SliderContainer = styled.div``;

const CardContainer = styled.div`
  display: flex;
  padding: 0 20px;
`;
{
  /**  */
}
