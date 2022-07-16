import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./Testimonials.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div className={styles.testimonials + " section"}>
        <h1 data-aos="zoom-in-down">Our Founder Voice</h1>
        <p className={styles.testimonialpar} data-aos="zoom-out">
          We aim to produce successfully best candidate for coming different entrance exams such as CEE, Engineering, AG/VET/Forestry, Loksewa and many more with available resources.
        </p>
        <div className="container" data-aos="fade-up">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={10000}
          >
             <div>
              <img src="pawan.jpg" className={styles.carouselImage} />
              <div className={styles.myCarousel}>
                <h3>Pawan Kharel</h3>
                <h4>CEO, Aspirants Nepal</h4>
                <p>
                  I would like to say that your decision to join at our online platform will help you to fuel and grow to meet the aspiration of your life.
                  Join with our family and get benefits.
                </p>
              </div>
            </div>
            <div>
              <img src="pm.jpg" className={styles.carouselImage} />
              <div className={styles.myCarousel}>
                <h3>Prabin Bhusal</h3>
                <h4>CTO, Aspirants Nepal</h4>
                <p>
                  Aspirants Nepal expects all the aspirants for good entrance preparation through different type of exam available here such as mock up test, weekly live test and rewarding toppers.
                </p>
              </div>
            </div>
           
           
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
