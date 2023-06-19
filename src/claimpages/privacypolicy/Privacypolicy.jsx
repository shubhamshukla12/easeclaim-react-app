import React from 'react';
import PageHelmet from '../../component/common/Helmet';
import Breadcrumb from '../../elements/common/Breadcrumb';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';

const Privacypolicy = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Privacy Policy" />

      {/* Start Breadcrumb Area */}
      <Breadcrumb title="Privacy Policy" />
      {/* End Breadcrumb Area */}

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
                      <h3>Privacy Policy</h3>
                      <div className="details mt_md--30 mt_sm--30">
                        <h5>Last Updated: [Date]</h5>
                        <p>
                          This Privacy Policy explains how EaseClaim ("we," "us," or "our") collects, uses, shares, and protects your personal information when you use our website and services. We are committed to respecting and protecting your privacy in accordance with Indian and international standards.
                        </p>
                        <br />
                        <h5>Information We Collect:</h5>
                        <p>
                          1.1 Personal Information: We may collect personal information that you provide to us voluntarily, such as your name, contact information, and other details necessary for claim processing.
                        </p>
                        <p>
                          1.2 Usage Information: We may collect non-personal information about your interactions with our website, including your IP address, browser type, and pages visited, to improve our services and enhance your user experience.
                        </p>
                        <br />
                        <h5>How We Use Your Information:</h5>
                        <p>
                          2.1 Provide Services: We use your personal information to process and manage insurance claims, communicate with you regarding your claims, and provide the necessary assistance throughout the claim settlement process.
                        </p>
                        <p>
                          2.2 Improve User Experience: We may use your usage information to analyze trends, gather demographic information, and enhance our website's functionality to ensure a better user experience.
                        </p>
                        <p>
                          2.3 Marketing Purposes: With your consent, we may use your personal information to send you promotional materials, newsletters, or updates about our services. You have the right to opt-out of such communications at any time.
                        </p>
                        <br />
                        <h5>Information Sharing:</h5>
                        <p>
                          3.1 Third-Party Service Providers: We may share your personal information with trusted third-party service providers who assist us in delivering our services, such as claim adjusters or insurance companies, strictly for the purpose of claim settlement.
                        </p>
                        <p>
                          3.2 Legal Compliance: We may disclose your personal information if required to do so by law, legal processes, or governmental authorities to protect our rights, safety, or property, or as part of a business transfer or merger.
                        </p>
                        <br />
                        <h5>Data Security:</h5>
                        <p>
                          We implement reasonable security measures to protect your personal information from unauthorized access, loss, misuse, or alteration. However, no method of data transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                        <h5>Your Rights:</h5>
                        <p>
                          You have the right to access, update, correct, or delete your personal information held by us. You can exercise these rights by contacting us using the contact information provided below.
                        </p>
                        <br />
                        <h5>Children's Privacy:</h5>
                        <p>
                          Our website and services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected personal information from a child, please contact us to request its deletion.
                        </p>
                        <br />
                        <h5>Changes to the Privacy Policy:</h5>
                        <p>
                          We reserve the right to modify this Privacy Policy at any time. Any updates or changes will be effective immediately upon posting the revised Privacy Policy on our website. We encourage you to review this Privacy Policy periodically for any updates.
                        </p>
                        <br />
                        <h5>Contact Us:</h5>
                        <p>
                          If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at help@easeclaim.com or [mailing address]. By using our website and services, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.
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

export default Privacypolicy;
