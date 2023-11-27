import React from 'react';
import Navbar from '../Components/navBar/Navbar';
import Footer from '../Components/Footer';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      {/* Contact section */}
      <section className='pt-[150px]'>
        <div className='md:relative'>
          <h1 className='font-bold text-2xl text-primary px-20 mb-5'>
            Contact Us
          </h1>
          <div className='w-full bg-primary text-white p-20'>
            <div className='w-[30%]'>
              <p className='text-2xl'>
                We're here to assist you in any way we can. Reach out to us for
                support, inquiries, or feedback.
              </p>
            </div>
          </div>
          <div className='md:absolute top-[-60px] right-40'>
            <img
              src={
                'https://ik.imagekit.io/el8bhalzv/Young%20man%20uses%20a%20smartphone%20in%20the%20street.png?updatedAt=1700591395939'
              }
              alt='young man uses padipay'
              className='w-[500px] h-[500px]'
            />
          </div>
        </div>
      </section>

      {/* Support section */}
      <section className='mt-40 px-20 mb-10'>
        <h2 className='font-bold text-2xl text-primary mb-5'>
          Customer Support:
        </h2>
        <div className='flex justify-between'>
          <div>
            <img
              src={
                'https://ik.imagekit.io/el8bhalzv/Colorful%20cities%20and%20countries%20on%20map.png?updatedAt=1700591372823'
              }
              alt='map'
              className='w-[500px]'
            />
          </div>
        </div>
      </section>

      {/* Enquiry section */}
      <section className='px-20 mb-10'>
        <div>
          <h3 className='font-bold text-2xl text-primary mb-5'>
            Business Inquiries:
          </h3>
          <p className='mb-4 font-bold'>Email: business@padipay.com</p>
          <p className='w-1/2'>
            Your experience matters to us, and we're committed to providing
            prompt assistance and addressing your needs. If you have any
            questions about our terms, agreements, or anything else, please
            don't hesitate to get in touch.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
