import React, { useState } from "react";
import Card from "@/components/Cards/Card";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Pagination from "../Pagination/Pagination";
import NotesCard from "../Cards/NotesCard";

const CardsGrid = ({ data }) => {
  const pageSize = 8; // Number of cards to display per page

  const [currentPage, setCurrentPage] = useState(1); // Current page number

  // Calculate start and end indexes based on current page and page size
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the data array based on the calculated indexes
  const slicedData = data.slice(startIndex, endIndex);

  return (
    <MainContainer>
      <GridContainer>
        <Grid container spacing={2}>
          {slicedData.map((entry, index) => (
            <Grid item xs={12} sm={6} lg={4} xl={4} key={index}>
              <CardContainer>
                <NotesCard data={entry} />
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </GridContainer>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / pageSize)}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </PaginationContainer>
    </MainContainer>
  );
};

export default CardsGrid;

const MainContainer = styled.div`
  margin-inline: 6vw;
`;

const CardContainer = styled.div``;

const GridContainer = styled.div`
  margin-bottom: 80px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;
