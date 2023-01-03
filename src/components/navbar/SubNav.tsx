import React from "react";
import { Box } from "@mui/system";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";

import { RootState } from "../../redux/store";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -10,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 5px",
  },
}));

export default function SubNav() {
  const wishList = useSelector(
    (state: RootState) => state.favoriteProduct.favoriteProductList
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "300px",
      }}
    >
      <Link to="">Home</Link>
      <Link to="/products">Products</Link>
      <StyledBadge badgeContent={wishList.length} color="primary">
        <Link to="/favorite">Wish list</Link>
      </StyledBadge>
      <Link to="/cart">Cart</Link>
    </Box>
  );
}
