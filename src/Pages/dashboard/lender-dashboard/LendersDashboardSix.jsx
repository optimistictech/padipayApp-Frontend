import React from 'react';
import { Link } from 'react-router-dom';
import LendersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/LendersSideNav';
import LendersNavbarVerify from '../../../Components/Auth/Dashboard/headerNavBar/LendersNavbarVerify';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';

const LendersDashboardSix = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user){
      navigate("/login")
    }
  },[])

  return (
    <div className='lg:flex w-full'>
      <LendersSideNav />
      <section>
        <LendersNavbarVerify />
        {/* body */}
        <div></div>

        <FooterDashboard />
      </section>
    </div>
  );
};

export default LendersDashboardSix;
