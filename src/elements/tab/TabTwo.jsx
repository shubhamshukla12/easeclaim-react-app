import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProgressBar } from 'react-bootstrap';
import BlogContent from "../blog/BlogContent";

class TabsTwo extends Component {
    render() {
        const PostList = BlogContent.slice(0, 6);
        let tab1 = "Recent Articles";
        let tab2 = "Popular Articles";

        return (
            <div className="main">
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container mt--60">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <div className="row text-center">
                                        <div className="col-lg-12">
                                            <div className="tablist-inner">
                                                <TabList className="pv-tab-button text-center mt--0">
                                                    <Tab><span>{tab1}</span></Tab>
                                                    <Tab><span>{tab2}</span></Tab>
                                                </TabList>
                                            </div>
                                        </div>
                                    </div>

                                    <TabPanel>
                                        <div className="row">
                                            {PostList.map((value, i) => (
                                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                    <div className="blog blog-style--1">
                                                        <div className="blogimg-image">
                                                            <img src={value.images} alt="Blog Images" />
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="title">{value.title}</h5>
                                                            <p className="blogtype mb-1">{value.category}</p>
                                                            <div className="blog-btn">
                                                                <p>
                                                                    Barely any person has remained unaffected due to rising health
                                                                    <span style={{ color: "blue", fontSize: "18px" }}>Read More</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="row">
                                            {PostList.map((value, i) => (
                                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                    <div className="blog blog-style--1">
                                                        <div className="blogimg-image">
                                                            <img src={value.images} alt="Blog Images" />
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="title">{value.title}</h5>
                                                            <p className="blogtype mb-1">{value.category}</p>
                                                            <div className="blog-btn">
                                                                <p>
                                                                    Barely any person has remained unaffected due to rising health
                                                                    <span style={{ color: "blue", fontSize: "18px" }}>Read More</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                        <div className="row mt--30">
                            <div>
                                <img src="assets/images/blogs/img/prev.png" alt="next" />
                            </div>
                            <div>
                                <img src="assets/images/blogs/img/next.png" alt="prev" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        );
    }
}

export default TabsTwo;
