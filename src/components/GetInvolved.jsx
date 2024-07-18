import React from 'react';
import VolunteerSignup from './VolunteerSignup';
import DonationTiers from './DonationTiers';
import MembershipOptions from './MembershipOptions';
import NewsLetter from './NewsLetter';

const GetInvolved = () => {
  return (
    <section className=" py-16">
     
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get Involved</h2>
     
          
        <NewsLetter/>
        
          
            {/* <DonationTiers />
        
          
            <MembershipOptions />
          */}
        
     
    </section>
  );
};

export default GetInvolved;
