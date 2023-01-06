import React from "react";
import { Box } from "@mui/material";

import Logo from "./Logo";
import SubNav from "./SubNav";
import SwitchTheme from "./SwitchTheme";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function NavBar() {
  // theme => background: light/ dark
  const theme = useSelector((state: RootState) => state.theme.theme);

  let backgroundTheme: string = "#e3f2fd";
  let colorTheme: string = "#212121";

  if (theme === "Dark") {
    backgroundTheme = "#212121";
    colorTheme = "#e3f2fd";
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: backgroundTheme,
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
