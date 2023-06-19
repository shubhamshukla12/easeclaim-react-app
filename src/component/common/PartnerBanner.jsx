import React from 'react';

const PartnerBanner = () => {
  return (
    <div className="container mt--80">
      <div className="partner-banner">
        <div className="row d-flex">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-left mt_md--20 mt_sm--20">
              <div className="inner">
                <img className="banner-img" src="assets/img/figma/join-us.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-left mt--30 mt_md--20 mt_sm--20">
              <div className="inner">
                <div className="bannerpara">
                  <h2>Join us as a partner</h2>
                  <p>info@easeclaim.com or call +91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt--60 mt_md--50 mt_sm--80">
              <a className="rn-btn" href="/contact">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBanner;
