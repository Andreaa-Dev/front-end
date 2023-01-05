import React from "react";
import { Box } from "@mui/system";

import logo from "../../misc/logo.jpeg";

export default function Logo() {
  return (
    <Box sx={{ margin: 2 }}>
      <img src={logo} alt="logo" height="70px" width="70px" />
    </Box>
  );
}
