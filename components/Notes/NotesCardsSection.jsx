import React from "react";
import { Grid } from "@mui/material";
import FilterContainer from "./FilterContainer";
import CardsSection from "./CardsSection";
const NotesCardsSection = ({ data }) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={0} lg={2.5}>
          <FilterContainer />
        </Grid>
        <Grid item xs={12} lg={9.5}>
          <CardsSection data={data} />
        </Grid>
      </Grid>
    </>
  );
};

export default NotesCardsSection;
