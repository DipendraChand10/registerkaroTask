import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import LogoSection from "./Components/LogoSection";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <LogoSection />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
