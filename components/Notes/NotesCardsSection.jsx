import React from "react";
import { Grid } from "@mui/material";
import FilterContainer from "./FilterContainer";
import CardsSection from "./CardsSection";

const NotesCardsSection = ({ data }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} lg={3} sx={{ display: { xs: "none", lg: "block" } }}>
        <FilterContainer />
      </Grid>
      <Grid item xs={12} lg={9}>
        <CardsSection data={data} />
      </Grid>
    </Grid>
  );
};

export default NotesCardsSection;
