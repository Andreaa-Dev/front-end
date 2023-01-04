import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { teal } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Product } from "../../types/types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import favoriteProductActions from "../../redux/slices/favoriteProduct";
import cartActions from "../../redux/slices/cart";

export default function WishItem({ item }: { item: Product }) {
  const dispatch = useDispatch();
  const wishList = useSelector(
    (state: RootState) => state.favoriteProduct.favoriteProductList
  );

  const isFavorite = wishList.some(
    (product) =>
      product.title.toLocaleLowerCase() === item.title.toLocaleLowerCase()
  );

  function removeFavorite() {
    dispatch(favoriteProductActions.removeFavoriteProduct(item));
  }

  function addToCart() {
    dispatch(cartActions.addProductToCart(item));
    dispatch(favoriteProductActions.removeFavoriteProduct(item));
  }
  return (
    <Box>
      <Typography> {item.title}</Typography>
      <Typography>{item.price}</Typography>
      <FavoriteIcon
        onClick={removeFavorite}
        sx={{ color: isFavorite ? pink[500] : teal[500] }}
      />
      <Button variant="outlined" onClick={addToCart}>
        Buy
      </Button>
    </Box>
  );
}
