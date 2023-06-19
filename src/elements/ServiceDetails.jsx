import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import "./css/main.css";
import "./css/responsive.css";
import "./css/style.css";
// import Footer from "../../public/assets/images/aboutus/Group-1.jpg";
import Breadcrumb from "./common/Breadcrumb";
import VerifiedAdvisors from "../claimpages/aboutpage/VerifiedAdvisors";
import TeamTwo from "../blocks/team/TeamTwo";
import PartnerBanner from "../component/common/PartnerBanner";

class ServiceDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="About Us" />
        {/* End Pagehelmet  */}
        <Breadcrumb title={"About Us"} />

        <div className="rn-page-title-area pt--40 pb--60 bg_image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--50">
                  <h2 className="title theme-gradient">
                    We're changing the whole game
                  </h2>
                  <p>
                    Welcome to EaseClaim, your premier insurance claim
                    settlement solution.
                  </p>
                  <div>
                    <img src="assets/images/aboutus/image15.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Breadcrump Area */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--50 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">Our Mission</h4>
                          <p>
                            Our mission is to make the claims process easier and
                            more efficient for our customers, providing expert
                            assistance and guidance every step of the way.
                          </p>
                          <p>
                            At EaseClaim, we understand that filing an insurance
                            claim can be a stressful and time-consuming
                            experience. That's why we've developed a
                            comprehensive platform that streamlines the entire
                            claims process, from start to finish. Our team of
                            experienced professionals is dedicated to providing
                            personalized support and guidance to help you get
                            the settlement you deserve.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <VerifiedAdvisors />
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content mt--100 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="assets/images/aboutus/Group-1.jpg"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">Our Vision</h4>
                          <p>
                            With EaseClaim, you can rest assured that your claim
                            is in good hands. We use advanced technology and
                            data analytics to ensure that every claim is
                            processed quickly and accurately. Our platform is
                            designed to be user-friendly and easy to navigate,
                            so you can focus on what really matters - getting
                            your life back to normal after a loss.
                          </p>
                          <p>
                            We believe in transparency and honesty in everything
                            we do. That's why we provide regular updates on the
                            status of your claim and work tirelessly to ensure
                            that you receive fair and just compensation. Our
                            team of experts is always available to answer your
                            questions and provide guidance whenever you need it.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}
        <div className="container">
          <div className="problem ptb--50 bg_color--5">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <div className="problem-1">
                  <h2>What problems we're solving!</h2>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 "></div>
              <div className="col-lg-3 col-sm-12 "></div>
              <div className="col-lg-3 col-sm-12 "></div>
            </div>
          </div>
        </div>

        {/* Start Single Area */}
        <div className="container">
          <div className="row sercice-details-content ptb--60 align-items-center">
            <div className="mt_md--30 mt_sm--30">
              <span
                style={{ color: "#476BC7", fontSize: "14px", fontWeight: 700 }}
              >
                TESTIMONIALS
              </span>
              <h2
                style={{ width: "281px", height: "96px", lineHeight: "48px" }}
              >
                Check what our clients are saying
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="thumb">
                  <img
                    className="w-100"
                    src="assets/images/aboutus/about-1.jpg"
                    alt="Service Images"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="details mt_md--30 mt_sm--30">
                  <p>
                    <img
                      src="assets/images/aboutus/qoute.jpg"
                      alt="Testimonials"
                    />
                  </p>
                  <h4 className="title ">
                    EaseClaim, it was a life-saver & game-changer
                  </h4>
                  <p>
                    Thanks to EaseClaim, what could have been a daunting and
                    stressful experience turned into a smooth and efficient
                    resolution. I am forever grateful for their expertise,
                    dedication, and unwavering support.{" "}
                  </p>
                  <p>
                    I highly recommend EaseClaim to anyone in need of assistance
                    with their insurance claim settlement. They are a true ally
                    in navigating the complexities of the claims process."
                  </p>
                  <img
                    src="assets/images/aboutus/start.jpg"
                    alt="Testimonials"
                  />
                  <h4 className="title mt-1">AR Shakir</h4>
                  <span>Satisfied EaseClaim Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Area */}

        {/* Start Team Area  */}
        <div className="rn-team-wrapper ptb--60 bg_color--1">
          <div className="rn-team-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="section-title text-center mb--30">
                    <p>Our team</p>
                    <h2>Meet Our Team</h2>
                    <p className="sub-heading">
                      Our expert team is made up of creatives with technical
                      knowhow. strategists who think outside the box, and
                      developers who push innovation,
                    </p>
                  </div>
                </div>
              </div>
              <TeamTwo column="col-lg-3" teamStyle="" item="4" />
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        <PartnerBanner />

        {/* Start Breadcrump Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp color="#fff" />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </React.Fragment>
    );
  }
}
export default ServiceDetails;
