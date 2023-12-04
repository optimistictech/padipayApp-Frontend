import React from 'react';
import { Link } from 'react-router-dom';
import BorrowersNavbar from '../../../Components/Auth/Dashboard/headerNavBar/BorrowersNavbarListing';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';
import SettingsSection from '../../../Components/SettingsSection'

const BorrowerSectionFour = () => {
  return (
    <div className='lg:flex justify-between  items-start'>
      <BorrowersSideNav  />
      <div className='pb-8'>
        <BorrowersNavbar />

        <section className='dashboard flex pt-6 gap-16 mr-10'>
          {/* Card Section */}
          <div className="card-sec flex-col jusify-between gap-20">
          <div className="topCard flex">
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
                <div className=' px-4'>
                  <h3 className='text-blue-700 text-lg font-semibold'>
                    Collins Frank
                  </h3>
                  <p className='text-gray-500 text-sm'>10% Interest Rate</p>
                  <p className='text-xl'>₦500,000</p>
                </div>
                
              </div>
              <Link to='/lendersDashboard'>
                <button className='mt-5 mb-10 block mx-auto outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4'>
                  Match with Lender
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
                <div className='px-4'>
                  <h3 className='text-blue-700 text-lg font-semibold'>
                    Collins Frank
                  </h3>
                  <p className='text-gray-500 text-sm'>10% Interest Rate</p>
                  <p className='text-xl'>₦500,000</p>
                </div>
                
              </div>
              <Link to='/lendersDashboard'>
                <button className='mt-5 block mx-auto outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4'>
                  Match with Lender
                </button>
              </Link>
            </div>

          </div>
          {/* bottom-card */}
          <div className="bottom-card flex">
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
                <div className='px-4'>
                  <h3 className='text-blue-700 text-lg font-semibold'>
                    Ajoke Badmus
                  </h3>
                  <p className='text-gray-500 text-sm'>10% Interest Rate</p>
                  <p className='text-xl'>₦500,000</p>
                </div>
                
              </div>
              <Link to='/lendersDashboard'>
                <button className='mt-5 block mx-auto outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4'>
                  Match with Lender
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
                <div className='px-4'>
                  <h3 className='text-blue-700 text-lg font-semibold'>
                    Ajoke Badmus
                  </h3>
                  <p className='text-gray-500 text-sm'>10% Interest Rate</p>
                  <p className='text-xl'>₦500,000</p>
                </div>
                
              </div>
              <Link to='/lendersDashboard'>
                <button className='mt-5 block mx-auto outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4'>
                  Match with Lender
                </button>
              </Link>
            </div>

          </div>
          </div>
          {/* settings section - column */}
         <SettingsSection/>
           
          </section>
        </div>
      
   </div>
  );
};

export default BorrowerSectionFour;
