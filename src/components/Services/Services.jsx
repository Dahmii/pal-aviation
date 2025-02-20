import React from "react";
import "./Service.css";
import serviceImage from "../../assets/img/services-1.jpeg";

const servicesList = [
  {
    title: "Private Jet Hire",
    description:
      "Enjoy the ultimate convenience and exclusivity with our private jet charter services. We handle flight permits, clearances, catering, and ground transportation for a stress-free experience.",
  },
  {
    title: "Flight Planning & Support",
    description:
      "We provide expert flight planning, including route optimization, weather monitoring, and risk assessment, ensuring seamless and efficient travel.",
  },
  {
    title: "Aircraft Maintenance & Repair",
    description:
      "Our certified technicians offer routine maintenance, emergency repairs, and secure hangar space to keep your aircraft in peak condition.",
  },
  {
    title: "General Aviation Support",
    description:
      "From obtaining permits to operational management, we support aviation professionals in meeting regulatory requirements and maintaining operational efficiency.",
  },
  {
    title: "Aircraft Procurement & Sales",
    description:
      "We assist in purchasing and selling aircraft, providing expert consultation to match buyers with the perfect aircraft for their needs.",
  },
  {
    title: "Aircraft Parts Sales & Procurement",
    description:
      "We source high-quality aircraft parts to ensure safety and performance. Our extensive network allows us to procure the best components for various aircraft models.",
  },
];

const Services = () => {
  return (
    <section className="services-container">
      <div className="services-content">
        <div className="services-img">
          <img src={serviceImage} alt="Aircraft Services" />
        </div>

        <div className="services-text">
          <h2>Our Services</h2>
          <ul>
            {servicesList.map((service, index) => (
              <li key={index}>
                <strong>{service.title}:</strong> {service.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
