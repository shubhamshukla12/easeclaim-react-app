import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";

const Number = styled.div`
  width: 34px;
  height: 24px;
  padding: 2px;
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;

  text-align: center;

  color: #376e91;
`;

const VerticalOne = () => {
  //'rgba(250,252, 251, 1)'
  const iconStyle = {
    background: "rgba(250,252, 251, 1)",
    color: "#fff",
    marginTop: "1rem",
    border: "5px solid #387094",
  };

  return (
    <>
      <Container>
        <div class="row">
          <h4>Here's detailed information about SIM card insurance:</h4>

          <div class="col-12">
            <VerticalTimeline
              layout="1-column-left"
              visible={true}
              lineColor={"#387094"}
              className="extra-class-name"
            >
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fff", boxShadow: "none" }}
                iconStyle={iconStyle}
                icon={<Number>01</Number>}
              >
                <div className="row ">
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h2>Coverage</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12 ">
                    SIM card insurance typically covers the cost of replacing
                    your SIM card if it is lost, stolen, or damaged. This
                    coverage includes the expenses associated with obtaining a
                    new SIM card from your mobile service provider, including
                    activation fees and replacement charges.
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
                icon={<Number>02</Number>}
              >
                <div className="row ">
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h2>Loss or Theft</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    If your SIM card is lost or stolen, the insurance will
                    reimburse you for the cost of acquiring a new one. This can
                    be particularly helpful if your SIM card contains valuable
                    data or if it is associated with important accounts or
                    services.
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
                icon={<Number>03</Number>}
              >
                <div className="row ">
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h2>Damage</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    SIM card insurance also covers damage to your SIM card
                    caused by accidents, such as dropping your phone or water
                    damage. If your SIM card becomes non-functional or needs
                    replacement due to physical damage, the insurance will
                    provide coverage for the replacement cost.
                  </div>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fff", boxShadow: "none" }}
                iconStyle={iconStyle}
                icon={<Number>04</Number>}
              >
                <div className="row ">
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h2>Coverage</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    SIM card insurance typically covers the cost of replacing
                    your SIM card if it is lost, stolen, or damaged. This
                    coverage includes the expenses associated with obtaining a
                    new SIM card from your mobile service provider, including
                    activation fees and replacement charges.
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
                icon={<Number>05</Number>}
              >
                <div className="row ">
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h2>Loss or Theft</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    If your SIM card is lost or stolen, the insurance will
                    reimburse you for the cost of acquiring a new one. This can
                    be particularly helpful if your SIM card contains valuable
                    data or if it is associated with important accounts or
                    services.
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
                icon={<Number>06</Number>}
              >
                <div className="row ">
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h2>Damage</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    SIM card insurance also covers damage to your SIM card
                    caused by accidents, such as dropping your phone or water
                    damage. If your SIM card becomes non-functional or needs
                    replacement due to physical damage, the insurance will
                    provide coverage for the replacement cost.
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
                icon={<Number>07</Number>}
              >
                <div className="row ">
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h2>Damage</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    The cost of SIM card insurance can vary depending on factors
                    such as the insurance provider, coverage amount, and
                    additional features offered. Some mobile phone insurance
                    plans or gadget insurance policies may include SIM card
                    coverage as part of their overall package. It is advisable
                    to compare different insurance options and consider the cost
                    relative to the potential benefits and risks.
                  </div>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </Container>
    </>
  );
};

export default VerticalOne;
