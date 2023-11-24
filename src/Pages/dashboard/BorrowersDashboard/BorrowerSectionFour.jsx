import React from 'react';
import { Link } from 'react-router-dom';
import BorrowersNavbar from '../../../Components/Auth/Dashboard/headerNavBar/BorrowersNavbar';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';
const BorrowerSectionFour = () => {
  return (
    <div className='lg:flex justify-between items-start'>
      <BorrowersSideNav />
      <div>
        <BorrowersNavbar />

        <section className='dashboard flex gap-16 mt-20'>
          {/* Card Section */}
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
              <Link to='/lendersDashboard'>
                <button className='mt-5 outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4'>
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
                  Match with Lender
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
                  Match with Lender
                </button>
              </Link>
            </div>
          </section>

          <div className='cta h-44 flex flex-col gap-8'>
            {/* Card-1 */}
            <div className='cta__card p-10 flex justify-between items-center rounded bg-white shadow w-[410px]'>
              <div className='cta__card__img flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  {' '}
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <div>
                  <p className='text-blue-700 text-lg font-semibold'>General</p>
                  <p className='text-gray-500 text-sm'>Settings</p>
                </div>
              </div>
              <div className='cta__card__arrow'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  {' '}
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </div>
            </div>
            {/* Card-2 */}
            <div className='cta__card p-10 flex justify-between items-center rounded bg-white shadow'>
              <div className='cta__card__img flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z'
                  />
                </svg>
                <div>
                  <p className='text-blue-700 text-lg font-semibold'>Support</p>
                  <p className='text-gray-500 text-sm'>Request</p>
                </div>
              </div>
              <div className='cta__card__arrow'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  {' '}
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </div>
            </div>
            {/* Card-3 */}
            <div className='cta__card p-10 flex justify-between items-center rounded bg-white shadow'>
              <div className='cta__card__img flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                  />
                </svg>
                <div>
                  <p className='text-blue-700 text-lg font-semibold'>
                    Investment
                  </p>
                  <p className='text-gray-500 text-sm'>Documents</p>
                </div>
              </div>
              <div className='cta__card__arrow'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  {' '}
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BorrowerSectionFour;
