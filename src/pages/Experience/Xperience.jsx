import React, { useEffect, useRef } from "react";
import "./Xperience.css";
import img1 from "../../assets/img/xper1.jfif";
import img2 from "../../assets/img/xper2.jpg";
import img3 from "../../assets/img/services-1.jpeg";
import Banner from "../../components/Banner/Banner";

const Xperience = () => {
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
    <section className="xperience-container">
      <div className="xperience-hero">
        <div className="xperience-text">
          <h1>The Ultimate Cabin Experience</h1>
          <p className="sub-text">Tailored and unparalleled service</p>
          <button className="inquire-btn">Inquire Now</button>
        </div>
      </div>

      <div className="xperience-details">
        <h2>Private Jet In-Flight Services</h2>
        <p>
          VistaJet redefines private aviation with its exquisite cabin design
          and world-class in-flight services. Stepping aboard a VistaJet
          aircraft is like entering a luxurious home in the sky, where every
          detail is meticulously crafted to ensure comfort, productivity, and
          relaxation.
        </p>
      </div>

      <div
        className="xperience-banner"
        ref={(el) => (bannersRef.current[0] = el)}
      >
        <div className="left">
          <h2>A Home Away from Home</h2>
          <p>
            Pal Aviation’s cabin design, consistent across our entire fleet,
            offers comfort and luxury wherever you travel. Whether you’re
            working in a fully equipped business suite or unwinding in a
            relaxing family space, our cabins are thoughtfully designed to meet
            your every need.
          </p>
        </div>
        <div className="right">
          <img src={img1} alt="" />
        </div>
      </div>

      <div
        className="xperience-banner"
        ref={(el) => (bannersRef.current[1] = el)}
      >
        <div className="right">
          <img src={img2} alt="" />
        </div>
        <div className="left">
          <h2>Excellence in Every Journey</h2>
          <p>
            At Pal Aviation, we go beyond transportation to deliver a seamless
            travel experience. From our expertly trained pilots to our attentive
            Cabin Crew, every detail is designed with your comfort and safety in
            mind. With a focus on precision, hospitality, and personalized care,
            we ensure that every flight feels effortless and unforgettable.
          </p>
        </div>
      </div>

      <div
        className="xperience-banner"
        ref={(el) => (bannersRef.current[2] = el)}
      >
        <div className="left">
          <h2>Where Expertise Meets Comfort</h2>
          <p>
            Every Pal Aviation flight is guided by professionalism and care. Our
            pilots bring years of experience and rigorous training, while our
            Cabin Crew provide warm, attentive service tailored to your needs.
            From takeoff to landing, we combine safety, skill, and hospitality
            to create a travel experience you can truly trust.
          </p>
        </div>
        <div className="right">
          <img src={img3} alt="" />
        </div>
      </div>

      <Banner />
    </section>
  );
};

export default Xperience;
