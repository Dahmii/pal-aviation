import React from "react";
import "./Members.css";
import img1 from "../../assets/img/member1.jpeg";
import img2 from "../../assets/img/member2.jpeg";
import img3 from "../../assets/img/member3.jpeg";

const Members = () => {
  return (
    <section className="members-container">
      <div className="members-content">
        <div className="members-header">
          <h2>Our Membership Plans</h2>
          <p>Choose the plan that fits your lifestyle and travel needs.</p>
        </div>

        <div className="members-cards">
          <div className="members-card">
            <img src={img1} alt="Basic Membership" />
            <h3>Basic Membership</h3>
            <p>
              Enjoy flexible access to private flights with essential benefits,
              designed to make your travel simple, comfortable, and convenient.
            </p>
          </div>

          <div className="members-card">
            <img src={img2} alt="Program Membership" />
            <h3>Program Membership</h3>
            <p>
              A premium flight subscription offering guaranteed priority access
              to our entire fleet, with personalized services and tailored
              travel solutions to match your lifestyle and business needs.
            </p>
          </div>

          <div className="members-card">
            <img src={img3} alt="Premium Membership" />
            <h3>Premium Membership</h3>
            <p>
              The ultimate private aviation experience, with unlimited priority
              access to our fleet, exclusive luxury benefits, personalized
              concierge services, and unmatched flexibility for global travel.
            </p>
          </div>
        </div>

        <div className="members-contact">
          <p>
            Call <span>+234 4915-630-1638</span> to speak with a PalJet Sales
            Advisor today and discover which membership is right for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Members;
