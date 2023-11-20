import React from "react";
import { Link } from "react-router-dom";
import LeftPartLogin from "../Components/LeftPartLogin";

const LoginPage = () => {
  return (
    <div className='bg-[#003399] h-screen flex flex-col justify-center'>
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
              src={"https://ik.imagekit.io/b6b9xwu9l/google-logo.svg"}
              alt='google-play mockup'
              className='w-10'
            />
            <span>Login with Google</span>
          </button>

          {/* LOGIN FORM */}
          <form name='loginForm' onsubmit='login(event)'>
            <div className='relative my-6'>
              <i className='fa-solid fa-envelope absolute px-3.5 py-4 text-2xl'></i>
              <input
                type='email'
                name='loginEmail'
                id='loginEmail'
                placeholder='Email'
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
              />
              <br />
            </div>
            <div className='relative my-6'>
              <i className='fa-solid fa-lock absolute px-3.5 py-4 text-2xl'></i>
              <input
                type='password'
                name='loginPassword'
                id='loginPassword'
                placeholder='Password'
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-1'>
                <input
                  type='checkbox'
                  name='remember'
                  id='remember'
                  value='Remember me'
                />
                <span className='text-sm'>Remember me</span>
              </div>
              <Link to='' className='text-sm'>
                Forget your password?
              </Link>
            </div>

            <div className='text-center my-4'>
              <input
                type='submit'
                value='Login'
                className='bg-[#003399] text-white w-1/3 px-4 py-2 rounded-[10px] cursor-pointer'
              />
            </div>
          </form>
          <p className='text-xl font-bold text-center'>
            Don't have an account?
            <Link to='' className='text-red-500 ml-2'>
              Sign up
            </Link>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
