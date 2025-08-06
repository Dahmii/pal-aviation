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
          <h1>The PalJet Experience</h1>
          <p>
            Curious about how PalJet can serve your unique travel needs? Let us
            create a personalized flight plan just for you. Share your most
            frequent destinations, base location, travel purpose, preferred
            aircraft type, and peak travel seasons—and our expert aviation team
            will craft a tailored experience that shows exactly what flying with
            PalJet can look like.
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
