import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
const BannerImages = [
  {
    id: 1,
    src: "https://source.unsplash.com/1920x1080/?space",
    alt: "Banner 1",
    title: "Space Exploration",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/1920x1080/?aesthatic",
    alt: "Banner 2",
    title: "Artistic Creations",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/1920x1080/?love",
    alt: "Banner 3",
    title: "The Power of Love",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/1920x1080/?nature",
    alt: "Banner 4",
    title: "Embracing Nature",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/1920x1080/?cars",
    alt: "Banner 5",
    title: "Fast and Furious",
  },
];

const BannerCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {BannerImages.map((image) => (
          <CarouselContainer key={image.id}>
            <CarouselImage src={image?.src} alt={image?.alt} fill />
            <BlogHeading>
              <Link href="/">{image.title}</Link>
            </BlogHeading>
          </CarouselContainer>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;

const CarouselContainer = styled.div`
  width: 100vw;
  height: 70vh;
  position: relative;
`;

const CarouselImage = styled(Image)`
  width: 100vw !important;
  height: 100% !important;
  object-fit: cover;
`;

const BlogHeading = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: normal;
  font-weight: 700;
  font-size: 34px;

  /* Screen Color */

  color: #ffffff;

  /* Inside auto layout */
`;
