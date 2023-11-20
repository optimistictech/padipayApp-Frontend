import React from "react";
import PadiLogo from "./PadiLogo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer mt-8  bg-[#323232] text-[#B6BDC3] text-left py-10 px-10'>
      <div className='lg:flex justify-between items-start '>
        {/* left */}
        <div>
          <PadiLogo />

          <div className='mt-6'>
            <p className='py-2'>Sign up for newsletter</p>
            <div className='flex'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter email address'
                className='p-1 w-[220px] border outline-none'
              />
              <i className='fas fa-arrow-right flex items-center cursor-pointer bg-primary text-whiteColor py-1 px-2 focus:outline-none focus:ring hover:bg-blue-800'></i>
            </div>
          </div>
        </div>

        {/* Middle 1 */}
        <div className='text-left'>
          <p className='font-semibold pb-7'>Legal</p>
          <ul>
            <li>
              <Link to='/'>Terms and Conditions</Link>
            </li>
            <li>
              <Link to='/privacy'>Policy Privacy</Link>
            </li>
            <li>
              <Link to='/'>Lenders Agreement</Link>
            </li>
            <li>
              <Link to='/'>Borrowers Agreement</Link>
            </li>
            <li>
              <Link to='/guarantor-agreement'>Gurantors Agreement</Link>
            </li>
          </ul>
        </div>

        {/* Middle 2 */}
        <div className=''>
          <p className='font-semibold pb-7'>Company</p>

          <ul>
            <li>
              <Link to='/dist/whatWeDo.html'>What we do</Link>
            </li>

            <li>
              <Link to='/dist/ContactUs.html'>Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className='font-semibold pb-7'>Contact Us</p>
          <div className='flex items-center gap-3'>
            <Link to=''>
              <i className='fab fa-twitter'></i>
            </Link>
            <Link to=''>
              <i className='fab fa-facebook'></i>
            </Link>
            <Link to=''>
              <i className='fab fa-instagram'></i>
            </Link>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className='flex items-center justify-center pt-8 text-[14px]'>
        <p>Copyright @2023 Geekforce Team | TIIDELab</p>

        <Link to=''>
          <i
            className='fa fa-arrow-circle-up flex absolute scroll-smooth focus:scroll-auto right-0 mx-16 text-[#4EABE9] text-[40px] z-50 cursor-pointer '
            aria-hidden='true'
          ></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
