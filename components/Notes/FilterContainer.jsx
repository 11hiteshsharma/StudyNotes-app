import React from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const FilterContainer = () => {
  const handleFilterChange = (event) => {
    // Handle filter change logic here
  };

  const handleSearch = () => {
    // Handle search logic here
  };

  return (
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Subject</InputLabel>
        <Select label="Subject" onChange={handleFilterChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="math">Math</MenuItem>
          <MenuItem value="science">Science</MenuItem>
          <MenuItem value="history">History</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Classes</InputLabel>
        <Select label="Classes" onChange={handleFilterChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="class1">Class 1</MenuItem>
          <MenuItem value="class2">Class 2</MenuItem>
          <MenuItem value="class3">Class 3</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Sort by</InputLabel>
        <Select label="Sort by" onChange={handleFilterChange}>
          <MenuItem value="popular">Most Popular</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default FilterContainer;
