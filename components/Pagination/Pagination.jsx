import React, { useState } from "react";
import styled from "@emotion/styled";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initialize current page as 1

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Update current page when a new page is selected
  };

  return (
    <MainContainer>
      <LeftArrow>
        <AiOutlineLeft
          fontSize={25}
          opacity={0.3}
          onClick={() => handlePageChange(currentPage - 1)} // Go to previous page
          aria-label="Previous Page"
        />
      </LeftArrow>

      <PageNumber
        onClick={() => handlePageChange(1)} // Go to first page
        active={currentPage === 1} // Apply active styling if it's the current page
      >
        1
      </PageNumber>

      <PageNumber
        onClick={() => handlePageChange(2)} // Go to second page
        active={currentPage === 2} // Apply active styling if it's the current page
      >
        2
      </PageNumber>

      <RightArrow>
        <AiOutlineRight
          fontSize={25}
          opacity={0.3}
          onClick={() => handlePageChange(currentPage + 1)} // Go to next page
          aria-label="Next Page"
        />
      </RightArrow>
    </MainContainer>
  );
};

export default Pagination;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 15px;
  margin-bottom: 80px;
`;

const LeftArrow = styled.div``;
const RightArrow = styled.div``;
const PageNumber = styled.div`
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 180%;
  color: white;
  background: ${(props) => (props.active ? "#518581" : "transparent")};
  padding: 5px 10px;
`;
