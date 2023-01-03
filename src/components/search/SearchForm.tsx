import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
    <div>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={onChangeHandler}
      />
      <SearchIcon onClick={searchHandler} />
    </div>
  );
}
