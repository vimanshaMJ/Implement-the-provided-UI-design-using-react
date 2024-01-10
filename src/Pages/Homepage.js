import React from "react";
import classes from "./Homepage.module.css";
import TheNavbar from "../Components/Navbar";
import PrimaryButton from "../Components/PrimaryButton";
import dummy from "../Images/dummy-contact.jpeg";
import img2 from "../Images/image-1.png";

export default function Homepage() {
  return (
    <div className="container-fluid">
      <div className={classes.firstContainer}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <TheNavbar />
              <h1 className={classes.title}>MARKETING MAKING WITH XMM</h1>
              <img src={img2} alt="img2" className={classes.img2} />
            </div>

            <div className="col-md-6">
              <h5 className={classes.text}>
                XMM empowers businesses to create dynamic content, target
                specific demographics, and optimize their digital presence.
              </h5>
              <div className="row">
                <div className="col-md-3 col-sm-10">
                  <PrimaryButton
                    buttonText="Join Telegram"
                    className={classes.actionBtn}
                  />
                </div>
                <div className="col-md-3 col-sm-10">
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
      </div>
    </div>
  );
}
