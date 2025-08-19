import React, { useState, useEffect, useRef } from "react";
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
  const taglines = [
    "Experience the Epitome of Luxury Travels",
    "Redefining the Art of Airborne Elegance",
    "Your Gateway to Unmatched Journeys",
  ];

  const [index, setIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const videoSources = ["/videos/header-vid1.webm", "/videos/header-vid2.mp4"];

  // Animated text effect
  useEffect(() => {
    if (showAnimatedText) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex + 1 === taglines.length) {
            return 0; // immediately restart from first sentence
          }
          return prevIndex + 1;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showAnimatedText]);

  // Handle video switching
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleEnded = () => {
      setVideoIndex((prev) => (prev + 1) % videoSources.length);
    };

    videoEl.addEventListener("ended", handleEnded);
    return () => {
      videoEl.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.src = videoSources[videoIndex];
      videoEl.play();
    }
  }, [videoIndex]);

  return (
    <section className="header-section">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="header-video"
        autoPlay
        muted
        playsInline
        poster="../../assets/img/background-1.JPG"
      >
        <source src={videoSources[0]} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dimming effect */}
      <div className="header-overlay"></div>

      {/* Content */}
      <div className="header-container">
        <div className="header-text">
          {showAnimatedText ? (
            <h1 className="changing-text">{taglines[index]}</h1>
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

          {showButton && (
            <div className="hero-btn">
              <a href={buttonLink}>{buttonText}</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
