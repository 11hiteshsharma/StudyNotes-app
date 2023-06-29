import React from "react";
import { Grid } from "@mui/material";
import QuestionPaper from "../Cards/QuestionPaper";
import QuestionPaperGrid from "./QuestionPaperGrid";
const QusPaperCards = ({ data }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <QuestionPaperGrid data={data} />
      </Grid>
    </Grid>
  );
};

export default QusPaperCards;
