import React from 'react'
import { Link } from 'react-router-dom';
import BorrowersNavbar from '../../../Components/Auth/Dashboard/headerNavBar/BorrowersNavbar'
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';
const BorrowerSectionFour = () => {
  return (
    <div className='lg:flex justify-between items-start'>

    <BorrowersSideNav />
    <div>
    <BorrowersNavbar />

    <section className="dashboard flex gap-16 mt-20">
   


  {/* Card Section */}
  <div className="dashboard grid grid-cols-2 justify-items-center gap-14">
    {/* Card-1 */}
    <div className="card__container p-4 rounded bg-white shadow">
      {/* Card Image */}
      <div className="card__container__img -mt-12">
        <img src="https://ik.imagekit.io/ffdguzut1/bg%20-%20graph4.png" alt="Bg-Graph" className="mb-[-50px] z-10" />
      </div>
      {/* Card Content */}
      <div className="mt-14">
        <div className="">
          <h3 className="text-blue-700 text-lg font-semibold">Collins Frank</h3>
          <p className="text-gray-500 text-sm">10% Interest Rate</p>
        </div>
        <div className="card__container__content__rate">
          <p className="text-xl">₦500,000</p>
        </div>
      </div>
      <button className="mt-5 outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4">
        Match with Lender
      </button>
    </div>
    {/* Card-2 */}
    <div className="card__container p-4 rounded bg-white shadow">
      {/* Card Image */}
      <div className="card__container__img -mt-12">
        <img src="https://ik.imagekit.io/ffdguzut1/bg%20-%20graph.png" alt="Bg-Graph" className="mb-[-50px] z-10" />
      </div>
      {/* Card Content */}
      <div className="mt-14">
        <div className="">
          <h3 className="text-blue-700 text-lg font-semibold">Collins Frank</h3>
          <p className="text-gray-500 text-sm">10% Interest Rate</p>
        </div>
        <div className="card__container__content__rate">
          <p className="text-xl">₦500,000</p>
        </div>
      </div>
      <button className="mt-5 outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4">
        Match with Lender
      </button>
    </div>
    {/* Card-3 */}
    <div className="card__container p-4 rounded bg-white shadow">
      {/* Card Image */}
      <div className="card__container__img -mt-12">
        <img src="https://ik.imagekit.io/ffdguzut1/bg%20-%20graph3.png" alt="Bg-Graph" className="mb-[-50px] z-10" />
      </div>
      {/* Card Content */}
      <div className="mt-14">
        <div className="">
          <h3 className="text-blue-700 text-lg font-semibold">Ajoke Badmus</h3>
          <p className="text-gray-500 text-sm">10% Interest Rate</p>
        </div>
        <div className="card__container__content__rate">
          <p className="text-xl">₦500,000</p>
        </div>
      </div>
      <button className="mt-5 outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4">
        Match with Lender
      </button>
    </div>
    {/* Card-4 */}
    <div className="card__container p-4 rounded bg-white shadow">
      {/* Card Image */}
      <div className="card__container__img -mt-12">
        <img src="https://ik.imagekit.io/ffdguzut1/bg%20-%20graph2.png" alt="Bg-Graph" className="mb-[-50px] z-10" />
      </div>
      {/* Card Content */}
      <div className="mt-14">
        <div className="">
          <h3 className="text-blue-700 text-lg font-semibold">Ajoke Badmus</h3>
          <p className="text-gray-500 text-sm">10% Interest Rate</p>
        </div>
        <div className="card__container__content__rate">
          <p className="text-xl">₦500,000</p>
        </div>
      </div>
      <button className="mt-5 outline-none border-none rounded bg-gray-300 text-black text-center text-sm font-normal py-2 px-4">
        Match with Lender
      </button>
    </div>
  </div>
  <div className="cta h-44 flex flex-col gap-8">
    {/* Card-1 */}
    <div className="cta__card p-10 flex justify-between items-center rounded bg-white shadow w-[410px]">
      <div className="cta__card__img flex items-center gap-2">
        <img src="../assets/images/Images/settings.png" alt />
        <div>
          <p className="text-blue-700 text-lg font-semibold">General</p>
          <p className="text-gray-500 text-sm">Settings</p>
        </div>
      </div>
      <div className="cta__card__arrow">
        <img src="../assets/images/Images/arrow symbol.svg" alt />
      </div>
    </div>
    {/* Card-2 */}
    <div className="cta__card p-10 flex justify-between items-center rounded bg-white shadow">
      <div className="cta__card__img flex items-center gap-2">
        <img src="../assets/images/Images/call_support.png" alt />
        <div>
          <p className="text-blue-700 text-lg font-semibold">Support</p>
          <p className="text-gray-500 text-sm">Request</p>
        </div>
      </div>
      <div className="cta__card__arrow">
        <img src="../assets/images/Images/arrow symbol.svg" alt />
      </div>
    </div>
    {/* Card-3 */}
    <div className="cta__card p-10 flex justify-between items-center rounded bg-white shadow">
      <div className="cta__card__img flex items-center gap-2">
        <img src="../assets/images/Images/docs.png" alt />
        <div>
          <p className="text-blue-700 text-lg font-semibold">Investment</p>
          <p className="text-gray-500 text-sm">Documents</p>
        </div>
      </div>
      <div className="cta__card__arrow">
        <img src="../assets/images/Images/arrow symbol.svg" alt />
      </div>
    </div>
  </div>
</section>
</div>
</div>

  )
}

export default BorrowerSectionFour