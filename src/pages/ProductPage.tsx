import React from "react";
import { Box } from "@mui/material";

import SearchForm from "../components/search/SearchForm";
import ProductList from "../components/products/ProductList";
import SortForm from "../components/sort/SortForm";

export default function ProductPage() {
  return (
    <Box>
      <SearchForm />
      <SortForm />
      <ProductList />
    </Box>
  );
}
