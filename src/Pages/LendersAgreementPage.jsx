import React from 'react';
import Navbar from '../Components/navBar/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const LendersAgreementPage = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main className='pt-[100px] px-10 '>
        <h2 className='font-bold text-3xl pb-8 text-primary'>
          Lenders Agreements
        </h2>
        <div className='flex flex-col gap-6'>
          <p>
            Welcome to PadiPay's lending community! By becoming a lender on our
            platform, you're contributing to financial inclusivity and
            empowerment. This agreement outlines your responsibilities and
            rights as a lender, ensuring transparency and fair practices. Please
            read this agreement carefully before participating in lending
            activities on PadiPay.
          </p>

          <p>
            1. <span className='font-bold'>Lending Basics:</span> Understand the
            fundamental principles of lending on PadiPay, including risks and
            potential returns.
          </p>

          <p>
            2. <span className='font-bold'>Loan Listings:</span> Learn about the
            process of creating and listing loans for borrowers to access.
          </p>

          <p>
            3. <span className='font-bold'> Risk and Returns:</span> Get
            insights into the potential risks associated with lending and how
            returns are generated.
          </p>

          <p>
            4. <span className='font-bold'> Communication:</span> Understand how
            communication between lenders and borrowers is facilitated on
            PadiPay.
          </p>

          <p>
            5. <span className='font-bold'>Repayment and Defaults:</span> Learn
            about the procedures in case of loan repayment and borrower
            defaults.
          </p>

          <p>
            6. <span className='font-bold'>Privacy and Data:</span> Discover how
            your personal information is handled as a lender.
          </p>

          <p>
            7. <span className='font-bold'>Dispute Resolution:</span> Understand
            the procedures for resolving any disputes related to lending
            activities.
          </p>

          <p>
            By participating as a lender on PadiPay, you agree to adhere to the
            terms outlined in this agreement. Your commitment helps build a
            trustworthy lending environment that benefits both lenders and
            borrowers. For any questions or clarifications, please contact our
            support team at{' '}
            <span className='text-primary font-bold'>support@padipay.com</span>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LendersAgreementPage;
