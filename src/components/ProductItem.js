import React from "react";

function ProductItem({ product, addToCart }) {
  return (
    <div className="product">
      <p>{product.name}</p>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add
      </button>
    </div>
  );
}

export default ProductItem;