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
      if (!isIncluded) {
        state.cartList.push(action.payload);
      }
    },
    removeProductToCart: (state, action: PayloadAction<ProductCart>) => {
      const result = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartList = result;
    },
    increaseQuantity: (state, action: PayloadAction<ProductCart>) => {
      const foundProductIndex = state.cartList.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (foundProductIndex !== -1) {
        state.cartList[foundProductIndex].quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<ProductCart>) => {
      const foundProductIndex = state.cartList.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (foundProductIndex !== -1) {
        state.cartList[foundProductIndex].quantity--;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;
export default cartActions;
