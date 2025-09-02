import React, { useEffect, useRef } from "react";
import "./About.css";
import aboutImg from "../../assets/img/about.JPG";

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text" ref={textRef}>
          <h2>About Pal Aviation</h2>
          <p>
            <strong>Pal Aviation</strong> is committed to providing luxury,
            safety, and reliability in every flight. Our team of experienced
            professionals ensures that your journey is smooth and tailored to
            your needs. We understand that time is valuable, which is why we
            offer flexible scheduling and a range of aircraft to suit any
            requirement. Whether you're flying for business or leisure,{" "}
            <strong>Pal Aviation</strong> is your trusted partner in private
            aviation.
          </p>
          <div className="about-btn">
            <a href="/about-us">Learn more</a>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About Pal Aviation" />
        </div>
      </div>
    </section>
  );
};

export default About;
