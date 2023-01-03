import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type InitialState = {
  product: Product | null;
};
export const initialState: InitialState = {
  product: null,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetailSuccess: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
  },
});

export const productDetailReducer = productDetailSlice.reducer;
const productDetailActions = productDetailSlice.actions;
export default productDetailActions;
