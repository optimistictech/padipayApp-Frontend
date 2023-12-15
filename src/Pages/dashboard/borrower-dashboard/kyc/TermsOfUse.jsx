import React from "react";
import KycSidebar from "../../../../Components/Auth/Dashboard/KycSidebar";
import { useNavigate } from "react-router-dom/dist";

const TermsOfUse = () => {
  const navigate = useNavigate();

  //
  return (
    <main className="bg-[#003399] px-20 pt-20 pb-56">
      <div className="flex justify-around gap-2 small-screen">
        {/* Left Side */}
        <KycSidebar />

        {/* -------------------------------------------------- */}
        {/* Right side */}
        <div className=" bg-white w-screen my-10 px-16 py-8">
          <h1 className="text-2xl font-bold">
            By tapping the button below, you agree to “PadiPay” Terms of Use and
            Privecy Policy
          </h1>
          <div className="my-6">
            <p>To learn more, see our Terms of Use and Privacy Policy</p>
            <p className="my-6">
              <input type="checkbox" id="agree" required />I agree to the terms
              and conditions
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="proceed-button border-2 border-primary text-primary px-5 py-2 rounded-[10px] cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Back
            </button>{" "}
            <button
              className="bg-[#003399] text-white px-5 py-2 rounded-[10px] cursor-pointer"
              onClick={() => navigate("/borrowersDashboard3")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsOfUse;
