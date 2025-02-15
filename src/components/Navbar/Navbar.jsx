import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="" alt="Pal-Aviation Logo" />
        {/* <a href="/">Pal-Aviation</a> */}
      </div>
      <ul className="navbar__links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/flights">Flights & Destination</a>
        </li>
        <li>
          <a href="/rentals">Rentals</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="nav-btn">
        <a href="#">Request Quote</a>
      </div>
    </div>
  );
};

export default Navbar;
