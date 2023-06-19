import React from 'react';
import PageHelmet from '../../component/common/Helmet';
import Breadcrumb from '../../elements/common/Breadcrumb';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import { Container, Row, Col } from 'react-bootstrap';
import PartnerBanner from '../../component/common/PartnerBanner';

const ESIC = () => {
  return (
    <>
      <PageHelmet pageTitle='ESIC' />

      <Breadcrumb title='ESIC' />

      <div className='parallax-container'>
        <div className='parallax-content'>
          <Container>
            <Row>
              <Col md={5} className='custom-col mt--100'>
                <h3>Ensuring Coverage and Protection for Employees' Claims</h3>
                <p className='mt--50'>Contact us now & know more!</p>
                <a className='rn-button-style--3' href='/contact'>
                  Contact Now
                </a>
                <a className='rn-button-style--4 ml--30' href='/contact'>
                  Submit a claim
                </a>
              </Col>
              <Col md={5} className='custom-col mt--100 align-item-end'>
                <div>
                  <img src='assets/images/insurance/esip-1.png' alt='service' />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className='container'>
        <div className='spfo-wrapper pl--80'>
          <div className='row '>
            <div className='col-lg-7'>
              <div className='spfo-inner inner'>
                <div className='row'>
                  <div className='col-lg-10 col-md-12 col-sm-12 col-12'>
                    <div className='spfo-list'>
                      <h3 className='title'>ESIC insurance</h3>
                      <p className='description'>
                        The Employee's State Insurance Corporation (ESIC) is a social security and health insurance scheme established by the Indian government. It provides comprehensive medical and social security benefits to employees in organized sector industries and their families.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='thumbnail'>
                <img className='w-100' src='assets/images/insurance/esip-image-2.png' alt='About Images' />
              </div>
            </div>
          </div>
          <div className='now'>
            <div className='epfo-content-box-style mt--80'>
              <p>
                The ESIC aims to protect employees against financial and health-related risks by providing them with access to quality medical care, cash benefits during sickness and maternity, disability benefits, and coverage for funeral expenses. The ESIC operates through a network of hospitals, dispensaries, and clinics across the country, ensuring that eligible employees and their dependents receive timely and affordable healthcare services. Contributions to the ESIC are made by both the employer and the employee, and the scheme is governed by the Employee's State Insurance Act, 1948. It is the employer's duty to ensure that employees with a monthly wage of up to Rs. 21,000 are enrolled in the ESIC scheme. For employees with disabilities, the monthly salary limit for ESIC coverage is Rs. 25,000.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PartnerBanner />

      <div className='backto-top'>
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </>
  );
};

export default ESIC;
