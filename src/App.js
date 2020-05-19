import React, { useState } from "react";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";
import { urlApiProducts } from "./utils/constans";
import { STORAGE_PRODUCTS_CARS } from "./utils/constans";

export default function App() {
  const products = useFetch(urlApiProducts, null);
  const [productCart, setProductCart] = useState([]);

  const addProductCart = (id, name) => {
    const idsProducts = productCart;
    idsProducts.push(id);
    setProductCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CARS, productCart);
    console.log("producto añadido");
  };

  return (
    <div>
      <TopMenu />
      <Products products={products} addProductCart={addProductCart} />
    </div>
  );
}
