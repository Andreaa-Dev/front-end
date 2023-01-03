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
      console.log(result, "re");
      state.searchProducts = result;
    },
  },
});

export const productReducer = productSlice.reducer;
const productActions = productSlice.actions;
export default productActions;
