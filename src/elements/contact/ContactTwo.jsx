import React, { Component } from "react";
import ContactForm from "./ContactForm";

class ContactTwo extends Component {
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-7 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Contact Us.</h2>
                <p className="description">
                  Have a question? Need help? Don't hesitate, drop us a line.
                </p>
              </div>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactTwo;
