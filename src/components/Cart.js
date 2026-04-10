import React from "react";
import CartItem from "./CartItem";

function Cart({ cart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Cart</h3>

      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}

      <h4>Total: ₹{total}</h4>
    </div>
  );
}

export default Cart;