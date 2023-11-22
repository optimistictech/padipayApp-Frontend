import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/navBar/Navbar';
import Footer from '../Components/Footer';
import { Button } from '../Components/Button';
import 'remixicon/fonts/remixicon.css';

const CommunityPage = () => {
  const topics = [
    {
      user: {
        name: 'Emma Johnson',
        img: 'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Image1.png?',
      },
      date: '31/12/2020',
      title: 'Who can invest in PadiPay ?',
    },
  ];
  return (
    <div className='font-primaryFont'>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN BODY - HERO SECTION */}
      <div
        id='hero-section'
        className='pt-28 pb-10 text-center bg-blue-800 py-12 text-white'
      >
        <h1 className='text-3xl font-bold my-4'>Discover Our </h1>
        <h1 className='text-3xl font-bold my-2'>Collaborative Community</h1>
        <p className='font-normal my-4 text-xl'>Connect and Engage</p>
        <div
          id='searchButtonSection'
          className='flex justify-center items-center mt-8 mb-10 text-black'
        >
          <input
            className='w-4/12 px-4 py-4 rounded-l-md text-black'
            type='text'
            name=''
            id=''
            placeholder='Search the Community'
          />
          <i className='w-6 bg-blue-500 text-white hover:bg-blue-400 py-4 px-5 rounded-r-md flex justify-center item-center transition ease-in-out delay-150 ri-search-line'></i>
        </div>
      </div>

      {/* TRENDING SECTION */}
      <div className='trendingSection px-10'>
        <h2 className='text-3xl mt-6 font-semibold'>Trending</h2>
        <div className='trendingBoxSection flex gap-4 text-white mt-4'>
          <div className='trendingBoxOne w-1/3 bg-primary p-4 rounded-xl'>
            <img
              src={
                'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/group1.png'
              }
              alt='Two men'
            />
            <img
              src={
                'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/abadge.png?updatedAt=1700102430611'
              }
              alt=''
              className='mt-2 pt-2'
            />
            <p className='py-2'>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </div>
          <div className='trendingBoxOne w-1/3 bg-primary p-4 rounded-xl'>
            <img
              src={
                'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/group2.png'
              }
              alt='Two men'
            />
            <img
              src={
                'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/abadge.png'
              }
              alt=''
              className='mt-2 pt-2'
            />
            <p className='py-2'>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </div>
          <div className='trendingBoxOne w-1/3 bg-primary p-4 rounded-xl'>
            <img
              src={
                'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/group3.png'
              }
              alt='Two men'
            />
            <img
              src={
                'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/abadge.png'
              }
              alt=''
              className='mt-2 pt-2'
            />
            <p className='py-2'>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </div>
        </div>
      </div>

      {/* RECENT FORUM SECTION */}
      <div className='recentForumContainer px-10 mt-16'>
        <h2 className='font-extrabold text-2xl mb-5'>Recent Forum Activity</h2>
        <div className='topic-category flex gap-12 font-semibold mb-7'>
          <h4>
            <Link
              to=''
              className='text-blue-500 hover:text-blue-600 active:text-blue-800 transition ease-in-out delay-150'
            >
              Recent topics
            </Link>
          </h4>
          <h4>
            <Link
              to=''
              className='hover:text-blue-600 active:text-blue-800 transition ease-in-out delay-150'
            >
              Borrowers topic
            </Link>
          </h4>
          <h4>
            <Link
              to=''
              className='hover:text-blue-600 active:text-blue-800 transition ease-in-out delay-150'
            >
              Lenders topics
            </Link>
          </h4>
        </div>
        <div className='article-section'>
          {/* ONE */}
          <div className='article-section-container-one flex border-b border-borderBlack gap-6 items-center'>
            <div className='article-img -mt-4'>
              <img
                src={
                  'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/image2.png'
                }
                alt=''
                className='w-16'
              />
            </div>
            <div className='article pr-8'>
              <h5 className='mb-1 text-xl font-semibold'>
                What fees are associated with PadiPay lending platform?
              </h5>
              <p className='text-sm font-medium'>
                Padipay lending platform may charge fees to investors and/or
                borrowers. These can include loan origination fees, servicing
                fees, and late payment fees.
              </p>
              <div className='flex gap-8 leading-4 mt-3 mb-5'>
                <p className='text-xs text-blue-400'>PadiPay Admin</p>
                <p className='text-xs text-borderBlack'>31/1/2023</p>
                <div className='icons flex'>
                  <i className='ri-thumb-up-fill mr-5 cursor-pointer text-xs'>
                    12
                  </i>
                  <i className='ri-eye-fill mr-5 cursor-pointer text-xs'>10</i>
                  <i className='ri-chat-3-fill mr-5 cursor-pointer text-xs'>
                    10
                  </i>
                </div>
              </div>
            </div>
          </div>
          {/* TWO */}
          <div className='article-section-container-two flex border-b border-borderBlack gap-9 items-center'>
            <div className='article-img -mt-4'>
              <img
                src={
                  'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Image1.png?'
                }
                alt=''
                className='w-16'
              />
            </div>
            <div className='article pr-8'>
              <h5 className='mb-1 text-xl font-semibold'>
                How does PadiPay lending community work?
              </h5>
              <p className='text-sm font-medium'>
                PadiPay lending platform connect borrowers seeking loans with
                individual investors willing to lend money. Borrowers create
                loan listings with their loan amount and purpose, while
                investors can browse these listings and choose loans to fund.
              </p>
              <div className='flex gap-8 leading-4 mt-3 mb-5'>
                <p className='text-xs text-blue-400'>PadiPay Admin</p>
                <p className='text-xs text-borderBlack'>31/1/2023</p>
                <div className='icons flex'>
                  <i className='ri-thumb-up-fill mr-5 cursor-pointer text-xs'>
                    12
                  </i>
                  <i className='ri-eye-fill mr-5 cursor-pointer text-xs'>10</i>
                  <i className='ri-chat-3-fill mr-5 cursor-pointer text-xs'>
                    10
                  </i>
                </div>
              </div>
            </div>
          </div>
          {/* THREE */}
          <div className='article-section-container-three flex border-b border-borderBlack gap-6 items-center'>
            <div className='article-img -mt-4'>
              <img
                src={
                  'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/image3.png?updatedAt=1700102430517'
                }
                alt=''
                className='w-16'
              />
            </div>
            <div className='article pr-8'>
              <h5 className='mb-1 text-xl font-semibold'>
                Who can invest in PadiPay ?
              </h5>
              <p className='text-sm font-medium'>
                Individuals looking to invest their money for potential returns
                can participate in PadiPay lending community. Different
                platforms may have minimum investment requirements and
                guidelines.
              </p>
              <div className='flex gap-8 leading-4 mt-3 mb-5'>
                <p className='text-xs text-blue-400'>Emma Johnson</p>
                <p className='text-xs text-borderBlack'>31/1/2023</p>
                <div className='icons flex'>
                  <i className='ri-thumb-up-fill mr-5 cursor-pointer text-xs'>
                    12
                  </i>
                  <i className='ri-eye-fill mr-5 cursor-pointer text-xs'>10</i>
                  <i className='ri-chat-3-fill mr-5 cursor-pointer text-xs'>
                    10
                  </i>
                </div>
              </div>
            </div>
          </div>
          {/* FOUR */}
          <div className='article-section-container-four flex border-b border-borderBlack gap-6 items-center'>
            <div className='article-img -mt-4'>
              <img
                src={
                  'https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/image2.png'
                }
                alt=''
                className='w-16'
              />
            </div>
            <div className='article pr-8'>
              <h5 className='mb-1 text-xl font-semibold'>
                What are the potential returns for investors?
              </h5>
              <p className='text-sm font-medium'>
                Investors can earn interest on the loans they fund. The interest
                rate varies based on the borrower's creditworthiness and the
                terms of the loan.
              </p>
              <div className='flex gap-8 leading-4 mt-3 mb-5'>
                <p className='text-xs text-blue-400'>Emma Johnson</p>
                <p className='text-xs text-borderBlack'>31/1/2023</p>
                <div className='icons flex'>
                  <i className='ri-thumb-up-fill mr-5 cursor-pointer text-xs'>
                    12
                  </i>
                  <i className='ri-eye-fill mr-5 cursor-pointer text-xs'>10</i>
                  <i className='ri-chat-3-fill mr-5 cursor-pointer text-xs'>
                    10
                  </i>
                </div>
              </div>
            </div>
          </div>
          {/* END */}
        </div>
        <div className='text-center'>
          <Button className='my-10' text={'Load More'}></Button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default CommunityPage;
