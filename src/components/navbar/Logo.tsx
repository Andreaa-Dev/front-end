import React from "react";
import { Box } from "@mui/system";

import logo from "../../misc/logo.jpeg";

export default function Logo() {
  return (
    <Box sx={{ margin: 1 }}>
      <img src={logo} alt="logo" height="50px" width="50px" />
    </Box>
  );
}
