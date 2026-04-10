import React from "react";

function Receipt({ cart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="receipt">

      <h3>Receipt</h3>

      {cart.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}

      <h4>Total: ₹{total}</h4>

    </div>
  );
}

export default Receipt;