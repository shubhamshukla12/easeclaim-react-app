import React from 'react';

const ClaimNow = () => {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center section-bg section-claim-now-bg">
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-md-6 text-center text-lg-start">
              <h3 className="do-you-know">Filing A Claim Is Now Made Easy!</h3>
              <p>Fill this form to settle your claims!</p>
              <img src="assets/img/figma/claim-now/claim-now-hero.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
            </div>
            <div className="col-md-6">
              <div className="container">
                <div className="claim-form">
                  <div className="container">
                    <form>
                      <div className="m-2 row">
                        <div className="col-md-6 mt-3">
                          <input type="text" className="form-control" name="firstName" id="inputFirstName" placeholder="First Name" />
                        </div>
                        <div className="col-md-6 mt-3">
                          <input type="text" className="form-control" name="lastName" id="inputLastName" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="m-2 row">
                        <div className="col-md-6 mt-3">
                          <input type="text" className="form-control" name="email" id="inputEmail" placeholder="Email Address" />
                        </div>
                        <div className="col-md-6 mt-3">
                          <input type="text" className="form-control" name="contactNumber" id="inputContactNumber" placeholder="Contact Number" />
                        </div>
                      </div>
                      <div className="m-2 row">
                        <div className="col-md-6 mt-3">
                          <input type="text" className="form-control" name="city" id="inputCity" placeholder="City" />
                        </div>
                        <div className="col-md-6 mt-3">
                          <input type="text" className="form-control" name="insuranceType" id="inputInsuranceType" placeholder="Select insurance type" />
                        </div>
                      </div>
                      <div className="m-2 row">
                        <div className="col-md-12 mb-2 mt-2">
                          <textarea className="claimtext" name="message" id="message" cols="30" rows="10" placeholder="Write here...."></textarea>
                        </div>
                      </div>
                      <div className="submit-btn-box">
                        <a href="#" className="submit-btn">Submit</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="how-work-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-5">
              <div className="d-block">
                <h4 className="text-center">How it Works?</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p className="step-text">step 01</p>
                      <div className="work-img">
                        <img src="assets/img/figma/claim-now/work1-1.png" alt="" />
                      </div>
                      <p className="text-contain">Connect with our expert advisors and get the best guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p className="step-text">step 02</p>
                      <div className="work-img">
                        <img src="assets/img/figma/claim-now/work2.png" alt="" />
                      </div>
                      <p className="text-contain">Connect with our expert advisors and get the best guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p className="step-text">step 03</p>
                      <div className="work-img">
                        <img src="assets/img/figma/claim-now/work-3.png" alt="" />
                      </div>
                      <p className="text-contain">Connect with our expert advisors and get the best guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClaimNow;
