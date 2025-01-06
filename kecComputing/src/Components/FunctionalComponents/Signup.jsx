import React, { useState } from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom"
function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var navigate=useNavigate()
var signup=async(e)=>{
  e.preventDefault()
  var req = await axios.post("https://kec2024-lrnr.onrender.com/signup",{
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password
  })
  console.log(req);
  navigate('/login')
}
  return (
    <div style={{ textAlign: "left", margin: "20px" }}>
      <h2 style={{ color: "blue" }}>Signup</h2>
      <form onSubmit={signup}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName"value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email"name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupForm;