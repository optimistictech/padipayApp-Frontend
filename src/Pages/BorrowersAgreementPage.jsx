import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const BorrowersAgreementPage = () => {
  return (
    <div className='font-primaryFont'>
      <Navbar />

      <div>
        <h1>Borrowers Agreements</h1>
        <div>
          <p>
            I, [guarantor's name], hereby agree to guarantee the repayment of
            the loan made by [borrower's name] to Padipay. I understand that I
            am responsible for repaying the loan if the borrower defaults.
          </p>
          <p>
            I have read and understand the terms and conditions of the loan,
            including the interest rate and repayment schedule. I am comfortable
            with the risk of having to repay the loan.
          </p>
          <p>
            I agree to provide Padipay with my personal information, including
            my income, assets, and debt.
          </p>
          <p>I have signed this agreement voluntarily and without duress.</p>
          <p>[Guarantor's signature]</p>
          <p>[Date]</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BorrowersAgreementPage;
