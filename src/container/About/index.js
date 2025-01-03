import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroImgSect from "../../components/Hero/heroimgsect";
import AboutContent from "../../components/AboutContent";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImgSect heading="About" text="I am a Front-end Developer"/>
    <AboutContent/>
      <Footer />
    </>
  );
};
export default About;
