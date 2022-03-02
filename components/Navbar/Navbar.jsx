import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
  const [navcheck, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    Aos.init({
      duration: 1000,
    });
  });

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <nav
        className={
          navcheck
            ? "navbar navbar-expand-lg navbar-dark fixed-top px-3 bg-dark"
            : "navbar navbar-expand-lg navbar-light fixed-top px-3 mt-2"
        }
        data-aos="fade-in"
        data-aos-anchor-placement="top-center"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* <Image src={logo} /> */}
            <strong>Aspirant Nepal</strong>
            <sub>beta</sub>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" collapse navbar-collapse   justify-content-center"
            id="navbarNav"
          >
            <ul className={styles.navbarul + " navbar-nav"}>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Disabled</a>
              </li>
            </ul>
          </div>
          <form className="collapse navbar-collapse flex-grow-0 justify-content-end">
            <button className="btn primarybtn ps-4 pe-4" type="button">
              Register
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
