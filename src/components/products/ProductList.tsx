import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/product";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();

  const productList = useSelector(
    (state: RootState) => state.products.products
  );
  const searchProducts = useSelector(
    (state: RootState) => state.products.searchProducts
  );

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  let finalList = productList;

  if (searchProducts.length > 0) {
    finalList = searchProducts;
  }
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 2,
        mt: 6,
        mb: 0,
        ml: "auto",
        mr: "auto",
        width: "90%",
        textAlign: "center",
      }}
    >
      {finalList.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Box>
  );
}
