import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <img src="../../assets/img/logo.png" alt="Pal-Aviation logo" />
        </div>

        {/* Learn More Section */}
        <div className="footer-section">
          <h3>Learn More</h3>
          <ul>
            <li>
              <a href="#">About Pal-Aviation</a>
            </li>
            <li>
              <a href="#">Fleet Details</a>
            </li>
            <li>
              <a href="#">Safety Standards</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>

        {/* Tickets Section */}
        <div className="footer-section">
          <h3>Tickets & Booking</h3>
          <ul>
            <li>
              <a href="#">Search Flights</a>
            </li>
            <li>
              <a href="#">Pricing Information</a>
            </li>
            <li>
              <a href="#">Booking Policies</a>
            </li>
            <li>
              <a href="#">Manage Bookings</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:support@pal-aviation.com">
                support@pal-aviation.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:+1234567890">+1 234 567 890</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
