import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import SliderComponent from "./SliderComponent";
import Many from "./Many";

class EasyClaim extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  stickyHeader() {}
  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    return (
      <Fragment>
        <Helmet pageTitle="EasyClaim" />
        {/* End Slider Area   */}
        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" class="hero d-flex align-items-center section-bg">
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <div data-aos="fade-up" class="do-you-know">
                  Do you know about your Free Insurance under ESIC & EPFO
                  Scheme?
                </div>
                <p data-aos="fade-up" class="next-para" data-aos-delay="100">
                  Know Your Hidden Insurance & benefits
                </p>
                <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                  <a
                    href="#book-a-table"
                    class="btn-book-a-table sub-your-claim"
                  >
                    Submit your claim now
                  </a>
                </div>
              </div>
              <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                <img
                  src="assets/img/banner/hero2.png"
                  class="img-fluid"
                  alt=""
                  data-aos="zoom-out"
                  data-aos-delay="300"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Hero Section --> */}
        <section class="d-flex align-items-center scroll-need text-sm-center">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-4 need-help">
                <span
                  href="#"
                  class="text-dark"
                  style={{ textDecoration: "underline" }}
                >
                  Need Help?
                </span>
              </div>
              <div class="col-lg-4 text-center scroll-down-btn d-m-none">
                <p class="text-primary scroll-down">Scroll Down</p>
                <img
                  src="assets/img/figma/arrow-down.png"
                  alt=""
                  srcset=""
                  class="img-fluid"
                />
              </div>
              <div class="col-lg-4"></div>
            </div>
          </div>
        </section>

        <section
          id="claim-statement"
          class="need-claim-statement claim-statement"
        >
          <div class="container">
            <div class="section-header">
              <div class="row gy-4 justify-content-center">
                <div class="col-lg-2 col-4 d-m-none">
                  <img
                    src="assets/img/figma/angle-circle-left-1.png"
                    class="img-fluid angle-circle-left"
                    alt=""
                  />
                </div>
                <div class="col-lg-8 col-12">
                  <p class="claim-statement">Need Help in Claim Settlement?</p>
                </div>
                <div class="col-lg-2 col-4 d-m-none">
                  <img
                    src="assets/img/figma/angle-circle-left.png"
                    class="img-fluid angle-circle-left"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SliderComponent />

        <div class="container">
          <div class="claim-hidden-insurance">
            <div class="row">
              <div class="col-md-3">
                <img
                  src="assets/img/figma/hidden-insurance.png"
                  alt=""
                  srcset=""
                  class="img-fluid claim-hidden-img"
                />
              </div>
              <div class="col-md-6">
                <h3>Lost someone in accident? </h3>
                <p>Help the family to claim hidden insurance.</p>
              </div>
              <div class="col-md-3 click-now">
                <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                  <a href="#book-a-table" class="click-here-btn">
                    Check Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Many />
        {/* Start Footer Style  */}
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default EasyClaim;
