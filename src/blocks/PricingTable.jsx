import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiCheck } from "react-icons/fi";
import PartnerBanner from '../component/common/PartnerBanner';


const PricingTable = () => {
    return (
        <>
            <PageHelmet pageTitle='Pricing Table' />



            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Pricing Table'} />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing ">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Basic</h4>
                                            <div className="pricing d-flex  text-align-center">
                                                <span className="price">FREE</span>
                                                <span className="subtitle">/ Forever</span>
                                            </div>
                                            <div className="pricing-footer mt--30">
                                                <a className="rn-btn" href="#pricing">Purchase Now</a>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> Know hidden insurance</li>
                                                <li><FiCheck /> Check Insurance Score</li>
                                                <li><FiCheck /> Portfolio Assessment</li>
                                                <li><FiCheck /> Customer-Nominee Integration</li>
                                                <li><FiCheck /> Decode Insurance Policies</li>

                                                <li><FiCheck /> Zero Wallet Points</li>
                                                <li><FiCheck /> Improve Your Insurance Score</li>
                                                <li><FiCheck /> Claim Assistance</li>
                                                
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing thirdcard">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Standard</h4>
                                            <div className="pricing d-flex  text-align-center">
                                                <span className="price">₹300</span>
                                                <span className="subtitle">/ Month</span>
                                            </div>
                                            <div className="pricing-footer mt--30">
                                                <a className="rn-btn" href="#pricing">Purchase Now</a>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                            <li><FiCheck /> Know hidden insurance</li>
                                                <li><FiCheck /> Check Insurance Score</li>
                                                <li><FiCheck />Portfolio Assessment</li>
                                                <li><FiCheck />Customer-Nominee Integration</li>
                                                <li><FiCheck />Decode Upto Five Insurance Policies</li>

                                                <li><FiCheck />Get 300 Wallet Points</li>
                                                <li><FiCheck /> Improve Your Insurance Score</li>
                                                <li><FiCheck /> One Claim Assistance Per Year</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}


                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Standard</h4>
                                            <div className="pricing d-flex  text-align-center">
                                                <span className="price">₹300</span>
                                                <span className="subtitle">/ Month</span>
                                            </div>
                                            <div className="pricing-footer mt--30">
                                                <a className="rn-btn" href="#pricing">Purchase Now</a>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                            <li><FiCheck />Know hidden insurance</li>
                                                <li><FiCheck /> Check Insurance Score</li>
                                                <li><FiCheck /> Portfolio Assessment</li>
                                                <li><FiCheck /> Customer-Nominee Integration</li>
                                                <li><FiCheck /> Decode Insurance Policies</li>

                                                <li><FiCheck /> Zero Wallet Points</li>
                                                <li><FiCheck /> Improve Your Insurance Score</li>
                                                <li><FiCheck /> Claim Assistance</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                                   

                        </div>


                    </div>
                </div>
                {/* End Pricing Tbale Area  */}
            </main>
            <div className='container mt--120' >
                            <PartnerBanner/>
                            </div>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            {/* Start Footer Area  */}

            {/* End Footer Area  */}
        </>

    )
}
export default PricingTable;