import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
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
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box>
        <img
          src={productDetail?.image}
          alt={productDetail?.title}
          height="300px"
        />
      </Box>
      <Box sx={{ width: 400 }}>
        <Typography> {productDetail?.title}</Typography>
        <Typography> $ {productDetail?.price}</Typography>
        <Typography>{productDetail?.description}</Typography>
        <Typography> {productDetail?.category}</Typography>
        <Button variant="outlined">Add to cart</Button>
      </Box>
    </Box>
  );
}
