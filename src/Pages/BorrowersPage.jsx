import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/navBar/Navbar';
import Footer from '../Components/Footer';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="lg:flex items-center justify-center bg-gradient-to-bl from-[#D9D9D9]">
      <div className="lg:w-[60%]">
        <h1 className="text-[40px] font-bold px-10">
          Obtain immediate
          <span className="text-padiHead">financial assistance</span> for your
          personal or business requirements.
        </h1>
        <p className="py-5 px-10 text-[20px]">
          Request a fast loan to address various needs such as expanding your
          small business, remodeling your residence, acquiring a car, covering
          rent, financing your education, managing medical expenses, and funding
          project endeavors.
        </p>
        <div className="flex items-center justify-center w-32 mx-24">
          <img
            src="../dist/Images/borrowers img/image 2.svg"
            alt="applestore logo"
          />
          <img src="../dist/Images/borrowers img/image 1.svg" alt="playstore logo" />
        </div>
      </div>
      <div className="w-[700px]">
        <img
          src="../dist/Images/borrowers img/Close up on young handsome man isolated.svg"
          alt=""
        />
      </div>
    </section>
  );
};

// Non-Interest Facility Types Section Component
const FacilityTypesSection = () => {
  return (
    <section className="text-center m-10">
      <h2 className="text-padiHead text-[30px] font-bold p-10">
        NON-INTEREST FACILITY TYPES
      </h2>

      <div className="flex lg:flex-row gap-5 justify-center items-top">
        {/* Placeholder for Box 1 */}
        <div className="bg-white text-padiBlack shadow-lg border-4 p-10 mx-5">
          <h3 className="font-medium pb-9 text-lg">
            Household Appliance Financing
          </h3>
          <p>
            PadiPay launched this consumer product loan to help its customers
            buy essential household appliances. These include things like
            laptops, televisions, and refrigerators. Whatever product you name,
            we'll buy it and offer it to you for cost plus profit. PadiPay will
            thereafter demand you to make a monthly repayment from your earnings
            for a period of time not to exceed 24 months following the purchase
            of the product.
          </p>
        </div>

        {/* Placeholder for Box 2 */}
        <div className="bg-white text-padiBlack shadow-lg border-4 p-10 mx-5">
          <h3 className="font-medium pb-9 text-lg">Working Capital Financing</h3>
          <p>
            Based on the idea of a capital finance facility, this choice
            operates. This was developed by PadiPay to generally support the
            financial requirements of your company. As a result, you can use
            this option to leverage funding for the purchase of shares,
            merchandise, etc. You must procure the products and provide a
            proforma invoice to the Bank in order to receive this facility. We
            send a straight payment to your supplier as soon as we get this (the
            pro forma invoice). However, this loan option's repayment is
            contingent upon consent.
          </p>
        </div>

        {/* Placeholder for Box 3 */}
        <div className="bg-white text-padiBlack shadow-lg border-4 p-10 mx-5">
          <h3 className="font-medium pb-9 text-lg">
            Project Financing/Constructing
          </h3>
          <p>
            In this case, you make a request, and following an agreement, the
            project is built and sold to you at cost plus a profit margin. You
            receive ownership of the project when it is finished, and you have
            the option of paying back the loan in full or in installments.
          </p>
        </div>
      </div>
    </section>
  );
};

// How It Works Section Component
const HowItWorksSection = () => {
  return (
    <section className="bg-padiHead text-white h-[900px]">
      <div className="m-10 text-center pb-10">
        <h1 className="text-[30px] font-bold p-10 text-center">How It Works:</h1>

        {/* Placeholder for Step 1 */}
        <div className="text-center text-[30px] pb-10">
          <i className="fa-solid fa-laptop text-[#4EABE9]"></i>
          <h2 className="text-[22px] font-bold">Apply Online</h2>
          <p className="text-[16px] lg:px-[400px]">
            Start your loan application by providing essential information.
          </p>
        </div>

        {/* Placeholder for Step 2 */}
        <div className="text-center text-[30px] pb-10">
          <i className="fa-solid fa-check-circle text-[#4EABE9]"></i>
          <h2 className="text-[22px] font-bold">Get Approved</h2>
          <p className="text-[16px] lg:px-[400px]">
            Our team reviews your application and offers a tailored solution.
          </p>
        </div>

        {/* Placeholder for Step 3 */}
        <div className="text-center text-[30px] pb-10">
          <i className="fa-solid fa-wallet text-[#4EABE9]"></i>
          <h2 className="text-[22px] font-bold">Receive Funds</h2>
          <p className="text-[16px] lg:px-[400px]">
            Once approved, your funds are quickly disbursed to your account.
          </p>
        </div>
      </div>
    </section>
  );
};

// Loan Options Section Component
const LoanOptionsSection = () => {
  return (
    <section className="bg-[#E6E6E6]">
      <div className="pt-[300px]">
        <h1 className="text-[30px] font-bold p-10 text-center text-padiHead">
          Loan Options
        </h1>

        <div className="lg:flex items-center justify-center gap-20 pb-20">
          {/* Placeholder for Left Loan Section */}
          <div className="w-80 h-80 bg-padiHead text-white drop-shadow-xl">
            <div className="text-center pt-7 pb-8 bg-padiHead">
              <h2 className="text-[20px] font-bold">Loan Types</h2>
              <p className="text-[14px]">Explore Our Range of Loan Types</p>
            </div>
            <img
              className="w-80 h-52 bg-cover bg-center"
              src="../dist/Images/borrowers img/Intercultural friends pointing on phone.svg"
              alt=""
            />
          </div>

          {/* Placeholder for Right Loan Section */}
          <div className="w-80 h-80 bg-padiHead text-white drop-shadow-xl">
            <div className="text-center pt-7 pb-8 bg-padiHead">
              <h2 className="text-[20px] font-bold">Loan Amounts</h2>
              <p className="text-[14px]">
                Flexible Loan Amounts to Suit Your Needs
              </p>
            </div>
            <img
              className="w-80 h-52"
              src="../dist/Images/borrowers img/Handsome man using modern smartphone outdoors.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Interest Rates and Terms Section Component
const InterestRatesSection = () => {
  return (
    <section className="flex items-center justify-center">
      <img
        className="w-96"
        src="../dist/Images/borrowers img/Woman holds phone.svg"
        alt="Woman hold phone"
      />
      <div className="">
        <h3 className="lg:font-medium pb-9 text-lg text-padiHead">
          Interest Rates and Terms
        </h3>
        <p className="pb-5">
          <span className="font-medium">Rates:</span> Competitive Interest Rates for
          Every Loan
        </p>
        <p>
          <span className="font-medium">Terms:</span> Choose Your Repayment Period
          and Benefit from Favorable Terms
        </p>
      </div>
    </section>
  );
};

// Borrowers Page Component
const BorrowersPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FacilityTypesSection />
      <HowItWorksSection />
      <LoanOptionsSection />
      <InterestRatesSection />
      <Footer />
    </>
  );
};

export default BorrowersPage;
