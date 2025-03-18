import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LogIn.css"; 
import back2 from "../Image/back2.jpg";
import { FaUser, FaLock } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission reload

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        console.log("Token:", data.token);
        console.log("Username:", data.username);
        console.log("Role:", data.role);

        // Save the token (if needed)
        localStorage.setItem("token", data.token);

        // Redirect to the homepage
        navigate("/");
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div>
      <div className="Container" style={{
        backgroundImage: `url(${back2})`,
        width: "1920px",
        height: "879px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingBottom: "0px",
        marginTop: "0px",
      }}>
        <div className="wrapper">
          <form onSubmit={handleLogin}>
            <h1>Log In</h1>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="icon" />
            </div>
            <button type="submit">Log In</button>
            <div>
              <p className="font9">
                Don't have an account? <Link to="/Signup">Sign Up</Link>
              </p>
            </div>
            <Link to="/"><FaHome class="Icon"/></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
