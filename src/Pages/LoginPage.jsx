import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftPartLogin from '../Components/LeftPartLogin';
import { TextField } from '@mui/material';
import Button from '../Components/Button';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [authloading, setAuthloading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (token) {
      navigate(
        user?.accountType === 1 ? '/borrowersDashboard' : '/lendersDashboard'
      );
      return;
    }
    setAuthloading(false);
  }, [navigate]);

  // handlechange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        'https://padipay-backend.onrender.com/v1/auth/login',
        payload,
        {
          header: {
            'Content-Type': 'application/json',
          },
        }
      );

      cogoToast.success('Login Successfully');
      navigate(
        res.data.user.accountType === 1
          ? '/borrowersDashboard'
          : '/lendersDashboard'
      );
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem(
        'token',
        JSON.stringify(res.data.tokens.access.token)
      );
      setLoading(false);
    } catch (error) {
      cogoToast.error(error.response.data.message);
      setLoading(false);
    }
  };

  if (authloading) return;

  //
  return (
    <div className='bg-[#003399] text-primaryFont h-full flex flex-col justify-center'>
      <div className='pt-10 flex justify-around gap-2 small-screen'>
        {/* LEFT SIDE */}
        <div className='flex flex-col relative items-center justify-center text-white w-screen'>
          <LeftPartLogin />
        </div>
        {/* RIGHT SIDE */}

        <div className='bg-white rounded w-screen px-10 m-16 p-8'>
          <div className='text-center'>
            <h1 className='text-4xl'>
              Log in to <span className='font-bold'>Padi</span>Pay
            </h1>
            <p className='text-xl my-8'>
              Welcome back! <br />
              Please login with your details
            </p>
          </div>
          <button className='border-2 border-black w-full py-2 flex justify-center items-center gap-2 my-8'>
            <img
              src={'https://ik.imagekit.io/b6b9xwu9l/google-logo.svg'}
              alt='google-play mockup'
              className='w-10'
            />
            <span>Login with Google</span>
          </button>

          {/* LOGIN FORM */}
          <form onSubmit={handleSubmit}>
            <div className='relative my-6 w-full'>
              <i className='fa-solid fa-envelope absolute px-3.5 py-4 text-2xl'></i>
              <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label=' Email Address'
                variant='outlined'
                id='lastName'
                type='email'
                value={values.email}
                name='email'
                onChange={handleChange}
              />
              <br />
            </div>

            <div className='relative my-6 w-full'>
              <i className='fa-solid fa-lock absolute px-3.5 py-4 text-2xl'></i>
              <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Password'
                variant='outlined'
                id='password'
                type='password'
                value={values.password}
                name='password'
                onChange={handleChange}
              />
            </div>

            <div className='w-full flex justify-between'>
              <div className='flex items-center gap-1'>
                <input
                  type='checkbox'
                  name='remember'
                  id='remember'
                  value='Remember me'
                />
                <span className='text-sm'>Remember me</span>
              </div>
              <Link to='forgotpassword' className='text-sm'>
                Forget your password?
              </Link>
            </div>

            <Button
              text={loading ? 'loading...' : 'Login'}
              className='bg-[#003399] text-white  rounded-[10px] cursor-pointer'
              size='lg'
            />
          </form>
          <p className='text-xl font-bold text-center'>
            Don't have an account?
            <Link to='/account-type' className='text-red-500 ml-2'>
              Sign up
            </Link>{' '}
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
