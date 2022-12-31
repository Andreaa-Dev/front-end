import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function SubNav() {
  return (
    <Box>
      <Link to="">Home</Link>
      <Link to="/favorite">Wish list</Link>
      <Link to="/cart">Cart</Link>
    </Box>
  );
}
