import React, { Component } from "react";

class ContactOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnEmail: "",
      rnSubject: "",
      rnMessage: "",
    };
  }

  render() {
    const {
      rnName,
      rnEmail,
      rnSubject,
      rnMessage
    } = this.state;

    const handleInputChange = (e, field) => {
      this.setState({ [field]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };

    return (
      <div className="contact-form--1 mb--30">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-12 order-2 order-lg-1">
              <div className="contact-title text-center ">
                <h4 className="title">Simply write to us, we will reach to you</h4>
              </div>
              <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                  <div className="input-field-1 d-flex">
                    <label htmlFor="item01">
                      <input
                        type="text"
                        name="name"
                        id="item01"
                        value={rnName}
                        onChange={(e) => handleInputChange(e, "rnName")}
                        placeholder="First Name"
                      />
                    </label>
                    <label htmlFor="item02">
                      <input
                        type="text"
                        name="email"
                        id="item02"
                        value={rnEmail}
                        onChange={(e) => handleInputChange(e, "rnEmail")}
                        placeholder="Last Name"
                      />
                    </label>
                  </div>
                  <div className="input-field-1 d-flex">
                    <label htmlFor="item03">
                      <input
                        type="text"
                        name="subject"
                        id="item03"
                        value={rnSubject}
                        onChange={(e) => handleInputChange(e, "rnSubject")}
                        placeholder="Email Address"
                      />
                    </label>
                    <label htmlFor="item03">
                      <input
                        type="text"
                        name="subject"
                        id="item03"
                        value={rnSubject}
                        onChange={(e) => handleInputChange(e, "rnSubject")}
                        placeholder="Contact Number"
                      />
                    </label>
                  </div>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={rnMessage}
                      onChange={(e) => handleInputChange(e, "rnMessage")}
                      placeholder="Write here...."
                    />
                  </label>
                  <button
                    className="contact-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </form>
                <div className="contact-imgs-div">
                  <img
                    className="contact-imgs"
                    src="assets/images/contact/Group-contact.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactOne;
