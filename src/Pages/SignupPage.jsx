import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import Button from '../Components/Button'

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
            <div className='flex gap-4 small-screen relative md:flex-col lg:flex-row'>
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
          <div className='bg-white rounded-md w-full px-10 m-16 p-8'>
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
            </ button>
            {/* MAIN BODY - SIGNUP FORM */}
            <form name='loginForm' onsubmit='saveData(event) '>
              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-user absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full  py-4'
                label='Enter Your first Name'
                variant='outlined'
                id='lastName'
                type='text'
                />
                <br />
              </div>

              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-user absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Enter Your last Name'
                variant='outlined'
                id='lastName'
                type='text'
                />
                
                <br />
              </div>

              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-envelope absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label=' Email Address'
                variant='outlined'
                id='lastName'
                type='email'
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
                />
              </div>

              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-lock absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Retype Password'
                variant='outlined'
                id='confirmPassword'
                type='password'
                />
              </div>

              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-phone absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Phone Number'
                variant='outlined'
                id='phone'
                type='number'
                />
              </div>

              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-location-dot absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Address'
                variant='outlined'
                id='address'
                type='text'
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
                    I accept all terms & conditions
                  </span>
                </div>
              </div>

              <Link to='/account-type' className='flex justify-center align-middle my-10' >
                <Button
                  text='Sign up'
                  className='bg-[#003399] text-white  rounded-[10px] cursor-pointer ' size='lg'
                />
              </Link>
            </form>

            <p className='font-bold text-xl text-center'>
              Already have an account?
              <Link to='/login' className='text-red-500 ml-2'>
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
