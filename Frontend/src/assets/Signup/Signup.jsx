import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import "./Signup.css"; 
import back1 from "../Image/back1.jpg";
import { FaUser, FaLock, FaMailBulk } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "customer", 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Success message
      } else {
        alert(result.message); // Error message
      }
    } catch (error) {
      alert("An error occurred while signing up. Please try again.");
    }
  };

  return (
    <div>
      <div
        className="Container"
        style={{
          backgroundImage: `url(${back1})`,
          width: "1920px",
          height: "879px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingBottom: "0 px",
          marginTop: "0px",
        }}
      >
        <div className="wrapper1">
          <form onSubmit={handleSubmit}>
            <h1>Create an Account</h1>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FaMailBulk className="icon" />
            </div>
            <div className="input-box">
              {/* <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select> */}
            </div>
            
            <button type="submit">Sign Up</button>
            <h3>Already you havea an account? <Link to="/login">LogIn</Link></h3>
            
          </form>
        
          <Link to="/"><FaHome class="icon"/></Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
