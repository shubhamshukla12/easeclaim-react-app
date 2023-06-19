import React from "react";
// import { Container } from "react-bootstrap";
import "./css/vertical.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Vertical = () => {
  //'rgba(250,252, 251, 1)'
  const iconStyle = {
    background: "rgba(250,252, 251, 1)",
    color: "#fff",

    border: "5px solid #387094",
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="rotated-text">3 STEP PROCESS</div>
            </div>
            <div className="col-10">
              <VerticalTimeline
                layout="1-column-left"
                visible={false}
                lineColor={"#387094"}
                className="extra-class-name"
              >
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#fff", boxShadow: "none" }}
                  iconStyle={iconStyle}
                  icon={<div className="number">01</div>}
                >
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="heading1">Connect with our expert</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="para1">
                        Call or reach to our experienced and qualified experts
                        to get the best advise and solutions.
                      </div>
                    </div>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "fff",
                    color: "#000",
                    boxShadow: "none",
                  }}
                  iconStyle={iconStyle}
                  icon={<div className="number">02</div>}
                >
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="heading2">
                        Register & Upload your Documents
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="para2">
                        Register your documents with us, via expert or directly
                        upload on our website to get further assistance.
                        Remember, we always insure your data security first.
                      </div>
                    </div>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "fff",
                    color: "#000",
                    boxShadow: "none",
                  }}
                  iconStyle={iconStyle}
                  icon={<div className="number">03</div>}
                >
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="heading3">
                        Voila! Your claim is Processed
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="para1">
                        Well done! Your claim is processed now, get the updates
                        direct over the website, or you can always reach to our
                        experts available always to help you out.
                      </div>
                    </div>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vertical;
