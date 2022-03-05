import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "./Usersignup.module.css";

const district = [
  "achham",
  "arghakhanchi",
  "baglung",
  "baitadi",
  "bajhang",
  "bajura",
  "banke",
  "bara",
  "bardiya",
  "bhaktapur",
  "bhojpur",
  "chitwan",
  "dadeldhura",
  "dailekh",
  "dang deukhuri",
  "darchula",
  "dhading",
  "dhankuta",
  "dhanusa",
  "dholkha",
  "dolpa",
  "doti",
  "gorkha",
  "gulmi",
  "humla",
  "ilam",
  "jajarkot",
  "jhapa",
  "jumla",
  "kailali",
  "kalikot",
  "kanchanpur",
  "kapilvastu",
  "kaski",
  "kathmandu",
  "kavrepalanchok",
  "khotang",
  "lalitpur",
  "lamjung",
  "mahottari",
  "makwanpur",
  "manang",
  "morang",
  "mugu",
  "mustang",
  "myagdi",
  "nawalparasi",
  "nuwakot",
  "okhaldhunga",
  "palpa",
  "panchthar",
  "parbat",
  "parsa",
  "pyuthan",
  "ramechhap",
  "rasuwa",
  "rautahat",
  "rolpa",
  "rukum",
  "rupandehi",
  "salyan",
  "sankhuwasabha",
  "saptari",
  "sarlahi",
  "sindhuli",
  "sindhupalchok",
  "siraha",
  "solukhumbu",
  "sunsari",
  "surkhet",
  "syangja",
  "tanahu",
  "taplejung",
  "terhathum",
  "udayapur",
];

const UserSignup = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Signup | Aspirant Nepal</title>
        <meta name="description" content="Aspirant Nepal Student Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.signup}>
        <div className="row">
          <div className={styles.signupPhoto + " col-lg-5 col-md-12"}></div>
          <div className={styles.signupContent + " col-lg-7 col-md-12"}>
            <div className="container">
              <div className={styles.signupForms}>
                <div className={styles.logoContainer}>
                  <img src="./logo.png" alt="aspirant nepal logo" />
                </div>

                <div className={styles.signupParagraph}>
                  <h4>Start Your Journey Right Now</h4>
                  <p>
                    Thank you for joining journey along with Aspirant Nepal. Let
                    us help you to become competitive competitiors that makes
                    you stand out from all.
                  </p>
                </div>
                <div className={styles.signupInput}>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="username">Full Name</label>
                        <input
                          required
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Your Full Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email">Email Address</label>
                        <input
                          required
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="pass">Password</label>
                        <input
                          required
                          type="password"
                          id="pass"
                          name="pass"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="cpass">Confirm Password</label>
                        <input
                          required
                          type="password"
                          id="cpass"
                          name="cpass"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                          required
                          type="text"
                          id="mobile"
                          name="mobile"
                          placeholder="Mobile Phone"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="pass">Temporary Address</label>
                        <select
                          required
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option>Open this select menu</option>
                          {district.map((d) => (
                            <option value={d}>{d.toLocaleUpperCase()}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="gender">Gender</label>
                        <div className="form-check d-inline-flex justify-content-center align-items-center pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label p-0 px-2"
                            for="flexRadioDefault1"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check d-inline-flex justify-content-center align-items-center mx-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label  p-0 px-2"
                            for="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>
                        <div className="form-check d-inline-flex justify-content-center align-items-center">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            className="form-check-label  p-0 px-2"
                            for="flexRadioDefault2"
                          >
                            Others
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="pass">Main Training Course</label>

                        <select
                          required
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option>Open this select menu</option>
                          <option value="1">+2 Entrance Preparation</option>
                          <option value="2">
                            Bachelor Entrance Preparation
                          </option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="pass">Optional Training Course</label>

                        <select
                          required
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option>Open this select menu</option>
                          <option value="1">Driving License</option>
                          <option value="2" disabled>
                            Loksewa (Coming Soon...)
                          </option>
                        </select>
                      </div>
                    </div>

                    <button type="submit" className="mt-2">
                      Sign Up
                    </button>
                    <h5>
                      {`Don't have an account yet?`}
                      <Link href="/signup">
                        <span> Sign In Here</span>
                      </Link>
                    </h5>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
