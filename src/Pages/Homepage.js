import React from "react";
import classes from "./Homepage.module.css";
import TheNavbar from "../Components/Navbar";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryActionButton from "../Components/SecondaryButton";
import dummy from "../Images/dummy-contact.jpeg";
import img1 from "../Images/image-1.png";
import img2 from "../Images/image-2.png";
import img3 from "../Images/image-3.png";
import img4 from "../Images/image-4.png";
import img5 from "../Images/image-5.png";
import img6 from "../Images/image-6.png";
import downArrow from "../Images/down-arrow.png";
import cardImg1 from "../Images/card-img-1.png";
import cardImg2 from "../Images/card-img-2.png";
import cardImg3 from "../Images/card-img-3.png";
import dexview from "../Images/DEXView.png";
import amazon from "../Images/amazon.png";
import perrigo from "../Images/perrigo.png";
import molex from "../Images/molex.png";
import pinksale from "../Images/pinksale.png";
import skai from "../Images/skai.png";
import oracle from "../Images/oracle.png";
import ebay from "../Images/ebay.png";
import linkedin from "../Images/linkedin.png";
import instagram from "../Images/instagram.png";
import telegram from "../Images/telegram.png";
import TheDropdown from "../Components/DropDown";
import Footer from "../Components/Footer";

