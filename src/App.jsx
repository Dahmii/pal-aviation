import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default App;
