import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function LendersBorrowers() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <section>
        <h1 className='text-4xl text-center pt-[120px] font-bold pb-10'>
          kindly select your account type.
        </h1>

        <section className='w-[80%] m-auto flex justify-evenly pointer text-whiteColor text-center mb-40'>
          <div className='flex flex-col'>
            <div className='py-12 px-10 font-bold pointer text-whiteColor shadow-lg text-4xl w-80 border-4 border-whiteColor bg-primary'>
              <a href='/' target='_blank'>
                Lender
              </a>
            </div>
            <a
              className='font-normal text-base text-[red] mt-2 underline hover:text-[#0044ffc0]'
              href='/dist/lenders.html '
              target='_blank'
            >
              Read About becoming a Lender
            </a>
          </div>
          <div className='flex flex-col'>
            <div className='py-12 px-10 font-bold pointer text-whiteColor shadow-lg text-4xl w-80 border-4 border-whiteColor bg-lowergrey'>
              <a href='/' target='_blank'>
                Borrower
              </a>
            </div>
            <a
              className='font-normal text-base text-[red] mt-2 underline hover:text-[#0044ffc0]'
              href='/'
              target='_blank'
            >
              Read About becoming a Borrower
            </a>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}

export default LendersBorrowers;
