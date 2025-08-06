import React from "react";
import "./Fleet.css";
import img1 from "../../assets/img/Bombardier-Global-6000.jfif";
import img2 from "../../assets/img/Gulfstream-GIV-SP.jfif";
import img3 from "../../assets/img/Bombardier-Dash-8.jfif";

const Fleet = () => {
  return (
    <section className="fleet-container">
      <div className="fleet-content">
        <div className="fleet-text">
          <h2>Fleet</h2>
          <p>
            PalJet offers diverse fleets that cater to various travel needs,
            from executive jets designed for efficient business trips to
            Luxurious cabins perfect for family vacations and group getaways, as
            well as commercial airliners.
          </p>
        </div>

        <div className="fleet-cards">
          <div className="fleet-card">
            <img src={img1} alt="" />

            <h3>Bombardier 6000 XRS (2019)</h3>
            <p>
              Experience unmatched luxury and performance with the Bombardier
              Global 6000 XRS. Designed for long-range travel, this jet combines
              speed, comfort, and cutting-edge technology. Its spacious,
              elegantly appointed cabin is perfect for business or leisure,
              offering a smooth and seamless journey across continents.
            </p>
          </div>

          <div className="fleet-card">
            <img src={img2} alt="" />

            <h3>Gulfstream GIV SP</h3>
            <p>
              The Gulfstream GIV-SP is a timeless classic in private aviation,
              known for its reliability, performance, and comfort. With a
              spacious cabin, extended range, and advanced avionics, it’s ideal
              for both business and leisure travel, delivering a smooth and
              luxurious flight experience every time.
            </p>
          </div>

          <div className="fleet-card">
            <img src={img3} alt="" />

            <h3>Bombardier Dash 8 (2022)</h3>
            <p>
              The Bombardier Dash 8 (2022) is a modern, fuel-efficient turboprop
              aircraft designed for short to medium-haul regional travel.
              Renowned for its reliability, comfort, and excellent performance
              on shorter runways, it offers a quiet cabin and smooth
              ride—perfect for group charters and regional operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
