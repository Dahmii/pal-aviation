import React from "react";
import "./assets/fonts/fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Fleet from "./components/Fleet/Fleet";
import Banner from "./components/Banner/Banner";
import Membership from "./components/Membership/Membership";
import Plan from "./components/Plan/Plan";
import AboutUs from "./pages/About-us/About-us";
import RequestQuote from "./pages/RequestQuote/RequestQuote";
import FleetPage from "./pages/Fleet/FleetPage";
import Members from "./pages/Members/Members";
import Xperience from "./pages/Experience/Xperience";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Plan />
              <Membership />
              <Fleet />
              <Experience />
              <About />
              <Services />
              <Contact />
              <Banner />
            </>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/FleetPage" element={<FleetPage />} />
        <Route path="/members" element={<Members />} />
        <Route path="/xperience" element={<Xperience />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
