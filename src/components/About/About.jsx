import React from "react";
import "./about.css";
import aboutImg from "../../assets/img/about-1.jpeg";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to <b>Pal Aviation</b>, a premier private aviation service
            provider. We specialize in aircraft parts sales and repair, aircraft
            trading, and expert consulting services for both aspiring and
            existing aircraft owners.
          </p>
          <p>
            Navigating aviation regulations in{" "}
            <b>West Africa, particularly Nigeria</b>, can be complex, and that’s
            where we come in. Our dedicated team, with Experience in both{" "}
            <b>fixed-wing and rotary-wing aircraft</b>, ensures seamless
            operations—from maintenance to trading and regulatory compliance.
          </p>
          <p>
            Whether you're looking to{" "}
            <b>purchase, maintain, or operate an aircraft</b>, Pal Aviation is
            here to provide <b>trusted solutions</b> with professionalism and
            expertise.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="About Pal Aviation" />
        </div>
      </div>
    </section>
  );
};

export default About;
