import React, { useEffect } from "react";
import styles from "./FAQ.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div className={styles.faq + " section"}>
        <div className={styles.faqHeader}>
          <h1 data-aos="zoom-in-down">Frequently Raised Questions</h1>
          <p className={styles.faqp} data-aos="fade-in">
            If you have any queries kindly contact with us with given details.
          </p>
        </div>
        {/* accordion */}
        <div className="container">
          <div className="accordion" id="accordionExample" data-aos="zoom-in">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How can I get benefits from Aspirants Nepal ?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" >
                  <strong>Our aim is to produce competitive candidate for any entrance preparation.</strong> 
                  We will provide with thousands of questions for all categories: +2 entrance, bachelor entrance, loksewa and license for now.Weekly live test will be plus point for student enrolled here.
                  We will be providing essentials information, notices, routines and all resources so that student should not spend time searching these stuffs online.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What makes Aspirants Nepal different from other ?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                 Weekly live test with rewarding options and thousands of available questions will be our special offer given to our users. And 4 categories of loksewa, license, +2 entrance and bachelor entrance in same platform has made us unique.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
               What is procedure to get benefits from this site ?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>No fee. It's free. <br /></strong> 
                  Just Loign and enrolled any set models or practise session in given dashboard.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
               When full version of Aspirants Nepal will be launched ?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>By Asoj 1. <br /></strong> 
                  We are working hard for questions and making secure website so its getting late. Kudos to our programmers and staffs who are working hard to achieve this goal.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
