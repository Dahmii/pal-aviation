import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="" alt="Pal-Aviation Logo" />
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
          <a href="/flights" onClick={() => setMenuOpen(false)}>
            Flights & Destination
          </a>
        </li>
        <li>
          <a href="/rentals" onClick={() => setMenuOpen(false)}>
            Rentals
          </a>
        </li>
        <li>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
        </li>
        <li>
          <a href="/contact" onClick={() => setMenuOpen(false)}>
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
