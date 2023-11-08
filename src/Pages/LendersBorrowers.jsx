import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

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
              <Link to='/lenderspage' target='_blank'>
                Lender
              </Link>
            </div>
            <Link
              to='/dist/lenders.html '
              className='font-normal text-base text-[red] mt-2 underline hover:text-[#0044ffc0]'
              target='_blank'
            >
              Read About becoming a Lender
            </Link>
          </div>
          <div className='flex flex-col'>
            <div className='py-12 px-10 font-bold pointer text-whiteColor shadow-lg text-4xl w-80 border-4 border-whiteColor bg-lowergrey'>
              <Link to='/borrowerspage' target='_blank'>
                Borrower
              </Link>
            </div>
            <Link
              to='/'
              className='font-normal text-base text-[red] mt-2 underline hover:text-[#0044ffc0]'
              target='_blank'
            >
              Read About becoming a Borrower
            </Link>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}

export default LendersBorrowers;
