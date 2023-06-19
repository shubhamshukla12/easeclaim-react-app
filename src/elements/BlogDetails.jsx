import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import TabsTwo from "./tab/TabTwo";
import ServiceTwo from "./service/ServiceTwo";
import PartnerBanner from "../component/common/PartnerBanner";

class BlogDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Blog Details" />

        <div className="container ">
          <div className="rn-page-title-area ptb--120 pb--190 bg_image bg_image--1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-single-page-title text-center pt--100">
                    <ul className="blog-meta d-flex ">
                      {/* <li><FiClock />May 18, 2020</li>
                                        <li><FiUser />NipaBali</li>
                                        <li><FiMessageCircle />15 Comments</li>
                                        <li><FiHeart />Like</li> */}
                      <li className="mt-2">
                        <h3 style={{ color: "#ffffff" }}>
                          List of Diseases Covered by Bajaj Allianz Health
                          Insurance Plans
                        </h3>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ServiceTwo />
        </div>

        {/* Start Breadcrump Area */}

        <TabsTwo />

        <div className="container mt--50">
          <PartnerBanner />
        </div>

        {/* End Breadcrump Area */}
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
export default BlogDetails;
