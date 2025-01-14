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
            <p>HI, I'm a Freelancer.</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>

        </div>
      </div>
    </>
  );
};
export default HeroImg;
