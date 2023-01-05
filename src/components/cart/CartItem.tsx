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

  function increaseQuantityHandler() {
    dispatch(cartActions.increaseQuantity(item));
  }

  function decreaseQuantityHandler() {
    if (item.quantity === 1) return;
    dispatch(cartActions.decreaseQuantity(item));
  }
  return (
    <Box
      sx={{
        m: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          minWidth: 500,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography>{item.title}</Typography>
        <Typography sx={{ fontWeight: "bold", ml: 1 }}>
          ${item.price}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", m: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "row", m: 1 }}>
          <AddCircleIcon onClick={increaseQuantityHandler} />
          <Typography> {item.quantity} </Typography>
          <RemoveCircleIcon onClick={decreaseQuantityHandler} />
        </Box>
        <Button variant="outlined" onClick={removeCartItem}>
          Remove
        </Button>
      </Box>
    </Box>
  );
}
