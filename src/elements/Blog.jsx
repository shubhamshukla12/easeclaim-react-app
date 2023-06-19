import React, { Component } from "react";

import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import TabsTwo from "./tab/TabTwo";
import PartnerBanner from "../component/common/PartnerBanner";
import ServiceOne from "./service/ServiceOne";
// import BLogList from "./blog/BlogList";

const SlideList = [
  {
    textPosition: "text-left",
    bgImage: "bg_image--1",
    category: "",
    date: "5 June 2022",
    title: "List of Diseases Covered by Bajaj Allianz Health Insurance Plans",
    description:
      "Barely any person has remained unaffected due to rising health......",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--2",
    category: "",
    date: "5 June 2022",
    title: "List of Diseases Covered by Bajaj Allianz Health Insurance Plans",
    description:
      "Barely any person has remained unaffected due to rising health......",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--1",
    category: "",
    date: "5 June 2022",
    title: "List of Diseases Covered by Bajaj Allianz Health Insurance Plans",
    description:
      "Barely any person has remained unaffected due to rising health......",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--2",
    category: "",
    date: "5 June 2022",
    title: "List of Diseases Covered by Bajaj Allianz Health Insurance Plans",
    description:
      "Barely any person has remained unaffected due to rising health......",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Blog" />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Blog"} />
        {/* End Breadcrump Area */}

        {/* Start Slider Area   */}

        <div className="container ">
          <div className="slider-wrapper mt--50 color-white">
            <div className="slider-digital-claim">
              <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                {SlideList.map((value, index) => (
                  <div
                    className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center `}
                    key={index}
                    data-black-overlay="4"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className={`inner ${value.textPosition}`}>
                            {value.title ? (
                              <p className="blogtitle">{value.title}</p>
                            ) : (
                              ""
                            )}
                            {value.date ? (
                              <p className="date">{value.date}</p>
                            ) : (
                              ""
                            )}
                            {value.description ? (
                              <p className="description">{value.description}</p>
                            ) : (
                              ""
                            )}
                            {value.buttonText ? (
                              <div className="slide-btn">
                                <a
                                  className="rn-button-style--2 btn-primary-color"
                                  href={`${value.buttonLink}`}
                                >
                                  {value.buttonText}
                                </a>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className={` inner `}>
                            <img
                              className="leftimg"
                              src="assets/images/blogs/blogslider-2.jpg"
                              alt="blog slider"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="container  mt--50">
          <ServiceOne />
        </div>
        <div className="container  mt--50">
          <TabsTwo />
        </div>

        <div className="row mt--80 ">
          <PartnerBanner />
        </div>

        {/* End Slider Area   */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </React.Fragment>
    );
  }
}
export default Blog;
