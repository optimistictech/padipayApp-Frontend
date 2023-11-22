import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../common';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MobileStore = () => {
  // AOS
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <section id='section-five' className='bg-primary'>
      <Section className='lg:flex items-center justify-between w-full text-white py-5'>
        <div id='section-five-text' className=' text-left lg:w-[50%] lg:pt-32'>
          <h3 className='text-5xl leading-snug font-bold pb-8'>
            Register without any charges.
          </h3>
          <p className='text-xl'>
            Access immediate loans. <br />
            Start your journey as a lender today.
          </p>
          {/* downloadIcons */}
          <div
            id='download-section'
            className='lg:flex items-center self-end mt-10 '
          >
            <Link to='http://' target='_blank' rel='noopener noreferrer'>
              <img
                src={'https://ik.imagekit.io/gru3qfrss/appStore.png'}
                alt='app store'
              />
            </Link>
            <Link to='http://' target='_blank' rel='noopener noreferrer'>
              <img
                src={'https://ik.imagekit.io/gru3qfrss/appStore.png'}
                alt='google play'
              />
            </Link>
          </div>
        </div>
        {/* Left */}
        <div className='lg:w-[60%]' data-aos='zoom-in-up'>
          <img
            src={'https://ik.imagekit.io/gru3qfrss/PADIPAY-MOBILE-1%201.png'}
            alt='phone mockup'
            className='inline-block lg:w-[80%] '
          />
        </div>
      </Section>
    </section>
  );
};

export default MobileStore;
