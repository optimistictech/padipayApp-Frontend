
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LendersSideNav from '../../../Components/Auth/Dashboard/side-navbar/LendersSideNav';
import LendersNavbarVerify from '../../../Components/Auth/Dashboard/header-navbar/LendersNavbarVerify';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';
import Button from '../../../Components/Button';
import { useNavigate } from 'react-router-dom/dist';

const LendersDashboardThree = () => {
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

  //
  return (
    <div className='lg:flex w-full'>
      <LendersSideNav user={user} loading={loading} />
      <section>
        <LendersNavbarVerify user={user} loading={loading} />
        {/* body */}

        <div className='flex gap-10 my-6 item-center justify-center'>
          {/* card 1 */}
          <div className='w-[350px] h-[334px]  shadow rounded px-4 '>
            <img
              src='https://ik.imagekit.io/gru3qfrss/Two_Female.png?'
              alt='Graph'
              className='shadow'
            />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>Place a Loan</p>
              <p className='text-[#7B809A] text-sm'>
                Make your Loan accessible to borrowers
              </p>
              <hr className='border-b border-gray-200 my-4' />

              <div className=' hover:text-md'>
                <Link to='/lendersDashboard4'>
                  <Button text={'Loan now'} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='w-[350px] h-[334px] shadow rounded relative px-4 '>
            <img
              src='https://ik.imagekit.io/gru3qfrss/Tailor.png?updatedAt=1700806418161'
              alt='Graph'
              className='shadow'
            />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>Fund a Business</p>
              <p className='text-[#7B809A] text-sm'>
                Make profit while you fund a business
              </p>
              <hr className='border-b border-gray-200 my-4' />
              <div className=' hover:text-md'>
                <Link to='/'>
                  <Button text={'Fund now'} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <FooterDashboard />
      </section>
    </div>
  );
};

export default LendersDashboardThree;
