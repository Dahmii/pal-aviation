import React from "react";
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
import AboutUs from "./pages/About-us/About-us"; // Import your About Us page
import RequestQuote from "./pages/RequestQuote/RequestQuote"; // Import Request Quote page

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
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
