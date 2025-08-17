import React from "react";
import "./Banner.css";
import bannerImg from "../../assets/img/banner-bg.jpg"; // Use your image path

const Banner = () => {
  return (
    <section className="banner-section">
      <div
        className="banner-content"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="banner-text">
          <h1>The Pal Aviation Experience</h1>
          <p>
            "Tell us your travel needs—destinations, base location, purpose,
            aircraft preference, and peak seasons—and our aviation experts will
            design a personalized flight plan that shows what flying with Pal
            Aviation can look like."
          </p>
          <button className="banner-btn">
            <a href="#book-now">Make an Enquiry</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
