import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className='bg-primary font-primaryFont'>
      <div className=' h-100vw py-6'>
        <div className='flex justify-around gap-2 small-screen'>
          <div className='flex flex-col relative items-center justify-center text-white w-screen'>
            <div className='text-center'>
              <h1 className='text-4xl'>Welcome Onboard</h1>
              <span className='text-4xl font-bold'>Padi</span>
            </div>
            <div className='mx-auto '>
              <img
                src={
                  'https://ik.imagekit.io/gru3qfrss/tr:w-200,h-500,bl-10/Group%2023936.svg'
                }
                alt='PadiPay'
                className='right-img mt-8'
              />
            </div>
            <div className='flex gap-4 small-screen relative '>
              <div className=' p-4 rounded-lg'>
                <img
                  src={'https://ik.imagekit.io/gru3qfrss/appStore.png'}
                  alt='apple mockup'
                  className='w-40'
                />
              </div>
              <div className='p-4 rounded-lg'>
                <img
                  src={'https://ik.imagekit.io/gru3qfrss/googlePlay.png'}
                  alt='google-play mockup'
                  className='w-40'
                />
              </div>
            </div>
          </div>
          <div className='bg-white w-screen px-10 m-16 p-8'>
            <div className='text-center'>
              <h1 className='text-4xl'>
                Create Your Account<span className='font-bold'></span>
              </h1>
              <p className='text-xl my-4'>
                Welcome! Please enter with your details
              </p>
            </div>
            <button className='border-2 border-black w-full py-2 flex justify-center items-center gap-2 my-8'>
              <img
                src={'https://ik.imagekit.io/b6b9xwu9l/google-logo.svg'}
                alt='google-play mockup'
                className='w-10'
              />
              <span>Sign up with Google</span>
            </button>
            {/* MAIN BODY - SIGNUP FORM */}
            <form name='loginForm' onsubmit='saveData(event)'>
              <div className='relative my-6'>
                <i className='fa-solid fa-user absolute px-3.5 py-4 text-2xl'></i>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  placeholder='Enter Your firstName'
                  className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                />
                <br />
              </div>

              <div className='relative my-6'>
                <i className='fa-solid fa-user absolute px-3.5 py-4 text-2xl'></i>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  placeholder='Enter Your lastName'
                  className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                />
                <br />
              </div>

              <div className='relative my-6'>
                <i className='fa-solid fa-envelope absolute px-3.5 py-4 text-2xl'></i>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                />
                <br />
              </div>

              <div className='relative my-6'>
                <i className='fa-solid fa-lock absolute px-3.5 py-4 text-2xl'></i>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                />
              </div>

              <div className='relative my-6'>
                <i className='fa-solid fa-lock absolute px-3.5 py-4 text-2xl'></i>
                <input
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Retype Password'
                  className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                />
              </div>

              <div className='relative my-6'>
                <i className='fa-solid fa-phone absolute px-3.5 py-4 text-2xl'></i>
                <input
                  type='tel'
                  name='phone'
                  id='phone'
                  placeholder='Phone'
                  className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                />
              </div>

              <div className='relative my-6'>
                <i className='fa-solid fa-location-dot absolute px-3.5 py-4 text-2xl'></i>
                <input
                  type='text'
                  name='address'
                  id='address'
                  placeholder='Address'
                  className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                />
              </div>

              <div className='flex justify-between'>
                <div className='flex items-center gap-1'>
                  <input
                    type='checkbox'
                    name='terms'
                    id='terms'
                    value='terms'
                  />
                  <span className='text-sm'>
                    I accepted all terms & conditions
                  </span>
                </div>
              </div>

              <Link to='/account-type'>
                <input
                  type='submit'
                  value='Sign up'
                  className='bg-[#003399] text-white w-1/3 px-4 py-2 rounded-[10px] cursor-pointer'
                />
              </Link>
            </form>

            <p className='font-bold text-xl text-center'>
              Already have an account?
              <Link to='/account-type' className='text-red-500 ml-2'>
                Login
              </Link>{' '}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
