import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Fleet from "./components/Fleet/Fleet";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Fleet />
      <Experience />
      <About />
      <Services />
      <Contact />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
