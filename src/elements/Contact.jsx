import React from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
// import ContactTwo from "../elements/contact/ContactTwo";
// import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
// import Header from "../component/header/Header";
import Breadcrumb from "./common/Breadcrumb";
// import ContactFormFive from "./contact/ContactFormFive";
// import ContactThree from "./contact/ContactThree";
import ContactOne from "./contact/ContactOne";

// const AnyReactComponent = ({ text }) => <h6 style={{color:'red'}}>{text}</h6>;

const Contact = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Contact" />

      {/* <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" /> */}

      {/* Start Breadcrump Area */}
      <Breadcrumb No={5} title={"Contact"} />

      <div className="contactbanner"></div>

      {/* Start Contact Top Area  */}
      <div className="contact-top-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rn-address">
                <p className="ml--150">
                  <FiHeadphones
                    color="#e63024"
                    style={{ fontWeight: 800, fontSize: "25px" }}
                  />
                </p>

                <div className="inner align-item-center">
                  <h4 className="title">Talk to us</h4>
                  <p>Needed some help? Just pick up the phone to reach us...</p>
                  <p>
                    <a href="tel:+91 98765 43210">+91 98765 43210</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
              <div className="rn-address">
                <FiMail
                  color="#e63024"
                  style={{ fontWeight: 800, fontSize: "25px" }}
                />

                <div className="inner">
                  <h4 className="title">Contact Support</h4>
                  <p>
                    Sometime you really need a support? Don't we are here for
                    you...
                  </p>
                  <p>
                    <a href="mailto:admin@gmail.com">help@easeclaim.com</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
              <div className="rn-address">
                <div>
                  <FiMapPin
                    color="#e63024"
                    style={{
                      fontWeight: 800,
                      fontSize: "25px",
                      alignItems: "center",
                    }}
                  />
                </div>
                <div className="inner">
                  <h4 className="title">Reach to Us</h4>
                  <p>
                    Sometime you really need a support? Don't we are here for
                    you...
                  </p>
                  <p>ABC, XYZ Nagar, Delhi</p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}
          </div>
        </div>
      </div>
      {/* End Contact Top Area  */}

      {/* Start Contact Page Area  */}
      <div className="rn-contact-page ptb--30 bg_color--1">
        <div className="container">
          <ContactOne />
        </div>
      </div>
      {/* <ContactFormFive/> */}
      {/* End Contact Page Area  */}

      {/* <ContactTwo/>
           
        <ContactThree/> */}
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </React.Fragment>
  );
};

export default React.memo(Contact);
