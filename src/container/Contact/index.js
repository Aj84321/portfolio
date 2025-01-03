import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroImgSect from "../../components/Hero/heroimgsect";
import Form from "../../components/Form";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImgSect heading="Contact" text="Lets have a Chat"/>
      <Form/>
      <Footer />
    </>
  );
};
export default Contact;
