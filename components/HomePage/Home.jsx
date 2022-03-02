import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";
import styles from "./Home.module.css";
import Hero from "../Hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Goals from "../Goals/Goals";
import Counter from "../Counter/Counter";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <div className={styles.homepage}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Project Build</title>
        <meta name="description" content="Aspirant Nepal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header className={styles.headerContainer} data-aos="fade-in">
        <div className={styles.homepageHero + " row gx-0 "}>
          <div className={styles.heroleft + " col-xl-8 col-md-8  p-0 m-0"}>
            <div className={styles.leftHeroContainer + " container"}>
              <h1 data-aos="fade-up-right">
                Platform for<span>Nepali Aspirants.</span>
              </h1>
              <p data-aos="fade-up-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur excepturi adipisci quasi numquam, nobis ipsam illo
                ratione molestiae quisquam sint?
              </p>
              <button className={styles.herobtn} data-aos="zoom-in">
                Test Your Skills Now
              </button>
            </div>
          </div>
          <div
            className={styles.heroright + "  col-xl-4 col-md-4  p-0 m-0"}
          ></div>
        </div>
      </header>
      <main>
        <Hero />
        <Goals />
        <Counter />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
