import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-banner">
      <div className="overlay">
        <div className="contact-content">
          {/* <h2>Contact Us</h2> */}
          {/* <p>
            Ready to experience the freedom and luxury of private aviation?{" "}
            <br />
            Contact <strong>Pal Aviation</strong> today and let us tailor your
            journey to perfection.
          </p> */}

          <div className="contact-info">
            <h3>Our Address</h3>
            <p>
              Quits Aircraft Hanger, Execujets, <br />
              Murtala Mohammed International Airport, <br />
              Ikeja, Lagos, Nigeria
            </p>
          </div>

          <div className="contact-details">
            <h3>Get in Touch</h3>
            <p>
              📞 <strong>Phone:</strong> +234 4915-630-1638
            </p>
            <p>
              📧 <strong>Email:</strong> info@palaviation.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
