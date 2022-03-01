import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light px-3 mt-2"
        data-aos="fade-in"
        data-aos-anchor-placement="top-center"
      >
        <div class="container">
          <a class="navbar-brand" href="#">
            {/* <Image src={logo} /> */}
            <strong>Aspirant Nepal</strong>
            <sub>beta</sub>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class=" collapse navbar-collapse   justify-content-center"
            id="navbarNav"
          >
            <ul className={styles.navbarul + " navbar-nav"}>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Disabled</a>
              </li>
            </ul>
          </div>
          <form className="collapse navbar-collapse flex-grow-0 justify-content-end">
            <button class="btn primarybtn ps-4 pe-4" type="button">
              Register
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
