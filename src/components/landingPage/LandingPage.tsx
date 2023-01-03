import React from "react";

import { Typography } from "@mui/material";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <Typography sx={{ fontSize: 100, fontWeight: "bold" }}>Sale</Typography>{" "}
      <br />
      <Typography sx={{ fontSize: 70, fontWeight: "bold" }}>
        Up to 50% off
      </Typography>
    </div>
  );
}
