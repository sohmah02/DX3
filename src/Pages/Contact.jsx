import React from "react";
import "../App.css";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      <div className="link-container">
        <h1 className="contact-title">Get in Touch with DX-3</h1>
        <p className="contact-subtitle">
          Follow us on social media or drop us a message. We’re always here to connect with you!
        </p>

        <div className="links">
          <a href="https://wa.me/2348094077822" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="contact-icon" style={{ color: "#42d62e" }} />
            <p>WhatsApp</p>
          </a>

          <a
            href="https://www.instagram.com/stargir9?igsh=MWk0dGh4c2l4eDZsaQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="contact-icon" style={{ color: "#b146d8" }} />
            <p>Instagram</p>
          </a>

          <a
            href="https://www.tiktok.com/@dx_3clothingbrand?_t=ZM-8u9KjvpZ1S2&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="contact-icon" style={{ color: "black" }} />
            <p>TikTok</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
