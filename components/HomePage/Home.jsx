import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Head from "next/head";
import styles from "./Home.module.css";
import Hero from "./Hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Goals from "./Goals/Goals";
import Counter from "./Counter/Counter";
import Footer from "./Footer/Footer";
import Testimonials from "./Testimonials/Testimonials";
import FAQ from "./FAQ/FAQ";
import Link from "next/link";

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
          title="Aspirants Nepal"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Aspirants Nepal</title>
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
                We are tech company helping and inspirng youths/aspirants to get successfully pass entrance exam of +2 entrance, bachelor entrance (such as CEE, Engineering), Loksewa, License entrance with languages entrance preparation coming in near future.
              </p>
              <Link href="/login">
                <button className={styles.herobtn} data-aos="zoom-in" disabled>
                  We are coming soon...
                </button>
              </Link>
            </div>
          </div>
          <div
            className={styles.heroright + "  col-xl-4 col-md-4  p-0 m-0"}
            data-aos="zoom-in-left"
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
