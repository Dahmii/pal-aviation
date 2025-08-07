import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/img/palav-01.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHidden(true); // Hide navbar when scrolling down
      } else {
        setHidden(false); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar${hidden ? " navbar--hidden" : ""}`}>
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
          <a href="about-us" onClick={() => setMenuOpen(false)}>
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
        <a href="request-quote">Request Quote</a>
      </div>
    </nav>
  );
};

export default Navbar;
