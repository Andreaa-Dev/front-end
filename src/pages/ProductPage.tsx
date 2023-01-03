import React from "react";
import { Box } from "@mui/material";

import SearchForm from "../components/search/SearchForm";
import ProductList from "../components/products/ProductList";
import SortByCategory from "../components/sort/SortByCategory";

export default function ProductPage() {
  return (
    <Box>
      <SearchForm />
      <SortByCategory />
      <ProductList />
    </Box>
  );
}
