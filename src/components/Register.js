import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="form-box">
      <div className="register-container">
        <header>Sign Up</header>
        <span>Have an account? <a href="/login">Login</a></span>
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Firstname" />
        </div>
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Lastname" />
        </div>
        <div className="input-box">
          <input type="email" className="input-field" placeholder="Email" />
        </div>
        <div className="input-box">
          <input type="password" className="input-field" placeholder="Password" />
        </div>
        <div className="input-box">
          <button className="submit">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
