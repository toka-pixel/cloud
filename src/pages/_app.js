import React from "react";
import LayoutIndex from "../layout/LayoutIndex";
import CartProvider from "@/context/CartProvider";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
 
      <CartProvider>
        <LayoutIndex>
          <Component {...pageProps} />
        </LayoutIndex>
      </CartProvider>
  
  );
}
