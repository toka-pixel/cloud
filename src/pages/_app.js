import React, { useState } from "react";
import LayoutIndex from "../layout/LayoutIndex";
import CartContext from "../context/CartContext";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const findIndex = (id) => cartItems.findIndex((item) => item.id === id);

  const addItem = (product) => {
    const { id } = product;
    const index = findIndex(id);
    setTotalPrice((previous) => previous + product.price);
    if (index >= 0) {
      const newItems = [...cartItems];
      newItems[index].quantity++;

      setCartItems(newItems);
    } else {
      product.quantity++;
      setCartItems([...cartItems, product]);
    }

    setTotalQuantity(prev=>++prev);
   
  };
  console.log(totalQuantity)

  const removeItem = (product) => {

    setTotalPrice((previous) => previous - product.price * product.quantity);
     setTotalQuantity((previous) => previous - product.quantity);
    setCartItems(cartItems.filter((i) => i.id !== product.id));
  };

  const decreaseItem = (product) => {
    const { id } = product;
    const index = findIndex(id);
    if (index >= 0) {
      setTotalPrice((previous) => previous - product.price);
        setTotalQuantity((prev) => --prev );
      const newItems = [...cartItems];
      if (newItems[index].quantity === 1) {
        setCartItems(cartItems.filter((i) => i.id !== product.id));
        return;
      }
      newItems[index].quantity--;
      setCartItems(newItems);
    }
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        decreaseItem,
        totalPrice,
        totalQuantity,
      }}
    >
      <LayoutIndex>
        <Component {...pageProps} />
      </LayoutIndex>
    </CartContext.Provider>
  );
}
