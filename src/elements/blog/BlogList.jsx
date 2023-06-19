import React, { Component, Fragment } from "react";
import BlogContent from "./BlogContent";

class BlogList extends Component {
  render() {
    const PostList = BlogContent.slice(0, 6);
    return (
      <Fragment>
        <div className="row">
          {PostList.map((value, i) => {
            const { images, title, category } = value;
            return (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                <div className="blog blog-style--1">
                  <div className="blogimg-image">
                    <img src={images} alt="Blog Images" />
                  </div>
                  <div className="content">
                    <h5 className="title">{title}</h5>
                    <p className="blogtype mb-1">{category}</p>
                    <div className="blog-btn">
                      <p>
                        Barely any person has remained unaffected due to rising
                        health{" "}
                        <span style={{ color: "blue", fontSize: "18px" }}>
                          Read More
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default BlogList;
