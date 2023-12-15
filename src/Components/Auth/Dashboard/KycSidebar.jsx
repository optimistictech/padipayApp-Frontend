import React from "react";

const KycSidebar = () => {
  return (
    <div className="flex flex-col text-white w-[50%]">
      <a
        href="/dist/updateProfile.html"
        className="bg-white text-primary w-1/3 my-10 px-4 py-2 rounded-[10px] cursor-pointer"
      >
        <i className="fa-solid fa-arrow-left px-2"></i>
        <span>Back</span>
      </a>
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
          {/* Personal Details */}
          <div className="flex justify-start gap-2 relative mt-6 w-full pt-4">
            <input
              type="checkbox"
              id="personalDetails"
              name="step"
              value="personalDetails"
              className="section-checkbox"
            />
            <label htmlFor="personalDetails" className="px-4">
              Step 2: <br />
              Personal Details
            </label>
          </div>
          {/* Employment Status */}
          <div className="flex justify-start gap-2 relative mt-6 w-full pt-4">
            <input
              type="checkbox"
              id="employmentStatus"
              name="step"
              value="employmentStatus"
              className="section-checkbox"
            />
            <label htmlFor="employmentStatus" className="px-4">
              Step 3: <br />
              Employment Status
            </label>
          </div>
          {/* Next of Kin */}
          <div className="flex justify-start gap-2 relative mt-6 w-full pt-4">
            <input
              type="checkbox"
              id="nextOfKin"
              name="step"
              value="nextOfKin"
              className="section-checkbox"
            />
            <label htmlFor="nextOfKin" className="px-4">
              Step 4: <br />
              Next of Kin
            </label>
          </div>
          {/* Account Details */}
          <div className="flex justify-start gap-2 relative mt-6 w-full pt-4">
            <input
              type="checkbox"
              id="accountDetails"
              name="step"
              value="accountDetails"
              className="section-checkbox"
            />
            <label htmlFor="accountDetails" className="px-4">
              Step 5: <br />
              Account Details
            </label>
          </div>
          {/* Create 4-digit-pin */}
          <div className="flex justify-start gap-2 relative mt-6 w-full pt-4">
            <input
              type="checkbox"
              id="createPin"
              name="step"
              value="createPin"
              className="section-checkbox"
            />
            <label htmlFor="createPin" className="px-4">
              Step 6: <br />
              Create 4-digit-Pin
            </label>
          </div>
          {/* Terms and Conditions */}
          <div className="flex justify-start gap-2 relative mt-6 w-full pt-4">
            <input
              type="checkbox"
              id="tnc"
              name="step"
              value="tnc"
              className="section-checkbox"
            />
            <label htmlFor="tnc" className="px-4">
              Step 7: <br />
              Terms and Conditions
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycSidebar;
