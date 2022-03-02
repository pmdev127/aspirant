import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div className={styles.footer + " section"}>
        <p data-aos="zoom-in-down">
          <em>Aspirant Nepal</em>
        </p>
        <h2 data-aos="zoom-out">Making Competitive Candidate</h2>
        <ul className={styles.footerNav} data-aos="fade-up">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Blogs</li>
          <li>Login/Register</li>
        </ul>
        <p className={styles.copyright} data-aos="zoom-in">
          &copy;2022 Aspirant Nepal, All Right Reserved
        </p>
        <ul className={styles.footersocial}>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
