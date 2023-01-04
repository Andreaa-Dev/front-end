import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductCart } from "../../types/types";

type InitialState = {
  cartList: ProductCart[];
};
export const initialState: InitialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const isIncluded = state.cartList.some(
        (cartItem) => cartItem.id === action.payload.id
      );
      console.log(isIncluded, "bo");

      if (isIncluded) {
        // increase quantity
        // state.cartList.
        // return
      }
      state.cartList.push(action.payload);
    },
    removeProductToCart: (state, action: PayloadAction<ProductCart>) => {
      const result = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartList = result;
    },
  },
});

export const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;
export default cartActions;
