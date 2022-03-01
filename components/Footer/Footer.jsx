import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={styles.footer + " section"}>
        <p>
          <em>Aspirant Nepal</em>
        </p>
        <h2>Making Competitive Candidate</h2>
        <ul className={styles.footerNav}>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Blogs</li>
          <li>Login/Register</li>
        </ul>
        <p className={styles.copyright}>
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
