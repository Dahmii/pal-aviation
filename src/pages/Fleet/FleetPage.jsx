import React, { useEffect, useRef } from "react";
import img1 from "../../assets/img/Bombardier-Global-6000.jfif";
import img2 from "../../assets/img/Gulfstream-GIV-SP.jfif";
import img3 from "../../assets/img/Bombardier-Dash-8.jfif";
import embraer from "../../assets/img/Embraer.png";
import challanger1 from "../../assets/img/605.png";
import challanger2 from "../../assets/img/604.png";
import Hawker from "../../assets/img/Hawker.png";
import Learjet from "../../assets/img/Learjet.png";
import AW139 from "../../assets/img/AW139.png";
import AW109 from "../../assets/img/AW109.png";
import "./FleetPage.css";
import Banner from "../../components/Banner/Banner";

const FleetPage = () => {
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
    <section className="fleet-container">
      <div className="fleet-content">
        <div className="fleet-header">
          <h2>Fleet</h2>
          <p>Discover Our Exquisite Fleet Collection</p>
        </div>

        <div
          className="fleet-banner"
          ref={(el) => (bannersRef.current[0] = el)}
        >
          <div className="left">
            <h2>Bombardier</h2>
            <p>
              Bombardier Global Express 7,500 – Elite long-range jet for 16–18
              passengers, offering a 7,700-mile range (up to 17 hours nonstop).
              Enjoy complimentary gourmet food and drinks, onboard Wi-Fi, and
              premium entertainment for an exceptional travel experience.
            </p>
          </div>
          <div className="right">
            <img src={img1} alt="Aircraft Hangar" />
          </div>
        </div>

        <div
          className="fleet-banner"
          ref={(el) => (bannersRef.current[1] = el)}
        >
          <div className="right">
            <img src={img2} alt="Aircraft Hangar" />
          </div>
          <div className="left">
            <h2>Gulfstream G550/GIV</h2>
            <p>
              Sophisticated long-range jet seating up to 14 passengers in
              comfort and style. Enjoy complimentary gourmet food and drinks,
              seamless onboard Wi-Fi, and premium entertainment throughout your
              journey. Manufactured in August 2013, this aircraft blends
              timeless elegance with reliable performance for both business and
              leisure travel.
            </p>
          </div>
        </div>

        <div
          className="fleet-banner"
          ref={(el) => (bannersRef.current[2] = el)}
        >
          <div className="left">
            <h2>Embraer Legacy 600</h2>
            <p>
              Spacious and stylish jet with seating for up to 14 passengers,
              offering a 3,600-mile range (up to 7 hours nonstop). Enjoy
              complimentary food and drinks, onboard Wi-Fi, and premium
              entertainment. Manufactured in April 2009, this aircraft combines
              comfort, performance, and reliability for an exceptional travel
              experience.
            </p>
          </div>
          <div className="right">
            <img src={embraer} alt="Aircraft Hangar" />
          </div>
        </div>

        <div
          className="fleet-banner"
          ref={(el) => (bannersRef.current[3] = el)}
        >
          <div className="right">
            <img src={challanger1} alt="Aircraft Hangar" />
          </div>
          <div className="left">
            <h2>Challenger 605</h2>
            <p>
              Elegant private jet with capacity for 11–12 passengers, offering a
              4,000-mile range (up to 7 hours nonstop). Enjoy complimentary food
              and drinks while traveling in comfort and style. Manufactured in
              November 2013, this aircraft delivers a perfect blend of
              performance, luxury, and reliability.
            </p>
          </div>
        </div>

        <div
          className="fleet-banner"
          ref={(el) => (bannersRef.current[4] = el)}
        >
          <div className="left">
            <h2>Challenger 604</h2>
            <p>
              Luxury private jet seating 11–12 passengers, with a 4,000-mile
              range (up to 7 hours nonstop). Enjoy complimentary food and drinks
              while experiencing exceptional comfort and reliability.
              Manufactured in 2005, this aircraft is ideal for both business and
              leisure travel.
            </p>
          </div>
          <div className="right">
            <img src={challanger2} alt="Aircraft Hangar" />
          </div>
        </div>

        <div
          className="fleet-banner"
          ref={(el) => (bannersRef.current[5] = el)}
        >
          <div className="right">
            <img src={Hawker} alt="Aircraft Hangar" />
          </div>
          <div className="left">
            <h2>Hawker XP</h2>
            <p>
              Versatile midsize jet with seating for up to 8 passengers and a
              2,500-mile range (around 5 hours nonstop). Enjoy complimentary
              food and drinks in a comfortable, stylish cabin. Manufactured in
              February 2005, this aircraft offers a perfect balance of
              performance and convenience.
            </p>
          </div>
        </div>

        <div
          className="fleet-banner"
          ref={(el) => (bannersRef.current[6] = el)}
        >
          <div className="left">
            <h2>Learjet</h2>
            <p>
              Sleek and efficient light jet accommodating up to 8 passengers,
              with a 1,971-mile range (around 4 hours nonstop). Complimentary
              food and drinks are provided for a comfortable journey.
              Manufactured in 2007, this aircraft is ideal for quick, stylish
              getaways or business trips.
            </p>
          </div>
          <div className="right">
            <img src={Learjet} alt="Aircraft Hangar" />
          </div>
        </div>

        <div
          className="fleet-banner"
          ref={(el) => (bannersRef.current[7] = el)}
        >
          <div className="right">
            <img src={AW139} alt="Aircraft Hangar" />
          </div>
          <div className="left">
            <h2>AW139 Helicopter</h2>
            <p>
              Modern, high-performance helicopter with seating for up to 12
              passengers. Designed for speed, comfort, and versatility, it’s
              perfect for executive transport, special events, or scenic
              flights.
            </p>
          </div>
        </div>

        <div
          className="fleet-banner"
          ref={(el) => (bannersRef.current[8] = el)}
        >
          <div className="left">
            <h2>AW109 Helicopter</h2>
            <p>
              Sleek, twin-engine helicopter accommodating up to 5 passengers.
              Offers speed, comfort, and versatility, ideal for executive
              travel, VIP transfers, or scenic flights.
            </p>
          </div>
          <div className="right">
            <img src={AW109} alt="Aircraft Hangar" />
          </div>
        </div>
      </div>
      <Banner />
    </section>
  );
};

export default FleetPage;
