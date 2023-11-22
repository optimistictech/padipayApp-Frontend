import React from 'react';
import Navbar from '../Components/navBar/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
const GuarantorsAgreementPage = () => {
  return (
    <div className='primaryFont'>
      <Navbar />

      <div className='py-10 px-40 mx-auto text-justify mb-8'>
        <h1 className='font-bold text-5xl text-left text-blue-900 pt-20 pb-10'>
          Guarantors Agreements
        </h1>
        <div className='flex flex-col gap-7'>
          <p>
            Thank you for considering the important role of a guarantor on
            PadiPay's platform. Your support helps borrowers access the funds
            they need. This agreement outlines the responsibilities and terms
            associated with being a guarantor.
          </p>
          <p>
            <span className='font-bold'>1. Role of a Guarantor:</span>{' '}
            Understand the significance of your role in helping borrowers secure
            loans.
          </p>
          <p>
            <span className='font-bold'>2. Obligations and Risks:</span> Learn
            about the obligations you undertake as a guarantor and the potential
            risks involved.
          </p>
          <p>
            <span className='font-bold'>3. Communication:</span> Get insights
            into how communication is facilitated between guarantors, borrowers,
            and lenders.
          </p>
          <p>
            <span className='font-bold'>4. Defaults and Repayment:</span>{' '}
            Understand the procedures in case a borrower defaults and the
            responsibilities that may arise.
          </p>
          <p>
            <span className='font-bold'>5. Privacy and Data:</span> Discover how
            your personal information is handled as a guarantor.
          </p>
          <p>
            <span className='font-bold'> 6. Dispute Resolution: </span>
            Understand the procedures for resolving disputes related to your
            role as a guarantor.
          </p>
          <p>
            By agreeing to serve as a guarantor on PadiPay, you acknowledge and
            agree to the terms outlined in this agreement. Your commitment
            supports responsible lending practices and helps individuals achieve
            their financial goals. For any questions or clarifications, please
            contact our support team at support@padipay.com
          </p>
          <p>
            This personal guarantee is willingly entered into this day of
            ___________ day of _________, 20____
          </p>
          <p className='border-t-2 mt-5 w-32 pt-2 border-black'>Signature</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuarantorsAgreementPage;
