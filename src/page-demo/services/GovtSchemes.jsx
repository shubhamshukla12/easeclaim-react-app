import React from 'react';
import PageHelmet from "../../component/common/Helmet";
import Breadcrumb from "../../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import { Container, Row, Col } from 'react-bootstrap';
import PartnerBanner from '../../component/common/PartnerBanner';

const GovtSchemes = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle='Govt Schemes' />
      
      {/* Start Breadcrump Area */}
      <Breadcrumb title='Govt Schemes' />
      {/* End Breadcrump Area */}
      
      <div className='parallax-container'>
        <div className='parallax-content'>
          <Container>
            <Row>
              <Col md={5} className='custom-col mt--100'>
                <h3>Want to claim your hidden insurance as per Govt. Schemes</h3>
                <p className='mt--50'>Contact us now & file the claim with ease</p>
                <a className='rn-button-style--3' href='/contact'>Contact Now</a>
                <a className='rn-button-style--4 ml--30' href='/contact'>Submit a claim</a>
              </Col>
              <Col md={5} className='custom-col mt--100 align-item-end'>
                <div>
                  <img src='assets/images/insurance/image-90.png' alt='service' />
                  <img src='assets/images/insurance/image-91.png' alt='service' />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      
      <div className='container'>
        <div className='rn-service-details bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='service-details-inner'>
                  <div className='inner'>
                    <div className='row sercice-details-content pb--80 align-items-center'>
                      <div className='col-lg-12 col-12'>
                        <div className='govt-img-thumb'>
                          <img src='assets/images/insurance/image-89.png' alt='Service Images' />
                        </div>
                      </div>
                    </div>
                    <div className='row govt-details-content align-items-center'>
                      <div className='col-lg-12 col-12 order-2 order-lg-1'>
                        <div className='paragraph-details mt_md--30 mt_sm--30'>
                          <p>
                            Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) is a government-backed life insurance scheme launched in India. It aims to provide life insurance coverage and financial security to individuals in the age group of 18 to 50 years.
                          </p>
                          <p>
                            Under PMJJBY, policyholders are provided with a life insurance cover of Rs. 2 lakh in case of their unfortunate demise. The scheme offers a renewable one-year term insurance plan that can be enrolled in annually. It provides a cost-effective and easily accessible life insurance solution to individuals from all sections of society.
                          </p>
                          <p>
                            To be eligible for PMJJBY, individuals need to have a bank account and give their consent to auto-debit the premium amount from their account. The premium for this scheme is affordable and subsidized, making it accessible to a larger population.
                          </p>
                          <p>
                            The coverage period for PMJJBY is from 1st June to 31st May of the subsequent year. In the event of the policyholder's demise, the sum assured is paid to the nominee/beneficiary mentioned in the policy.
                          </p>
                          <p>
                            PMJJBY is administered by insurance companies in collaboration with banks and is backed by the Government of India. It aims to provide financial stability and support to families in case of the policyholder's untimely demise, ensuring that their loved ones are financially protected.
                          </p>
                          <p>
                            It is important to note that the scheme has certain terms and conditions, and individuals interested in enrolling should carefully read and understand the details before availing the benefits of PMJJBY.
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
        
        <div className='row mt--180'>
          <div className='govt-main-section'>
            <h3 className='title'>Pradhan Mantri Jeevan Jyoti Bima Yojana</h3>
          </div>
        </div>
      </div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='service-details-inner mt--120'>
              <div className='inner'>
                <div className='row sercice-details-content pb--80 align-items-center'>
                  <div className='col-lg-12 col-12'>
                    <div className='govt-img-thumb'>
                      <img src='assets/images/insurance/image-92.png' alt='Service Images' />
                    </div>
                  </div>
                </div>
                <div className='row govt-details-content align-items-center'>
                  <div className='col-lg-12 col-12 order-2 order-lg-1'>
                    <div className='paragraph-details mt_md--30 mt_sm--30'>
                      <p>
                        Pradhan Mantri Suraksha Bima Yojana (PMSBY) is a government-backed accident insurance scheme launched in India. It aims to provide accidental death and disability insurance coverage to individuals in the age group of 18 to 70 years.
                      </p>
                      <p>
                        Under PMSBY, policyholders are provided with a life insurance cover of Rs. 2 lakh in the event of accidental death, and a cover of Rs. 2 lakh for permanent total disability. In case of permanent partial disability, a cover of Rs. 1 lakh is provided. The scheme offers a renewable one-year term insurance plan that can be enrolled in annually.
                      </p>
                      <p>
                        To be eligible for PMSBY, individuals need to have a bank account and provide their consent to auto-debit the premium amount from their account. The premium for this scheme is affordable, making it accessible to a larger population.
                      </p>
                      <p>
                        The coverage period for PMSBY is from 1st June to 31st May of the subsequent year. In case of an accident resulting in death or disability, the sum assured is paid to the nominee/beneficiary mentioned in the policy.
                      </p>
                      <p>
                        PMSBY is administered by insurance companies in collaboration with banks and is backed by the Government of India. It aims to provide financial support and security to individuals and their families in case of accidental death or disability, ensuring that they have a safety net during unforeseen circumstances.
                      </p>
                      <p>
                        It is important to note that the scheme has certain terms and conditions, and individuals interested in enrolling should carefully read and understand the details before availing the benefits of PMSBY.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='container mt--120'>
        <PartnerBanner />
      </div>
      
      {/* Start Back To Top */}
      <div className='backto-top'>
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </React.Fragment>
  );
}

export default GovtSchemes;