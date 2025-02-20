import React from "react";
import "./about.css";
import aboutImg from "../../assets/img/IMG_6932.JPG";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <h3>Who we are</h3>
          <p>
            Founded in 2021, Pal Aviation is a premier private jet hire and
            maintenance company dedicated to providing a seamless and luxurious
            travel experience. With over three years of expertise, we have
            become the trusted choice for business leaders, executives, and
            high-net-worth individuals who demand nothing but the best in
            private aviation.
          </p>
          <h3>Our Fleet</h3>
          <p>
            Our diverse fleet caters to a variety of travel needs, from
            executive jets designed for efficient business trips to luxurious
            cabins perfect for family vacations and group getaways. Our
            experienced team is committed to helping you select the perfect
            aircraft to match your needs, ensuring you experience private
            aviation in the most comfortable and stylish way possible.
          </p>
          <h3>Our Mission</h3>
          <p>
            At Pal Aviation, our mission is to elevate private aviation
            standards by providing world-class safety, comfort, and service. We
            go above and beyond to exceed our clients' expectations while
            ensuring a smooth and stress-free journey.
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
