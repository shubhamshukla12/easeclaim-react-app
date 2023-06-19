import React from "react";
import Vertical from "../elements/Vertical";
import PartnerBanner from "../component/common/PartnerBanner";
import TabsTwo from "../elements/tab/TabTwo";

function Many() {
  return (
    <>
      <section class="got-stuck">
        <div class="container">
          <div class="row gy-4">
            <div class="col-md-6 order-grid">
              <div class="got-stuck-left">
                <div class="got-stuck-text">
                  <h3 class="heading-text-primary">Got stuck in</h3>
                  <h3 class="heading-text-danger">Claim Processing?</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="got-stuck-right-img">
                <img
                  src="assets/img/figma/got-stuck-img.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>

            <div class="col-md-6 order-grid">
              <div class="got-stuck-left-img">
                <img
                  src="assets/img/figma/got-stuck-left-img.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-md-6 order-grid">
              <div class="got-stuck-right">
                <div class="got-stuck-text-right">
                  <h3 class="heading-text-primary dont-worry">Don't Worry!</h3>
                  <h3 class="heading-text-danger assist-you">
                    We're here to assist you
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Vertical />

      {/* <div class="process-bar">

                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="step-process">
                                3 STEP PROCESS
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="y-line">

                            </div>
                            <div class="number-text-1">
                                <p class="num-text-1">1</p>
                            </div>
                            <div class="number-text-2">
                                <p class="num-text-2">2</p>
                            </div>
                            <div class="number-text-3">
                                <p class="num-text-3">3</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="paragraph-text-1">
                                <p class="para-text-1">Connect with our expert</p>
                            </div>
                            <div class="paragraph-text-2">
                                <p class="para-text-2">Register & Upload your Documents</p>
                            </div>
                            <div class="paragraph-text-3">
                                <p class="para-text-3">Voila! Your claim is Processed</p>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="contain-text-1">
                                <p class="con-text-1">Call or reach to our experienced and qualified experts to get the best advise and solutions.</p>
                            </div>
                            <div class="contain-text-2">
                                <p class="con-text-2">Register your documents with us, via expert or directly upload on our website to get further assistance. Remember, we always insure your data security first.</p>
                            </div>
                            <div class="contain-text-3">
                                <p class="con-text-3">Well done! Your claim is processed now, get the updates direct over the website, or you can always reach to our experts available always to help you out.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      <section class="why-choose-us">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2>Why Choose Us?</h2>
            </div>
            <div class="col-md-8">
              <div class="our_solution_category">
                <div class="solution_cards_box">
                  <div
                    class="solution_card"
                    style={{
                      borderLeft: "8px solid #2D3CD9",
                      borderRadius: "17px 0px 0px 19px",
                    }}
                  >
                    {/* <!-- <div class="hover_color_bubble"></div> --> */}
                    <div class="d-flex">
                      <div class="so_top_icon">
                        <img
                          src="assets/img/figma/expert-guidance-icon.png"
                          alt=""
                          class="img-fluid"
                        />
                      </div>

                      <div class="solu_title">
                        <h3>Know Policy Benefits</h3>
                      </div>
                    </div>
                    <div class="solu_description">
                      <p>
                        Our experts will help in decoding any insurance policy
                        in minutes to explore the maximum benefits of the
                        policy.
                      </p>
                    </div>
                  </div>
                  <div
                    class="solution_card next-row"
                    style={{
                      borderLeft: "8px solid #47D990",
                      borderRadius: "17px 0px 0px 19px",
                    }}
                  >
                    {/* <!-- <div class="hover_color_bubble"></div> --> */}
                    <div class="d-flex">
                      <div class="so_top_icon">
                        <img
                          src="assets/img/figma/easeclaim-settlement-icon.png"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="solu_title">
                        <h3 style={{ color: "#47D999" }}>
                          Ease Claim Settlement
                        </h3>
                      </div>
                    </div>
                    <div class="solu_description">
                      <p>
                        You can obtain immediate financing for your claim at
                        almost ZERO interest thanks to our financing partners.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--  --> */}
                <div class="solution_cards_box sol_card_top_3">
                  <div
                    class="solution_card"
                    style={{
                      borderLeft: "8px solid #CBA62B",
                      borderRadius: "17px 0px 0px 19px",
                    }}
                  >
                    {/* <!-- <div class="hover_color_bubble"></div> --> */}
                    <div class="d-flex">
                      <div class="so_top_icon">
                        <img
                          src="assets/img/figma/hidden-insurance-icon.png"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="solu_title">
                        <h3 style={{ color: "#cba62b" }}>Hidden Insurance</h3>
                      </div>
                    </div>
                    <div class="solu_description">
                      <p>
                        You are insured by the government's FREE insurance for
                        more than 50 lakh.
                      </p>
                    </div>
                  </div>
                  <div
                    class="solution_card next-row"
                    style={{
                      borderLeft: "8px solid #0BBDF2",
                      borderRadius: "17px 0px 0px 19px",
                    }}
                  >
                    {/* <!-- <div class="hover_color_bubble"></div> --> */}
                    <div class="d-flex">
                      <div class="so_top_icon">
                        <img
                          src="assets/img/figma/know-policy-benefits-icon.png"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="solu_title">
                        <h3 style={{ color: "#0BBDF2" }}>Expert Guidance</h3>
                      </div>
                    </div>
                    <div class="solu_description">
                      <p>
                        We assist you in settling insurance claims quick & easy.
                        You can use Easeclaim to submit a claim in just three
                        simple steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="assets/img/figma/why-choose-us.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        {/* <!-- ======= Menu Section ======= --> */}
        <div class="container" data-aos="fade-up">
          <TabsTwo />
        </div>
        {/* <!-- End Menu Section --> */}

        <section id="stats-counter" class="stats-counter">
          <div class="container aos-init aos-animate" data-aos="zoom-out">
            <div class="start-counter-head text-center">
              <h3>Join our family, it's growing with you !</h3>
            </div>
            <div class="row gy-4">
              <div class="col-lg-3 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <img
                    src="assets/img/figma/count-1.png"
                    class="menu-img img-fluid"
                    alt=""
                  />
                  <span class="">01 lac +</span>
                  <p>B2C App Downloads</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div class="col-lg-2 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <img
                    src="assets/img/figma/count-2.png"
                    class="menu-img img-fluid"
                    alt=""
                  />
                  <div class="d-flex justify-content-center">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="100"
                      data-purecounter-duration="0"
                      class="purecounter"
                    >
                      100{" "}
                    </span>
                    <span>+</span>
                  </div>
                  <p>Hospitals Onboarded</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div class="col-lg-2 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <img
                    src="assets/img/figma/count-3.png"
                    class="menu-img img-fluid"
                    alt=""
                  />
                  <div class="d-flex justify-content-center">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="20"
                      data-purecounter-duration="0"
                      class="purecounter"
                    >
                      20
                    </span>
                    <span>+</span>
                  </div>
                  <p>Financing Partners/ NBFCs</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div class="col-lg-2 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <img
                    src="assets/img/figma/count-4.png"
                    class="menu-img img-fluid"
                    alt=""
                  />
                  <div class="d-flex justify-content-center">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="100"
                      data-purecounter-duration="0"
                      class="purecounter"
                    >
                      100
                    </span>
                    <span>+</span>
                  </div>
                  <p>Claims Settled Till Now</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}
              <div class="col-lg-3 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <img
                    src="assets/img/figma/count-5.png"
                    class="menu-img img-fluid"
                    alt=""
                  />
                  <div class="d-flex justify-content-center">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="50"
                      data-purecounter-duration="0"
                      class="purecounter"
                    >
                      50
                    </span>
                    <span>+</span>
                  </div>
                  <p>Associated Corporates</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- <section class="join-us-section">
                    <div class="container">
                      <div class="claim-hidden-insurance">
                        <div class="row">
                          <div class="col-md-3">
                            <img src="assets/img/figma/join-us.png" alt="" srcset="" class="img-fluid claim-hidden-img">
                          </div>
                          <div class="col-md-6">
                            <h3 class="text-center">Join us as partner </h3>
                            <p>info@easeclaim.com or call to +91 98765 43210 </p>
                          </div>
                          <div class="col-md-3 click-now">
                            <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                              <a href="#" class="click-here-btn">Contact Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section> 
                  --> */}

        <PartnerBanner />
        {/* <section class="join-us-section">
                    <div class="container">
                        <div class="claim-hidden-insurance contact-us">
                            <div class="row">
                                <div class="col-md-3 claim-desk-img">
                                    <img src="assets/img/figma/join-us.png" alt="" srcset="" class="img-fluid claim-hidden-img" />
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-center">Join us as partner </h3>
                                    <p>info@easeclaim.com
                                        or call to +91 98765 43210 </p>
                                </div>
                                <div class="col-md-3 click-now">
                                    <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                                        <a href="#" class="click-here-btn">Contact Now</a>
                                    </div>
                                </div>
                                <div class="col-md-3 claim-mob-img">
                                    <img src="assets/img/figma/join-us.png" alt="" srcset="" class="img-fluid claim-hidden-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}

export default Many;
