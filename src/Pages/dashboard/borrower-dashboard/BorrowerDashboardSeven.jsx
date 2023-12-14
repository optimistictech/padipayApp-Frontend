import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import BorrowersNavBar from '../../../Components/Auth/Dashboard/header-navbar/BorrowersNavbarV';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/side-navbar/BorrowersSideNav';
import SettingsSection from '../../../Components/SettingsSection';
import { useNavigate } from 'react-router-dom/dist';

const BorrowerDashboardSeven = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));

    if (!token) {
      navigate('/login');
      return;
    }
    setUser(response);
    setLoading(false);
  }, []);

  //
  return (
    <div className='flex'>
      <BorrowersSideNav user={user} loading={loading} />
      <div>
        <BorrowersNavBar user={user} loading={loading} />
        <div className='flex'>
          <div class='bg-white h-[170px] w-80 pt-18 px-8 rounded-lg shadow-md mt-40 mx-40 text-center items-center'>
            <img
              src='https://ik.imagekit.io/b6b9xwu9l/tick.png?updatedAt=1700853144975'
              alt=''
              className='mx-auto'
            />
            <h1 className='font-bold text-xl mt-2'>Thank you!</h1>
            <p>Your loan has been successfully listed</p>
          </div>
          <SettingsSection />
        </div>
      </div>
    </div>
  );
};

export default BorrowerDashboardSeven;
