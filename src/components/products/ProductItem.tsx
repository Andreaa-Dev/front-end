import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { pink } from "@mui/material/colors";
import { teal } from "@mui/material/colors";
import { Button, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Product, ProductCart } from "../../types/types";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import favoriteProductActions from "../../redux/slices/favoriteProduct";
import cartActions from "../../redux/slices/cart";

export default function ProductItem({ item }: { item: Product }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const wishList = useSelector(
    (state: RootState) => state.favoriteProduct.favoriteProductList
  );

  const cartList = useSelector((state: RootState) => state.cart.cartList);

  // fav
  function validateItem() {
    const isDuplicated = wishList.some(
      (wishItem) =>
        wishItem.title.toLocaleLowerCase() === item.title.toLocaleLowerCase()
    );
    if (isDuplicated) {
      setOpen(true);
      return;
    }
    dispatch(favoriteProductActions.addFavoriteProduct(item));
  }

  // close
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const productCart: ProductCart = {
    ...item,
    quantity: 1,
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
    <Box sx={{ marginBottom: 10 }}>
      <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
      <Typography>{item.price} $</Typography>
      <Typography>Category: {item.category} </Typography>

      <img src={item.image} alt={item.title} height="100" />
      <br></br>
      <Rating name="read-only" value={item.rating.rate} readOnly />

      <Box>
        <Link to={`/products/${item.id}`}>
          <Button variant="outlined"> More</Button>
        </Link>
        <FavoriteIcon
          onClick={validateItem}
          sx={{ color: isFavorite ? pink[500] : teal[500] }}
        />
        <ShoppingCartIcon
          onClick={addProductToCart}
          sx={{ color: isAdded ? pink[500] : teal[500] }}
        />
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error" onClose={handleClose} sx={{ width: "100%" }}>
          This item is already in the favorite list
        </Alert>
      </Snackbar>
    </Box>
  );
}
