import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/img/palav-01.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Pal-Aviation Logo" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Flights & Destination
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Rentals
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-btn">
        <a href="#">Request Quote</a>
      </div>
    </nav>
  );
};

export default Navbar;
