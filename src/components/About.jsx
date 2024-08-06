import React from "react";
import "./About.css";
import myImg from "../assets/logo1.png";
const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <span className="hello">Hello</span>
        <span className="aboutText">
          I'm <span className="aboutname">Vishal Kumar</span> <br />
          Front-End Developer
        </span>
        <p className="aboutpara">
          Let me intorduce my self in 5 words.{" "}
          <span className="highlight">
            Responsible,creative,open-minded,friendly <br /> and ambitious
          </span>{" "}
          <span className="aboutdesi">Font End Developer.</span>
        </p>
      </div>
      <img src={myImg} alt="Profile_img" className="bg_img" />
    </section>
  );
};
export default About;
