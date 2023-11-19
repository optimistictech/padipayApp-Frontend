import React from 'react';
import { Link } from 'react-router-dom';

const LendersNavbar = () => {
  return (
    <main className='w-[80%] font-primaryFont flex flex-col '>
      {/* LEFT CONTENT */}
      <header className='p-5 flex justify-between items-center'>
        <div className=''>
          <div className='flex flex-col '>
            <p className='text-sm'>
              <span className='text-[#878585]'>Dashboard</span> Overview
            </p>
            <p className='font-bold text-xl text-primary'>Analytics</p>
          </div>
        </div>
        {/* RIGHT CONTENT */}
        {/* settings */}
        <div className='flex items-center gap-5'>
          <input
            type='search'
            id='search'
            name='search'
            placeholder='Search here'
            className='border-[1px] border-[#7B809A] rounded-[8px] py-1 pl-3 bg-transparent outline-0'
          />
          {/* icons */}
          <div className='flex items-center gap-5 relative'>
            <i className='fa-solid fa-user bg-[#7B809A] text-white rounded-[50%] p-1 text-[12px]' />
            <i className='fa-solid fa-gear text-[#7B809A]' />
            {/* notification */}
            <i className='fa-sharp fa-solid text-[#7B809A] fa-bell' />
          </div>
        </div>
      </header>

      {/*(SECTION MIDDLE) Card */}
      <section className='p-5 flex justify-between'>
        <h3 className=' text-xl'>
          <span className='font-bold'>Alfred</span> Jimoh Ogunlere
        </h3>
      </section>
    </main>
  );
};

export default LendersNavbar;
