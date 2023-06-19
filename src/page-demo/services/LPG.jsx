import React from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { Container, Row, Col } from 'react-bootstrap';
import PageHelmet from '../../component/common/Helmet';
import Breadcrumb from '../../elements/common/Breadcrumb';
import ScrollToTop from 'react-scroll-up';
import VerticalTwo from '../../component/verticalline/VerticalTwo';
import PartnerBanner from '../../component/common/PartnerBanner';

const LPG = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="LPG" />

      <Breadcrumb title="LPG" />

      <div className="parallax-container">
        <div className="parallax-content">
          <Container>
            <Row>
              <Col md={5} className="custom-col">
                <h2>Explore the World of LPG Insurance</h2>
                <p>Contact us now & know all the benefits of LPG insurance</p>
                <a className="rn-button-style--4" href="/contact">Submit a claim</a>
                <a className="rn-button-style--3" href="/contact">Contact Now</a>
              </Col>
              <Col md={5} className="custom-col">
                <img src="assets/images/insurance/lpg-img-1.png" alt="service" className="fluid" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container>
        <Row>
          <Col lg={7} className="custom-col-1">
            <h2>LPG Insurance</h2>
            <p>
              LPG insurance is a specialized form of insurance that provides coverage for risks associated with the storage,
              transportation, and usage of LPG (liquefied petroleum gas). LPG is a flammable hydrocarbon fuel commonly used in
              residential, commercial, and industrial settings for various purposes such as cooking, heating, and powering
              vehicles.
            </p>
          </Col>
          <Col lg={4} className="custom-col-2-img text-align-right">
            <img width="246px" height="347px" src="assets/images/insurance/group-1.png" alt="service" />
          </Col>
        </Row>
      </Container>

      <VerticalTwo />

      <Container className="mt--30 mb--80">
        <p className="ptb--30">
          LPG insurance plays a crucial role in protecting individuals, businesses, and properties from the potential risks
          associated with LPG usage. It provides financial security, promotes safety awareness, and ensures compliance with
          regulatory standards. It is important to carefully review insurance policies, understand the coverage limits, and
          work with reputable insurance providers to obtain comprehensive and tailored coverage for LPG-related risks.
        </p>
      </Container>

      <PartnerBanner />

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </React.Fragment>
  );
};

export default LPG;
