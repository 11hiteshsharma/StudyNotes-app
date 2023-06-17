import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

export default function BasicSelect() {
  const [collegeYear, setCollegeYear] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");

  const handleCollegeYearChange = (event) => {
    setCollegeYear(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for notes...");
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <SelectContainer>
        <FormControl sx={{ marginBottom: "20px" }}>
          <InputLabel id="college-year-label">College Year</InputLabel>
          <Select
            labelId="college-year-label"
            id="college-year-select"
            value={collegeYear}
            label="College Year"
            onChange={handleCollegeYearChange}
          >
            <MenuItem value={1}>First Year</MenuItem>
            <MenuItem value={2}>Second Year</MenuItem>
            <MenuItem value={3}>Third Year</MenuItem>
            <MenuItem value={4}>Fourth Year</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ marginBottom: "20px" }}>
          <InputLabel id="branch-label">Branch</InputLabel>
          <Select
            labelId="branch-label"
            id="branch-select"
            value={branch}
            label="Branch"
            onChange={handleBranchChange}
          >
            <MenuItem value={"branch1"}>Branch 1</MenuItem>
            <MenuItem value={"branch2"}>Branch 2</MenuItem>
            <MenuItem value={"branch3"}>Branch 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ marginBottom: "20px" }}>
          <InputLabel id="subject-label">Subject</InputLabel>
          <Select
            labelId="subject-label"
            id="subject-select"
            value={subject}
            label="Subject"
            onChange={handleSubjectChange}
          >
            <MenuItem value={"subject1"}>Subject 1</MenuItem>
            <MenuItem value={"subject2"}>Subject 2</MenuItem>
            <MenuItem value={"subject3"}>Subject 3</MenuItem>
          </Select>
        </FormControl>

        <StyledButton variant="contained" onClick={handleSearch}>
          Search For Notes
        </StyledButton>
      </SelectContainer>
    </Box>
  );
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  width: fit-content; /* Set the width based on the button's content */
  margin: 0 auto; /* Center the button horizontally */
  height: 50px;
`;
