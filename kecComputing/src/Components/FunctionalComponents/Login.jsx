import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Ensure this is the correct import

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error handling
  const navigate = useNavigate(); // Correctly initialize `navigate`

  const Login = async (e) => {
    e.preventDefault();
    try {
      const req = await axios.post("https://kec2024-lrnr.onrender.com/login", {
        email: email,
        password: password,
      });

      const isLoginSuccessfull = req.data.isLoggedIn;
      if (isLoginSuccessfull) {
        navigate("/usememo"); // Redirect to the desired route
      } else {
        setError(req.data.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div>
      <h2 style={{ color: "blue" }}>Login</h2>
      <form onSubmit={Login}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
