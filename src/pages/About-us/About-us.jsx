import React from "react";
import "./About-us.css";
import Header from "../../components/Header/Header";
import aboutImg from "../../assets/img/about.JPG";

const AboutUs = () => {
  return (
    <div>
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

      <main className="about-us-container">
        {/* Intro Section with Image */}
        <section className="about-intro">
          <div className="intro-image">
            <img src={aboutImg} alt="Private Jet" />
          </div>
          <div className="intro-text">
            <p>
              <strong>Pal Aviation</strong> is a premier private jet charter and
              maintenance company serving travelers who demand luxury and
              seamless air travel. Since our establishment in 2021, we have
              built a strong track record of delivering exceptional service
              across both international and domestic flights.
            </p>
            <p>
              At Pal Aviation, we are dedicated to excellence, combining luxury,
              safety, and reliability in every journey. Our experienced
              professionals tailor each flight to meet your unique needs, while
              our flexible scheduling and diverse fleet ensure convenience
              without compromise. Whether for business or leisure, Pal Aviation
              remains your trusted partner in private aviation.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="about-card">
          <h2>Our Vision</h2>
          <p>
            We aspire to be the most trusted partner for discerning travelers,
            delivering seamless journeys where every detail matters. At Pal
            Aviation, luxury is not just an experience—it’s a standard.
          </p>
        </section>

        {/* Mission Section */}
        <section className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide distinguished private aviation experiences
            by combining precision, luxury, and personalized care. We are
            committed to anticipating client needs, upholding the highest
            standards of safety and service, and creating journeys defined by
            comfort, trust, and exclusivity.
          </p>
        </section>

        {/* Values Section */}
        <section className="about-card">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Luxury:</strong> Every detail of your journey is
              thoughtfully curated.
            </li>
            <li>
              <strong>Precision:</strong> We deliver seamless experiences with
              meticulous planning.
            </li>
            <li>
              <strong>Trust:</strong> Safety, reliability, and discretion are at
              the core of everything we do.
            </li>
            <li>
              <strong>Exclusivity:</strong> Tailored experiences that reflect
              your unique preferences.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
