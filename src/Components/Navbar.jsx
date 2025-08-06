import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import '../CartPanel.css'; // styles for cart

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <img src="/DX-3/logo.jpg" alt="Logo" className="logo" />

        {/* Hamburger menu toggle */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "open" : ""}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* Cart Icon */}
        <div className="cart-icon" onClick={() => setCartOpen(true)}>
          <FaShoppingCart size={22} color="white" />
        </div>
      </div>

      {/* Slide-in Cart Panel */}
      <div className={`cart-panel ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <FaTimes className="close-cart" onClick={() => setCartOpen(false)} />
        </div>
        <div className="cart-body">
          <p>Your cart is empty.</p>
        </div>
      </div>

      {/* Background Overlay for Cart */}
      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)} />}
    </>
  );
}
