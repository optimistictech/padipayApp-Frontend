import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, MenuItem } from '@mui/material';

const AccountDropdown = () => {
  const [accountType, setAccountType] = useState('borrower');

  const handleAccountChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <div className='lg:flex flex-row justify-between items-center px-3'>
      <Link
        to={
          accountType === 'borrower'
            ? '/LendersDashboard'
            : '/borrowersDashboard'
        }
        className='flex gap-8 items-center py-4'
      >
        <p className='flex items-center gap-1'>
          {/* img icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
          <span>
            {accountType === 'borrower'
              ? 'Alfred Jimoh'
              : 'Switch to a Borrower'}
          </span>
        </p>
      </Link>
      {/* down arrow */}
      <Select
        value={accountType}
        onChange={handleAccountChange}
        variant='outlined'
        className='cursor-pointer'
      >
        <MenuItem value='borrower'>Alfred Jimoh</MenuItem>
        <MenuItem value='switch'>Switch to a Borrower</MenuItem>
      </Select>
    </div>
  );
};

export default AccountDropdown;
