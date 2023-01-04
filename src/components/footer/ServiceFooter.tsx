import React from "react";
import { Box, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";

function ServiceFooter() {
  return (
    <Box
      sx={{
        backgroundColor: "#bbdefb",
        p: 15,
      }}
    >
      <Typography sx={{ textAlign: "center", mb: 5 }}>
        THE E-BOUTIQUE SERVICES
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gridColumnGap: 5,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: 400,
          }}
        >
          <LocalShippingOutlinedIcon />
          <Typography sx={{ fontWeight: "bold", m: "10px" }}>
            FREE DELIVERY
          </Typography>
          <Typography>
            Become a member to get free standard shipping on your first
            purchase!
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: 400,
          }}
        >
          <ReplayOutlinedIcon />
          <Typography sx={{ fontWeight: "bold", m: "10px" }}>
            FREE RETURN
          </Typography>
          <Typography>
            Enjoy complimentary Standard shipping, with free Customs duty
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: 400,
          }}
        >
          <CardGiftcardOutlinedIcon />
          <Typography sx={{ fontWeight: "bold", m: "10px" }}>
            ART OF GIFTING
          </Typography>
          <Typography>
            Your order will be presented in an iconic gift box
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ServiceFooter;
