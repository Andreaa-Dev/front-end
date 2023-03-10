import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <Typography sx={{ fontSize: 100 }}>Sale</Typography>
      <br />
      <Typography sx={{ fontSize: 70 }}>Up to 50% off</Typography>
      <Button variant="outlined" sx={{ color: "black", mt: 7 }}>
        <Link className="link" to="/products">
          Check out new collection !!!
        </Link>
      </Button>
    </div>
  );
}
