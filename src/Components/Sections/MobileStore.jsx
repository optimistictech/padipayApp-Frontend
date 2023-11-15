import React from 'react';
import { Link } from 'react-router-dom';

const MobileStore = () => {
  return (
    <section
      id='section-five'
      className='flex bg-primary item-center justify-between text-whiteColor px-7 py-10'
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
      <div>
        <img
          src={
            'https://ik.imagekit.io/gru3qfrss/Group%2023936%20(1)%20(1).png?'
          }
          alt='phone mockup'
          className='inline-block w-[100%] '
        />
      </div>
    </section>
  );
};

export default MobileStore;
