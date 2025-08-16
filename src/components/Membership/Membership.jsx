import React from "react";
import "./Membership.css";
import img1 from "../../assets/img/member1.jpeg";
import img2 from "../../assets/img/member2.jpeg";
import img3 from "../../assets/img/member3.jpeg";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <section className="membership-container">
      <div className="membership-content">
        <div className="membership-text">
          <h2>Memberships</h2>
          <p>
            Experience the pinnacle of private air travel with Pal Aviation. Our
            exclusive membership grants you access to a world-class membership
            and 24/7 personalized concierge service—ensuring every journey is
            seamless, stylish, and unforgettable.
          </p>
          <p>
            Call <span>+234 4915-630-1638</span> to speak with a PalJet Sales
            Advisor today.
          </p>
        </div>

        <div className="membership-cards">
          <div className="membership-card">
            <img src={img1} alt="" />

            <h3>Basic Membership</h3>
            <p>
              Enjoy flexible access to private flights with essential benefits,
              designed to make your travel simple, comfortable, and convenient.
            </p>
          </div>

          <div className="membership-card">
            <img src={img2} alt="" />

            <h3>Program Membership</h3>
            <p>
              A premium flight subscription offering guaranteed priority access
              to our entire fleet, with personalized services and tailored
              travel solutions to match your lifestyle and business needs.
            </p>
          </div>

          <div className="membership-card">
            <img src={img3} alt="" />

            <h3>Premium Membership</h3>
            <p>
              The ultimate private aviation experience, with unlimited priority
              access to our fleet, exclusive luxury benefits, personalized
              concierge services, and unmatched flexibility for global travel.
            </p>
          </div>
        </div>
        <div className="membership-btn">
          <Link to="/members">view membership</Link>
        </div>
      </div>
    </section>
  );
};

export default Membership;
