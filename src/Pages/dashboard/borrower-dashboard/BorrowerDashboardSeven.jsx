import React from 'react'
// import { Link } from 'react-router-dom';
import BorrowersNavBar from '../../../Components/Auth/Dashboard/headerNavBar/BorrowersNavbarV';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';
import SettingsSection from '../../../Components/SettingsSection'

const BorrowerDashboardSeven = () => {
  return (
    <div className="flex">
        <BorrowersSideNav/>
        <div>
            <BorrowersNavBar/>
            <div className='flex'>
                <div class="bg-white h-[170px] w-80 pt-18 px-8 rounded-lg shadow-md mt-40 mx-40 text-center items-center">
                    <img src="https://ik.imagekit.io/b6b9xwu9l/tick.png?updatedAt=1700853144975"
                    alt=""
                    className="mx-auto" />
                    <h1 className="font-bold text-xl mt-2">Thank you!</h1>
                    <p>Your loan has been successfully listed</p>
                </div>
                <SettingsSection/>
            </div>
        </div>
    </div>
  )
}

export default BorrowerDashboardSeven