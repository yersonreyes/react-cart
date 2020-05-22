import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpy } from "../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/svg/cart-full.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as Garbage } from "../../assets/svg/garbage.svg";

import "./Cart.scss";

export default function Cart(props) {
  const { productCart } = props;
  const [cartOpen, setCartOpen] = useState(false);
  const widthCartContent = cartOpen ? 400 : 0;

  console.log(productCart);
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
        {productCart.length > 0 ? (
          <CartFull onClick={openCart} />
        ) : (
          <CartEmpy onClick={openCart} />
        )}
      </Button>
      <div className="cart-content" style={{ width: widthCartContent }}>
        <CartContentHeader />
        todos mis productos
      </div>
    </>
  );
}

function CartContentHeader(props) {
  const {} = props;

  return (
    <div className="cart-content__header">
      <div>
        <Close />
        <h2>Carrito</h2>
      </div>
      <Button variant="link">
        vaciar
        <Garbage />
      </Button>
    </div>
  );
}
