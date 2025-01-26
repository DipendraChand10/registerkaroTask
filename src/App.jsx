import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";
import Services from "./Components/ServicesSection/Services";
import FAQSection from "./Components/FAQSection/FAQSection";
import BlogsExplore from "./Components/BlogsExplore/BlogsExplore";
import Footer from "./Components/Footer/Footer";
import Features from "./Components/Features/Features";

import Clients from "./Components/Client/Clients";
import ClientFooter from "./Components/Client/ClientFooter";
import ContactUs from "./Components/contact/ContactUs";
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
      <Clients />
      <ClientFooter />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
