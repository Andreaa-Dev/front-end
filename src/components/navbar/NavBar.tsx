import React from "react";
import { Box } from "@mui/material";

import Logo from "./Logo";
import SubNav from "./SubNav";
import SwitchTheme from "./SwitchTheme";

export default function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#e3f2fd",
      }}
    >
      <Logo />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "800px",
        }}
      >
        <SubNav />
        <SwitchTheme />
      </Box>
    </Box>
  );
}
