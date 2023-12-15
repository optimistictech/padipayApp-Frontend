import { useState } from 'react';
import Button from '../Components/Button';
import { TextField } from '@mui/material';
import Navbar from '../Components/navBar/Navbar';

const VerifyPassword = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [passwordCheck, setPasswordCheck] = useState('password');
  const [password, setPassword] = useState('');

  // SHOW PASSWORD FUNCTIONALITY
  function isChecked(e) {
    console.log(e.target);
    if (e.target.value === 'password') {
      setPasswordType('text');
    }
    if (e.target.value === 'text') {
      setPasswordType('password');
    }
  }

  function passChecked(e) {
    console.log(e.target);
    if (e.target.value === 'password') {
      setPasswordCheck('text');
    }
    if (e.target.value === 'text') {
      setPasswordCheck('password');
    }
  }

  return (
    <div>
      <Navbar />

      <div className='w-1/3 mx-auto'>
        <div className=' pt-[200px]'>
          <div className=' '>
            <h1 className='text-center text-3xl font-bold mb-3'>
              Verify Password
            </h1>
            <TextField
              className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4 '
              label='Password'
              variant='outlined'
              id='password'
              type={passwordType}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span className=' block  w-full'>
            <input
              className='mr-4 mt-2 mb-6'
              type='checkbox'
              name='terms'
              id='terms'
              value={passwordType}
              onChange={(e) => isChecked(e)}
            />
            Show password
          </span>
        </div>

        <div className=''>
          <div className=' '>
            <TextField
              className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
              label='Password'
              variant='outlined'
              id='password'
              type={passwordType}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span className=' block  w-full'>
            <input
              className='mr-4 mt-2 mb-10'
              type='checkbox'
              name='terms'
              id='terms'
              value={passwordType}
              onChange={(e) => isChecked(e)}
            />
            Show password
          </span>
        </div>
        <Button
          text='Sign up'
          type='submit'
          className='bg-[#003399] text-white rounded-[10px] cursor-pointer w-full'
        />
      </div>
    </div>
  );
};

export default VerifyPassword;
