import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import CartItem from "./CartItem";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);

  return (
    <div>
      CartList
      {cartList.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
}
