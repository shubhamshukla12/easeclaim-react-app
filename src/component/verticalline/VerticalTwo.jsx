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

const VerticalTwo = () => {
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
          <h4>Here's detailed information about LPG insurance:</h4>

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
                    LPG insurance offers protection against a range of risks
                    related to LPG, including property damage, bodily injury,
                    and legal liabilities. The coverage may vary depending on
                    the insurance policy and can be customized to meet the
                    specific needs of individuals or businesses dealing with
                    LPG.
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
                    <h2>Property Damage</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    LPG insurance typically covers damage to property resulting
                    from incidents such as explosions, fires, leaks, or
                    accidents involving LPG storage tanks, pipelines, or
                    appliances. This coverage helps to repair or replace damaged
                    property, including buildings, equipment, and
                    infrastructure.
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
                    <h2>Bodily Injury</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    LPG accidents can cause serious injuries to individuals,
                    including burns, respiratory problems, or other health
                    issues. LPG insurance provides coverage for bodily injury,
                    including medical expenses, hospitalization costs, and
                    rehabilitation expenses for affected individuals.
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
                    <h2>Legal Liabilities</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    If an LPG-related incident causes harm or injury to third
                    parties, LPG insurance can provide coverage for legal
                    liabilities. This includes costs associated with legal
                    settlements, court fees, and compensation awarded to
                    affected parties.
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
                    <h2>Leak Detection and Prevention</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    Some LPG insurance policies offer additional benefits such
                    as leak detection systems or preventive measures to minimize
                    the risk of accidents or property damage. These features can
                    help identify and address potential leaks or malfunctions in
                    LPG systems, enhancing safety and reducing the likelihood of
                    incidents.
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
                    <h2>Regulatory Compliance</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    LPG insurance often ensures compliance with legal and safety
                    requirements set by regulatory authorities. It helps
                    individuals and businesses meet the necessary insurance
                    obligations related to LPG usage and provides peace of mind
                    knowing that they are adequately covered in case of
                    unforeseen events.
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
                    <h2>Risk Assessment and Mitigation</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    LPG insurance providers may offer risk assessment services
                    to evaluate the safety measures and practices related to LPG
                    handling. This can help identify potential hazards,
                    implement risk mitigation strategies, and improve overall
                    safety standards.
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
                icon={<Number>08</Number>}
              >
                <div className="row ">
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h2>Industry-Specific Coverage</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    LPG insurance can be tailored to specific industries or
                    sectors that heavily rely on LPG, such as restaurants,
                    hotels, gas stations, or manufacturing facilities. This
                    ensures that the insurance coverage aligns with the unique
                    risks and requirements of each industry.
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
                icon={<Number>09</Number>}
              >
                <div className="row ">
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h2>Importance of LPG Safety Measures</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    LPG insurance often emphasizes the importance of following
                    proper safety measures, such as regular maintenance of LPG
                    systems, adherence to safety guidelines, and employee
                    training. Insurers may provide resources and recommendations
                    to promote safe practices and reduce the likelihood of
                    accidents.
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

export default VerticalTwo;
