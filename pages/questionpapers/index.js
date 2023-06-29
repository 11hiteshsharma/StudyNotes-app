import React from "react";
import QuestionPapers from "@/components/QuestionPapers/QuestionPapers";
import Wrapper from "@/styles/Wrapper";
import { previous_year_question_paper } from "@/database/QusPaperCard";
const index = () => {
  return (
    <Wrapper>
      <QuestionPapers data={previous_year_question_paper} />
    </Wrapper>
  );
};

export default index;
