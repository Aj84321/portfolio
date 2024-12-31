import React from "react";
import "./heroimg.css";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img
            className="intro-img"
            src="./assets/intro-bg.jpg"
            alt="IntroImg"
          ></img>
        </div>
        <div className="content">
            <p>Hi,</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>

        </div>
      </div>
    </>
  );
};
export default HeroImg;
