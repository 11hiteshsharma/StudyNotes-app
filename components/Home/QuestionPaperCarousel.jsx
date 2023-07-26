import React from "react";
import QuestionPaper from "../Cards/QuestionPaper";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";

const QuestionPaperCarousel = ({ data }) => {
  const settings = {
    dots: false,
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
        {data?.map((data) => (
          <CardContainer key={data.id}>
            <QuestionPaper paper={data} />
          </CardContainer>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default QuestionPaperCarousel;

const SliderContainer = styled.div``;

const CardContainer = styled.div`
  display: flex;
  padding: 0 20px;
`;
