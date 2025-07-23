import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "./types/Product";
import ProductList from "./components/ProductList";
import AddProductModal from "./components/AddProductModal";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products));
  }, []);

  return (
    <div className="App">
      <h1>Seller Product Manager</h1>
      <AddProductModal setProducts={setProducts} />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default App;
