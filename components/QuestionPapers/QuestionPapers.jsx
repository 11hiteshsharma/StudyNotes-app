import React from "react";
import QUSPprSearchSection from "./SearchSection";
import styled from "@emotion/styled";
import QusPaperCards from "./QusPaperCards";
const QuestionPapers = ({ data }) => {
  return (
    <div>
      <Header>
        <Heading>Question Papers</Heading>
        <SubHeading>
          Unlock the Power of Practice with a Wide Range of Question Papers
        </SubHeading>
      </Header>

      <SearchSection>
        <QUSPprSearchSection />
      </SearchSection>

      <CardsSection>
        <QusPaperCards data={data} />
      </CardsSection>
    </div>
  );
};

export default QuestionPapers;

const Header = styled.div``;
const Heading = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 3em;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #151411;
  margin-top: 3rem;
  text-align: center;
`;
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
const CardsSection = styled.div`
  margin-top: 3rem;
`;

const SearchSection = styled.div``;
