import React from "react";

import { Button, Typography } from "@mui/material";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <Typography sx={{ fontSize: 100 }}>Sale</Typography>
      <br />
      <Typography sx={{ fontSize: 70 }}>Up to 50% off</Typography>
      <Button variant="outlined"> Check out new collection</Button>
    </div>
  );
}
