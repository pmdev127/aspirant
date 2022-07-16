import React, { useEffect } from "react";
import styles from "./Hero.module.css";
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
      <div className={styles.hero + " container-fluid"} data-aos="fade-in">
        <div className={styles.header}>
          <h1 data-aos="zoom-in-down">What You Can Expect Here?</h1>
          <p data-aos="zoom-out">
          Aspirants Nepal is Nepal's growing education enterprise which inspires students for different field of entrance preparation by means of exams and learning mechanism.
          
          </p>
        </div>
        <div className={styles.main}>
          <div className="container-fluid p-0">
            <div className="row d-flex justify-content-center align-items-center m-0">
              <div className={styles.heroImgContainer + " col-md-6 col-sm-6"}>
                <div className={styles.heroImg1} data-aos="fade-down-right" />
                <div className={styles.heroImg2} data-aos="fade-up-right"></div>
              </div>
              <div className={styles.heroContent + " col-md-6 col-sm-6"}>
                <h2 data-aos="zoom-in-up">Hey, Aspirants!</h2>
                <p data-aos="zoom-in-down">
                One of the best outcomes expected for choosing an Aspirants Nepal is networking and establishing connections with fellow peers.                 </p>
                <p
                  className={styles.heroContentLastChild}
                  data-aos="zoom-in-up"
                >
                  We will prepare all aspirants of our family through 1000+ questions and hundreads of set models with weekly live test and motivating those student by rewarding the topper one. Follow our facebook and instagram page for exciting rewards offer and many more.
                </p>
                <div className="row">
                  <button
                    className="col btn btn-success m-2 p-2"
                    data-aos="fade-up-left"
                  >
                    +2 Entrance Preparation
                  </button>
                  <button
                    className="col btn btn-primary m-2 p-2"
                    data-aos="fade-down-right"
                  >
                    Bachelor Entrance Preparation
                  </button>
                  <button
                    className="col btn btn-danger m-2 p-2"
                    data-aos="fade-up-right"
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
