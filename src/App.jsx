import React from 'react'
import Navbar from './components/Navbar';
import HostOpportunity from './components/HostOpportunity';
// import RegistrationDetails from './components/RegistrationDetails';
import OpportunityPage from './components/OpportunityPage';
// import BasicDetails from './components/HackathonForm';
// import OpportunityDetails from './components/OpportunityDetails';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <HostOpportunity></HostOpportunity>
      {/* <BasicDetails></BasicDetails> */}
      {/* <RegistrationDetails></RegistrationDetails> */}
      <OpportunityPage></OpportunityPage>
      {/* <OpportunityDetails></OpportunityDetails> */}
    </div>
  )
}

export default App
