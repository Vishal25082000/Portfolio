import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.jpg";
import contactImg from "../assets/contact.png";
import menu from "../assets/bgg.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="LOGO" className="logo" />
      <div className="menu">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contactpage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menuListItem"
        >
          Portfolio
        </Link>
      </div>
      <button
        className="menu_button"
        onClick={() => {
          document
            .getElementById("contactpage")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="menu_img" /> Contact Me
      </button>

      <img
        src={menu}
        alt="menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navmenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contactpage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
