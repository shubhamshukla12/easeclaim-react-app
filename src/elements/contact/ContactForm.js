import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
  return <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>;
};

const ContactForm = () => {
  const [result, setResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [result]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_wd67r8v', 'template_azf9e1h', e.target, 'Jly865lom_TX8CG6u')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <form action="" onSubmit={sendEmail}>
      <div className="rn-form-group">
        <input type="text" name="fullname" placeholder="Your Name" required />
      </div>

      <div className="rn-form-group">
        <input type="email" name="email" placeholder="Your Email" required />
      </div>

      <div className="rn-form-group">
        <input type="text" name="phone" placeholder="Phone Number" required />
      </div>

      <div className="rn-form-group">
        <input type="text" name="subject" placeholder="Subject" required />
      </div>

      <div className="rn-form-group">
        <textarea name="message" placeholder="Your Message" required></textarea>
      </div>

      <div className="rn-form-group">
        <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">
          Submit Now
        </button>
      </div>

      <div className="rn-form-group">{result && <Result />}</div>
    </form>
  );
};

export default ContactForm;
