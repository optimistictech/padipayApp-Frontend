import React, { useEffect } from 'react';
import Navbar from '../Components/navBar/Navbar';
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

function LendersBorrowers() {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const handleLender = () => {
    localStorage.setItem('type', 'lender');
    navigate('/signup');
  };

  const handleBorrower = () => {
    localStorage.setItem('type', 'borrower');
    navigate('/signup');
  };

  return (
    <div className='primaryFont'>
      <Navbar />

      <section>
        <h1 className='text-4xl text-center pt-[120px] font-bold pb-10'>
          kindly select your account type.
        </h1>

        {/* LENDERS ACCOUNT TYPE */}

        <section className='w-[80%] m-auto flex justify-evenly pointer text-whiteColor text-center mb-40'>
          <div className='flex flex-col gap-5' data-aos='fade-up-right'>
            <button
              onClick={handleLender}
              className='py-5 px-10 font-bold pointer text-whiteColor shadow-lg text-4xl w-80 border-4 border-whiteColor bg-primary'
            >
              Lender
            </button>

            <Link
              to='/'
              className='font-bold text-base  flex gap-3 animate-pulse  items-center justify-center text-navColor  hover:text-[#0044ffc0]'
              target='_blank'
            >
              Read About becoming a Lender
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
                />
              </svg>
            </Link>
          </div>

          {/* BORROWER ACC TYPE */}
          <div className='flex flex-col gap-5' data-aos='fade-up-left'>
            <button
              onClick={handleBorrower}
              className='py-5 px-10 font-bold pointer text-whiteColor shadow-lg text-4xl w-80 border-4 border-whiteColor bg-lowergrey'
            >
              Borrower
            </button>
            <Link
              to='/'
              className='font-bold flex gap-3 items-center animate-pulse justify-center text-navColor hover:text-[#0044ffc0]'
              target='_blank'
            >
              Read About becoming a Borrower
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </span>
            </Link>
          </div>
        </section>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default LendersBorrowers;
