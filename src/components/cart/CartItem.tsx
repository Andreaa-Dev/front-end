import React from "react";
import { Button, Typography, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { ProductCart } from "../../types/types";
import { useDispatch } from "react-redux";
import cartActions from "../../redux/slices/cart";

export default function CartItem({ item }: { item: ProductCart }) {
  const dispatch = useDispatch();

  function removeCartItem() {
    dispatch(cartActions.removeProductToCart(item));
  }

  return (
    <div>
      <Typography>{item.title}</Typography>
      <Typography>${item.price} </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", m: 1 }}>
        <AddCircleIcon />
        <Typography> {item.quantity} </Typography>
        <RemoveCircleIcon />
      </Box>
      <Button variant="outlined" onClick={removeCartItem}>
        Remove
      </Button>
    </div>
  );
}
