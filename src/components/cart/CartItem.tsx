import { Typography } from "@mui/material";
import React from "react";

import { ProductCart } from "../../types/types";

export default function CartItem({ item }: { item: ProductCart }) {
  return (
    <div>
      CartItem
      <Typography>{item.title}</Typography>
      <Typography>{item.price}</Typography>
      <Typography>{item.quantity}</Typography>
    </div>
  );
}
