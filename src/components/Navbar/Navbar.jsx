import React, { useState } from "react";
import { FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";
import logo from "../../assets/img/palav-01.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarPage, setSidebarPage] = useState("main"); // "main", "membership", "fleet"

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSidebarPage("main"); // reset to main menu
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSidebarPage("main");
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="hamburger-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/members" onClick={closeMenu}>
              Membership
            </Link>
          </li>
          <li>
            <Link to="/fleetpage" onClick={closeMenu}>
              Fleet
            </Link>
          </li>
          <li>
            <Link to="/xperience" onClick={closeMenu}>
              Experience
            </Link>
          </li>
        </ul>

        <div className="nav-right">
          <span className="call-us">
            Call Us: <u>+234 4915-630-1638</u>
          </span>
          <button className="quote-btn">Request a Quote</button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Pal-Aviation Logo" />
          </Link>
        </div>
        {/* MAIN MENU */}
        {sidebarPage === "main" && (
          <ul className="sidebar-links">
            <li>
              <Link to="/members" onClick={closeMenu}>
                Membership
              </Link>
            </li>
            {/* <li onClick={() => setSidebarPage("membership")}>Membership</li> */}
            <li onClick={() => setSidebarPage("fleet")}>Fleet</li>

            <li>
              <a href="/xperience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <a href="about-us" onClick={closeMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        )}
        {/* MEMBERSHIP MENU */}
        {sidebarPage === "membership" && (
          <ul className="sidebar-links">
            <li className="back-btn" onClick={() => setSidebarPage("main")}>
              <FaArrowLeft /> Back
            </li>
            <li>
              <a href="#gold" onClick={closeMenu}>
                Gold Membership
              </a>
            </li>
            <li>
              <a href="#silver" onClick={closeMenu}>
                Silver Membership
              </a>
            </li>
          </ul>
        )}
        {/* FLEET MENU */}
        {sidebarPage === "fleet" && (
          <ul className="sidebar-links">
            <li className="back-btn" onClick={() => setSidebarPage("main")}>
              <FaArrowLeft /> Back
            </li>
            <li>
              <a href="FleetPage" onClick={closeMenu}>
                Bombardier
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Gulfstream G550/GIV
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Embraer Legacy 600
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Challenger 605
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Challenger 604
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Hawker XP
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Learjet
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                AW139 Helicopter
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                AW109 Helicopter
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
