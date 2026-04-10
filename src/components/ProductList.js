import React from "react";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Rice", price: 50 },
  { id: 2, name: "Sugar", price: 40 },
  { id: 3, name: "Milk", price: 30 },
  { id: 4, name: "Oil", price: 120 }
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h3>Products</h3>

      {products.map((p) => (
        <ProductItem key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;