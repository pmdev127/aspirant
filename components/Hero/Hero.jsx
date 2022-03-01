import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/images/pm-phy.jpg";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div className={styles.hero + " container-fluid"}>
        <div className={styles.header}>
          <h1 data-aos="fade-right">What You Can Expect Here?</h1>
          <p data-aos="fade-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            incidunt veniam. Voluptatibus quibusdam corporis sequi in
            consectetur tempora ipsam esse.
          </p>
        </div>
        <div className={styles.main}>
          <div className="container-fluid p-0">
            <div className="row d-flex justify-content-center align-items-center m-0">
              <div className={styles.heroImgContainer + " col-md-6 col-sm-6"}>
                <div className={styles.heroImg1} data-aos="zoom-in-down" />
                <div className={styles.heroImg2} data-aos="zoom-in-up" />
              </div>
              <div className={styles.heroContent + " col-md-6 col-sm-6"}>
                <h2 data-aos="fade-in">Hey, Aspirants!</h2>
                <p data-aos="fade-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque eos iusto modi impedit, cumque necessitatibus
                  provident sit. Autem, possimus odio.
                </p>
                <p className={styles.heroContentLastChild} data-aos="fade-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque eos iusto modi impedit, cumque necessitatibus
                  provident sit. Autem, possimus odio.
                </p>
                <div className="row">
                  <button
                    className="col btn btn-success m-2 p-2"
                    data-aos="flip-left"
                  >
                    +2 Entrance Preparation
                  </button>
                  <button
                    className="col btn btn-primary m-2 p-2"
                    data-aos="flip-up"
                  >
                    Bachelor Entrance Preparation
                  </button>
                  <button
                    className="col btn btn-danger m-2 p-2"
                    data-aos="flip-right"
                  >
                    Loksewa Entrance Preparation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
