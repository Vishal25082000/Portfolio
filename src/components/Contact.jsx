import React from "react";
import "./Contact.css";
import github from "../assets/git.png";
import facebook from "../assets/facebook.jpeg";
import linkdine from "../assets/linkedin.png";
const Contact = () => {
  return (
    <section id="contactpage">
      <div className="contact">
        <h1 className="conatctPageTitle">Contact Me</h1>
        <span className="contactDesp">
          please fill out the form below to discuss further.
        </span>
        <form action="" className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
        </form>
        <div className="links">
         <a href="https://github.com/Vishal25082000">
            <img src={github} alt="Github" className="link" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100046044279827&mibextid=ZbWKwL">
            <img src={facebook} alt="Facebook" className="link" />
          </a>
          <a href="https://www.linkedin.com/in/vishal-kumar-8a17b01b3">
            <img src={linkdine} alt="linkdine" className="link" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
