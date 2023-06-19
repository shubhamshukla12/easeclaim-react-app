import React from "react";
import PageHelmet from "../../../component/common/Helmet";
import Breadcrumb from "../../../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import VerticalOne from "../../../component/verticalline/VerticalOne";
import PartnerBanner from "../../../component/common/PartnerBanner";

const SIMCard = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Terms & Conditions" />

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Terms & Conditions"} />
      {/* End Breadcrump Area */}

      <div className="parallax-container">
        <div className="parallax-content">
          <Container>
            <Row>
              <Col md={5} className="custom-col">
                <h2>Secure Your Connections</h2>
                <p>
                  Contact us now & Explore the essentials of SIM card insurance
                </p>
                <a className="rn-button-style--3" href="/contact">
                  Contact Now
                </a>
                <a className="rn-button-style--4" href="/contact">
                  Submit a claim
                </a>
              </Col>
              <Col md={5} className="custom-col">
                <div>
                  <img
                    src="assets/images/services/image-service-2.jpg"
                    alt="service"
                    className="fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container>
        <Row>
          <Col lg={4} className="custom-col-1">
            <h2>SIM Card Insurance</h2>
            <p>
              SIM card insurance is a form of coverage that protects your SIM
              card from various risks such as loss, theft, damage, or
              unauthorized usage. While SIM card insurance is not as widely
              known or common as other types of insurance, it can offer valuable
              benefits and peace of mind.
            </p>
          </Col>
          <Col lg={7} className="custom-col-2-img text-align-right">
            <img
              src="assets/images/services/image-service-3.jpg"
              alt="service"
            />
          </Col>
        </Row>
      </Container>

      <div className="container">
        <VerticalOne />

        <p className="mt-2">
          {" "}
          SIM card insurance offers an added layer of protection for your SIM
          card, ensuring that you can replace it quickly and at minimal cost in
          case of loss, theft, damage, or unauthorized usage. By safeguarding
          your SIM card, you can maintain uninterrupted access to your mobile
          services and protect your personal information.
        </p>
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

export default SIMCard;
