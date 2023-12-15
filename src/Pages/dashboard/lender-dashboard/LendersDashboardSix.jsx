import React, { useEffect, useState } from 'react';
import LendersSideNav from '../../../Components/Auth/Dashboard/side-navbar/LendersSideNav';
import LendersNavbarVerify from '../../../Components/Auth/Dashboard/header-navbar/LendersNavbarVerify';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';
import { useNavigate } from 'react-router-dom/dist';

const LendersDashboardSix = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [authloading, setAuthloading] = useState(true);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');

      return;
    }
    setUser(response);
    setLoading(false);
    setAuthloading(false);
  }, [navigate]);

  if (authloading) {
    return;
  }

  // return key
  return (
    <div className='lg:flex w-full'>
      <LendersSideNav user={user} loading={loading} />
      <section>
        <LendersNavbarVerify user={user} loading={loading} />
        {/* body */}
        <div></div>

        <FooterDashboard />
      </section>
    </div>
  );
};

export default LendersDashboardSix;
