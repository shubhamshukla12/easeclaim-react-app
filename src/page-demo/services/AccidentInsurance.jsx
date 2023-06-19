import React from "react";
import PageHelmet from "../../component/common/Helmet";
import Breadcrumb from "../../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import PartnerBanner from "../../component/common/PartnerBanner";

const AccidentInsurance = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Accident Insurance" />

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Accident Insurance"} />
      {/* End Breadcrump Area */}

      <div className="parallax-container">
        <div className="parallax-content">
          <Container>
            <Row>
              <Col md={5} className="custom-col mt--100">
                <h3>Secure Your Future with EPFO's Expert Claim Assistance</h3>

                <p className="mt--50">Contact us now & Claim with Confidence</p>

                <a className="rn-button-style--3" href="/contact">
                  Contact Now
                </a>
                <a className="rn-button-style--4 ml--30" href="/contact">
                  Submit a claim
                </a>
              </Col>
              <Col md={5} className="custom-col mt--100 align-item-end">
                <div>
                  <img
                    src="assets/images/services/image-service-6.jpg"
                    alt="service"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="container">
        <div className="spfo-wrapper pl--80">
          <div className="row ">
            <div className="col-lg-7  ">
              <div className="spfo-inner inner">
                <div className="row">
                  <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                    <div className="spfo-list">
                      <h3 className="title">
                        Simplifying the EPF Claim Process with EPFO
                      </h3>
                      <p className="description">
                        EPFO stands for Employees' Provident Fund Organization.
                        It is a statutory body established by the Indian
                        government under the Ministry of Labour and Employment.
                        EPFO manages and administers the Employees' Provident
                        Fund (EPF), a retirement benefit scheme, and the
                        Employees' Pension Scheme (EPS), a pension scheme for
                        employees in the organized sector.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="thumbnail ">
                <img
                  className="w-100"
                  src="assets/images/services/image-service-7.jpg"
                  alt="About Images"
                />
              </div>
            </div>
          </div>
          <div className="now">
            <div className="epfo-content-box-style mt--80">
              <p>
                EPFO also manages the Employee's Deposit-Linked Insurance Scheme
                (EDLI), which provides life insurance coverage to EPF members in
                the event of their demise. The organization plays a crucial role
                in safeguarding the financial well-being of employees and
                promoting long-term savings for retirement.
              </p>
              <p>
                EPFO operates through a network of regional offices and
                sub-regional offices across India. It enforces the Employees'
                Provident Funds and Miscellaneous Provisions Act, 1952, which
                governs the functioning and regulations of the EPF and EPS
                schemes.
              </p>
              <p>
                EPFO provides valuable claim assistance to employees enrolled in
                the EPF (Employees' Provident Fund) scheme. With a focus on
                ensuring smooth and efficient claim processing, EPFO offers
                various services and support to help employees navigate the
                claims process with ease.
              </p>
              <p>
                Whether it is claiming the accumulated EPF balance at the time
                of retirement, withdrawal of funds for specific purposes like
                education, medical emergencies, or housing, EPFO assists
                employees in understanding the necessary procedures and
                documentation required for submitting claims.
              </p>
              <p>
                EPFO provides clear guidelines and instructions on how to
                initiate a claim, including the submission of relevant forms and
                supporting documents. They have well-established systems in
                place to handle claim requests promptly and professionally.
              </p>
              <p>
                Additionally, EPFO offers online facilities for claim submission
                and tracking, making it convenient for employees to monitor the
                status of their claims and receive timely updates. This digital
                interface allows for faster and more efficient claim processing,
                reducing the need for physical paperwork and manual
                intervention.
              </p>
              <p>
                EPFO's claim assistance extends beyond just providing guidance
                and facilitating the process. In case of any discrepancies or
                issues related to claims, employees can approach EPFO's
                dedicated support channels, such as their regional offices or
                customer care services, for resolution and clarification.
              </p>
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

export default AccidentInsurance;
