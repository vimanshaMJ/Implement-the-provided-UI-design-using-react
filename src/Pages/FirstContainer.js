import React from "react";
import classes from "./FirstContainer.module.css";
import TheNavbar from "../Components/Navbar";
import PrimaryButton from "../Components/PrimaryButton";
import dummy from "../Images/dummy-contact.jpeg";
import img2 from "../Images/image-1.png";

export default function FirstContainer() {
  return (
    <div className={classes.firstContainer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TheNavbar />
            <div className={classes.title}>MARKETING MAKING WITH XMM.</div>
            <img src={img2} alt="img2" className={classes.img2} />
          </div>
          <div className="col-md-6">
            <h5>
              XMM empowers businesses to create dynamic content, target specific
              demographics, and optimize their digital presence.
            </h5>
            <div className="row">
              <div className="col-md-4">
                <PrimaryButton
                  buttonText="Join Telegram"
                  className={classes.actionBtn}
                />
              </div>
              <div className="col-md-4">
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
            <h2>OUR HAPPY CUSTOMER</h2>
            <h5>Our happy customers are at the heart of everything we do</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
