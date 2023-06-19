import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Client Server Applications',
        description: 'An application that runs on the client-side and accesses the remote server for information is called a client server application. We are experts in developing the custom client server application.'
    },
    {
        icon: <FiLayers />,
        title: 'Database Application Development',
        description: 'The primary purpose of  database application is entering and retrieving information from the databases. We do Database application development to manage critical data of small to large scale organizations to meet your business requirements.'
    },
    {
        icon: <FiUsers />,
        title: 'Component Development',
        description: 'Component Software Development focuses on building large software systems by integrating previously existing software components, enhancing the flexibility and maintainability of systems, thus reducing software development costs, rapid system assembly, and reduction of the spiraling maintenance burden associated with the support and upgrade of large systems.'
    },
    {
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiCast />,
        title: 'Maintenance & Enhancement',
        description: 'We provide a complete solution for maintaining, enhancing your Application assets that span across technologies, platforms, and frameworks and make your applications perform at peak efficiency. Existing applications require ongoing attention and technical updates, and it is usually necessary to make small upgrades and enhancements to the features.'
    },
    {
        icon: <FiMonitor />,
        title: 'Custom Web Development',
        description: 'All the factors should be taken into account while choosing a website developer. This is because website development requires a lot of skills to customize a client website that best fits his business purpose. Various factors that play an important role in hiring a developer who can customize a client website.'
    },
    //


    {
        icon: <FiCast />,
        title: 'MLM Development',
        description: 'With the rapid change in the digital era, it has become important to change with time. Our company is a revolutionary evolution in the history of MLM development in recent years. Ekana technologies have the ability to eliminate all the worries that are related to the network in a very short span of time.'
    },
    {
        icon: <FiLayers />,
        title: 'eCommerce Development',
        description: 'The e-commerce industry has totally decentralized the marketplace. The availability of a person is not necessary to buy or sell a product. All the purchases made can be performed through online transactions. This has significantly increased the possibilities of prospective sellers and buyers.'
    },
    {
        icon: <FiUsers />,
        title: 'WordPress Development',
        description: 'We offer seamless WordPress industry-based solutions. WordPress themes and WordPress plug-in designed and developed by our team helps the business to explore new horizons. With the help of the WordPress platform, anyone can get a fully functional, responsive and professional website.'
    },
    {
        icon: <FiMonitor />,
        title: 'Android Application Development',
        description: 'Android is the most popular and widely used mobile operating system. With the frequency of increasing android devices in the marketplace, not a single business wants to miss the chance to take the benefit of android applications. Even we can say that the android application is mandatory for all businesses.'
    },
    {
        icon: <FiCast />,
        title: 'iPhone Application Development',
        description: 'The iPhone has attracted users of all age groups and has gained immense popularity and status as it renders intricate functionalities to mobile phones and other handheld devices. Besides consumer use, the iPhone has also scaled to the business marketplace.'
    },
    {
        icon: <FiMonitor />,
        title: 'Hybrid App Development',
        description: 'The availability of various mobile platforms each with its own SDKs, user interfaces and programming language has given rise to the fragmentation issue. Thus enterprises think across multiple platforms and devices before going for any of the mobile application development services.'
    },
    {
        icon: <FiMonitor />,
        title: 'HTML5 App Development',
        description: "HTML5 app Development Company is one of the revolutionary steps in the world of mobile applications, designing and development communities. This technology has played a huge role in facilitating mobile application development at a low cost along with the reduction in the developer's efforts."
    },
]
class Service extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Service'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Digital Marketing</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Strategy</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Creative Agency</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Development</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />


            </React.Fragment>
        )
    }
}
export default Service;