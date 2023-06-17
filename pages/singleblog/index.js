import Card from "@/components/Cards/Card";
import TopBanner from "@/components/SingleBlog/TopBanner";
import Wrapper from "@/styles/Wrapper";
import styled from "@emotion/styled";
import React from "react";

const index = () => {
  const cards = [0, 1, 2];
  return (
    <div>
      <div className="test">
        <TopBanner />
      </div>
      <Wrapper>
        <CardDiv>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardDiv>
      </Wrapper >
    </div>
  );
};

export default index;
const CardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media  (min-width:481px) and (max-width:960px){
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
  }
  @media  (max-width:480px){
    grid-template-columns: repeat(1, 1fr);
    row-gap: 3rem;
  }
`