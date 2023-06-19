import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import { Link } from "react-router-dom";

const PortfolioList = [
  {
    image: "image-1",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
];

class Portfolio extends Component {
  render() {
    const title = "Our Works";
    const description =
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.";

    return (
      <div className="portfolio-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-slick-activation mt--70 mt_sm--40">
          <Slider {...portfolioSlick2}>
            {PortfolioList.map((value, index) => (
              <div className="portfolio" key={index}>
                <div className="thumbnail-inner">
                  <div className={`thumbnail ${value.image}`}></div>
                  <div className={`bg-blr-image ${value.image}`}></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>{value.category}</p>
                    <h4 className="title">
                      <Link to="/portfolio-details">{value.title}</Link>
                    </h4>
                    <div className="portfolio-button">
                      <Link className="rn-btn" to="/portfolio-details">
                        Case Study
                      </Link>
                    </div>
                  </div>
                </div>
                <Link className="link-overlay" to="/portfolio-details"></Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Portfolio;