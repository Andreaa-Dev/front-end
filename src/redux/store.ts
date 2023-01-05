import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "./slices/products";
import { productDetailReducer } from "./slices/productDetail";
import favoriteProductActions, {
  favoriteProductReducer,
} from "./slices/favoriteProduct";
import { cartReducer } from "./slices/cart";
import { themeReducer } from "./slices/theme";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
    favoriteProduct: favoriteProductReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});

store.subscribe(() => {
  const { favoriteProduct } = store.getState();
  localStorage.setItem(
    "favoriteList",
    JSON.stringify(favoriteProduct.favoriteProductList)
  );
});

const result = localStorage.getItem("favoriteList");
if (result) {
  const favoriteList = JSON.parse(result);
  store.dispatch(favoriteProductActions.updateFavoriteList(favoriteList));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
