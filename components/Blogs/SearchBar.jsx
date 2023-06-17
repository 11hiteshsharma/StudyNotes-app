import React from "react";
import styled from "@emotion/styled";
import { BsFilterLeft } from "react-icons/bs";
const SearchBar = () => {
  return (
    <Container>
      <SearchBarContainer>
        <input type="text" placeholder="Search for Blogs" />
        <SearchButton>Search</SearchButton>
      </SearchBarContainer>
      <FilterContainer>
        <BsFilterLeft size={35} />
      </FilterContainer>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
`;

const SearchBarContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 120px rgba(0, 0, 0, 0.15);
  display: flex;
  width: 100%;
  height: 50px;
  gap: 2rem;
  border-radius: 8px;
  & > input {
    display: flex;
    border: none;
    outline: none;
    flex-grow: 1;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 180%;
    padding-left: 50px;
    /* or 32px */

    /* Paragraph Color */

    color: #afadb5;
    height: 100%;
    background: transparent;
    color: #070707;
    ::placeholder {
      color: #070707;
    }
  }
  & > .search {
    background: transparent;
    color: #afadb5;
  }
  & > .CursorPointer {
    cursor: pointer;
  }

  @media (width<525px) {
    width: 100%;
    flex-direction: column;
    & > input {
      padding-left: 0px;
    }
  }
`;

const SearchButton = styled.button`
  background: #518581;
  padding-inline: 30px;
  box-shadow: none;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  /* or 23px */

  text-align: center;

  /* Screen Color */

  color: #ffffff;

  @media (width<525px) {
    padding-inline: 20px;
  }
`;

const FilterContainer = styled.div`
  cursor: pointer;
  border-radius: 50%;
  padding: 5px 5px 1px 7px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #c5c7c8;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
