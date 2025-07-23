import React from "react";
import { Product } from "../types/Product";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => (
  <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
    <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
    <h3>{product.title}</h3>
    <p>Category: {product.category}</p>
    <p>Price: ₹{product.price}</p>
    <p>Stock: {product.stock}</p>
  </div>
);

export default ProductCard;
