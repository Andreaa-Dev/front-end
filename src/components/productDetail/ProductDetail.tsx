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
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        ml: "auto",
        mr: "auto",
        width: "700px",
        mt: 10,
        mb: 10,
      }}
    >
      <Box sx={{ mr: 10 }}>
        <img
          src={productDetail?.image}
          alt={productDetail?.title}
          height="300px"
        />
      </Box>
      <Box sx={{ width: 400 }}>
        <Typography sx={{ fontWeight: 500 }}>{productDetail?.title}</Typography>
        <Typography> $ {productDetail?.price}</Typography>
        <Typography>Description:{productDetail?.description}</Typography>
        <Typography> {productDetail?.category}</Typography>
        <Button variant="outlined">Add to cart</Button>
      </Box>
    </Box>
  );
}
