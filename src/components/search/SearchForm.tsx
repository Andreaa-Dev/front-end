import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function SearchForm() {
  const [userInput, setUserInput] = useState("");

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={onChangeHandler}
      />
    </div>
  );
}
