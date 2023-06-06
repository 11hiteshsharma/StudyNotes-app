import React from "react";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NotesCard from "../Cards/NotesCard";
import styled from "@emotion/styled";

const NotesCarousel = ({ data }) => {
  const settings = {
    dots: false,
    autoplay: false,
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
        {data.map((data) => (
          <CardContainer key={data.id}>
            <NotesCard data={data} />
          </CardContainer>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default NotesCarousel;

const SliderContainer = styled.div``;

const CardContainer = styled.div`
  display: flex;
  padding: 0 20px;
`;
