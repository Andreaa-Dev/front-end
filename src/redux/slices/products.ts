import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type InitialState = {
  products: Product[];
  searchProducts: Product[];
};

export const initialState: InitialState = {
  products: [],
  searchProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductSuccess: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      const result = state.products.filter((product) =>
        product.title
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      );
      state.searchProducts = result;
    },
    sortByProductName: (state) => {
      function compare(a: Product, b: Product) {
        if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
          return -1;
        }
        if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) {
          return 1;
        }
        return 0;
      }
      state.products = state.products.sort(compare);
    },
    sortByProductPrice: (state) => {
      function compare(a: Product, b: Product) {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      }
      state.products.sort(compare);
    },
    sortByProductCategory: (state) => {
      function compare(a: Product, b: Product) {
        if (a.category.toLocaleLowerCase() < b.category.toLocaleLowerCase()) {
          return -1;
        }
        if (a.category.toLocaleLowerCase() > b.category.toLocaleLowerCase()) {
          return 1;
        }
        return 0;
      }
      state.products.sort(compare);
    },
  },
});

export const productReducer = productSlice.reducer;
const productActions = productSlice.actions;
export default productActions;
