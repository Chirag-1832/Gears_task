import React, { useState, useMemo } from "react";
import { Product } from "../types/Product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductList: React.FC<Props> = ({ products }) => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState<"title" | "price" | "stock" | "">("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }

    if (sortBy) {
      result.sort((a, b) => {
        if (sortBy === "title") return a.title.localeCompare(b.title);
        return a[sortBy] - b[sortBy];
      });
    }

    return result;
  }, [products, search, categoryFilter, sortBy]);

  const uniqueCategories = [...new Set(products.map(p => p.category))];

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          placeholder="Search by title"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select onChange={e => setCategoryFilter(e.target.value)} defaultValue="">
          <option value="">All Categories</option>
          {uniqueCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select onChange={e => setSortBy(e.target.value as any)} defaultValue="">
          <option value="">Sort By</option>
          <option value="title">Title</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
