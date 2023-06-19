import React from 'react';

const BlogService = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="blog blog-style--10">
                        <div className="blog-page-blog-image">
                            <img width="333px" height="162px" src='assets/images/blogs/blogpage/blog-page-1.png' alt="Blog Images" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="content">
                        <h5 className="title">List of Diseases Covered by Bajaj Allianz Health Insurance Plans</h5>
                        <p className="blogtype">5 june 2022</p>
                        <div className="blog-btn">
                            <p> Barely any person has remained unaffected due to rising health Read more<span style={{ color: "blue", fontSize: "18px" }}>Read More</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ServiceOne = () => {
    return (
        <React.Fragment>
            <div className="row mt--50">
                <div className="col-lg-8 col-12">
                    <BlogService />
                    <BlogService />
                    <BlogService />
                    <BlogService />
                </div>
                <div className="col-lg-4 col-12 mt_md--50">
                    <div className="row service-one-wrapper">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="service service__style--1">
                                <div className="content">
                                    <h4 className="title">Tag Cloud</h4>
                                </div>
                                <div className="btn-blog-1">
                                    <span className="blog-btn-1">IT services</span>
                                    <span className="blog-btn-2">Consulting</span>
                                </div>
                                <div className="btn-blog-1">
                                    <span className="blog-btn-3">Cyber</span>
                                    <span className="blog-btn-4">IT Support</span>
                                    <span className="blog-btn-5">UX/UI</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--50">
                            <div className="service service__style--2">
                                <div className="content">
                                    <h3 className="title">Contact info</h3>
                                </div>
                                <div className="blog-contact-para-1">
                                    <span className="blog-span-1">Address:-</span>
                                    <span className="blog-span-2">123, XYZ, Delhi 110007</span>
                                </div>
                                <div className="blog-contact-para-1">
                                    <span className="blog-span-3">Phone:</span>
                                    <span className="blog-span-4">+91 85068 84052</span>
                                </div>
                                <div className="blog-contact-para-1">
                                    <span className="blog-span-5">Email:</span>
                                    <span className="blog-span-6">contact@easeclaim.in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ServiceOne;
