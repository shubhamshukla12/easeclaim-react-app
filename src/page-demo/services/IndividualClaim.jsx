import React from 'react';
import PageHelmet from '../../component/common/Helmet';
import Breadcrumb from '../../elements/common/Breadcrumb';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import { Container, Row, Col } from 'react-bootstrap';
// import VerticalOne from '../../component/verticalline/VerticalOne';
import PartnerBanner from '../../component/common/PartnerBanner';

const IndividualClaim = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Individual Claim" />

      {/* Start Breadcrumb Area */}
      <Breadcrumb title="Individual Claim" />
      {/* End Breadcrumb Area */}

      <div className="parallax-container">
        <div className="parallax-content">
          <Container>
            <Row>
              <Col md={5} className="custom-col mt--100">
                <h3>Coverage personalized for you - Individual Claim Insurance</h3>
                <p className="mt--50">Why Individual Claim Insurance is the Right Choice for Your Personal Protection</p>
                <a className="rn-button-style--3" href="/contact">
                  Contact Now
                </a>
                <a className="rn-button-style--4 ml--30" href="/contact">
                  Submit a claim
                </a>
              </Col>
              <Col md={5} className="custom-col mt--100 align-item-end">
                <div>
                  <img src="assets/images/services/image-service-6.jpg" alt="service" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="container">
        <div className="spfo-wrapper pl--80">
          <div className="row">
            <div className="col-lg-12">
              <div className="spfo-inner inner">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="individual-list">
                      <h3 className="title">Individual Claim Assistance</h3>
                      <div className="individual-poara">
                        <p>
                          EaseClaim offers comprehensive support and guidance to individuals throughout the entire
                          insurance claim filing and settlement process. This invaluable assistance is particularly
                          beneficial for policyholders who may lack familiarity with the intricacies of claims procedures
                          or find themselves overwhelmed by the complexities of their insurance policies.
                        </p>
                        <p>
                          Our individual claim assistance comes in various forms, tailored to suit the specific needs of
                          each policyholder. For instance, we assign dedicated claims representatives who expertly handle
                          all aspects of the claims process, ranging from initial filing to skillful negotiation with
                          insurers for optimal settlement amounts.
                        </p>
                        <p>
                          In addition to personalized support, we provide a range of online resources, such as
                          step-by-step guides and tutorials, empowering policyholders to navigate the claims process with
                          ease. We also offer convenient phone and email support, ensuring prompt responses to inquiries
                          and addressing any concerns related to the claim.
                        </p>
                        <p>
                          Ultimately, our goal is to streamline the claims journey, alleviating stress and simplifying
                          the experience for policyholders. Through our dedicated support and guidance, EaseClaim empowers
                          individuals to navigate the complexities of insurance claims confidently, maximizing their
                          entitled coverage benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PartnerBanner />

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

export default IndividualClaim;
