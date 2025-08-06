import React from "react";
import "../App.css";

const products = [
  { name: "Blank acid wash Tees", price: "₦20,000", image: "/product/blank acid wash tees.jpg" },
  { name: "Long sleeve Tees", price: "₦11,500", image: "/product/long sleeve tees.jpg" },
  { name: "Long sleeve Reglan", price: "₦12,500", image: "/product/long sleeve reglan.jpg" },
  { name: "Reglan Tees", price: "₦10,500", image: "/product/reglan.jpg" },
  { name: "Joggers", price: "₦15,000", image: "/product/joggers.jpg" },
  { name: "Shorts", price: "₦10,500", image: "/product/shorts.jpg" },
  { name: "Sweat shirts", price: "₦15,000", image: "/product/sweat shirt price.jpg" },
  { name: "Blank Tees", price: "₦9,500", image: "/product/blank tees.jpg" },
  { name: "Premium Quality Hoodies", price: "₦21,000", image: "/product/hoodies.jpg" },
  { name: "Trucker caps", price: "₦9,000", image: "/DX-3/face caps.jpg" },
];

const Product = () => {
  return (
    <div className="product-page">
      <div className="product-header">
        <h2><span>Our</span> Services</h2>
        <p>
          We offer a great deal of services suitable for you. We can make:
          Custom Wears, Custom Prints, Custom Caps, Custom Cap prints, Ready Made Outfits. <br />
          If you can design it, we can make and print it to your preference.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
             <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="custom-note">
        <p>
          These are available as seen and if you would like to add anything to customize or
          make this your own design please let us know and we can talk and bring your designs to life.
        </p>
        <button className="contact-btn">
          <a href="/contact">Contact Us</a>
        </button>
      </div>
    </div>
  );
};

export default Product;
