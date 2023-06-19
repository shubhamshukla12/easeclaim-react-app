import React from 'react';
import PageHelmet from '../component/common/Helmet';
import Breadcrumb from '../elements/common/Breadcrumb';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
// import Testimonial from '../elements/Testimonial';
// import { Parallax } from 'react-parallax';

const StyleImage = {
    position: "absolute",
    width: "968.46px",
    height: "810.67px",
    left: "535px",
    top: "243px",
    background: "rgba(71, 107, 199, 0.1)"
}

const SIMCard = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Terms & Conditions" />

      {/* Start Breadcrumb Area */}
      <Breadcrumb title="Terms & Conditions" />
      {/* End Breadcrumb Area */}

      <div className="container">
        <div className="rn-simcard-service">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <div className="row align-items-start row--0">
                  <div className="col-lg-6">
                    <h2>Secure Your Connections</h2>
                    <p>Contact us now & Explore the essentials of SIM card insurance</p>
                    <a className="rn-btn btn-white" href="/contact">
                      Get Started
                    </a>
                    <a className="rn-btn btn-white" href="/contact">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img className="servicebg-1" src="assets/images/services/Vector-service-1.jpg" alt="Finding Images" />
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default SIMCard;
