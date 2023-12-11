import React from 'react'

const Kyc = () => {
  return (
    <main className="bg-[#003399] px-20 pt-20 pb-56">
            <div className="flex justify-around gap-2 small-screen">
                {/* Left Side */}
                <div className="flex flex-col text-white w-[50%]">
                    <a
                        href="/dist/updateProfile.html"
                        className="bg-white text-primary w-1/3 my-10 px-4 py-2 rounded-[10px] cursor-pointer">
                        <i className="fa-solid fa-arrow-left px-2"></i
                        ><span>Back</span></a
                    >
                    <div className="flex justify-start items-center gap-2">
                        {/* <img
                            className="w-20"
                            src="/dist/Images/updateProfile/PadiPayWhite.png"
                            alt="" /> */}
                        <h1 className="text-xl text-white">
                            <span className="font-bold">Padi</span>Pay
                        </h1>
                    </div>

                    {/* Switch Information */}
                    <div>
                        {/* <h2>KYC Form</h2> */}
                        <div>
                            {/* Get Started */}
                            <div
                                className="flex justify-start gap-2 relative mt-6 w-full pt-4">
                                <input
                                    type="checkbox"
                                    id="getStarted"
                                    name="step"
                                    value="getStarted"
                                    className="section-checkbox" />
                                <label htmlFor="getStarted" className="px-4"
                                    >Step 1: <br />
                                    Get Started</label
                                >
                            </div>
                            {/* Personal Details */}
                            <div
                                className="flex justify-start gap-2 relative mt-6 w-full pt-4">
                                <input
                                    type="checkbox"
                                    id="personalDetails"
                                    name="step"
                                    value="personalDetails"
                                    className="section-checkbox" />
                                <label htmlFor="personalDetails" className="px-4">
                                    Step 2: <br />Personal Details</label
                                >
                            </div>
                            {/* Employment Status */}
                            <div
                                className="flex justify-start gap-2 relative mt-6 w-full pt-4">
                                <input
                                    type="checkbox"
                                    id="employmentStatus"
                                    name="step"
                                    value="employmentStatus"
                                    className="section-checkbox" />
                                <label htmlFor="employmentStatus" className="px-4"
                                    >Step 3: <br />Employment Status</label
                                >
                            </div>
                            {/* Next of Kin */}
                            <div
                                className="flex justify-start gap-2 relative mt-6 w-full pt-4">
                                <input
                                    type="checkbox"
                                    id="nextOfKin"
                                    name="step"
                                    value="nextOfKin"
                                    className="section-checkbox" />
                                <label htmlFor="nextOfKin" className="px-4"
                                    >Step 4: <br />Next of Kin</label
                                >
                            </div>
                            {/* Account Details */}
                            <div
                                className="flex justify-start gap-2 relative mt-6 w-full pt-4">
                                <input
                                    type="checkbox"
                                    id="accountDetails"
                                    name="step"
                                    value="accountDetails"
                                    className="section-checkbox" />
                                <label htmlFor="accountDetails" className="px-4"
                                    >Step 5: <br />Account Details</label
                                >
                            </div>
                            {/* Create 4-digit-pin */}
                            <div
                                className="flex justify-start gap-2 relative mt-6 w-full pt-4">
                                <input
                                    type="checkbox"
                                    id="createPin"
                                    name="step"
                                    value="createPin"
                                    className="section-checkbox" />
                                <label htmlFor="createPin" className="px-4"
                                    >Step 6: <br />Create 4-digit-Pin</label
                                >
                            </div>
                            {/* Terms and Conditions */}
                            <div
                                className="flex justify-start gap-2 relative mt-6 w-full pt-4">
                                <input
                                    type="checkbox"
                                    id="tnc"
                                    name="step"
                                    value="tnc"
                                    className="section-checkbox" />
                                <label htmlFor="tnc" className="px-4"
                                    >Step 7: <br />Terms and Conditions</label
                                >
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------------------------------------------------- */}
                {/* Right side */}
                <div
                    className="flex items-center justify-between bg-white w-screen my-10 px-16 py-8">
                    {/* Left side */}
                    <div className="w-[60%]">
                        <form id="kycForm" onsubmit="return false;">
                            {/* Get Started */}
                            <div id="getStartedSection">
                                <h1 className="text-2xl font-bold">Get Started</h1>
                                <div className="relative my-6">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                                        required
                                        tabIndex="1" />
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="bvn">BVN:</label>
                                    <input
                                        type="number"
                                        id="bvn"
                                        name="bvn"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                                        required
                                        tabIndex="2" />
                                </div>

                                <div>
                                    <button
                                        className="proceed-button bg-[#003399] text-white w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="proceedButtonClick()">
                                        Proceed
                                    </button>
                                </div>
                            </div>

                            {/* Personal Details */}
                            <div className="section" id="personalDetailsSection">
                                <h1 className="text-2xl font-bold">
                                    Personal Details
                                </h1>
                                <div className="relative my-6">
                                    <label htmlFor="firstName">First Name:</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                                        required
                                        tabIndex="3" />
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="middleName">Middle Name:</label>
                                    <input
                                        type="text"
                                        id="middleName"
                                        name="middleName"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                                        required
                                        tabIndex="3" />
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                                        required
                                        tabIndex="3" />
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="address">Address:</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                                        required
                                        tabIndex="3" />
                                </div>
                                <div className="flex gap-3 my-6">
                                    <div className="relative">
                                        <label htmlFor="state">State:</label>
                                        <select
                                            name="state"
                                            id="state"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required>
                                            <option value="Default">
                                                Select Default
                                            </option>
                                            <option value="Abuja">Abuja</option>
                                            <option value="Lagos">Lagos</option>
                                            <option value="Oyo">Oyo</option>
                                            <option value="Kwara">Kwara</option>
                                        </select>
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="lga">LGA:</label>
                                        <select
                                            name="lga"
                                            id="lga"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3">
                                            <option value="default">
                                                Select Default
                                            </option>
                                            <option value="amac">AMAC</option>
                                            <option value="gwagwalada">
                                                Gwagwalada
                                            </option>
                                            <option value="kwali">Kwali</option>
                                            <option value="kuje">Kuje</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-3 my-6">
                                    <div className="relative">
                                        <label htmlFor="city">City:</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3" />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="landmark"
                                            >Nearest Landamark:</label
                                        >
                                        <input
                                            type="text"
                                            id="landmark"
                                            name="landmark"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3" />
                                    </div>
                                </div>
                                <div className="flex gap-3 my-6">
                                    <div className="relative">
                                        <label htmlFor="dob">Date of Birth:</label>
                                        <input
                                            type="date"
                                            id="dob"
                                            name="dob"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3" />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="occupation"
                                            >Occupation:</label
                                        >
                                        <select
                                            name="occupation"
                                            id="occupation"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3">
                                            <option value="default">
                                                Select Default
                                            </option>
                                            <option value="unemployed">
                                                Unemployed
                                            </option>
                                            <option value="civilServant">
                                                Civil Servant
                                            </option>
                                            <option value="businessOwner">
                                                Business Owner
                                            </option>
                                            <option value="investor">
                                                Investor
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-3 my-6">
                                    <div>
                                        <label htmlFor="phone">Phone:</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="4" />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="gender">Gender:</label>
                                        <select
                                            name="gender"
                                            id="gender"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3">
                                            <option value="default">
                                                Select Default
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
                                            </option>
                                            <option value="preferNotToSay">
                                                Prefer Not to Say
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="proceed-button bg-[#003399] text-white w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="proceedButtonClick()">
                                        Proceed
                                    </button>
                                    <button
                                        className="border-2 border-primary text-primary w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="goBack()">
                                        Back
                                    </button>
                                </div>
                            </div>

                            {/* Employment Status */}
                            <div className="section" id="employmentStatusSection">
                                <h1 className="text-2xl font-bold">
                                    Employment Status
                                </h1>
                                <div className="relative my-6">
                                    <label htmlFor="employmentStatus"
                                        >What’s your current employment
                                        status?:</label
                                    >
                                    <select
                                        name="employmentStatus"
                                        id="employmentStatus"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="">
                                        <option value="default">
                                            Select Default
                                        </option>
                                        <option value="unemployed">
                                            Unemployed
                                        </option>
                                        <option value="civilServant">
                                            Civil Servant
                                        </option>
                                        <option value="businessOwner">
                                            Business Owner
                                        </option>
                                        <option value="investor">
                                            Investor
                                        </option>
                                    </select>
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="profession"
                                        >What’s your current profession?:</label
                                    >
                                    <select
                                        name="profession"
                                        id="profession"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="">
                                        <option value="default">
                                            Select Default
                                        </option>
                                        <option value="unemployed">
                                            Unemployed
                                        </option>
                                        <option value="civilServant">
                                            Civil Servant
                                        </option>
                                        <option value="businessOwner">
                                            Business Owner
                                        </option>
                                        <option value="investor">
                                            Investor
                                        </option>
                                    </select>
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="placeOfWork"
                                        >What’s the name of your current place
                                        of work?:</label
                                    >
                                    <input
                                        type="text"
                                        id="placeOfWork"
                                        name="placeOfWork"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="4" />
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="addressOfWork"
                                        >What is the address of your current
                                        place of work?:</label
                                    >
                                    <input
                                        type="text"
                                        id="addressOfWork"
                                        name="addressOfWork"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="4" />
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="emailAddress"
                                        >What is your work email
                                        address?:</label
                                    >
                                    <input
                                        type="email"
                                        id="emailAddress"
                                        name="emailAddress"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="4" />
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="sector"
                                        >What sector of the economy is your
                                        company?:</label
                                    >
                                    <select
                                        name="sector"
                                        id="sector"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="">
                                        <option value="default">
                                            Select Default
                                        </option>
                                        <option value="unemployed">
                                            Unemployed
                                        </option>
                                        <option value="civilServant">
                                            Civil Servant
                                        </option>
                                        <option value="businessOwner">
                                            Business Owner
                                        </option>
                                        <option value="investor">
                                            Investor
                                        </option>
                                    </select>
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="firstJobYear"
                                        >When did you start your first
                                        job?:</label
                                    >
                                    <select
                                        name="firstJobYear"
                                        id="firstJobYear"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="">
                                        <option value="default">
                                            Select Default
                                        </option>
                                        <option value="unemployed">
                                            Unemployed
                                        </option>
                                        <option value="civilServant">
                                            Civil Servant
                                        </option>
                                        <option value="businessOwner">
                                            Business Owner
                                        </option>
                                        <option value="investor">
                                            Investor
                                        </option>
                                    </select>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        className="proceed-button bg-[#003399] text-white w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="proceedButtonClick()">
                                        Proceed
                                    </button>
                                    <button
                                        className="border-2 border-primary text-primary w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="goBack()">
                                        Back
                                    </button>
                                </div>
                            </div>

                            {/* Next of Kin */}
                            <div className="section" id="nextOfKinSection">
                                <h1 className="text-2xl font-bold">Next of Kin</h1>
                                <div className="relative my-6">
                                    <label htmlFor="nextOfKinFirstName"
                                        >What’s the first name of your next of
                                        kin? :</label
                                    >
                                    <input
                                        type="text"
                                        id="nextOfKinFirstName"
                                        name="nextOfKinFirstName"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                                        required
                                        tabIndex="3" />
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="nextOfKinLastName"
                                        >What’s the last name of your next of
                                        kin?:</label
                                    >
                                    <input
                                        type="text"
                                        id="nextOfKinLastName"
                                        name="nextOfKinLastName"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                                        required
                                        tabIndex="3" />
                                </div>
                                <div>
                                    <label htmlFor="nextOfKinPhoneNumber"
                                        >Phone Number:</label
                                    >
                                    <input
                                        type="tel"
                                        id="nextOfKinPhoneNumber"
                                        name="nextOfKinPhoneNumber"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="4" />
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="nextOfKinAddress"
                                        >Address:</label
                                    >
                                    <input
                                        type="text"
                                        id="nextOfKinAddress"
                                        name="nextOfKinAddress"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                                        required
                                        tabIndex="3" />
                                </div>
                                <div className="flex gap-3 my-6">
                                    <div className="relative">
                                        <label htmlFor="state">State:</label>
                                        <select
                                            name="state"
                                            id="state"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required>
                                            <option value="Default">
                                                Select Default
                                            </option>
                                            <option value="Abuja">Abuja</option>
                                            <option value="Lagos">Lagos</option>
                                            <option value="Oyo">Oyo</option>
                                            <option value="Kwara">Kwara</option>
                                        </select>
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="lga">LGA:</label>
                                        <select
                                            name="lga"
                                            id="lga"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3">
                                            <option value="default">
                                                Select Default
                                            </option>
                                            <option value="amac">AMAC</option>
                                            <option value="gwagwalada">
                                                Gwagwalada
                                            </option>
                                            <option value="kwali">Kwali</option>
                                            <option value="kuje">Kuje</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-3 my-6">
                                    <div className="relative">
                                        <label htmlFor="city">City:</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3" />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="landmark"
                                            >Nearest Landamark:</label
                                        >
                                        <input
                                            type="text"
                                            id="landmark"
                                            name="landmark"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3" />
                                    </div>
                                </div>
                                <div className="flex gap-3 my-6">
                                    <div className="relative">
                                        <label htmlFor="dob">Date of Birth:</label>
                                        <input
                                            type="date"
                                            id="dob"
                                            name="dob"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3" />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="occupation"
                                            >Occupation:</label
                                        >
                                        <select
                                            name="occupation"
                                            id="occupation"
                                            className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                            required
                                            tabIndex="3">
                                            <option value="default">
                                                Select Default
                                            </option>
                                            <option value="unemployed">
                                                Unemployed
                                            </option>
                                            <option value="civilServant">
                                                Civil Servant
                                            </option>
                                            <option value="businessOwner">
                                                Business Owner
                                            </option>
                                            <option value="investor">
                                                Investor
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="relative my-6">
                                    <label htmlFor="gender">Gender:</label>
                                    <select
                                        name="gender"
                                        id="gender"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="3">
                                        <option value="default">
                                            Select Default
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="preferNotToSay">
                                            Prefer Not to Say
                                        </option>
                                    </select>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="proceed-button bg-[#003399] text-white w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="proceedButtonClick()">
                                        Proceed
                                    </button>
                                    <button
                                        className="border-2 border-primary text-primary w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="goBack()">
                                        Back
                                    </button>
                                </div>
                            </div>

                            {/* Account Details */}
                            <div className="section" id="accountDetailsSection">
                                <h1 className="text-2xl font-bold">
                                    Account Details
                                </h1>
                                <div className="my-6">
                                    <label htmlFor="nin">NIN</label>
                                    <input
                                        type="number"
                                        id="nin"
                                        name="nin"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="6" />
                                </div>
                                <div className="my-6">
                                    <label htmlFor="accountNumber"
                                        >Account Number:
                                    </label>
                                    <input
                                        type="number"
                                        id="accountNumber"
                                        name="accountNumber"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="6" />
                                </div>
                                <div className="my-6">
                                    <label htmlFor="monthlyIncome"
                                        >Monthly Income (NGN)
                                    </label>
                                    <input
                                        type="number"
                                        id="monthlyIncome"
                                        name="monthlyIncome"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="6" />
                                </div>
                                <div className="my-6">
                                    <label htmlFor="bankName">Bank Name:</label>
                                    <input
                                        type="text"
                                        id="bankName"
                                        name="bankName"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="5" />
                                </div>
                                <div className="my-6">
                                    <label htmlFor="natureOfBusiness"
                                        >Nature of Business:</label
                                    >
                                    <input
                                        type="text"
                                        id="natureOfBusiness"
                                        name="natureOfBusiness"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="5" />
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="proceed-button bg-[#003399] text-white w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="proceedButtonClick()">
                                        Proceed
                                    </button>
                                    <button
                                        className="border-2 border-primary text-primary w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="goBack()">
                                        Back
                                    </button>
                                </div>
                            </div>

                            <div className="section" id="createPinSection">
                                <h1 className="text-2xl font-bold">
                                    Set a 4-digit PIN that would be used for all
                                    loan requests or transaction
                                </h1>
                                <div className="my-6">
                                    <label htmlFor="pin">PIN:</label>
                                    <input
                                        type="password"
                                        id="pin"
                                        name="pin"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="7" />
                                </div>
                                <div className="my-6">
                                    <label htmlFor="confirmPin">Confirm PIN:</label>
                                    <input
                                        type="password"
                                        id="confirmPin"
                                        name="confirmPin"
                                        className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                                        required
                                        tabIndex="8" />
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="proceed-button bg-[#003399] text-white w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="proceedButtonClick()">
                                        Proceed
                                    </button>
                                    <button
                                        className="border-2 border-primary text-primary w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="goBack()">
                                        Back
                                    </button>
                                </div>
                            </div>

                            <div className="section" id="tncSection">
                                <h1 className="text-2xl font-bold">
                                    By tapping the button below, you agree to
                                    “PadiPay” Terms of Use and Privecy Policy
                                </h1>
                                <div className="my-6">
                                    <p>
                                        To learn more, see our Terms of Use and
                                        Privacy Policy
                                    </p>
                                    <p className="my-6">
                                        <input
                                            type="checkbox"
                                            id="agree"
                                            required />
                                        I agree to the terms and conditions
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="proceed-button border-2 border-primary text-primary w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="goBack()">
                                        Back
                                    </button>
                                    <button
                                        className="bg-[#003399] text-white w-1/2 py-2 rounded-[10px] cursor-pointer"
                                        onclick="submitForm()">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="submissionPopup" className="popup">
                        <h2 id="popupSubmissionStatus"></h2>
                        <p id="popupSubmissionText"></p>
                    </div>

                    {/* Right Side */}
                    <div>
                        {/* <img src="/dist/Images/updateProfile/kyc1.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </main>
  )
}

export default Kyc