import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/navBar/Navbar';
import { Button } from '../Components/Button';

const AboutusPage = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      <section id='about' className='pt-28 font-primaryFont'>
        <div className='hero-section flex gap-16 px-10 py-5'>
          <div className='hero-text'>
            <h1 className='text-primary text-5xl font-bold mt-20 mb-5'>
              About Us
            </h1>
            <div className='mb-5 text-xl text-justify'>
              <p className='text-xl'>
                At <span className='font-bold '>PadiPay,</span> we're dedicated
                to revolutionizing the world of financial services through
                innovation, accessibility, and customer-centricity. We
                understand that financial transactions are at the heart of
                people's lives, and our mission is to simplify and enhance these
                experiences for individuals and businesses alike.
              </p>
            </div>
          </div>
          <img
            src={
              'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/AboutPageImages/group.png'
            }
            className='w-2/4'
            alt=''
          />
        </div>
        <section className='text-section'>
          <div className='px-20 my-16 w-3/5 mx-auto'>
            <h3 className='font-bold text-center text-5xl text-primary'>
              Our Vision
            </h3>
            <p className='text-justify text-xl my-6'>
              Our vision is to empower individuals and businesses with seamless
              and secure financial solutions that promote economic growth and
              financial well-being for all. We aspire to be the trusted partner
              in the financial journey of our customers, enabling them to
              achieve their financial goals.
            </p>
          </div>
          <div className='mb-5 px-10 py-5 flex gap-16'>
            <img
              className='w-2/5'
              src={
                'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/AboutPageImages/man2.jpg'
              }
              alt=''
            />
            <div className='what-text text-justify'>
              <h3 className='font-bold text-5xl text-primary mt-6'>
                What We Stand For
              </h3>
              <ul className='list-decimal px-5 py-6 text-lg'>
                <li>
                  Innovation: By harnessing the power of technology, we create
                  user-friendly and efficient solutions that keep our customers
                  ahead in a rapidly evolving financial landscape.
                </li>
                <li>
                  Accessibility: We believe in financial inclusion for all. Our
                  products and services are accessible to individuals and
                  businesses of all sizes, regardless of their financial
                  background or location.
                </li>
                <li>
                  Security: Security is at the core of everything we do. We
                  employ state-of-the-art security measures to protect our
                  customers' data and transactions. Your trust is our top
                  priority.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className='flex flex-col items-start my-16 py-6 px-20 w-3/5 mx-auto'>
          <div className='text-center'>
            <h3 className='font-bold text-center text-5xl text-primary'>
              Join Us on the <br />
              Financial Journey
            </h3>
            <p className='text-justify text-xl my-6'>
              Whether you're an individual looking for convenient financial
              solutions or a business seeking innovative ways to manage your
              finances, PadiPay is here to accompany you on your financial
              journey. We invite you to experience the future of finance with us
              – where innovation meets accessibility, and your financial goals
              are within reach.
            </p>
          </div>
          <div className='my-2 mx-auto block'>
            <Link to='/singup'>
              <Button className='my-10' text={'Join us today'}></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default AboutusPage;
