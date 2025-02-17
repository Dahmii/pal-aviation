import React from "react";
import "./Experience.css";
import img1 from "../../assets/img/experience-1.jpeg";
import img2 from "../../assets/img/experience-2.jpeg";

const Experience = () => {
  return (
    <section className="experience-container">
      <div className="content">
        <div className="text">
          <h2>Our Experience</h2>
          <ul>
            <li>
              <strong>Aircraft Purchase:</strong> Bombardier 6000 XRS (2019), 2
              × AW 139 (2020)
            </li>
            <li>
              <strong>Sales:</strong> Gulfstream GIV SP
            </li>
            <li>
              <strong>Leasing:</strong> Wet lease of Bombardier Dash 8 (2022)
            </li>
            <li>
              <strong>Regulatory Approvals:</strong>
              <ul className="sub-list">
                <li>
                  Full certification and obtained an Airline Operator’s
                  Certificate (AOC) for a local operator in Nigeria
                </li>
                <li>
                  Full certification of a Maintenance Repair Organization (MRO)
                  for a local operator in Nigeria
                </li>
                <li>
                  Obtained permits and built 2 fully functional hangars in
                  Nigeria
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="experience-img">
          <img src={img1} alt="Aircraft Hangar" />
          <img src={img2} alt="Private Jet Maintenance" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
