import React from "react";
import classes from "./Homepage.module.css";
import TheNavbar from "../Components/Navbar";
import PrimaryButton from "../Components/PrimaryButton";
import dummy from "../Images/dummy-contact.jpeg";
import img1 from "../Images/image-1.png";
import img2 from "../Images/image-2.png";
import downArrow from "../Images/down-arrow.png";
import SecondaryActionButton from "../Components/SecondaryButton";

export default function Homepage() {
  return (
    <div className="container-fluid">
      <div className={classes.firstContainer}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <TheNavbar />
              <h1 className={classes.title}>MARKETING MAKING WITH XMM</h1>
              <img src={img1} alt="img1" className={classes.img1} />
            </div>

            <div className="col-md-6">
              <h5 className={classes.text}>
                XMM empowers businesses to create dynamic content, target
                specific demographics, and optimize their digital presence.
              </h5>
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <PrimaryButton
                    buttonText="Join Telegram"
                    className={classes.actionBtn}
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src={dummy}
                    alt="dummy"
                    className={classes.dummyContact1}
                  />
                  <img
                    src={dummy}
                    alt="dummy"
                    className={classes.dummyContact2}
                  />
                  <img
                    src={dummy}
                    alt="dummy"
                    className={classes.dummyContact3}
                  />
                </div>
              </div>
              <h2 className={classes.text}>OUR HAPPY CUSTOMER</h2>
              <h5 className={classes.text}>
                Our happy customers are at the heart of everything we do
              </h5>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className={classes.backgroundCircle}>
                <button className={classes.arrowBtn}>
                  <img
                    src={downArrow}
                    alt="down-arrow"
                    className={classes.downArrow}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.secondContainer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img src={img2} alt="down-arrow" className={classes.img2} />
            </div>
            <div
              className="col-lg-6 col-md-12"
              style={{
                alignSelf: "center",
                padding: "0 60px",
              }}
            >
              <SecondaryActionButton buttonText="ABOUT US" />
              <h1 className={classes.title2}>
                Best Ever Token Designed For Remarkable Success
              </h1>
              <p className={classes.paragraph1}>
                The main advantage of supporting $XMM is the project is focused
                on creating Volume and Market Making through. XMM empowers
                businesses to creative dynamic content target specific
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <h5 className={classes.checkText}>
                      <span className="material-symbols-outlined">
                        select_check_box
                      </span>
                      Market
                    </h5>
                  </div>
                  <div className="col-4">
                    <h5 className={classes.checkText}>
                      <span className="material-symbols-outlined">
                        select_check_box
                      </span>
                      Volume
                    </h5>
                  </div>
                  <div className="col-4">
                    <h5 className={classes.checkText}>
                      <span className="material-symbols-outlined">
                        select_check_box
                      </span>
                      Trend
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <PrimaryButton
                  buttonText="Read Whitepaper"
                  className={classes.actionBtn2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
