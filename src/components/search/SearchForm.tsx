import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import productActions from "../../redux/slices/products";

export default function SearchForm() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  function searchHandler() {
    dispatch(productActions.searchProducts(userInput));
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={onChangeHandler}
        sx={{ width: 350 }}
      />
      <SearchIcon
        sx={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          mt: 2,
          ml: 3,
        }}
        onClick={searchHandler}
      />
    </Box>
  );
}
