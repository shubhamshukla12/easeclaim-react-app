import React from "react";
import PageHelmet from "../../component/common/Helmet";
import Breadcrumb from "../../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import PartnerBanner from "../../component/common/PartnerBanner";
// import GovtComponent from '../../blocks/mainsections/GovtComponent';

const DebitCredit = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Debit / Credit Card" />

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Debit / Credit Card"} />
      {/* End Breadcrump Area */}

      <div className="parallax-container">
        <div className="parallax-content">
          <Container>
            <Row>
              <Col md={5} className="custom-col mt--100">
                <h3>
                  You are eligible for accidental death cover of up to Rs 10
                  lakh*
                </h3>

                <p>Contact us now & claimed within 90 days of the event</p>

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
                    src="assets/images/insurance/dedit-card-1.png"
                    alt="service"
                  />
                </div>
              </Col>
            </Row>

            <div className="row mt--40">
              <div className="col-lg-5 col-12">
                <div className="govt-main-section">
                  <h3 className="title">Credit Card Insurance</h3>
                </div>
              </div>
              <div className="col-lg-7 col-12 align-items-left">
                <img
                  style={{ maxWidth: "319px", maxHeight: "365px" }}
                  src="assets/images/insurance/image-95.png"
                  alt=""
                />
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="container">
        <div className="rn-service-details ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}

                    <div className="row  govt-details-content align-items-left ">
                      <div className="col-lg-12 col-md-6 col-12">
                        <div className="col-lg-4 col-md-6 col-12">
                          <div>
                            Pradhan Mantri Suraksha Bima Yojana (PMSBY) is a
                            government-backed accident insurance scheme launched
                            in India. It aims to provide accidental death and
                            disability insurance coverage to individuals in the
                            age group of 18 to 70 years.
                          </div>
                        </div>
                      </div>

                      <div className=" col-lg-12 col-12 order-2 order-lg-1 mb--50 mt--50">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-column">
                              <img
                                src="assets/images/insurance/group-200.png"
                                alt=""
                              />
                              <h4 className="tilte">
                                Payment Protection Insurance (PPI)
                              </h4>
                              <div>
                                Payment Protection Insurance, commonly known as
                                PPI, is a type of credit card insurance that
                                helps cover the cardholder's minimum monthly
                                payments or outstanding balance in case of
                                unexpected events that affect their ability to
                                make payments.
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12 mt_sm--30 ">
                            <div className="single-column">
                              <img
                                src="assets/images/insurance/group-200.png"
                                alt=""
                              />
                              <h4 className="tilte">Fraud Protection</h4>
                              <div>
                                Credit card insurance often includes fraud
                                protection, which covers unauthorized
                                transactions or fraudulent activities on the
                                card. If your credit card is used fraudulently,
                                the insurance may reimburse you for any
                                financial losses incurred.
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12 mt_sm--30 mt_md--30">
                            <div className="single-column">
                              <img
                                src="assets/images/insurance/group-200.png"
                                alt=""
                              />
                              <h4 className="tilte">Travel Insurance</h4>
                              <div>
                                Some credit card issuers offer travel insurance
                                as part of their credit card benefits. This
                                insurance typically covers travel-related
                                incidents such as trip cancellation or
                                interruption, lost baggage, medical emergencies,
                                or rental car damage.{" "}
                              </div>
                            </div>
                          </div>
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
      </div>

      <div className="row mt--100 align-items-left mb--80">
        <div className="govt-main-section-heading">
          <h3>Debit Card Insurance</h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="service-details-inner ">
              <div className="inner">
                {/* Start Single Area */}

                {/* End Single Area */}

                {/* Start Single Area */}

                <div className="row govt-details-content align-items-center">
                  <div className="col-lg-6 col-12 order-2 order-lg-1">
                    <div className="paragraph-details mt_md--30 mt_sm--30">
                      <p>
                        Pradhan Mantri Suraksha Bima Yojana (PMSBY) is a
                        government-backed accident insurance scheme launched in
                        India. It aims to provide accidental death and
                        disability insurance coverage to individuals in the age
                        group of 18 to 70 years.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 order-2 order-lg-1">
                    <img src="assets/images/insurance/image-94.png" alt="" />
                  </div>
                </div>

                {/* End Single Area */}
              </div>
            </div>
          </div>
          <div className="row govt-details-content align-items-center">
            <div className=" col-lg-12 col-12 order-2 order-lg-1 mb--50">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-column">
                    <img src="assets/images/insurance/group-200.png" alt="" />
                    <h4 className="tilte">
                      Payment Protection Insurance (PPI)
                    </h4>
                    <div>
                      Payment Protection Insurance, commonly known as PPI, is a
                      type of credit card insurance that helps cover the
                      cardholder's minimum monthly payments or outstanding
                      balance in case of unexpected events that affect their
                      ability to make payments.
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt_sm--30 ">
                  <div className="single-column">
                    <img src="assets/images/insurance/group-200.png" alt="" />
                    <h4 className="tilte">Fraud Protection</h4>
                    <div>
                      Credit card insurance often includes fraud protection,
                      which covers unauthorized transactions or fraudulent
                      activities on the card. If your credit card is used
                      fraudulently, the insurance may reimburse you for any
                      financial losses incurred.
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt_sm--30 mt_md--30">
                  <div className="single-column">
                    <img src="assets/images/insurance/group-200.png" alt="" />
                    <h4 className="tilte">Travel Insurance</h4>
                    <div>
                      Some credit card issuers offer travel insurance as part of
                      their credit card benefits. This insurance typically
                      covers travel-related incidents such as trip cancellation
                      or interruption, lost baggage, medical emergencies, or
                      rental car damage.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-12 order-2 order-lg-1">
              <div className="paragraph-details mt_md--30 mt_sm--30">
                <p>
                  It is important to note that the specific coverage, terms, and
                  conditions of credit card and debit card insurance can vary
                  significantly between financial institutions and card issuers.
                  It is recommended to carefully review the insurance policies
                  and consult with the respective bank or card issuer to
                  understand the coverage, limitations, and any applicable fees
                  associated with the insurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt--120">
        <PartnerBanner />
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

export default DebitCredit;
