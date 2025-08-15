import React, { useEffect, useRef } from "react";
import img1 from "../../assets/img/Bombardier-Global-6000.jfif";
import img2 from "../../assets/img/Gulfstream-GIV-SP.jfif";
import img3 from "../../assets/img/Bombardier-Dash-8.jfif";
import "./Experience.css";

const Experience = () => {
  const bannersRef = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    bannersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-container">
      <div className="content">
        <div className="experience-header">{/* <h2>Our Experience</h2> */}</div>
        <div
          className="experience-banner"
          ref={(el) => (bannersRef.current[0] = el)}
        >
          <div className="left">
            <h2>A World-Class Fleet</h2>
            <p>
              Pal Aviation’s globally available fleet is built for every journey
              — whether you need a fully equipped flying office or a
              comfortable, private retreat in the sky. Our aircraft deliver
              consistent luxury, performance, and versatility wherever you go.
            </p>
          </div>
          <div className="right">
            <img src={img1} alt="Aircraft Hangar" />
          </div>
        </div>

        <div
          className="experience-banner"
          ref={(el) => (bannersRef.current[1] = el)}
        >
          <div className="right">
            <img src={img2} alt="Aircraft Hangar" />
          </div>
          <div className="left">
            <h2>A Private World for Pal Aviation Clients</h2>
            <p>
              Pal Aviation clients enjoy exclusive access to exceptional
              experiences through our global network of trusted partners and
              advisors. From tailored travel arrangements to curated lifestyle
              privileges, our team is always on hand to provide seamless
              support—ensuring every journey feels truly personal and
              world-class.
            </p>
          </div>
        </div>

        <div
          className="experience-banner"
          ref={(el) => (bannersRef.current[2] = el)}
        >
          <div className="left">
            <h2>Beyond the Skies with Pal Aviation</h2>
            <p>
              Step into a world where luxury meets precision. At Pal Aviation,
              we don’t just fly you—we craft a tailored experience that extends
              far beyond the runway. From exclusive event access to personalized
              concierge services, our global network ensures every journey is
              effortless, elegant, and entirely yours.
            </p>
          </div>
          <div className="right">
            <img src={img3} alt="Aircraft Hangar" />
          </div>
        </div>

        {/* <div className="experience-img">
          <img src={img1} alt="Aircraft Hangar" />
          <img src={img2} alt="Private Jet Maintenance" />
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
