import React from "react";
import styled from "@emotion/styled";
const BlogContent = () => {
  const BlogData = {
    title: "Exploring the Beauty of Nature: A Journey Through Lush Forests",
    image: "https://source.unsplash.com/random",
    description: `<h2>Introduction</h2>
    <p>Nature has always captivated us with its breathtaking beauty and awe-inspiring landscapes. In this blog post, we take you on a virtual journey through lush forests, where the symphony of colors and the melody of wildlife create a mesmerizing experience.</p>
    
    <h2>Into the Forest</h2>
    <p>As you step into the dense greenery of the forest, you'll find yourself surrounded by towering trees that reach towards the sky. Rays of sunlight filter through the leaves, casting an enchanting glow on the forest floor. The air is filled with the earthy scent of damp soil and the sweet fragrance of wildflowers.</p>
    
    <h2>Encounters with Wildlife</h2>
    <p>As you walk deeper into the woods, you'll encounter a variety of fascinating creatures. From vibrant birds fluttering their wings to elusive deer gracefully maneuvering through the undergrowth, each encounter brings you closer to the essence of nature's harmony. The forest is teeming with life, with squirrels playfully chasing each other and butterflies dancing in the gentle breeze.</p>
    
    <h2>Discover Hidden Gems</h2>
    <p>Amidst the verdant foliage, hidden gems await your discovery. Crystal-clear streams gurgle merrily, inviting you to dip your feet into their cool waters. You might stumble upon a hidden waterfall, its cascading waters creating a soothing melody. The serenity of these untouched landscapes serves as a reminder of the importance of preserving and protecting our natural wonders.</p>
    
    <h2>A Soul-Nourishing Experience</h2>
    <p>Whether you are an avid nature enthusiast or simply seeking an escape from the hustle and bustle of daily life, exploring the beauty of lush forests is an experience that nourishes the soul. It allows us to reconnect with our roots and appreciate the wonders that surround us.</p>
    
    <h2>A Journey to Remember</h2>
    <p>So, grab your hiking boots and embark on this virtual journey through the breathtaking forests. Let the sights and sounds of nature transport you to a realm of tranquility and wonder. Open your heart to the beauty that awaits and allow it to inspire and uplift you.</p>
    
    <p>We hope this blog post has ignited your curiosity and wanderlust. Stay tuned for more adventures as we continue to explore the wonders of our magnificent planet.</p>
    
    <p>Remember, the truest beauty lies in the arms of Mother Nature.</p>`,
  };

  return (
    <BlogContainer>
      <TitleContainer>{BlogData.title}</TitleContainer>
      <ImageContainer></ImageContainer>
    </BlogContainer>
  );
};

export default BlogContent;

const BlogContainer = styled.div``;
const TitleContainer = styled.div`
  margin-top: 100px;
`;
const ImageContainer = styled.div``;
