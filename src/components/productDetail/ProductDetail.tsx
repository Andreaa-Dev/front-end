import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductDetailData } from "../../redux/thunk/productDetail";

export default function ProductDetail() {
  const productId = useParams().productId;
  const dispatch = useDispatch<AppDispatch>();
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.product
  );

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetailData(productId));
    }
  }, [dispatch, productId]);
  console.log(productDetail, "p");
  return (
    <div>
      ProductDetail
      <div> {productDetail?.title}</div>
      <div> {productDetail?.category}</div>
    </div>
  );
}
