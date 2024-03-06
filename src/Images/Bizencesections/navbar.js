import React, { useState } from 'react';
import './navbar.css'; // Import your CSS file for styling
import Logo from "../Bizenceimg/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbaar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Toggle Button for Mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Items */}
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li>
        <AnchorLink href="#About">About</AnchorLink>
        </li>
        <li>
          <a href="#times">Timeline</a>
        </li>
       
        <li>
          <a href="#fae">Faq</a>
        </li>
        <li>
          <a href="#end">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbaar;

