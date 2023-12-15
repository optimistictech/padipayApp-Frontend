import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import KycSidebar from '../../../../Components/Auth/Dashboard/KycSidebar';
import { useNavigate } from 'react-router-dom/dist';
import axios from 'axios';
import cogoToast from 'cogo-toast';

const initialState = {
  accountNumber: '',
  bankName: '',
  accountName: '',
  monthlyIncome: '',
};
const AccountDetails = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [banks, setBanks] = useState(null);

  useEffect(() => {
    // get token from local storage
    const token = JSON.parse(localStorage.getItem('token'));
    const user = JSON.parse(localStorage.getItem('user'));

    setToken(token);
    setUser(user);
  }, []);

  // get all banks
  useEffect(() => {
    if (token) {
      const getAllBanks = async () => {
        const res = await axios.get(
          `https://padipay-backend.onrender.com/v1/kyc/get-banks`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        setBanks(res.data.data);
      };
      getAllBanks();
    }
  }, [token]);

  // handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    const payload = {
      userId: user?.id,
      accountNumber: values.accountNumber,
      bankName: values.bankName,
      accountName: values.accountName,
      monthlyIncome: values.monthlyIncome,
    };

    setLoading(true);

    try {
      const res = await axios.post(
        `https://padipay-backend.onrender.com/v1/kyc/save-account-details`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      cogoToast.success('Information saved successfully');
      setLoading(false);
      navigate('/digitpin');
    } catch (error) {
      setLoading(false);
      cogoToast.error(error.response.data.message);
    }
  };

  //
  return (
    <main className='bg-[#003399] px-20 pt-20 pb-56'>
      <div className='flex justify-around gap-2 small-screen'>
        {/* Left Side */}
        <KycSidebar />

        {/* -------------------------------------------------- */}
        {/* Right side */}
        <div className=' bg-white w-screen my-10 px-16 py-8'>
          <h1 className='text-2xl font-bold'>Account Details</h1>
          {/* <div className='my-6'>
            <label htmlFor='nin'>NIN</label>
            <input
              type='number'
              id='nin'
              name='nin'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='6'
            />
          </div> */}
          <div className='my-6'>
            <label htmlFor='accountNumber'>Account Number:</label>
            <input
              type='number'
              id='accountNumber'
              name='accountNumber'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='6'
              value={values.accountNumber}
              onChange={handleChange}
            />
          </div>
          <div className='my-6'>
            <label htmlFor='monthlyIncome'>Monthly Income (NGN)</label>
            <input
              type='number'
              id='monthlyIncome'
              name='monthlyIncome'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='6'
              value={values.monthlyIncome}
              onChange={handleChange}
            />
          </div>
          <div className='my-6'>
            <label htmlFor='bankName'>Bank Name:</label>

            <select
              id='bankName'
              name='bankName'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='5'
              value={values.bankName}
              onChange={handleChange}
            >
              <option value='Default'>Select Bank</option>
              {banks?.map((item) => {
                return (
                  <option key={item.id} value={item.code}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className='my-6'>
            <label htmlFor='natureOfBusiness'>Account Name:</label>
            <input
              type='text'
              id='natureOfBusiness'
              name='accountName'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='5'
              value={values.accountName}
              onChange={handleChange}
            />
          </div>
          <div className='my-6'>
            <label htmlFor='natureOfBusiness'>Account Name:</label>
            <input
              type='text'
              id='natureOfBusiness'
              name='natureOfBusiness'
              className='border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3'
              required
              tabIndex='5'
            />
          </div>
          <div className='flex gap-4'>
            <Link to='/digitpin'>
              <button
                className='proceed-button bg-[#003399] text-white px-5 py-2 rounded-[10px] cursor-pointer'
                onclick='proceedButtonClick()'
              >
                Proceed
              </button>
            </Link>
            <button
              className='proceed-button bg-[#003399] text-white px-5 py-2 rounded-[10px] cursor-pointer'
              onClick={handleSubmit}
            >
              {loading ? 'loading...' : 'Proceed'}
            </button>

            <button
              className='border-2 border-primary text-primary px-5 py-2 rounded-[10px] cursor-pointer'
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccountDetails;
