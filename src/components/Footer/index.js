import React from "react";
import "./footerStyles.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>Jaipur</p>
                <p>Rajasthan</p>
              </div>
            </div>

            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                8952008955
              </h4>
            </div>

            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "fff", marginRight: "2rem" }}
                />
                jainanand84321@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>About</h4>
            {/* <p>This is Faxal. I design the new projects.</p> */}
            <div className="social">
              <FaFacebook
                size={30}
                style={{ color: "fff", marginRight: "1rem" }}
              />
              <FaTwitter
                size={30}
                style={{ color: "fff", marginRight: "1rem" }}
              />

              <FaLinkedin
                size={30}
                style={{ color: "fff", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
