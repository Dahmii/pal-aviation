import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({
  title,
  subtitle,
  showAnimatedText = true,
  buttonText = "Book Now!",
  buttonLink = "/request-quote",
  showButton = true,
  children,
}) => {
  const words = [
    "Luxury Travels",
    "Exclusive Journeys",
    "Premium Getaways",
    "Elite Air Travel",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (showAnimatedText) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showAnimatedText]);

  return (
    <section className="header-section">
      {/* Video Background */}
      <video
        className="header-video"
        autoPlay
        loop
        muted
        playsInline
        poster="../../assets/img/background-1.JPG"
      >
        <source src="/header-vid.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dimming effect */}
      <div className="header-overlay"></div>

      {/* Content */}
      <div className="header-container">
        <div className="header-text">
          {showAnimatedText ? (
            <h1>
              Experience the <br /> Epitome of{" "}
              <span className="changing-text">{words[index]}</span>
            </h1>
          ) : (
            <h1>{title || "Experience the Epitome of Luxury Travels"}</h1>
          )}
          <p>
            {showAnimatedText
              ? "Customized travel solutions for unforgettable journeys."
              : subtitle ||
                "Customized travel solutions for unforgettable journeys."}
          </p>
          {children}
        </div>

        {showButton && (
          <div className="hero-btn">
            <a href={buttonLink}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
