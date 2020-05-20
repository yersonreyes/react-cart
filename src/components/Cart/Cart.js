import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpy } from "../../assets/svg/cart-empty.svg";

import "./Cart.scss";

export default function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const widthCartContent = cartOpen ? 400 : 0;

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "scroll";
  };
  return (
    <>
      <Button variant="link" className="cart">
        <CartEmpy onClick={openCart} />
      </Button>
      <div className="cart-content" style={{ width: widthCartContent }}>
        todos mis productos
      </div>
    </>
  );
}
