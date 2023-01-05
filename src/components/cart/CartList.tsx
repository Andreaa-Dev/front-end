import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";

import CartItem from "./CartItem";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const total = cartList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
  }, 0);
  if (cartList.length === 0)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ textAlign: "center", mt: 20, mb: 5, fontSize: 30 }}>
          Your cart is empty ...
        </Typography>
        <Typography sx={{ textAlign: "center", mt: 2, mb: 5, fontSize: 30 }}>
          Check out our Winter collection !!!
        </Typography>
        <Button
          variant="outlined"
          sx={{ width: 20, alignSelf: "center", mb: 20 }}
        >
          <Link to="/products" className="link">
            Go
          </Link>
        </Button>
      </Box>
    );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1> Your cart</h1>
      <ol>
        {cartList.map((item) => (
          <li>
            <CartItem item={item} key={item.id} />
          </li>
        ))}
      </ol>

      <h1> Total: {total.toLocaleString()}</h1>
      <Button variant="outlined" onClick={handleClick}>
        Check out
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  );
}
