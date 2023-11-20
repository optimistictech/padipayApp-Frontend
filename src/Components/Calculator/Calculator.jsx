import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { TextField } from '@mui/material';

const Calculator = () => {
  const [principal, setPrincipal] = useState();
  const [months, setMonths] = useState();
  const [interest, setInterest] = useState();
  const [result, setResult] = useState();

  const padiCalculate = () => {
    // A=p(1+(r/n))^(nt)
    const result = principal * Math.pow(1 + interest, months);
    setResult(result.toFixed(2));
  };

  return (
    <section className='font-primary w-full'>
      <Navbar />

      <main className='py-32 px-20'>
        <p className='text-2xl px-32 text-center font-medium'>
          Assess the amount you'd need to receive as immediate loan and easily
          compute your repayment schedule
        </p>

        <form
          action=''
          className='flex flex-col justify-center mt-10 items-center gap-5 w-[70%]'
        >
          <TextField
            label='How much do you want?'
            variant='outlined'
            type='number'
            onChange={(e) => setPrincipal(e.target.value)}
          />

          <TextField
            label='How many months?'
            variant='outlined'
            type='number'
            onChange={(e) => setMonths(e.target.value)}
          />
          <TextField
            label='Interest rate? (%)'
            variant='outlined'
            type='number'
            onChange={(e) => setInterest(e.target.value / 100)}
          />
          {/* btn */}

          <button
            variant='contained'
            onClick={() => {
              padiCalculate();
            }}
            className='hover:text-md  bg-primary font-primaryFont text-whiteColor px-4 py-2  rounded-md hover:bg-blue-700 transition ease-in-out delay-150'
          >
            {' '}
            Calculate{' '}
          </button>
          <div className='font-large '>
            {' '}
            <span>&#8358;</span>
            {result}
          </div>
        </form>
      </main>
    </section>
  );
};

export default Calculator;
