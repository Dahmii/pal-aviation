import React from "react";
import "./Membership.css";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <section className="membership-container">
      <div className="membership-content">
        <div className="membership-text">
          <h2>Memberships</h2>
          <p>
            Experience the pinnacle of private air travel with PalJet. Our
            exclusive membership grants you access to a world-class fleet and
            24/7 personalized concierge service—ensuring every journey is
            seamless, stylish, and unforgettable.
          </p>
          <p>
            Call <span>+234 4915-630-1638</span> to speak with a PalJet Sales
            Advisor today.
          </p>
        </div>
        <div className="membership-btn">
          <Link to="/members">view membership</Link>
        </div>
      </div>
    </section>
  );
};

export default Membership;
