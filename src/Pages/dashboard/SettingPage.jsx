import React from "react";
import { Link } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { FiUpload } from "react-icons/fi";

const SettingPage = () => {
  return (
    <div className="bg-[#F0F2F5] pl-12 pr-4 pb-10 pt-6">
      <h3 className="text-xl">Profile Info</h3>
      <div className="sm:block flex gap-8">
        {/*first div  */}
        <div className="w-9/12">
          <form className="bg-[#FFFFFF] block px-8">
            <label className="text-[#000000]">Name</label>
            <br></br>
            <input
              type="text"
              name="name"
              className=" placeholder:text-[#58585E] border-[#000000] border w-full py-3 pl-24 mb-4"
              placeholder="Name                              Middle Name                              Surname"
            ></input>
            <div className="flex gap-12">
              <div className="w-6/12">
                <label className="text-[#000000]">Former Account Type</label>
                <br></br>
                <input
                  type="text"
                  name="name"
                  className=" border-[#000000] border w-full py-3 pl-24 mb-4"
                ></input>
              </div>
              <div className="w-6/12">
                <label className="text-[#000000]">New Account Type</label>
                <br></br>
                <input
                  type="text"
                  name="name"
                  className="placeholder:text-[#58585E] border-[#000000] border w-full py-3 pl-24 mb-4"
                ></input>
              </div>
            </div>
            <label className="text-[#000000]">Street Address</label>
            <br></br>
            <input
              type="text"
              name="name"
              placeholder="6th Avenue, New York, NY, USA"
              className="placeholder:text-[#58585E] border-[#000000] border w-full py-3 pl-24 mb-4"
            ></input>
            <div className="flex gap-12">
              <div className="w-6/12">
                <label className="text-[#000000]">City</label>
                <br></br>
                <input
                  type="text"
                  name="name"
                  placeholder="Abuja"
                  className="placeholder:text-[#58585E] border-[#000000] border w-full py-3 pl-24 mb-4"
                ></input>
              </div>
              <div className="w-6/12">
                <label className="text-[#000000]">State</label>
                <br></br>
                <input
                  type="text"
                  name="name"
                  placeholder="Abuja"
                  className="placeholder:text-[#58585E] border-[#000000] border w-full py-3 pl-24 mb-4"
                ></input>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="w-6/12">
                <label className="text-[#000000]">Zip Code</label>
                <br></br>
                <input
                  type="number"
                  name="number"
                  placeholder="234"
                  className="placeholder:text-[#58585E] border-[#000000] border w-full py-3 pl-24 mb-4"
                ></input>
              </div>
              <div className="w-6/12">
                <label className="text-[#000000]">Phone number</label>
                <br></br>
                <input
                  type="number"
                  name="number"
                  placeholder="000000000000000000000"
                  className="placeholder:text-[#58585E] border-[#000000] border w-full py-3 pl-24 mb-4"
                ></input>
              </div>
            </div>
            <button className="bg-[#003399] text-white rounded-md mt-6 mb-4 px-8 py-4">
              Save Changes
            </button>
          </form>
          {/* second left box */}
          <div className="bg-[#FFFFFF] px-8 py-4 flex justify-between">
            <div>
              <p className="text-xl pl-4">KYC Settings</p>
              <button className="bg-[#003399] text-white rounded-md mt-6 mb-4 px-8 py-4">
                Change KYC Settings
              </button>
            </div>
            <div>
              <div className="flex">
                <FiUpload className="text-3xl" />
                <p className="text-xl pl-4">Document</p>
              </div>
              <button className="bg-[#003399] text-white rounded-md mt-6 mb-4 px-8 py-4">
                Change Document Settings
              </button>
            </div>
          </div>
          {/* last box */}
          <div className="bg-[#FFFFFF] px-8 pt-4 pb-8 mt-6">
            <p className="text-xl pl-4 mb-2">Account Info</p>
            <div className="flex justify-between">
              <div>
                <div className="flex justify-between mb-4">
                  <p className="text-xs">Email Address</p>
                  <p className="text-[#FC1616] text-xs">Change</p>
                </div>
                <input
                  type="email"
                  name="email"
                  className="text-[#58585E] border-[#000000] border px-12 py-4"
                ></input>
              </div>
              <div className="w-">
                <div className="flex justify-between mb-4">
                  <p className="text-xs">Password</p>
                  <p className="text-[#FC1616] text-xs">Change</p>
                </div>
                <input
                  type="password"
                  name="password"
                  className="text-[#58585E] border-[#000000] border px-12 py-4"
                ></input>
              </div>
            </div>
          </div>
        </div>
        {/* second div */}
        <div className="mt-6">
          <div className="flex gap-2 rounded-lg bg-[#FFFFFF]  py-4 px-4">
            <div>
              <CiImageOn className="text-6xl" />
            </div>
            <div>
              <p className="text-lg">
                Change Profile<br></br>
                Image
              </p>
              <button className="rounded-lg bg-[#003399] text-[#FFFFFF] px-2 py-1 mt-2">
                Save Changes
              </button>
            </div>
          </div>
          {/* secod box */}
          <div className=" flex gap-2 rounded-lg bg-[#FFFFFF] mt-14 py-8 px-6">
            <div>
              <LuPhoneCall className="text-5xl font-light" />
            </div>
            <div>
              <p className="text-lg">+234 8071901111</p>
              <p className="text-[#58585E] pt-4 text-lg">5am - 7pm GMT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingPage;
