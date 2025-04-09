// pages/ProductList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    axios.get("http://localhost:5000/api/products", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setProducts(res.data))
    .catch(err => console.error(err));
  }, [token]);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p._id}>
          <h4>{p.name}</h4>
          <p>Price: {p.price}</p>
          <Link to={`/edit-product/${p._id}`}>Edit</Link>
          <button onClick={() => deleteProduct(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
