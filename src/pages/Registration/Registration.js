import React, { useState } from "react";
import "./registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/myapp/backend/registration.php",
        { name, email, contact, address, password }
      );
      alert(response.data.message); 
      setIsLogin(true);

    } catch {
      alert("Registration Failed");

    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/myapp/backend/login.php",
        { email, password }
      );

      if (response.data.message === "Login successful") {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/create-order"); // Redirect to order page
        window.location.reload();
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container">
      {isLogin ? (
        <div className="a_box">
          <div className="form-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
              <p>
                Don't have an account?{" "}
                <button
                  className="a_button"
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </button>
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div className="a_box">
          <div className="form-box">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Contact No"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Current Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
              <p>
                Already have an account?{" "}
                <button
                  className="a_button"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
