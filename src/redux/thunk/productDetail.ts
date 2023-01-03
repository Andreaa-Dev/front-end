import { AppDispatch } from "./../store";
import productDetailActions from "../slices/productDetail";

export function fetchProductDetailData(productId: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      dispatch(productDetailActions.getProductDetailSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}
