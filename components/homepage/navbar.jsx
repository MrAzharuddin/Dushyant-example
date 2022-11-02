import React, { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [isActive, setActive] = useState(false);
  const menuAnim = () => {
    setActive(!isActive);
  };
  var val = isActive ? "menuicon active" : "menuicon";
  var itemsVal = isActive ? "menu active" : "menu";
  return (
    <div className="navbar">
      <nav>
        <Logo />
        <Menuicon status={val} func={menuAnim} />
      </nav>
      <MenuItems statusVal={itemsVal} />
    </div>
  );
}

function Menuicon(props) {
  return (
    <div className={props.status} onClick={props.func}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <a href="#">Let it fly</a>
    </div>
  );
}

function MenuItems(props) {
  return (
    <div className={props.statusVal}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="social">
        <a href="#">
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
        <a href="#">
          <i className="fab fa-codepen"></i>
          <span>Codepen</span>
        </a>
        <a href="#">
          <i className="fab fa-facebook"></i>
          <span>Facebook</span>
        </a>
        <a href="#">
          <i className="fab fa-hackerrank"></i>
          <span>Hackerrank</span>
        </a>
      </div>
    </div>
  );
}
