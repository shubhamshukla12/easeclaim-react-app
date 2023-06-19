import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PageScrollTop from './component/PageScrollTop';
// Import css files
import AOS from "aos";
import "aos/dist/aos.css";
import EasyClaim from "./home/EasyClaim";
import HeaderFour from "./component/header/HeaderFour";
import FooterTwo from "./component/footer/FooterTwo";
// import LayOut from './component/HomeLayout/layoutcommon/LayOut';
import ServiceDetails from "./elements/ServiceDetails";
import Contact from "./elements/Contact";
import BlogDetails from "./elements/BlogDetails";
import Blog from "./elements/Blog";
import Privacypolicy from "./claimpages/privacypolicy/Privacypolicy";
import Cancellation from "./claimpages/cancellation/Cancellation";
import TermsConditions from "./claimpages/termsconditions/TermsConditions";
import InsuranceRights from "./claimpages/insurancerights/InsuranceRights";
import PricingTable from "./blocks/PricingTable";
import SIMCard from "./page-demo/services/simcard/SimCard";
import LPG from "./page-demo/services/LPG";
import ESIC from "./page-demo/services/ESIC";
import EPFO from "./page-demo/services/EPFO";
import IndividualClaim from "./page-demo/services/IndividualClaim";
import HospitalClaim from "./page-demo/services/HospitalClaim";
import ClaimNow from "./elements/ClaimNow";
import { useEffect } from "react";
import LifeInsurance from "./page-demo/services/LifeInsurance";
import AccidentInsurance from "./page-demo/services/AccidentInsurance";
import FinanceClaims from "./page-demo/services/FinanceClaims";
import Contactlist from "./elements/contact/Contactlist";
import GovtSchemes from "./page-demo/services/GovtSchemes";
import DebitCredit from "./page-demo/services/DebitCredit";
// import BLogList from './elements/blog/BlogList';

// Home layout
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <HeaderFour />
        {/* <PageScrollTop/> */}
        <Routes>
          {/* <Route path={`/`} element={<Paralax />} /> */}
          {/* Easy Claim Layot */}
          <Route path={`/`} element={<EasyClaim />} />
          <Route path={`/claim-now`} element={<ClaimNow />} />
          <Route path={`/blogs`} element={<Blog />} />
          <Route path={`/blog-details`} element={<BlogDetails />} />
          <Route path={`/about-us`} element={<ServiceDetails />} />
          <Route path={`/our-plan`} element={<PricingTable />} />
          <Route path={`/privacy-policy`} element={<Privacypolicy />} />
          <Route path={`/cancellation-refund`} element={<Cancellation />} />
          <Route path={`/terms-conditions`} element={<TermsConditions />} />
          <Route path={`/insurance-rights`} element={<InsuranceRights />} />
          <Route path={`/contact`} element={<Contact />} />

          {/* Service list */}
          <Route path={`/govt-schemas`} element={<GovtSchemes />} />
          <Route path={`/debit-credit`} element={<DebitCredit />} />
          <Route path={`/simcard`} element={<SIMCard />} />
          <Route path={`/lpg`} element={<LPG />} />
          <Route path={`/esic`} element={<ESIC />} />
          <Route path={`/epfo`} element={<EPFO />} />
          <Route path={`/accident-insurance`} element={<AccidentInsurance />} />
          <Route path={`/life-insurance`} element={<LifeInsurance />} />
          <Route path={`/finance-claim`} element={<FinanceClaims />} />
          <Route path={`/individual-claim`} element={<IndividualClaim />} />
          <Route path={`/hospital-claim`} element={<HospitalClaim />} />
          {/* End Service list */}
          {/* <Route path={`/layout`} element={<LayOut/>} /> */}
          <Route path={`/test `} element={<Contactlist />} />
        </Routes>
        <FooterTwo />
      </BrowserRouter>
    </>
  );
}

export default App;
