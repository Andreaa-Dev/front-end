import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import { pink } from "@mui/material/colors";
import { teal } from "@mui/material/colors";
import { Button, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Product, ProductCart } from "../../types/types";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import favoriteProductActions from "../../redux/slices/favoriteProduct";
import cartActions from "../../redux/slices/cart";

export default function ProductItem({ item }: { item: Product }) {
  const dispatch = useDispatch();

  const wishList = useSelector(
    (state: RootState) => state.favoriteProduct.favoriteProductList
  );

  const cartList = useSelector((state: RootState) => state.cart.cartList);

  function addFavoriteProduct() {
    dispatch(favoriteProductActions.addFavoriteProduct(item));
  }

  const productCart: ProductCart = {
    ...item,
    quantity: 0,
  };

  function addProductToCart() {
    dispatch(cartActions.addProductToCart(productCart));
  }

  const isFavorite = wishList.some(
    (product) =>
      product.title.toLocaleLowerCase() === item.title.toLocaleLowerCase()
  );

  const isAdded = cartList.some(
    (cart) => cart.title.toLocaleLowerCase() === item.title.toLocaleLowerCase()
  );

  return (
    <Box>
      <Typography>{item.title}</Typography>
      <Typography>{item.price}</Typography>
      <Rating name="read-only" value={item.rating.rate} readOnly />

      <Box>
        <Link to={`/products/${item.id}`}>
          <Button variant="outlined"> More</Button>
        </Link>
        <FavoriteIcon
          onClick={addFavoriteProduct}
          sx={{ color: isFavorite ? pink[500] : teal[500] }}
        />
        <ShoppingCartIcon
          onClick={addProductToCart}
          sx={{ color: isAdded ? pink[500] : teal[500] }}
        />
      </Box>
    </Box>
  );
}
