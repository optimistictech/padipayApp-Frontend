import React from 'react'
// import { Link } from 'react-router-dom';
import BorrowersNavbar from '../../../Components/Auth/Dashboard/headerNavBar/BorrowersNavbarV';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';
import SettingsSection from '../../../Components/SettingsSection'

const BorrowerDashboardEight = () => {
  return (
    <div className="flex">
        <BorrowersSideNav/>
        <div>
            <BorrowersNavbar/>
            <div className='flex'>
                <div class="bg-white h-[170px] w-80 py-auto px-8 rounded-lg shadow-md mt-40 mx-40 text-center items-center">
                    <img src="https://ik.imagekit.io/b6b9xwu9l/tick.png?updatedAt=1700853144975"
                    alt=""
                    className="mx-auto" />
                    <h1 class="font-bold text-xl mt-2">Great!</h1>
                    <p>Your loan has been successfully payed to Alfred Jimoh Ogunlere</p>
                </div>
                <SettingsSection/>
            </div>
        </div>
    </div>
  )
}

export default BorrowerDashboardEight