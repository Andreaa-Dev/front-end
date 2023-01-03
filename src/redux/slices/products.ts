import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type InitialState = {
  products: Product[];
};
export const initialState: InitialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductSuccess: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const productReducer = productSlice.reducer;
const productActions = productSlice.actions;
export default productActions;
