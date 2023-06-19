import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, parent }) => (
  <React.Fragment>
    <div className="rn-columns-area pt--60 bg_color--5">
      <div className="breadcrumb-area rn-bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner pt--60 pb-40">
                <h2 className="title">{title}</h2>
                <ul className="page-list">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  {parent && <li className="breadcrumb-item">{parent}</li>}
                  <li className="breadcrumb-item active">{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Breadcrumb;
