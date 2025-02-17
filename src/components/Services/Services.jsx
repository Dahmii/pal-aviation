import React from "react";
import "./Service.css";
import serviceImage from "../../assets/img/services-1.jpeg";

const servicesList = [
  "Aircraft Parts Purchase",
  "Aircraft Parts Repairs",
  "Aircraft Professional Cleaning & Toilet Services",
  "Aircraft Maintenance",
  "Aircraft Management and Operation",
  "Consulting",
  "Aircraft Sales and Purchase",
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
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
