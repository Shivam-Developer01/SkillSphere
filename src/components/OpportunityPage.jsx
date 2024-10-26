import React, { useState } from 'react';
import BasicDetails from './HackathonForm';
import RegistrationDetails from './RegistrationDetails';
import OpportunityDetails from './OpportunityDetails';

const OpportunityPage = () => {
  const [basicDetails, setBasicDetails] = useState({
    title: 'Coding Challenge',
    organization: 'Delhi Skill and Entrepreneurship University',
    location: 'Online',
    category: 'Coding Challenge',
    cost: 'Free',
    updatedDate: new Date().toLocaleDateString(),
  });

  const [registrationDetails, setRegistrationDetails] = useState({
    teamSize: '1 - 4 Members',
    impressions: 2,
    deadline: '15 Nov 24, 12:00 AM IST',
    guidelines: 'Mention all the guidelines like eligibility, format, etc.',
    rules: 'Mention the rules of the competition.',
  });


  return (
    <div>
      <BasicDetails onSubmit={setBasicDetails} />
      <RegistrationDetails onSubmit={setRegistrationDetails} />
      <OpportunityDetails
        basicDetails={basicDetails}
        registrationDetails={registrationDetails}
      />
    </div>
  );
};

export default OpportunityPage;