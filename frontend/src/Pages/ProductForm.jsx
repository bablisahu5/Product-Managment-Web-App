
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const ProductForm = () => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
    }
  }, [id, token]);

  const handleChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`http://localhost:5000/api/products/${id}`, product, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      await axios.post("http://localhost:5000/api/products", product, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Product Name" value={product.name} onChange={handleChange} />
      <input name="price" placeholder="Price" value={product.price} onChange={handleChange} />
      <button type="submit">{id ? "Update" : "Add"} Product</button>
    </form>
  );
};

export default ProductForm;
