import React from "react";
import { Box } from "@mui/system";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { RootState } from "../../redux/store";
import { Typography } from "@mui/material";

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

  const cartList = useSelector((state: RootState) => state.cart.cartList);

  const theme = useSelector((state: RootState) => state.theme.theme);

  let colorTheme: string = "#212121";

  if (theme === "Dark") {
    colorTheme = "#e3f2fd";
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "800px",
      }}
    >
      <Link to="" className="link">
        <Typography sx={{ color: colorTheme }}>Home</Typography>
      </Link>
      <Link to="/products" className="link">
        <Typography sx={{ color: colorTheme }}>Products</Typography>
      </Link>
      <StyledBadge badgeContent={wishList.length} color="primary">
        <Link to="/favorite" className="link">
          <Typography sx={{ color: colorTheme }}>Wish List</Typography>
        </Link>
      </StyledBadge>
      <StyledBadge badgeContent={cartList.length} color="primary">
        <Link to="/cart" className="link">
          <Typography sx={{ color: colorTheme }}>Cart</Typography>
        </Link>
      </StyledBadge>
    </Box>
  );
}
