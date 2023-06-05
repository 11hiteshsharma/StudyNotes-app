import React from "react";
import styled from "@emotion/styled";
import BlogsCarousel from "../Home/BlogsCarousel";
import { BsArrowRight } from "react-icons/bs";
const RelatedBlog = () => {
  const RelatedBlogs = [
    {
      id: 1,
      image: "https://source.unsplash.com/600x400/?nature",
      title: "Discovering the Serenity of Nature",
      slug: "discovering-the-serenity-of-nature",
      description:
        "Immerse yourself in the tranquility of untouched landscapes, where pristine forests and flowing rivers create a harmonious symphony of beauty and peace.",
      publishing_date: "May 15, 2023",
      category: "Travel",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/600x400/?technology",
      title: "Embracing the Future: Exploring Breakthrough Technologies",
      slug: "embracing-the-future-exploring-breakthrough-technologies",
      description:
        "Dive into the world of cutting-edge technology and witness the innovations that are reshaping our lives, from artificial intelligence to virtual reality and beyond.",
      publishing_date: "June 2, 2023",
      category: "Science",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/600x400/?food",
      title: "Gastronomic Delights: Exploring Culinary Wonders",
      slug: "gastronomic-delights-exploring-culinary-wonders",
      description:
        "Embark on a culinary adventure as we take you through a tantalizing journey of flavors, where gourmet dishes and unique delicacies await your taste buds.",
      publishing_date: "July 10, 2023",
      category: "Food",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/600x400/?architecture",
      title: "The Architectural Marvels: Unveiling the Beauty of Structures",
      slug: "the-architectural-marvels-unveiling-the-beauty-of-structures",
      description:
        "Uncover the awe-inspiring creations of architectural brilliance, where grand buildings and iconic landmarks redefine the skyline and captivate the imagination.",
      publishing_date: "August 21, 2023",
      category: "Architecture",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/600x400/?music",
      title: "The Power of Melody: Exploring the World of Music",
      slug: "the-power-of-melody-exploring-the-world-of-music",
      description:
        "Immerse yourself in the magical realm of music, where soul-stirring melodies and rhythmic harmonies create a universal language that transcends borders and connects hearts.",
      publishing_date: "September 5, 2023",
      category: "Music",
    },
    {
      id: 6,
      image: "https://source.unsplash.com/600x400/?sports",
      title: "The Thrill of Victory: Unraveling the World of Sports",
      slug: "the-thrill-of-victory-unraveling-the-world-of-sports",
      description:
        "Dive into the exhilarating world of sports and witness the fierce competition, raw passion, and moments of triumph that inspire millions around the globe.",
      publishing_date: "October 12, 2023",
      category: "Sports",
    },
  ];

  return (
    <>
      <HeadingContainer>
        <SimilarTopics>Similar Topics</SimilarTopics>
        <p>Maybe you’re interested</p>
      </HeadingContainer>

      <RelatedBlogCrousel>
        <BlogsCarousel data={RelatedBlogs} />
      </RelatedBlogCrousel>

      <NewsLetter>
        <Heading>Subscribe our newsletter</Heading>
        <SubscribeButton>
          <>Let’s Talk</>
          <BsArrowRight />
        </SubscribeButton>
      </NewsLetter>
    </>
  );
};

export default RelatedBlog;

const HeadingContainer = styled.div`
  & p {
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 130%;
    /* or 57px */

    text-align: center;

    /* Text Color */
    margin-bottom: 50px;
    color: #151411;
  }
`;
const SimilarTopics = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  /* or 23px */
  text-align: center;

  /* Secondary Color */

  color: #ffb23f;
`;

const RelatedBlogCrousel = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 150px;
`;

const NewsLetter = styled.div`
  display: flex;
  justify-content: space-between;

  @media (width<800px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 130%;
  /* or 57px */

  /* Text Color */

  color: #151411;
`;

const SubscribeButton = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border: none;
  padding: 15px 30px;
  gap: 15px;
  color: white;
  background: #518581;
  margin-bottom: 60px;
  & span {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    /* or 23px */

    text-align: center;

    /* Screen Color */

    color: #ffffff;
  }
`;
