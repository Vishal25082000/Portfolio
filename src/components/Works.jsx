import React from "react";
import "./Work.css";
import imdb from "../assets/imdb.jpg";
import ping from "../assets/ping.jpg";
import myntra from "../assets/Myntra.png";
const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksdesp">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect.I am excited to bring my skills and
        experience to help businesses achive their goals and creat a strong
        online presence.
      </span>
      <div className="worksImgs">
        <a href="https://vishal25082000.github.io/imdb_clone/">
          <img src={imdb} alt="" className="worksImg" />
        </a>
        <a href="https://vishal25082000.github.io/Ping_Pong_Game/">
          <img src={ping} alt="" className="worksImg" />
        </a>
       <a href="https://myntra-clone-beta-olive.vercel.app/"><img src={myntra} alt="" className="worksImg" /></a> 
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};
export default Works;
