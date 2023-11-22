import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navBar/Navbar';
import { TextField } from '@mui/material';

const Calculator = () => {
  const [principal, setPrincipal] = useState('');
  const [months, setMonths] = useState('');
  const [interest, setInterest] = useState('');
  const [result, setResult] = useState('');
  const [breakdown, setBreakdown] = useState([]);

  const padiCalculate = () => {
    if (principal && months && interest) {
      const P = parseFloat(principal);
      const n = 12; // Assuming interest compounded monthly
      const t = parseFloat(months);
      const r = parseFloat(interest) / 100;

      const totalAmount = P * Math.pow(1 + r / n, n * t);
      const totalInterestAmount = totalAmount - P;
      const monthlyPayment = totalAmount / t;

      setResult(totalAmount.toFixed(2));

      const breakdownData = [
        { label: 'Loan Amount', value: `₦${P.toFixed(2)}` },
        { label: 'Monthly Payment', value: `₦${monthlyPayment.toFixed(2)}` },
        {
          label: 'Total Interest',
          value: `₦${totalInterestAmount.toFixed(2)}`,
        },
        { label: 'Total Payment', value: `₦${totalAmount.toFixed(2)}` },
      ];

      setBreakdown(breakdownData);
    } else {
      setResult('');
      setBreakdown([]);
    }
  };

  return (
    <section className='font-primary w-full'>
      <Navbar />

      <main className='py-32 px-20 w-[100%] flex items-center flex-col'>
        <p className='text-2xl px-32 text-center font-medium'>
          Assess the amount you'd need to receive as immediate loan and easily
          compute your repayment schedule
        </p>

        <form
          action=''
          className='flex flex-col justify-between bg-white shadow-lg p-5 mt-10 items-center gap-5 w-[50%]'
        >
          <TextField
            label='How much do you want?'
            variant='outlined'
            type='number'
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />

          <TextField
            label='How many months?'
            variant='outlined'
            type='number'
            value={months}
            onChange={(e) => setMonths(e.target.value)}
          />
          <TextField
            label='Interest rate? (%)'
            variant='outlined'
            type='number'
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
          {/* btn */}
          <button
            variant='contained'
            onClick={(e) => {
              e.preventDefault();
              padiCalculate();
            }}
            className='hover:text-md bg-primary font-primaryFont text-whiteColor px-4 py-2 rounded-md hover:bg-blue-700 transition ease-in-out delay-150'
          >
            Calculate
          </button>
          <div className='text-[20px] font-bold'>
            <span>&#8358;</span>
            {result ? result : 'Result will appear here'}
          </div>
          <div className='breakdown bg-slate-200 w-96 flex flex-col gap-5 p-5'>
            {breakdown.length > 0 &&
              breakdown.map((item, index) => (
                <div key={index} className='breakdown-item flex gap-5'>
                  <span>{item.label}</span>
                  <span className='font-bold'>{item.value}</span>
                </div>
              ))}
          </div>
        </form>
      </main>
    </section>
  );
};

export default Calculator;
