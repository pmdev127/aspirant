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
        <h1 data-aos="zoom-in-down">Customers Say Nice Things</h1>
        <p className={styles.testimonialpar} data-aos="zoom-out">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          voluptates suscipit dolor sint obcaecati eius quisquam expedita
          facilis ipsam corrupti.
        </p>
        <div className="container" data-aos="fade-up">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
          >
            <div>
              <img src="pm.jpg" className={styles.carouselImage} />
              <div className={styles.myCarousel}>
                <h3>Prabin Bhusal</h3>
                <h4>Designer</h4>
                <p>
                  It's freeing to be able to catch up on customized news and not
                  be distracted by a social media element on the same site
                </p>
              </div>
            </div>
            <div>
              <img src="pm.jpg" className={styles.carouselImage} />
              <div className={styles.myCarousel}>
                <h3>Pawan Kharel</h3>
                <h4>Designer</h4>
                <p>
                  It's freeing to be able to catch up on customized news and not
                  be distracted by a social media element on the same site
                </p>
              </div>
            </div>
            <div>
              <img src="pm.jpg" className={styles.carouselImage} />
              <div className={styles.myCarousel}>
                <h3>Bigyan Luitel</h3>
                <h4>Designer</h4>
                <p>
                  It's freeing to be able to catch up on customized news and not
                  be distracted by a social media element on the same site
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
