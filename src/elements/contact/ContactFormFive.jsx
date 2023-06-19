import React from 'react';
// import { Link } from 'react-router-dom';

const ContactFormFive = () => {
  return (
    <>
      <div className="container">
        <div className="claim-contact-form mtb--60">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="inner">
                <h3 className="title mb--40 fontWeight500">Leave a Reply</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="col-lg-12 col-md-12 col-12">
                        <input className="rnform-group" type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <input className="rnform-group" type="email" placeholder="Email" />
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <input className="rnform-group" type="text" placeholder="Website" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="col-lg-12 col-md-12 col-12">
                        <input className="rnform-group" type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <input className="rnform-group" type="email" placeholder="Email" />
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <input className="rnform-group" type="text" placeholder="Website" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="mtb--80">
                      <textarea className="rnform-group-1" type="text" placeholder="Comment"></textarea>
                    </div>
                    <a className="rn-button-style--2 btn-solid" href="#"><span>SEND MESSAGE</span></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormFive;
