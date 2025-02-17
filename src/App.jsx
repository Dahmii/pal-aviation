import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
