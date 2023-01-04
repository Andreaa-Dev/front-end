import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";

import productActions from "../../redux/slices/products";

const options = [{ title: "Name" }, { title: "Price" }, { title: "Category" }];

export default function SortForm() {
  const dispatch = useDispatch();
  const [option, setOption] = useState("");

  function sortHandler(option: string) {
    if (option === "Name") {
      dispatch(productActions.sortByProductName());
    }
    if (option === "Price") {
      dispatch(productActions.sortByProductPrice());
    }
    if (option === "Category") {
      dispatch(productActions.sortByProductCategory());
    }
  }
  return (
    <Box sx={{ minWidth: 120, marginTop: 5 }}>
      <TextField
        id="filled-select-currency"
        select
        label="Select"
        defaultValue="Name"
        helperText="Please select your currency"
        variant="filled"
        value={option}
        onChange={(e) => {
          setOption(e.target.value);
          sortHandler(e.target.value);
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.title} value={option.title}>
            {option.title}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
