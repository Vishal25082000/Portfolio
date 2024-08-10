import React from "react";
import "./Social.css";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="links">
      <a href="https://github.com/Vishal25082000" className="link">
        <FaGithub className="size" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100046044279827&mibextid=ZbWKwL"
        className="link"
      >
        <FaFacebook className="size"/>
      </a>
      <a
        href="https://www.linkedin.com/in/vishal-kumar-8a17b01b3"
        className="link"
      >
        <FaLinkedin className="size" />
      </a>
    </div>
  );
};
export default Social;
