import React from 'react';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/AdminSideNav';
import BorrowersNavBar from '../../../Components/Auth/Dashboard/headerNavBar/AdminNavbar';

const AdminDashboard = () => {
  return (
    <div className='flex'>
       <BorrowersSideNav/>

      <div>
      <BorrowersNavBar/>
      {/* top boxes */}
      <div className="flex justify-between gap-4 pl-5 py-10 pr-10">
            <div id="viewCard" className="shadow w-[160px]">
              <div id="top_content" className="flex justify-between p-4">
                <div
                  className="topleft_icon bg-primary py-3 px-4 text-white rounded-md relative bottom-10"
                >
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="topright_texts">
                  <span className="text-navColor">Users</span><br />
                  <span className="text-base font-semibold">22</span>
                </div>
              </div>

              <div className="card_divider">
                <hr />
              </div>
              <div>
                <div className="bottomleft_text p-4 text-navColor">
                  <span>15</span>
                  <span>Investors</span>
                </div>
              </div>
            </div>

            <div id="viewCard" className="shadow w-[160px]">
              <div id="top_content" className="flex justify-between p-4">
                <div
                  className="topleft_icon bg-[#E93B77] py-3 px-4 text-white rounded-md relative bottom-10"
                >
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="topright_texts">
                  <span className="text-navColor">Loaned</span><br />
                  <span className="text-base font-semibold">&#8358;551,145</span>
                </div>
              </div>

              <div className="card_divider">
                <hr />
              </div>
              <div>
                <div className="bottomleft_text p-4 text-navColor">
                  <span>123</span>
                  <span>Loans</span>
                </div>
              </div>
            </div>

            <div id="viewCard" className="shadow w-[160px]">
              <div id="top_content" className="flex justify-between p-4">
                <div
                  className="topleft_icon bg-[#63B967] py-3 px-4 text-white rounded-md relative bottom-10"
                >
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="topright_texts">
                  <span className="text-navColor">Investment</span><br />
                  <span className="text-base font-semibold">82</span>
                </div>
              </div>

              <div className="card_divider">
                <hr />
              </div>
              <div>
                <div className="bottomleft_text p-4 text-navColor">
                  <span>&#8358;4,201</span>
                  <span>Average</span>
                </div>
              </div>
            </div>

            <div id="viewCard" className="shadow w-[160px]">
              <div id="top_content" className="flex justify-between p-4">
                <div
                  className="topleft_icon bg-[#439DEE] py-3 px-4 text-white rounded-md relative bottom-10"
                >
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="topright_texts">
                  <span className="text-navColor">Repaid</span><br />
                  <span className="text-base font-semibold">&#8358;137,483</span>
                </div>
              </div>

              <div className="card_divider">
                <hr />
              </div>
              <div>
                <div className="bottomleft_text p-4 text-navColor">
                  <span>76</span>
                  <span>Payments</span>
                </div>
              </div>
            </div>
          </div>
          {/* second  */}
      </div>

    </div>
  )
}

export default AdminDashboard