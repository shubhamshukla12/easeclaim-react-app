import React from 'react';
import PageHelmet from '../../component/common/Helmet';
import Breadcrumb from '../../elements/common/Breadcrumb';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';

const TermsConditionsContent = () => {
  return (
    <div className="details mt_md--30 mt_sm--30">
      <h5>Last Updated: [Date]</h5>
      <p>
        Please read these Terms and Conditions ("Terms") carefully before using the EaseClaim website and services. These Terms govern your access and use of our platform and outline your rights and obligations. By using our website and services, you agree to comply with these Terms.
      </p>

      <br />
      <h5>Use of the Website:</h5>
      <p>
        1.1 Eligibility: You must be at least 18 years old and capable of entering into a legally binding agreement to use our website and services. If you are accessing our website on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
      </p>
      <p>
        1.2 Limited License: We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our website for personal or internal business purposes. You may not use our website for any illegal or unauthorized purposes.
      </p>
      <p>
        1.3 User Account: You may be required to create an account to access certain features or services. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
      </p>

      <br />
      <h5>Intellectual Property Rights:</h5>
      <p>
        2.1 Ownership: All intellectual property rights, including copyrights, trademarks, and patents, related to our website and services are owned by us or our licensors. You agree not to reproduce, modify, distribute, or create derivative works based on our intellectual property without our prior written consent.
      </p>
      <p>
        2.2 User Content: By submitting any content (such as reviews, feedback, or suggestions) to our website, you grant us a worldwide, non-exclusive, royalty-free license to use, modify, reproduce, and distribute the content for the purpose of providing our services.
      </p>

      <br />
      <h5>Disclaimer of Warranties:</h5>
      <p>
        Our website and services are provided on an "as is" and "as available" basis without any warranties or representations, express or implied. We do not guarantee the accuracy, completeness, reliability, or suitability of the information provided on our website.
      </p>

      <br />
      <h5>Limitation of Liability:</h5>
      <p>
        To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of our website or services, even if we have been advised of the possibility of such damages.
      </p>

      <h5>Indemnification:</h5>
      <p>
        You agree to indemnify and hold us harmless from any claims, losses, damages, liabilities, or expenses, including attorneys' fees, arising out of your use of our website, violation of these Terms, or infringement of any third-party rights.
      </p>

      <br />
      <h5>Governing Law and Jurisdiction:</h5>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in [insert applicable jurisdiction].
      </p>

      <br />
      <h5>Severability:</h5>
      <p>
        If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
      </p>

      <br />
      <h5>Changes to the Terms:</h5>
      <p>
        We reserve the right to modify or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting the revised Terms on our website. We encourage you to review the Terms periodically for any updates.
      </p>

      <br />
      <h5>Contact Us:</h5>
      <p>
        If you have any questions, concerns, or feedback regarding these Terms, please contact us at [email address] or [mailing address]. By using our website and services, you acknowledge that you have read, understood, and agreed to these Terms and any other applicable policies or guidelines referenced herein.
      </p>
    </div>
  );
};

const TermsConditions = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Terms & Conditions" />

      {/* Start Breadcrumb Area */}
      <Breadcrumb title="Terms & Conditions" />
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
                      <h3>Terms & Conditions</h3>
                      <TermsConditionsContent />
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

export default TermsConditions;
