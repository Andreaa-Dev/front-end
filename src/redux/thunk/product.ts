import { AppDispatch } from "./../store";
import productActions from "../slices/products";

const url = "https://fakestoreapi.com/products";
export function fetchProductData() {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(productActions.getProductSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}
