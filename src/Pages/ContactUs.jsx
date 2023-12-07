import React from 'react';
import Navbar from '../Components/navBar/Navbar';
import Footer from '../Components/Footer';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      {/* Contact section */}
      <section className='pt-16 md:pt-32'>
        <div className='md:relative'>
          <h1 className='font-bold text-xl md:text-2xl text-primary px-4 md:px-20 mb-2 md:mb-5'>
            Contact Us
          </h1>
          <div className='w-full bg-primary text-white p-4 md:p-20'>
            <div className='w-full md:w-3/5'>
              <p className='text-lg md:text-2xl'>
                We're here to assist you in any way we can. Reach out to us for
                support, inquiries, or feedback.
              </p>
            </div>
          </div>
          <div className='md:absolute top-[-60px] right-4 md:right-40'>
            <img
              src={
                'https://ik.imagekit.io/el8bhalzv/Young%20man%20uses%20a%20smartphone%20in%20the%20street.png?updatedAt=1700591395939'
              }
              alt='young man uses padipay'
              className='w-full md:w-[500px] h-[300px] md:h-[500px] object-cover'
            />
          </div>
        </div>
      </section>

      {/* Support section */}
      <section className='mt-10 md:mt-20 px-4 md:px-20 mb-2 md:mb-10'>
        <h2 className='font-bold text-xl md:text-2xl text-primary mb-2 md:mb-5'>
          Customer Support:
        </h2>
        <div className='flex flex-col md:flex-row justify-center md:justify-between'>
          <div className='w-full md:w-1/2 mb-4 md:mb-0'>
            <img
              src={
                '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.7824432289!2d7.367465599820489!3d9.024416367383584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1701617871971!5m2!1sen!2sng" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
              }
              alt='map'
              className='w-full h-48 md:h-auto'
            />
          </div>
        </div>
      </section>

      {/* Enquiry section */}
      <section className='px-4 md:px-20 mb-2 md:mb-10'>
        <div>
          <h3 className='font-bold text-xl md:text-2xl text-primary mb-2 md:mb-5'>
            Business Inquiries:
          </h3>
          <p className='mb-2 md:mb-4 font-bold'>Email: business@padipay.com</p>
          <p className='text-sm md:text-base'>
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
