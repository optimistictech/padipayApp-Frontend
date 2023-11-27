import React from 'react';
import { Link } from 'react-router-dom';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';
import BorrowersNavBar from '../../../Components/Auth/Dashboard/headerNavBar/BorrowersNavbarV';
import Button from '../../../Components/Button';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';

const BorrowerSectionThree = () => {
  return (
    <div className='flex'>
      <BorrowersSideNav />
      <div>
        <BorrowersNavBar />
        <div className='grid grid-cols-3 gap-x-0 gap-y-8'>
          {/* first grid */}
          <d className=' h-90 shadow-lg my-14 rounded-md relative overflow-hidden px-4 '>
            <img
              src={
                'https://ik.imagekit.io/b6b9xwu9l/bg-graph.png?updatedAt=1700659644267'
              }
              className='object-cover h-44 w-96 px-2 rounded-md'
              alt='GraphImage'
            />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>Interest Rate Loans</p>
              <p className='text-[#7B809A] text-sm'>Find a lender</p>
              <hr className='border-b border-gray-200 my-4' />

              <Link to='/borrowersDashboard6'>
                <Button
                  className='text-[#FFFFFF] bg-[#003399] text-sm py-1.5 px-5 mb-4 rounded-xl'
                  text='Get Loan'
                  size='md'
                />
              </Link>
            </div>
          </d>
          {/* second grid */}
          <div className=' h-90 shadow-lg my-14 rounded-md relative overflow-hidden px-4 '>
            <img
              src={
                'https://ik.imagekit.io/b6b9xwu9l/bg-grap.png?updatedAt=1700659923464'
              }
              className='object-cover h-44 w-96 px-2 rounded-md'
              alt='GraphImage'
            />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>
                Non Interest Rate Loans
              </p>
              <p className='text-[#7B809A] text-sm'>
                Get loans at no interest rate
              </p>
              <hr className='border-b border-gray-200 my-4' />

              <Link to='/nonInterest'>
                <Button
                  className='text-[#FFFFFF] bg-[#003399] text-sm py-1.5 px-5 mb-4 rounded-xl'
                  text='Get Loan'
                  size='md'
                />
              </Link>
            </div>
          </div>
          {/* third grid */}
          <div className=' h-90 pt-12 shadow-lg px-6 my-auto overflow-hidden'>
            <p className='py-1 mt-8 mb-2 font-semibold text-left text-4xl'>Community?</p>
            <p className='text-xl pt-2 font-light mb-8'>
              Discover our collaborative
              <br /> community, Discover and
              <br /> engage.
            </p>
            <Link to='/community'>
              <Button
                className='text-[#FFFFFF] bg-[#003399] text-sm py-1.5 px-5 mb-[30px] rounded-xl'
                text='Join Community'
                size='lg'
              />
            </Link>
          </div>
          </div>
  {/* SECOND SECTION */}
  <FooterDashboard />
        
      </div>
    </div>
  );
};

export default BorrowerSectionThree;
