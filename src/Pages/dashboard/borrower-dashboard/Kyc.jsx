import React from 'react';
import KycSidebar from '../../../Components/Auth/Dashboard/KycSidebar';
import PersonalDetails from './kyc/PersonalDetails';

const Kyc = () => {
  return (
    <main className='bg-[#003399] px-20 pt-20 pb-56'>
      <div className='flex justify-around gap-2 small-screen'>
        {/* Left Side */}
        <KycSidebar />

        {/* -------------------------------------------------- */}
        {/* Right side */}
        <div className='bg-white w-screen my-10 px-16 py-8'>
          {/* Left side */}
          <form id='kycForm' onsubmit='return false;'>
            {/* Personal Details */}
            <PersonalDetails />
          </form>
        </div>
        {/* <div id='submissionPopup' className='popup'>
          <h2 id='popupSubmissionStatus'></h2>
          <p id='popupSubmissionText'></p>
        </div> */}

        {/* Right Side */}
        <div>
          {/* <img src="/dist/Images/updateProfile/kyc1.png" alt="" /> */}
        </div>
      </div>
    </main>
  );
};

export default Kyc;
