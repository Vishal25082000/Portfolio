import React from "react";
import "./Skills.css";
import img from "../assets/work.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">My Service</span>
      <span className="skillDescription">
        I am a skilled and passionate web designer in creating visually
        appealing and user-friendly website.I have strong understanding of
        design.i am proficient in HTML,CSS,JAVASCRIPT,as well as design Web
        Pajes.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={img} alt="Developer_Img" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              As a front-end developer, I bring user interfaces to life with
              clean, efficient, and responsive designs.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={img} alt="Developer_Img" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              As a front-end developer, I bring user interfaces to life with
              clean, efficient, and responsive designs.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={img} alt="Developer_Img" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              As a front-end developer, I bring user interfaces to life with
              clean, efficient, and responsive designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
