import React from 'react';
import { Link } from 'react-router-dom';

const MobileStore = () => {
  return (
    <section
      id='section-five'
      className='flex bg-primary font-primaryFont item-center justify-between w-full text-whiteColor px-7 py-5'
    >
      <div id='section-five-text' className=' text-left w-[50%] pt-32'>
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
              src={'https://ik.imagekit.io/gru3qfrss/appStore.png'}
              alt='app store'
              className='mb-2'
            />
          </Link>
          <Link to='http://' target='_blank' rel='noopener noreferrer'>
            <img
              src={'https://ik.imagekit.io/gru3qfrss/appStore.png'}
              alt='google play'
              className=''
            />
          </Link>
        </div>
      </div>
      {/* Left */}
      <div className='w-[60%]'>
        <img
          src={
            'https://ik.imagekit.io/gru3qfrss/PADIPAY-MOBILE-1.png?updatedAt=1700044443697'
          }
          alt='phone mockup'
          className='inline-block w-[80%] '
        />
      </div>
    </section>
  );
};

export default MobileStore;
