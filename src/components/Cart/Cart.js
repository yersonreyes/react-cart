import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpy } from "../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/svg/cart-full.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as Garbage } from "../../assets/svg/garbage.svg";
import { STORAGE_PRODUCTS_CARS, BASE_PATH } from "../../utils/constans";
import {
  removeArrayDuplicates,
  countDuplicateItemArray,
} from "../../utils/arrayFunc";

import "./Cart.scss";

export default function Cart(props) {
  const { productCart, getProductsCart, products } = props;
  const [cartOpen, setCartOpen] = useState(false);
  const widthCartContent = cartOpen ? 400 : 0;
  const [singleProductCart, setSingleProductCart] = useState([]);

  useEffect(() => {
    const allProductsId = removeArrayDuplicates(productCart);
    setSingleProductCart(allProductsId);
  }, [productCart]);

  console.log(productCart);
  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "scroll";
  };

  const emptyCart = () => {
    localStorage.removeItem(STORAGE_PRODUCTS_CARS);
    getProductsCart();
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
        <CartContentHeader closeCart={closeCart} emptyCart={emptyCart} />
        <div className="cart-content__products">
          {singleProductCart.map((idProductsCart, index) => (
            <CartContentProducts
              key={index}
              products={products}
              idsProductsCart={productCart}
              idProductsCart={idProductsCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function CartContentHeader(props) {
  const { closeCart, emptyCart } = props;

  return (
    <div className="cart-content__header">
      <div>
        <Close onClick={closeCart} />
        <h2>Carrito</h2>
      </div>
      <Button variant="link" onClick={emptyCart}>
        vaciar
        <Garbage />
      </Button>
    </div>
  );
}

function CartContentProducts(props) {
  const {
    products: { loading, result },
    idsProductsCart,
    idProductsCart,
  } = props;

  if (!loading && result) {
    return result.map((product, index) => {
      if (idProductsCart == product.id) {
        const quantity = countDuplicateItemArray(product.id, idsProductsCart);
        return (
          <RenderProduct key={index} product={product} quantity={quantity} />
        );
      }
    });
  }
  return null;
}

function RenderProduct(props) {
  const { product, quantity } = props;
  return (
    <div className="cart-content__product">
      <img src={`${BASE_PATH}/${product.image}`} alt={product.name} />
      <div className="cart-content__product-info">
        <div>
          <h3>{product.name.substr(0, 25)}</h3>
          <p>{product.price.toFixed(2)}</p>
        </div>
        <div>
          <p>En carro: {quantity} ud.</p>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}
