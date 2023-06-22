import { useState } from "react";
import CartContext from "./CartContext";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartMenuStatus, setCartMenuStatus] = useState(false);

  const findIndex = (id) => cartItems.findIndex((item) => item.id === id);

  const toggleCartMenu = (status) => {
    setCartMenuStatus(status);
  };

  const addItem = (product) => {
    const { id } = product;
    const index = findIndex(id);

    if (index >= 0) {
      const newItems = [...cartItems];
      newItems[index].quantity++;

      setCartItems(newItems);
    } else {
      product.quantity++;
      setCartItems([...cartItems, product]);
    }
  };

  const removeItem = (product) => {
    setCartItems(cartItems.filter((i) => i.id !== product.id));
  };

  const decreaseItem = (product) => {
    const { id } = product;
    const index = findIndex(id);
    const newItems = [...cartItems];

    if (cartItems[index].quantity === 1) {
      newItems[index].quantity = 0;
      setCartItems(newItems);
      setCartItems(cartItems.filter((i) => i.id !== id));
    }
    if (cartItems[index].quantity > 1) {
      newItems[index].quantity--;
      setCartItems(newItems);
    }
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const cart = {
    toggleCartMenu,
    cartMenuStatus,
    cartItems,
    addItem,
    removeItem,
    decreaseItem,
    getTotalQuantity,
    getTotalPrice,
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

export default CartProvider;
