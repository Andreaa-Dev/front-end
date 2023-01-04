import React from "react";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";

import { ProductCart } from "../../types/types";

export default function CartItem({ item }: { item: ProductCart }) {
  return (
    <div>
      <Typography>{item.title}</Typography>
      <Typography>${item.price} </Typography>
      <Typography>{item.quantity} </Typography>
    </div>
  );
}
