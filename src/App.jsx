import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer.jsx";
import ContactUs from "./Components/ContactUs";

import "./Home.css";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <ContactUs />
      <Footer />
    </>
  );
}
