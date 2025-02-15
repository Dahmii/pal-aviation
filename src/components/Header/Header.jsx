import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const words = [
    "Luxury Travels",
    "Exclusive Journeys",
    "Premium Getaways",
    "Elite Air Travel",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      <div className="header-text">
        <h1>
          Experience the <br /> Epitome of{" "}
          <span className="changing-text">{words[index]}</span>
        </h1>
        <p>Customized travel solutions for everyday journeys...</p>
      </div>
      <div className="hero-btn">
        <a href="#book-now">Book Now!</a>
      </div>
    </div>
  );
};

export default Header;
