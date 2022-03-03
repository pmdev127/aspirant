import React from "react";
import styles from "./UserLogin.module.css";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";

const UserLogin = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Login | Aspirant Nepal</title>
        <meta name="description" content="Aspirant Nepal Student Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.login}>
        <div className="row">
          <div className={styles.loginPhoto + " col-lg-7 col-md-6"}></div>
          <div className={styles.loginContent + " col-lg-5 col-md-6"}>
            <div className="container">
              <div className={styles.loginForms}>
                <div className={styles.logoContainer}>
                  <img src="./logo.png" alt="aspirant nepal logo" />
                </div>
                {/* <h2>Login</h2> */}
                <div className={styles.loginParagraph}>
                  <h4>Login to your account</h4>
                  <p>
                    Thank you for get back to Aspirant Nepal. Let us access our
                    best recommendation for you.
                  </p>
                </div>
                <div className={styles.loginInput}>
                  <label htmlFor="email">User Id</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                  />
                  <br />
                  <label htmlFor="pass">Password</label>
                  <input
                    type="password"
                    id="pass"
                    name="pass"
                    placeholder="Enter Your Secure Key"
                  />
                  <p>Reset Password</p>
                  <button type="submit">Sign In</button>
                  <h5>
                    {`Don't have an account yet?`}
                    <span> Sign Up Here</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
