import React from 'react'
import { TextField } from '@mui/material';
import Button from '../../../Components/Button'
import { Link } from 'react-router-dom';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';

const BorrowerSectionSix = () => {
  return (
    <div className='flex'>
      <BorrowersSideNav />
      <div>
      {/* <BorrowersNavbar /> */}
        <div>
        <section className='p-5 flex w-full gap-10 justify-between items-center'>
        <h3 className=' text-xl'>
          <span className='font-bold'>Request to pay Alfred Jimoh </span>
        </h3>
        {/* Account ID */}
        <p>
          <span className='text-primary'>Account ID:</span> PDWR300
        </p>

        {/* loan */}
        <div className="font-semibold flex-col text-xl">
                <h3 className="">Outstanding Loan:</h3>
                <h3 className="text-blue">N2,775.00</h3>
            </div>

        {/* btn */}
        <div className=' hover:text-md'>
          <Link to='/signup'>
            <Button text={'Share Referral Link'} size='lg'/>
          </Link>
        </div>
      </section>

        <div className="secondsection my-20">
                    <div className="loan-box ml-4">
                        <div className="loan-box1 w-96 py-4 px-4 shadow-md mb-4">
                            <label className="font-bold text-base" htmlFor=""
                                >Loan Amount</label
                            >
                            <TextField
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" variant='outlined' id='number' type="number"/>
                           

                            <div className="flex gap-4 my-6">
                                <div className="">
                                    <label className="font-bold text-base" htmlFor=""
                                        >Interest rate</label
                                    >
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                                </div>
                                <div className="gap-4">
                                    <label className="font-bold text-base" htmlFor=""
                                        >Loan duration</label
                                    >
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                                </div>
                            </div>

                            <label className="font-bold text-base" htmlFor=""
                                >Enter your 4-digit pin</label
                            >
                            <input
                                type="number"
                                name=""
                                id=""
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                            <Link to="/borrowersDashboard4">
                              <Button className="bg-blue block  rounded-xl text-white w-80 mx-auto py-2 mt-12" 
                              text="Get Loan"/>
                            </Link>
      
                        </div>
                    </div>
                </div>
                {/* SECOND SECTION */}
        <FooterDashboard />
        </div>
      </div>
    </div>
  );
}

export default BorrowerSectionSix