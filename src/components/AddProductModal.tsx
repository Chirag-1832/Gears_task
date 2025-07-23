import React, { useState } from "react";
import { Product } from "../types/Product";

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const AddProductModal: React.FC<Props> = ({ setProducts }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    stock: "",
    thumbnail: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      id: Date.now(), // Simulated ID
      title: form.title,
      price: Number(form.price),
      category: form.category,
      stock: Number(form.stock),
      thumbnail: form.thumbnail
    };

    setProducts(prev => [newProduct, ...prev]);

    setForm({ title: "", price: "", category: "", stock: "", thumbnail: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <input name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} required />
      <input name="thumbnail" placeholder="Image URL" value={form.thumbnail} onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductModal;
