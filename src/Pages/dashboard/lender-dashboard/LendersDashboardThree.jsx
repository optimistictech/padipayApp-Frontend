import React from 'react';
import { Link } from 'react-router-dom';
import LendersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/LendersSideNav';
import LendersNavbarVerify from '../../../Components/Auth/Dashboard/headerNavBar/LendersNavbarVerify';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';
import Button from '../../../Components/Button';

const LendersDashboardThree = () => {
  return (
    <div className='lg:flex w-full'>
      <LendersSideNav />
      <section>
        <LendersNavbarVerify />
        {/* body */}

        <div className='flex gap-10 my-6 item-center justify-center'>
          {/* card 1 */}
          <div className='w-[350px] h-[334px]  shadow rounded px-4 '>
            <img
              src='https://ik.imagekit.io/gru3qfrss/Two_Female.png?'
              alt='Graph'
              className='shadow'
            />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>Place a Loan</p>
              <p className='text-[#7B809A] text-sm'>
                Make your Loan accessible to borrowers
              </p>
              <hr className='border-b border-gray-200 my-4' />

              <div className=' hover:text-md'>
                <Link to='/lendersDashboard4'>
                  <Button text={'Loan now'} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='w-[350px] h-[334px] shadow rounded relative px-4 '>
            <img
              src='https://ik.imagekit.io/gru3qfrss/Tailor.png?updatedAt=1700806418161'
              alt='Graph'
              className='shadow'
            />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>Fund a Business</p>
              <p className='text-[#7B809A] text-sm'>
                Make profit while you fund a business
              </p>
              <hr className='border-b border-gray-200 my-4' />
              <div className=' hover:text-md'>
                <Link to='/'>
                  <Button text={'Fund now'} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <FooterDashboard />
      </section>
    </div>
  );
};

export default LendersDashboardThree;
