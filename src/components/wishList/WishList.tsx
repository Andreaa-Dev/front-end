import React from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import WishItem from "./WishItem";
import { Typography } from "@mui/material";

export default function WishList() {
  const wishList = useSelector(
    (state: RootState) => state.favoriteProduct.favoriteProductList
  );
  if (wishList.length === 0)
    return <Typography>The wish list is empty ...</Typography>;
  return (
    <Box>
      <h1>WishList</h1>
      {wishList.map((item) => (
        <WishItem item={item} />
      ))}
    </Box>
  );
}
