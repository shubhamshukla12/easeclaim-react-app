import React from 'react';

const GetStartedCard = () => {
  return (
    <div className="rn-columns-area ptb--120 bg_color--1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="single-column custom-color">
              <a href="#" className="get-start-btn-1">
                <div className="title-1">
                  <span>Button</span>
                </div>
              </a>
              <a href="#" className="get-start-btn-2">
                <div className="title-2">
                  <span>Button</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 mt_sm--30">
            <div className="single-column custom-color">
              <a href="#" className="get-start-btn-3">
                <div className="title-3">
                  <span>Button</span>
                </div>
              </a>
              <a href="#" className="get-start-btn-4">
                <div className="title-4">
                  <span>Button</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedCard;
