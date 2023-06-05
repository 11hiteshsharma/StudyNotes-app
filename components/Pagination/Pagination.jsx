import React from "react";
import styled from "@emotion/styled";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber); // Invoke the onPageChange callback with the new page number
    }
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

      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <PageNumber
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            active={currentPage === pageNumber} // Apply active styling if it's the current page
          >
            {pageNumber}
          </PageNumber>
        );
      })}

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
  cursor: pointer;

  margin-bottom: 80px;
`;

const LeftArrow = styled.div``;
const RightArrow = styled.div``;
const PageNumber = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 180%;
  color: #000000;
  background: ${(props) => (props.active ? "#518581" : "transparent")};
  padding: 5px 10px;
`;
