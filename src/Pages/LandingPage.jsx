import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import phone from '../assets/landingImages/PhoneMain.png'
import apple from '../assets/landingImages/appStore.png'
import manandgirl from '../assets/landingImages/manGirl.png'
import googleplay from '../assets/landingImages/googlePlay.png'
import girl from '../assets/landingImages/girl.png'
import steps from '../assets/landingImages/STEPS.png'
import vector2 from '../assets/landingImages/Vector2.png'
import vector1 from '../assets/landingImages/Vector1.png'
import womanlogo from '../assets/landingImages/woman-logo.png'
import interest from '../assets/landingImages/iNTREST_Rate__1_-removebg-preview.png'
import grouppeople from '../assets/landingImages/group-people.png'
import loan from '../assets/landingImages/loan.png'
import logo1 from '../assets/landingImages/logo1.png'
import logo2 from '../assets/landingImages/logo2.png'
import logo3 from '../assets/landingImages/logo3.png'

const LandingPage = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      {/* HERO SECTION */}
      <section
        id='heroSection'
        className='flex items-center w-full p-7 bg-[#F5F1F1] justify-between '
      >
        <div id='hero-text' className='w-[50%] ml-3 text-left'>
          <h1 className='text-[60px] leading-[70px] ml-4 font-extrabold'>
            Empower Your <span className='text-primary'>Financial Growth</span>
          </h1>
          <p className='py-[30px] text-[18px] ml-4 text-justify w-[80%] '>
            The PadiPay Lending Platform aims to provide an online lending
            marketplace that connects borrowers seeking loans with investors
            looking to invest in loan opportunities.
          </p>
          <button className='animate-bounce hover:animate-none ml-3 bg-primary text-whiteColor px-4 py-2 rounded-md'>
            <Link to ='/login'>Get Started</Link>
          </button>
        </div>

        {/* Hero Right */}
        <div className=' w-[50%] flex items-center justify-center  mt-10'>
          <img src={phone}
            className='w-[70%] '
            alt='phone'
          />

          {/* downloadIcons */}
          <div id='download-section' className='self-end mb-16 w-[100px]'>
            <Link to='http://' target='_blank' rel='noopener noreferrer'>
              <img
                src={apple}
                alt='app store'
                className='mb-2'
              />
            </Link>
            <Link to='http://' target='_blank' rel='noopener noreferrer'>
              <img
                src={googleplay}
                alt='google play'
                className=''
              />
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- COMMUNITY SECTION --> */}
      <section
        id='section-one'
        className='w-full h-[500px]  bg-[#B1B1B1] flex items-center justify-between'
      >
        {/* left */}
        <div
          id='section-one-text'
          className='w-[60%] h-[500px] bg-whiteColor px-7 py-20 text-left '
        >
          <h2 className='text-4xl font-bold px-5 w-[90%] '>
            Discover Our Collaborative{' '}
            <span className='text-primary'>Community</span>
          </h2>
          <button className=' text-white m-5 bg-primary text-whiteColor px-4 py-2 rounded-md hover:bg-blue-800'>
            <Link to='/community'>Connect and Engage</Link>
          </button>

          <p className='text-lg w-[70%]  ml-5'>
            Build a thriving lending community where borrowers and lenders can
            interact, share insights, and foster meaningful connections. Our
            platform's Community Section serves as a hub for engagement and
            support.
          </p>
        </div>
        {/* right */}
        <div className='bg-[#B1B1B1] w-[40%] flex items-center justify-start '>
          <img
            src={manandgirl}
            alt='man and a girl'
            className='w-[40%] absolute top-[600px] right-[160px] bottom-0'
          />
        </div>
      </section>

      {/* <!-- SECTION TWO --> */}
      <section id='section-two' className='text-center bg-[#f0f0f0] pt-[80px]'>
        <h3 className='text-primary font-bold text-4xl mb-4'>
          Non-Interest Credit Facility
        </h3>
        <p className='text-xl text-center w-2/4 mx-auto'>
          We at PadiPay provides a no-interest credit facilities, which
          frequently rely on asset based financing to give lenders assurance. In
          this arrangement, the loan is secured by real property or other forms
          of collateral. Until the borrower pays back the loan, the lender is
          the legal owner of the business.
        </p>
        {/* <!-- girl --> */}
        <div id='section-three' className='w-2/5 mx-auto mt-8'>
          <img src={girl} alt='girl' />
        </div>
      </section>

      {/* <!-- STEP SECTION --> */}
      <section
        id='step-section'
        className='bg-primary pb-[40px] pt-[80px] text-whiteColor font-bold text-center'
      >
        <h3 className='text-4xl '>How It Works:</h3>
        <h3 className='text-4xl mb-6'>A Simple Path to Financial Growth</h3>
        <img
          src={steps}
          alt=''
          className='w-3/5 mx-auto my-20'
        />
      </section>

      {/* <!-- CARD SECTION --> */}
      <section className='card-section flex flex-col my-20 pb-6 pt-[80px] gap-12'>
        <div className='mx-72 text-white'>
          <div className='shadow-sm card-one mx-10 flex gap-4 bg-[#323232] rounded-xl justify-center p-6'>
            <img src={vector1} alt='' className='w-2/5' />
            <div className='card-one-text text-whiteColor text-left'>
              <h3 className='text-4xl font-bold mb-3'>Lenders</h3>
              <p className='text-lg '>
                Are you ready to explore exciting investment opportunities and
                contribute to borrowers' financial growth? PadiPay's Lending
                Platform opens doors to a world of possibilities.
              </p>
            </div>
          </div>
        </div>

        <div className='card-two flex mx-80 text-whiteColor gap-4 bg-primary rounded-xl justify-center px-6 py-6'>
          <img src={vector2} alt='' className='w-2/5' />
          <div className='card-two-text w-3/4 text-left'>
            <h3 className='text-4xl font-bold mb-3'>Borrowers</h3>
            <p className='text-lg'>
              Are you ready to turn your dreams into reality? PadiPay's Lending
              Platform connects you with investors who believe in your vision.
            </p>
          </div>
        </div>
      </section>

      {/* section 4  - interest rate*/}
      <section className='flex item-center pt-[80px]  w-full px-7 bg-[#f0f0f0]'>
        <div className=' w-[50%]'>
          <img
            src={womanlogo}
            alt='woman-logo'
            className='w-3/4'
          />
        </div>
        <div className=' pt-20 text-right  w-[50%]'>
          <h3 className='font-bold text-left text-5xl'>
            Friendly <span className='text-primary'>Interest Rate</span>{' '}
          </h3>
          <img
            src={interest}
            alt='interest-logo'
            className=' w-[400px]'
          />
        </div>
      </section>

      {/* <!-- SECTION FIVE --> */}
      <section
        id='section-five'
        className='flex bg-primary pt-[80px] item-center justify-between text-whiteColor px-7 pt-20'
      >
        <div id='section-five-text' className=' text-left pt-24'>
          <h3 className='text-4xl font-bold pb-8'>
            Register without any charges.
          </h3>
          <p className='text-xl'>
            - Access immediate loans. <br />- Start your journey as a lender
            today.
          </p>
          {/* downloadIcons */}
          <div id='download-section' className='self-end mt-10 '>
            <Link to='http://' target='_blank' rel='noopener noreferrer'>
              <img
                src={apple}
                alt='app store'
                className='mb-2'
              />
            </Link>
            <Link to='http://' target='_blank' rel='noopener noreferrer'>
              <img
                src={googleplay}
                alt='google play'
                className=''
              />
            </Link>
          </div>
        </div>
        {/* Left */}
        <div>
          <img
            src={phone}
            alt='phone mockup'
            className='inline-block w-[90%] '
          />
        </div>
      </section>

      {/* <!-- SECTION SIX --> */}
      <section
        id='section-six'
        className='text-center pt-[80px] font-bold p-14'
      >
        <h3 className='text-4xl'>A Selection of Our Reliable</h3>
        <h3 className='text-4xl text-primary'>Business Collaborators</h3>
        <div
          id='partner-logo'
          className='flex gap-12 w-full text-center justify-center item-center m-10'
        >
          <img src={logo2} alt='Tiidelab' />
          <img src={logo3} alt='NECA' />
          <img src={logo1} alt='ITF' />
        </div>
      </section>

      {/* BLOG SECTION */}
      <div className='blog-section flex gap-28 justify-center align-center mb-[80px] mt-[80px]'>
        <div className='blog-section-one w-96 shadow-2xl'>
          <img src={loan} alt='' className='mb-2 w-96' />
          <h4 className='font-bold px-4 text-lg text-left'>
            PadiPay: Benefits of using a loan platform
          </h4>
          <div className='more flex mt-3 gap-36 align-center pb-12 px-4'>
            <p className='text-sm'>23/8/2023</p>
            <Link to='/blog' className='font-bold text-primary'>
              Read More
            </Link>
          </div>
        </div>
        <div className='blog-section-two w-96 shadow-2xl'>
          <img src={grouppeople} alt='' className='w-96' />
          <h4 className='font-bold text-lg  text-left px-4 mb-4'>
            Money Lending in Nigeria: A Closer Look at the Financial Landscape
          </h4>
          <div className='more flex gap-40 align-center px-4'>
            <p className='text-sm'>23/8/2023</p>
            <Link to='.blog' className='text-primary font-bold'>
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default LandingPage;
