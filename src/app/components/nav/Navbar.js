import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./Navbar.css";
import "../../App.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if (window.scrollY < 20) {
      setNavbar(!navbar);
    }
  };
  const handleCloseMobile = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/my-app/" className="navbar-logo" onClick={handleCloseMobile}>
            Holiday
            <i className="fas fa-umbrella-beach" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleCloseMobile}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/my-app/services"
                className="nav-links"
                onClick={handleCloseMobile}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/my-app/sign-up"
                className="nav-links-mobile"
                onClick={handleCloseMobile}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonSize="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};
