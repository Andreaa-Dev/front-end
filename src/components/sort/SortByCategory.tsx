import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SortByCategory() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: 135 }}>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={10}>Name</MenuItem>
          <MenuItem value={20}>Category</MenuItem>
          <MenuItem value={30}>Price</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
