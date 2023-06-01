import React from "react";
import Card from "@/components/Cards/Card";
import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";
import Pagination from "../Pagination/Pagination";
const CardsGrid = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <MainContainer>
      <GridContainer>
        <Grid container spacing={5}>
          {array?.map((e, index) => {
            return (
              <Grid item xs={12} sm={4} lg={3}>
                <CardContainer key={index}>
                  <Card />
                </CardContainer>
              </Grid>
            );
          })}
        </Grid>
      </GridContainer>
      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
    </MainContainer>
  );
};

export default CardsGrid;

const MainContainer = styled.div``;
const CardContainer = styled.div``;
const GridContainer = styled.div`
  margin-bottom: 80px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;
