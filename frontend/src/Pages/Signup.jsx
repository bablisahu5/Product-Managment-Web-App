// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/signup', formData);
//       alert('Signup successful! Now login.');
//     } catch (err) {
//       alert(err.response.data.msg);
//     }
//   };

//   return (
//     <form onSubmit={handleSignup}>
//       <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
//       <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
//       <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default Signup;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", userData);
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="Username" onChange={e => setUserData({ ...userData, username: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={e => setUserData({ ...userData, email: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={e => setUserData({ ...userData, password: e.target.value })} required />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
