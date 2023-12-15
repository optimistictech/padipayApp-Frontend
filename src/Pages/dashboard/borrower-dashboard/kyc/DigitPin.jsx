import React, { useState } from "react";
import { Link } from "react-router-dom";
import KycSidebar from "../../../../Components/Auth/Dashboard/KycSidebar";
import cogoToast from "cogo-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";

const DigitPin = () => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // get token from local storage
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (pin !== confirmPin) {
      cogoToast.error("Pin should be the same");
      return;
    }

    const payload = {
      userId: user.id,
      pin: pin,
    };

    try {
      const res = await axios.post(
        "https://padipay-backend.onrender.com/v1/kyc/create-pin",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      cogoToast.success("Information saved successfully");
      setLoading(false);
      navigate("/termsofuse");
    } catch (error) {
      cogoToast.error(error.response.data.message);
    }
  };

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
            Set a 4-digit PIN that would be used for all loan requests or
            transaction
          </h1>
          <div className="my-6">
            <label htmlFor="pin">PIN:</label>
            <input
              type="password"
              id="pin"
              name="pin"
              className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
              required
              tabIndex="7"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <div className="my-6">
            <label htmlFor="confirmPin">Confirm PIN:</label>
            <input
              type="password"
              id="confirmPin"
              name="confirmPin"
              className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
              required
              tabIndex="8"
              maxLength={4}
              value={confirmPin}
              onChange={(e) => setConfirmPin(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <button
              className="proceed-button bg-[#003399] text-white px-5 py-2 rounded-[10px] cursor-pointer"
              onClick={handleSubmit}
            >
              Proceed
            </button>

            <button
              className="border-2 border-primary text-primary px-5 py-2 rounded-[10px] cursor-pointer"
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

export default DigitPin;
