import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import Services from "../Services";
import Front from "../Front";
import Team from "../Team";
import Pricing from "../Pricing";
// import mobileOnlySlider from "../mobileOnlySlider";
// import Testimonials from "../Testimonials";
// import Footer from "../Footer";

function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <HeroSection />
      <Services />
      <Front />
      {/* <mobileOnlySlider /> */}
      <Team />
      <Pricing />
      {/* <Testimonials />
      <Footer /> */}
    </>
  );
}

export default Home;
