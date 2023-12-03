import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Navbar from '../navBar/Navbar';
// import { IoMdClose } from 'react-icons/io';

const Calculator = () => {
  const [principal, setPrincipal] = useState('');
  const [months, setMonths] = useState('');
  const [interest, setInterest] = useState('');
  const [result, setResult] = useState('');
  const [breakdown, setBreakdown] = useState([]);
  const [open, setOpen] = useState(false);

  const padiCalculate = () => {
    if (principal && months && interest) {
      const P = parseFloat(principal);
      const n = 12;
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
      setOpen(true);
    } else {
      setResult('');
      setBreakdown([]);
    }
  };

  const handleClose = () => {
    setOpen(false);
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

          {/* <div className='text-[20px] font-bold'>
            <span>&#8358;</span>
            {result ? result : 'Result will appear here'}
          </div> */}

          <Dialog onClose={handleClose} open={open}>
            <DialogTitle className='font-bold text-lg text-primary'>
              Calculation Breakdown
            </DialogTitle>
            {/* <IconButton onClick={handleClose}>
              <IoMdClose />
            </IconButton> */}
            <DialogContent className='flex flex-col gap-3 pr-5 text-left justify-between '>
              {breakdown.map((item, index) => (
                <Typography key={index}>
                  {item.label}: {item.value}
                </Typography>
              ))}
            </DialogContent>
            <DialogActions className='text-red-500'>
              <button onClick={handleClose}>Close</button>
            </DialogActions>
          </Dialog>
        </form>
      </main>
    </section>
  );
};

export default Calculator;
