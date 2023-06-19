import React from 'react';
import Button from './Button';
import PriceCard from './PriceCard';
import GetStartedCard from './GetStartedCard';
import TeamCard from './TeamCard';
import VerifiedAdvisors from '../../../claimpages/aboutpage/VerifiedAdvisors';
import ContactFour from '../../../elements/contact/ContactFour';

function Layout() {
  return (
    <div className="container">
      <Button />
      <PriceCard />
      <GetStartedCard />
      <TeamCard />
      <VerifiedAdvisors />
      <ContactFour />
    </div>
  );
}

export default Layout;
