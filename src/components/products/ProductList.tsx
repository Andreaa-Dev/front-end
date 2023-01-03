import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/product";
import ProductItem from "./ProductItem";
import SortByCategory from "../sort/SortByCategory";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <Box>
      <Typography>Check out the new collection</Typography>
      <SortByCategory />
      {productList.map((item) => (
        <ProductItem item={item} />
      ))}
    </Box>
  );
}
