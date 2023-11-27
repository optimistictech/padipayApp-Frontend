import React from 'react';
import { Link } from 'react-router-dom';
import LendersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/LendersSideNav';
import LendersNavbarVerify from '../../../Components/Auth/Dashboard/headerNavBar/LendersNavbarVerify';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';
import Button from '../../../Components/Button';

const LendersDashboardFour = () => {
  return (
    <div className='lg:flex w-full'>
      <LendersSideNav />
      <section>
        <LendersNavbarVerify />
        {/* body */}
        <main className='flex justify-center items-center gap-8 flex-col '>
          <section className='flex justify-between items-center gap-5 mx-4 mt-10'>
            <div className='card__container p-4 rounded bg-white shadow'>
              {/* Card Image */}
              <div className='card__container__img -mt-12'>
                <img
                  src='https://ik.imagekit.io/ffdguzut1/bg%20-%20graph4.png'
                  alt='Bg-Graph'
                  className='mb-[-50px] z-10'
                />
              </div>
              {/* Card Content */}
              <div className='mt-14'>
                <div className=''>
                  <h3 className='text-blue-700 text-lg font-semibold'>
                    Collins Frank
                  </h3>
                  <p className='text-gray-500 text-sm'>10% Interest Rate</p>
                </div>
                <div className='card__container__content__rate'>
                  <p className='text-xl'>₦500,000</p>
                </div>
              </div>
              <Link to='/lendersDashboard5'>
                <button className='mt-5 outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4'>
                  Match with Borrower
                </button>
              </Link>
            </div>
            {/* Card-2 */}
            <div className='card__container p-4 rounded bg-white shadow'>
              {/* Card Image */}
              <div className='card__container__img -mt-12'>
                <img
                  src='https://ik.imagekit.io/ffdguzut1/bg%20-%20graph.png'
                  alt='Bg-Graph'
                  className='mb-[-50px] z-10'
                />
              </div>
              {/* Card Content */}
              <div className='mt-14'>
                <div className=''>
                  <h3 className='text-blue-700 text-lg font-semibold'>
                    Collins Frank
                  </h3>
                  <p className='text-gray-500 text-sm'>10% Interest Rate</p>
                </div>
                <div className='card__container__content__rate'>
                  <p className='text-xl'>₦500,000</p>
                </div>
              </div>
              <Link to='/lendersDashboard'>
                <button className='mt-5 outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4'>
                  Match with Borrower
                </button>
              </Link>
            </div>
            {/* Card-3 */}
            <div className='card__container p-4 rounded bg-white shadow'>
              {/* Card Image */}
              <div className='card__container__img -mt-12'>
                <img
                  src='https://ik.imagekit.io/ffdguzut1/bg%20-%20graph3.png'
                  alt='Bg-Graph'
                  className='mb-[-50px] z-10'
                />
              </div>
              {/* Card Content */}
              <div className='mt-14'>
                <div className=''>
                  <h3 className='text-blue-700 text-lg font-semibold'>
                    Ajoke Badmus
                  </h3>
                  <p className='text-gray-500 text-sm'>10% Interest Rate</p>
                </div>
                <div className='card__container__content__rate'>
                  <p className='text-xl'>₦500,000</p>
                </div>
              </div>
              <Link to='/lendersDashboard'>
                <button className='mt-5 outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4'>
                  Match with Borrower
                </button>
              </Link>
            </div>
            {/* Card-4 */}
            <div className='card__container p-4 rounded bg-white shadow'>
              {/* Card Image */}
              <div className='card__container__img -mt-12'>
                <img
                  src='https://ik.imagekit.io/ffdguzut1/bg%20-%20graph2.png'
                  alt='Bg-Graph'
                  className='mb-[-50px] z-10'
                />
              </div>
              {/* Card Content */}
              <div className='mt-14'>
                <div className=''>
                  <h3 className='text-blue-700 text-lg font-semibold'>
                    Ajoke Badmus
                  </h3>
                  <p className='text-gray-500 text-sm'>10% Interest Rate</p>
                </div>
                <div className='card__container__content__rate'>
                  <p className='text-xl'>₦500,000</p>
                </div>
              </div>
              <Link to='/lendersDashboard'>
                <button className='mt-5 outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4'>
                  Match with Borrower
                </button>
              </Link>
            </div>
          </section>

          <div className=' hover:text-md '>
            <Link to='/'>
              <Button text={'View All'} />
            </Link>
          </div>
        </main>

        <FooterDashboard />
      </section>
    </div>
  );
};

export default LendersDashboardFour;
