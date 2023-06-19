import React, { Component } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from 'react-scrollspy';
import { Link } from "react-router-dom";

class HeaderFour extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.closeMenuTrigger = this.closeMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.stickyHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.stickyHeader);
  }

  stickyHeader() {
    var value = window.scrollY;
    var header = document.querySelector('.header--fixed');
    if (header) {
      if (value > 100) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  }

  menuTrigger() {
    var headerWrapper = document.querySelector('.header-wrapper');
    if (headerWrapper) {
      headerWrapper.classList.toggle('menu-open');
    }
  }

  closeMenuTrigger() {
    var headerWrapper = document.querySelector('.header-wrapper');
    if (headerWrapper) {
      headerWrapper.classList.remove('menu-open');
    }
  }

  render() {
    return (
      <header className="header-area formobile-menu header--fixed bg_color--1">
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">
                <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images" />
                <img className="logo-2" src="/assets/images/logo/logo-all-dark.png" alt="Logo Images" />
              </a>
            </div>
          </div>

          <nav className="mainmenunav d-lg-block">
            <Scrollspy className="mainmenu" items={['home', 'service', 'Our Plans', 'Join Us', 'Blog', 'About Us']} currentClassName="is-current" offset={-200}>
              <li><Link to="/">Home</Link></li>

              <li className="has-droupdown">
                <a href="#service">Service</a>
                <ul className="submenu">
                  <li className="has-droupdown">
                    <span href="#">Hidden Insurance</span>
                    <ul className="submenu">
                      <li><Link to="/govt-schemas">Govt Schemes</Link></li>
                      <li><Link to="/debit-credit">Debit / Credit Card</Link></li>
                      <li><Link to="/simcard">SIM Card</Link></li>
                      <li><Link to="/lpg">LPG</Link></li>
                      <li><Link to="/esic">ESIC</Link></li>
                      <li><Link to="/epfo">EPFO</Link></li>
                      <li><Link to="/accident-insurance">Accident Insurance</Link></li>
                      <li><Link to="/life-insurance">Life Insurance</Link></li>
                      <li><Link to="/finance-claim">Finance Claims</Link></li>
                      <li><Link to="/individual-claim">Individual Claim</Link></li>
                      <li><Link to="/hospital-claim">Hospital Claim</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/claim-now">Claim now</Link></li>
                </ul>
              </li>

              <li><Link to="/our-plan">Our Plans</Link></li>
              <li><Link to="#portfolio">Join Us</Link></li>

              <li className="has-droupdown">
                <Link to="/blogs">Blog</Link>
                <ul className="submenu">
                  <li className="has-droupdown">
                    <Link to="/blog-details">Blogs Details</Link>
                  </li>
                </ul>
              </li>

              <li className="has-droupdown">
                <Link to="/about-us">About Us</Link>
                <ul className="submenu">
                  <li className="has-droupdown">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="has-droupdown">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="has-droupdown">
                    <Link to="/cancellation-refund">Cancellation & Refund</Link>
                  </li>
                  <li className="has-droupdown">
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li className="has-droupdown">
                    <Link to="/insurance-rights">Insurance Rights</Link>
                  </li>
                </ul>
              </li>
            </Scrollspy>
          </nav>

          <div className="header-btn">
            <span className="rn-btn" href="#">
              <span>Claim Now</span>
            </span>
          </div>

          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
          </div>

          <div className="close-menu d-block d-lg-none">
            <span onClick={this.closeMenuTrigger} className="closeTrigger"><FiX /></span>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderFour;
