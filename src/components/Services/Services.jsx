import React, { useEffect, useRef } from "react";
import "./Service.css";
// import serviceImage from "../../assets/img/services-1.jpeg";
import serviceImage1 from "../../assets/img/jet-hire.jpg";
import serviceImage2 from "../../assets/img/plane.jpg";
import serviceImage3 from "../../assets/img/experience-2.jpeg";
import serviceImage4 from "../../assets/img/services-1.jpeg";
import serviceImage5 from "../../assets/img/hangar.jpg";
import serviceImage6 from "../../assets/img/about-1.jpeg";
import serviceImage7 from "../../assets/img/medevec.webp";

const servicesList = [
  {
    title: "Private Jet Hire",
    description:
      "Enjoy the ultimate convenience and exclusivity with our private jet charter services. We handle flight permits, clearances, catering, and ground transportation for a stress-free experience.",
    image: serviceImage1,
  },
  {
    title: "Flight Planning & Support",
    description:
      "We provide expert flight planning, including route optimization, weather monitoring, and risk assessment, ensuring seamless and efficient travel.",
    image: serviceImage2,
  },
  {
    title: "Aircraft Maintenance & Repair",
    description:
      "Our certified technicians offer routine maintenance, emergency repairs, and secure hangar space to keep your aircraft in peak condition.",
    image: serviceImage3,
  },
  {
    title: "General Aviation Support",
    description:
      "From obtaining permits to operational management, we support aviation professionals in meeting regulatory requirements and maintaining operational efficiency.",
    image: serviceImage4,
  },
  {
    title: "Aircraft Procurement & Sales",
    description:
      "We assist in purchasing and selling aircraft, providing expert consultation to match buyers with the perfect aircraft for their needs.",
    image: serviceImage5,
  },
  {
    title: "Aircraft Parts Sales & Procurement",
    description:
      "We source high-quality aircraft parts to ensure safety and performance. Our extensive network allows us to procure the best components for various aircraft models.",
    image: serviceImage6,
  },
  {
    title: "Medical Evacuation",
    description:
      "We provide rapid and reliable air ambulance services for critical patients. Our medical evacuation solutions ensure safe transport with specialized equipment and trained professionals, delivering urgent care when every second counts.",
    image: serviceImage7,
  },
];

const Services = () => {
  const cardsRef = useRef([]);

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
    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-container">
      <div className="services-header">
        {/* <img
          src={serviceImage}
          alt="Aircraft Services"
          className="services-img"
        /> */}
        <h2>Our Services</h2>
      </div>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div
            className="service-card"
            ref={(el) => (cardsRef.current[index] = el)}
            key={service.title}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-card-img"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
