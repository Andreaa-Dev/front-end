import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type InitialState = {
  favoriteProductList: Product[];
};
export const initialState: InitialState = {
  favoriteProductList: [],
};

const favoriteProductSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    getFavoriteProduct: (state, action: PayloadAction<Product>) => {
      state.favoriteProductList.push(action.payload);
    },
    removeFavoriteProduct: (state, action: PayloadAction<Product>) => {
      const result = state.favoriteProductList.filter(
        (item) => item.id !== action.payload.id
      );
      state.favoriteProductList = result;
    },
  },
});

export const favoriteProductReducer = favoriteProductSlice.reducer;
const favoriteProductActions = favoriteProductSlice.actions;
export default favoriteProductActions;
