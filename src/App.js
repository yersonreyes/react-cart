import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";
import { urlApiProducts } from "./utils/constans";
import { STORAGE_PRODUCTS_CARS } from "./utils/constans";

export default function App() {
  const products = useFetch(urlApiProducts, null);
  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CARS);

    if (idsProducts) {
      const idsProductsSplit = idsProducts.split(",");
      setProductCart(idsProductsSplit);
    } else {
      setProductCart([]);
    }
  };

  const addProductCart = (id, name) => {
    const idsProducts = productCart;
    idsProducts.push(id);
    setProductCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CARS, productCart);
    toast.success(`${name}Añadido al carrito correctamente`);
  };

  return (
    <div>
      <TopMenu />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}
