import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "./slices/products";
import { productDetailReducer } from "./slices/productDetail";
import { favoriteProductReducer } from "./slices/favoriteProduct";
import { cartReducer } from "./slices/cart";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
    favoriteProduct: favoriteProductReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
