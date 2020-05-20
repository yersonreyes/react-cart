import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpy } from "../../assets/svg/cart-empty.svg";

import "./Cart.scss";

export default function Cart() {
  return (
    <>
      <Button variant="link" className="cart">
        <CartEmpy />
      </Button>
      <div className="cart-content">todos mis productos</div>
    </>
  );
}
