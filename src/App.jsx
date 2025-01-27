import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";
import Services from "./Components/ServicesSection/Services";
import FAQSection from "./Components/FAQSection/FAQSection";
import BlogsExplore from "./Components/BlogsExplore/BlogsExplore";
import Footer from "./Components/Footer/Footer";
import Features from "./Components/Features/Features";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Services />
      <FAQSection />
      <BlogsExplore />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
