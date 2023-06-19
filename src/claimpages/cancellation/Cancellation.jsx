import React from 'react';
import PageHelmet from '../../component/common/Helmet';
import Breadcrumb from '../../elements/common/Breadcrumb';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';

const Cancellation = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Cancellation & Refund" />

      {/* Start Breadcrump Area */}
      <Breadcrumb title="Cancellation & Refund" />
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper */}
      <div className="rn-service-details ptb--60 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Start Single Area */}
                  <div className="row sercice-details-content align-items-center">
                    <div className="col-lg-12 col-12 order-2 order-lg-1">
                      <h3>Cancellation & Refund</h3>
                      <div className="details mt_md--30 mt_sm--30">
                        <h5>Last Updated: [Date]</h5>
                        <p>
                          Please read this Cancellation & Refund Policy ("Policy") carefully before using the EaseClaim website and services. This Policy outlines the guidelines and procedures related to cancellations and refunds. By using our website and services, you agree to comply with this Policy.
                          Cancellation of Services:
                        </p>
                        <br />
                        <h5>Cancellation of Services:</h5>
                        <p>
                          1.1 Request for Cancellation: If you wish to cancel our services, you must submit a cancellation request in writing to our customer support team. The cancellation request should include your name, contact information, and relevant details of the services you wish to cancel.
                        </p>
                        <p>
                          1.2 Cancellation Eligibility: The eligibility for cancellation and any applicable refund will depend on the specific services and terms agreed upon during the initial engagement. Certain services may have restrictions or conditions that affect the cancellation and refund eligibility.
                        </p>
                        <br />
                        <h5>Refund Policy:</h5>
                        <p>
                          2.1 Refund Eligibility: Refunds, if applicable, will be processed in accordance with the terms agreed upon during the service engagement. It is important to review and understand the refund eligibility criteria specific to the services you have engaged with us.
                        </p>
                        <p>
                          2.2 Non-Refundable Services: Some services may be non-refundable once initiated or completed, depending on the nature of the service and the expenses incurred by us to provide the service.
                        </p>
                        <p>
                          2.3 Processing Time: Refunds, if approved, will be processed within a reasonable timeframe. The processing time may vary depending on the payment method and any applicable financial institution policies.
                        </p>
                        <br />
                        <h5>Changes to Services or Fees:</h5>
                        <p>
                          We reserve the right to modify, suspend, or discontinue any services offered on our website, as well as update or change the associated fees, at any time without prior notice. Such changes will not affect services that have already been initiated or completed.
                        </p>
                        <br />
                        <h5>Contact Us:</h5>
                        <p>
                          If you have any questions, concerns, or requests regarding the cancellation and refund process, please contact our customer support team at [email address] or [phone number]. We will be happy to assist you and provide the necessary guidance.
                        </p>
                        <br />
                        <h5>Governing Law and Jurisdiction:</h5>
                        <p>
                          This Cancellation & Refund Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to this Policy shall be subject to the exclusive jurisdiction of the courts located in [insert applicable jurisdiction].
                        </p>
                        <br />
                        <h5>Changes to the Policy:</h5>
                        <p>
                          We reserve the right to modify or update this Cancellation & Refund Policy at any time without prior notice. Any changes will be effective immediately upon posting the revised Policy on our website. We encourage you to review the Policy periodically for any updates.
                        </p>
                        <p>
                          By using our website and services, you acknowledge that you have read, understood, and agreed to this Cancellation & Refund Policy and any other applicable policies or guidelines referenced herein.
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

export default Cancellation;
