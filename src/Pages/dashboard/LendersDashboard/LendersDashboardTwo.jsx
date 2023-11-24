import React from 'react';
import { Link } from 'react-router-dom';
import LendersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/LendersSideNav';
import LendersNavbar from '../../../Components/Auth/Dashboard/headerNavBar/LendersNavbar';
import Button from '../../../Components/Button';

const LendersDashboardTwo = () => {
  return (
    <div classname='lg:flex w-full'>
      <LendersSideNav />
      <section>
        <LendersNavbar />
        <div className='w-[90%] p-7 bg-white text-left mt-5 mx-4 shadow'>
          <h1 className='text-2xl font-semibold mb-7 text-primary'>
            Risk Appetite
          </h1>
          <form id='riskAppetiteForm'>
            <p className='pb-8'>
              Set your risk appetite, the minimum and maximum amount of loans
              you would like to fund. You will only be shown borrowers that fit
              these profiles.
            </p>
            <div className='form-group mb-7'>
              <label
                htmlFor='interestRate'
                className='block font-semibold mb-1'
              >
                How would you rate your risk tolerance
              </label>
              <select
                id='interestRate'
                className='w-[300px] px-2 py-1 border rounded'
              >
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
              </select>
            </div>
            <div className='form-group mb-7'>
              <label
                htmlFor='MinloanAmount'
                className='w-[300px] block font-semibold mb-1'
              >
                Minimum individual loan amount
              </label>
              <input
                type='text'
                id='loanAmount'
                className='w-[300px] px-1 py-2 border rounded'
                placeholder='Type here'
              />
            </div>
            <div className='form-group mb-7'>
              <label
                htmlFor='MaxloanAmount'
                className='block font-semibold mb-1'
              >
                Maximum individual loan amount
              </label>
              <input
                type='text'
                id='LoanAmount'
                className='w-[300px] px-2 py-1 border rounded'
                placeholder='Enter phone number'
              />
            </div>
            <div className='form-group mb-7'>
              <label htmlFor='loanAmount' className='block font-semibold mb-1'>
                Maximum number of loans you want to have at once
              </label>
              <input
                type='text'
                id='loanAmount'
                className='w-[300px] px-2 py-1 border rounded'
                placeholder='Enter loan amount'
              />
            </div>
            <div className='form-group mb-7'>
              <label
                htmlFor='MaxloanAmount'
                className='w-[300px] block font-semibold mb-1'
              >
                Maximum cumulative loan amount
              </label>
              <input
                type='text'
                id='LoanAmount'
                className='w-[300px] px-2 py-1 border rounded'
                placeholder='Enter phone number'
              />
            </div>
            <div className='form-group mb-7'>
              <label
                htmlFor='MaxloanAmount'
                className='block font-semibold mb-1'
              >
                Minimum credit score for borrowers when lending
              </label>
              <label
                htmlFor='MaxloanAmount'
                className='block font-semibold mb-1'
              >
                (Qualifying credit score is 50-100)
              </label>
              <input
                type='text'
                id='LoanAmount'
                className='w-[300px] px-2 py-1 border rounded'
                placeholder='Enter phone number'
              />
            </div>

            <div classname=' hover:text-md'>
              <link to='/lendersDashboard3' />
              <Button text="{'Continue'}"></Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LendersDashboardTwo;
