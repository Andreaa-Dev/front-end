import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/product";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        width: 1300,
        height: 1700,
      }}
    >
      <Typography>Check out the new collection</Typography>
      {productList.map((item) => (
        <ProductItem item={item} />
      ))}
    </Box>
  );
}
