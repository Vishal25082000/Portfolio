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
          <img src={github} alt="Github" className="link" />
          <img src={facebook} alt="Facebook" className="link" />
          <img src={linkdine} alt="linkdine" className="link" />
        </div>
      </div>
    </section>
  );
};
export default Contact;
