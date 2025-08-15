import React from "react";
import "./About-us.css";
import Header from "../../components/Header/Header";

const AboutUs = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header
        showAnimatedText={false}
        showButton={false}
        title={
          <>
            About <span style={{ color: "#ff5a5f" }}>Pal Aviation</span>
          </>
        }
        subtitle="Discover our story, values, and commitment to luxury air travel."
      />
      <main>{/* Your about-us content goes here */}</main>
    </div>
  );
};

export default AboutUs;
