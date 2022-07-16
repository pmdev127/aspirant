import React, { useEffect } from "react";
import styles from "./Goals.module.css";
import { GiRead } from "react-icons/gi";
import { BiBookReader } from "react-icons/bi";
import { MdOutlineQuiz } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Goals = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div className="section">
        <div className={styles.goals}>
          <div className="container" data-aos="fade-in">
            <div className={styles.goalsRow + " row"}>
              <div className={styles.goalsCol + " col-md-8 col-lg-4 col-sm-12"}>
                <h1 data-aos="fade-right">Prepare Yourself As A Aspirant</h1>
                <button className={styles.button} data-aos="fade-left">
                  Get Strated
                </button>
              </div>
              <div
                className={styles.goalsCol1 + " col-md-6 col-lg-4 col-sm-12"}
              >
                <div className={styles.card} data-aos="flip-up">
                  <BiBookReader className={styles.CardIcon} />
                  <h3>Practise Thousands Questions</h3>
                  <p>
                    Practise from thousands of available questions which aim to make you perfect for any type of questions asked in respective entrance exams.
                  </p>
                </div>
              </div>
              <div
                className={styles.goalsCol1 + " col-md-6 col-lg-4 col-sm-12"}
              >
                <div className={styles.card} data-aos="flip-down">
                  <MdOutlineQuiz className={styles.CardIcon} />
                  <h3>Prepare Yourself With MCQ</h3>
                  <p>
                    Hundreds of set models and weekly live exams with latest curriculum pattern will prepare you enoughly for any kind of MCQ's to face with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
