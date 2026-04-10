import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Receipt from "../components/Receipt";

function Billing() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="billing-container">

      <ProductList addToCart={addToCart} />

      <Cart cart={cart} />

      <Receipt cart={cart} />

    </div>
  );
}

export default Billing;