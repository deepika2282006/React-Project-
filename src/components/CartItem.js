import React from "react";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      {item.name} - ₹{item.price}
    </div>
  );
}

export default CartItem;