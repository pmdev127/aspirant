import React from "react";
import styles from "./Counter.module.css";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <>
      <div className={styles.counter + " section"}>
        <h1 data-aos="zoom-in-down">Counter</h1>
        <p data-aos="zoom-out">
          We are here for different categories aspirants to support them with available resources.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 mb-2">
              <div className={styles.card} data-aos="fade-up">
                <div className={styles.counterup}>
                  <CountUp start={0} end={4} duration={10} />+
                </div>

                <p>
                  <strong>Levels</strong>
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 mb-2">
              <div className={styles.card} data-aos="fade-up">
                <div className={styles.counterup}>
                  <CountUp start={0} end={75} duration={10} />+
                </div>

                <p>
                  <strong>Categories</strong>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-2">
              <div className={styles.card} data-aos="fade-up">
                <div className={styles.counterup}>
                  <CountUp start={0} end={235} duration={10} />+
                </div>

                <p>
                  <strong>Set Modles</strong>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-2">
              <div className={styles.card} data-aos="fade-up">
                <div className={styles.counterup}>
                  <CountUp start={0} end={1000} duration={10} />+
                </div>

                <p>
                  <strong>Questions</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
