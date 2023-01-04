import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

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

  return (
    <div>
      <h1> Your cart</h1>
      {cartList.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
      <p> Total: </p>
      <Button variant="outlined" onClick={handleClick}>
        Check out
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}
