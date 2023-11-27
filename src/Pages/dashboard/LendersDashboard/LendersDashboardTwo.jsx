import React from 'react';
import { Link } from 'react-router-dom';
import LendersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/LendersSideNav';
import LendersNavbar from '../../../Components/Auth/Dashboard/headerNavBar/LendersNavbar';
import Button from '../../../Components/Button';

const LendersDashboardTwo = () => {
  return (
    <div className='lg:flex w-full'>
      <LendersSideNav />
      <section>
        <LendersNavbar />
        <div className='w-[90%] flex items-start justify-start flex-col p-7 text-black bg-white text-left mt-5 mx-4 shadow'>
          <h1 className='text-2xl mb-7 text-primary'>Risk Appetite</h1>

          <p>
            Set your risk appetite, the minimum and maximum amount of loans you
            would like to fund. You will only be shown borrowers that fit these
            profiles.
          </p>

          {/* form */}
          <form
            id=''
            className='flex gap-5 flex-col items-start justify-start text-black'
          >
            {/* 1 */}
            <label
              htmlFor=''
              className='mb-1 flex flex-col gap-2 flex flex-col gap-2'
            >
              How would you rate your risk tolerance
              <select className=' px-2 py-1 border rounded'>
                <option>Select your option</option>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
              </select>
            </label>

            {/* 2 */}

            <label className='mb-1 flex flex-col gap-2'>
              Minimum individual loan amount
              <input type='text' className=' px-1 py-2 border rounded' />
            </label>

            {/* 3 */}

            <label className='mb-1 flex flex-col gap-2'>
              Maximum individual loan amount
              <input
                type='text'
                id='LoanAmount'
                className=' px-2 py-1 border rounded'
              />
            </label>

            {/* 4 */}

            <label className='mb-1 flex flex-col gap-2'>
              Maximum number of loans you want to have at once
              <input type='text' className=' px-2 py-1 border rounded' />
            </label>

            {/* 5 */}

            <label className='mb-1 flex flex-col gap-2'>
              Maximum cumulative loan amount
              <input
                type='text'
                id='LoanAmount'
                className=' px-2 py-1 border rounded'
              />
            </label>

            {/* 6 */}

            <label htmlFor='MaxloanAmount' className='mb-1 flex flex-col gap-2'>
              Minimum credit score for borrowers when lending
              <input type='text' className=' px-2 py-1 border rounded' />
            </label>

            <label className='mb-1 flex flex-col gap-2'>
              Qualifying credit score is 50-100
              <input type='text' className=' px-2 py-1 border rounded' />
            </label>

            <div className=' hover:text-md'>
              <Link to='/lendersDashboard3'>
                <Button text={'Continue'}></Button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LendersDashboardTwo;
