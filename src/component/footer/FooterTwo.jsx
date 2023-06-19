import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
  { Social: <FaTwitter />, link: 'https://twitter.com/' },
  { Social: <FaGithub />, link: 'https://github.com/' },
];

const FooterTwo = () => {
  return (
    <div className="footer-style-2 mt--100 ptb--30 bgcolor-5">
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-left justify-content-between">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-left text-sm-left mb_sm--20">
                <a href="/home-one">
                  <img src="assets/images/logo/logo-all-dark.png" alt="Logo images" />
                </a>
              </div>
              <div className="text-left ptb--30">
                <p>
                  EaseClaim is a leading solution for handling insurance claims, with an emphasis on delivering effective and efficient management of the whole claim lifecycle through a single integrated platform.
                </p>
                <div className="inner text-left">
                  <h4 style={{ color: "#9A9A9A" }}>Follow Us</h4>
                  <ul className="social-share rn-lg-size d-flex justify-content-left liststyle">
                    {SocialShare.map((val, i) => (
                      <li key={i}>
                        <a href={val.link}>{val.Social}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="footer-right">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="footer-link">
                    <h4>Quick Links</h4>
                    <ul className="ft-link">
                      <li><a href="/">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Associate partner</a></li>
                      <li><a href="#">Claim your insurance</a></li>
                      <li><a href="#">Contact us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="footer-link">
                    <h4>Services</h4>
                    <ul className="ft-link">
                      <li><a href="#">Government schemes</a></li>
                      <li><a href="#">Rupay Card Insurance</a></li>
                      <li><a href="#">SIM Card Insurance</a></li>
                      <li><a href="#">LPG Accidental insurance</a></li>
                      <li><a href="#">ESIC Benefits</a></li>
                      <li><a href="#">EPFO Benefits</a></li>
                      <li><a href="#">Claim Assistance</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 mt_mobile--30">
                  <div className="footer-link">
                    <h4>Contact Us</h4>
                    <ul className="ft-link">
                      <li>
                        <p>123, XYZ City,
                          Tri Nagar, Delhi, 110065
                        </p>
                      </li>
                      <li><a href="mailto:help@easeclaim.com">help@easeclaim.com</a></li>
                      <li><a href="tel:+919876543210">+91 98765 43210</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <hr className="border border-black-50 border-2 opacity-50 bg-white" />
                  <div className="footer-text">
                    <p>© 2023 Ekana Technologies. All Rights Reserved.</p>
                  </div>
                  <div className="footer-bottom">
                    <div className="d-flex text-white-50 mb--40">
                      <span>Privacy Policy</span>
                      <span>| Cancellation &amp; Refund</span>
                      <span>| Terms &amp; Conditions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
