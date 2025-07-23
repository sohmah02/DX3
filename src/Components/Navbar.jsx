import React from "react";
import "../App.css"; 

function Navbar() {
  return (
    <div className="nav">
      <div>
        <img src="/DX-3/logo.jpg" alt="Logo" className="logo" />
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