export default function Homepage({ ...props }) {
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
          <div className="row ">
            <div className="col-lg-6 col-md-12">
              <img src={img2} alt="down-arrow" className={classes.img2} />
            </div>
            <div className={`col-lg-6 col-md-12 ${classes.aboutUsCol}`}>
              <SecondaryActionButton
                className={classes.aboutBtn}
                buttonText="ABOUT US"
              />
              <h1 className={classes.mainTitle}>
                Best Ever Token Designed For Remarkable Success
              </h1>
              <p className={classes.aboutUsPara}>
                The main advantage of supporting $XMM is the project is focused
                on creating Volume and Market Making through. XMM empowers
                businesses to creative dynamic content target specific
              </p>
              <div className="container">
                <div className={`row ${classes.checkBoxRow}`}>
                  <div className="col-sm-4">
                    <h5>
                      <span
                        className={`material-symbols-outlined ${classes.checkBox}`}
                      >
                        select_check_box
                      </span>
                      Market
                    </h5>
                  </div>
                  <div className="col-sm-4">
                    <h5>
                      <span
                        className={`material-symbols-outlined ${classes.checkBox}`}
                      >
                        select_check_box
                      </span>
                      Volume
                    </h5>
                  </div>
                  <div className="col-sm-4">
                    <h5>
                      <span
                        className={`material-symbols-outlined ${classes.checkBox}`}
                      >
                        select_check_box
                      </span>
                      Trend
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <PrimaryButton
                  buttonText="Read Whitepaper"
                  className={classes.actionBtn2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.thirdContainer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <SecondaryActionButton
                className={classes.featuresBtn}
                buttonText="FEATURES"
              />
              <h1 className={classes.mainTitle}>Features Of X MARKET MARKER</h1>
              <p className={classes.featureText}>
                X Market Marker offers a comphehensive set of features tailorde
                for market participants. Its core functionalities include
                real-time pricing, liquidity.
              </p>
            </div>
            <div className="col-lg-8">
              <div className="row justify-content-center">
                <div className={`col-md-4 col-sm-6 ${classes.cardCol}`}>
                  <div className={classes.card1}>
                    <h5>01</h5>
                    <h5>Benifits For Holders</h5>
                    <img
                      src={cardImg1}
                      alt="card-img-1"
                      className={classes.cardImg}
                    />
                    <p className={classes.cardText}>
                      We aim to increase the value of our currency to benifit
                      our community. Market Making will be key focus. We aim to
                      inncrease the value of our currency to benifit our
                      community.
                    </p>
                  </div>
                </div>
                <div className={`col-md-4 col-sm-6 ${classes.cardCol}`}>
                  <div className={classes.card2}>
                    <h5>02</h5>
                    <h5>Biggest Community</h5>
                    <img
                      src={cardImg2}
                      alt="card-img-2"
                      className={classes.cardImg}
                    />
                    <p className={classes.cardText}>
                      XMM is the First ever Crypto with the market making
                      objective that's being worked upon at such amazing level!.
                      We will focus on community building a lot for that.
                    </p>
                  </div>
                </div>
                <div className={`col-md-4 col-sm-6 ${classes.cardCol}`}>
                  <div className={classes.card3}>
                    <h5>03</h5>
                    <h5>Ecosystem - Redefined</h5>
                    <img
                      src={cardImg3}
                      alt="card-img-3"
                      className={classes.cardImg}
                    />
                    <p className={classes.cardText}>
                      Our powerful token will protect our holders from the
                      turbulence of the crypto market and help them hold despite
                      the uncertainty of the market..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.fourthContainer}>
        <div className="container">
          <div className="row justify-content-center">
            <SecondaryActionButton buttonText="PARTNER" />
            <h1 className={classes.partnerTitle}>Our Partner</h1>
          </div>
          <div className="container justify-content-center">
            <div className="row justify-content-center">
              <div className={`col-md-3 col-sm-4 ${classes.imageCol1}`}>
                <img
                  src={dexview}
                  alt="dexview"
                  className={classes.partnerImg}
                ></img>
              </div>
              <div div className={`col-md-3 col-sm-4 ${classes.imageCol2}`}>
                <img
                  src={amazon}
                  alt="amazon"
                  className={classes.partnerImg}
                ></img>
              </div>
              <div className={`col-md-3 col-sm-4 ${classes.imageCol3}`}>
                <img
                  src={perrigo}
                  alt="perrigo"
                  className={classes.partnerImg}
                ></img>
              </div>
              <div className={`col-md-3 col-sm-4 ${classes.imageCol4}`}>
                <img
                  src={molex}
                  alt="molex"
                  className={classes.partnerImg}
                ></img>
              </div>
              <div className={`col-md-3 col-sm-4 ${classes.imageCol5}`}>
                <img
                  src={pinksale}
                  alt="pinksale"
                  className={classes.partnerImg}
                ></img>
              </div>
              <div className={`col-md-3 col-sm-4 ${classes.imageCol6}`}>
                <img src={skai} alt="skai" className={classes.partnerImg}></img>
              </div>
              <div className={`col-md-3 col-sm-4 ${classes.imageCol7}`}>
                <img
                  src={oracle}
                  alt="oracle"
                  className={classes.partnerImg}
                ></img>
              </div>
              <div className={`col-md-3 col-sm-4 ${classes.imageCol8}`}>
                <img src={ebay} alt="ebay" className={classes.partnerImg}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.fifthContainer}>
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7">
              <SecondaryActionButton
                buttonText="Tokenomics"
                className={classes.tokenmicsBtn}
              />
              <h1 className={classes.tokenText1}>
                Token Investment Strategies
              </h1>
              <h1 className={classes.tokenText2}>Token Valuation Models</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src={img3} alt="img3" className={classes.img3}></img>
              <div className={classes.liqudity}>
                <h3 className={classes.tokenomicsTpic}>LIQUIDITY</h3>
                <p>
                  Token investments strategies involve various approaches for
                  individuals and organizationas to make informed decisions when
                  buying and holding cryptocurrencies or blockchain tokens.
                </p>
              </div>

              <div className={classes.marketing}>
                <h3 className={classes.tokenomicsTpic}>MARKETING</h3>
                <p>
                  Token investments strategies involve various approaches for
                  individuals and organizationas to make informed decisions last
                  moment.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className={classes.buybacks}>
                <h3 className={classes.tokenomicsTpic}>BUYBACKS</h3>
                <p>
                  Token investments strategies involve various approaches for
                  individuals and organizationas to make informed decisions
                  blockchain tokens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sixthContainer}>
        <div className="container">
          <div className="row">
            <div className={`col-md-6 ${classes.faqRow}`} {...props}>
              <SecondaryActionButton
                buttonText="FAQ"
                className={classes.faqBtn}
              />
              <h1>
                Frequently Asked <br /> Questions
              </h1>
              <p className={classes.faqPara1}>
                The main advantage of supporting $XMM is the project is focused
                on creating Volume and Market Making through.
              </p>
              <img src={img4} alt="img4" className={classes.img4} />
            </div>
            <div className={`col-md-6 ${classes.faqRow}`} {...props}>
              <TheDropdown
                classname={classes.dropdown}
                dropdownTitle={"What Are The Taxes On Buy And Sell?"}
                description={
                  "X Market Marker offers a comprehensive set of features tailored for market participants. Its core functionalities include real-time pricing, liquidity provisio, and order book management"
                }
              />
              <hr className={classes.hrule} />
              <TheDropdown
                classname={classes.dropdown}
                dropdownTitle={"How Is XMM Different From Others?"}
                description={
                  "X Market Marker offers a comprehensive set of features tailored for market participants. Its core functionalities include real-time pricing, liquidity provisio, and order book management"
                }
              />
              <hr className={classes.hrule} />
              <TheDropdown
                classname={classes.dropdown}
                dropdownTitle={"How Can I Buy?"}
                description={
                  "X Market Marker offers a comprehensive set of features tailored for market participants. Its core functionalities include real-time pricing, liquidity provisio, and order book management"
                }
              />
              <hr className={classes.hrule} />
              <TheDropdown
                classname={classes.dropdown}
                dropdownTitle={"How Do I Invest In Your Company?"}
                description={
                  "X Market Marker offers a comprehensive set of features tailored for market participants. Its core functionalities include real-time pricing, liquidity provisio, and order book management"
                }
              />
              <hr className={classes.hrule} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.seventhContainer}>
        <div className={`container ${classes.middleContainer}`} {...props}>
          <div className="row">
            <div className="col-md-5">
              <p className={classes.lastPara}>
                X Market Marker offers a comprehensive set of features tailored
                for market participants. Its core functionalities include
                real-time pricing, liquidity provisio, and order book
                management.
              </p>
              <img src={img5} alt="img5" className={classes.img5} />
            </div>
            <div className="col-md-4 d-grid align-items-center">
              <h1 className={classes.joinCommunity}>Join The Community</h1>
            </div>
            <div className="col-md-3 d-grid align-items-center">
              <img src={img6} alt="img6" className={classes.img6} />
              <br />
              <PrimaryButton
                buttonText="Join Telegram"
                className={classes.actionBtn3}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p>copyright ©azad 2023</p>
            </div>
            <div
              className={`col-6 d-flex justify-content-end ${classes.lastCol}`}
              {...props}
            >
              <a href="https://lk.linkedin.com/">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className={classes.socialIcon}
                />
              </a>

              <a href="https://www.instagram.com/">
                <img
                  src={instagram}
                  alt="instagram"
                  className={classes.socialIcon}
                />
              </a>

              <a href="https://telegram.org/">
                <img
                  src={telegram}
                  alt="telegram"
                  className={classes.socialIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
