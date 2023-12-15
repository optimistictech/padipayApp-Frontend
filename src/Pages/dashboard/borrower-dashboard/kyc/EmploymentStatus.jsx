import React, { useEffect, useState } from "react";
import KycSidebar from "../../../../Components/Auth/Dashboard/KycSidebar";
import { useNavigate } from "react-router-dom/dist";
import cogoToast from "cogo-toast";
import axios from "axios";

const initialState = {
  employmentStatus: "",
  profession: "",
  placeOfWork: "",
  addressOfWork: "",
  emailAddress: "",
  sector: "",
  firstJobYear: "",
};

const EmploymentStatus = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // get data
  useEffect(() => {
    // get token from local storage
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    setToken(token);
    setUser(user);
  }, []);

  // handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate the inputs
    if (
      !values.employmentStatus ||
      !values.profession ||
      !values.placeOfWork ||
      !values.addressOfWork ||
      !values.emailAddress ||
      !values.sector ||
      !values.firstJobYear
    ) {
      cogoToast.error("Please fill all inputs");
      return;
    }

    setLoading(true);

    const payload = {
      userId: user?.id,
      employmentStatus: "Employed",
      currentProfession: "Software Engineer",
      currentPlaceOfWork: "Tiidelab",
      placeOfWorkAddress: "Abuja",
      workEmailAddress: "samson@tiidelab.com",
      companySector: "Fintech",
      firstJobStartDate: "2023-11-07",
    };

    setTimeout(() => {
      cogoToast.success("Information saved successfully");
      setLoading(false);
      navigate("/nextofkin");
    }, 2000);

    // if (token) {
    //   try {
    //     await axios.post(
    //       "https://padipay-backend.onrender.com/v1/kyc/save-employment-details",
    //       payload,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );

    //     cogoToast.success("Information saved successfully");
    //     setLoading(false);
    //     navigate("/nextofkin");
    //   } catch (error) {
    //     setLoading(false);
    //     cogoToast.error(error.response.data.message);
    //   }
    // }
  };

  return (
    <main className="bg-[#003399] px-20 pt-20 pb-56">
      <div className="flex justify-around gap-2 small-screen">
        {/* Left Side */}
        <KycSidebar />

        {/* -------------------------------------------------- */}
        {/* Right side */}
        <div className=" bg-white w-screen my-10 px-16 py-8">
          <h1 className="text-2xl font-bold">Employment Status</h1>
          <div className="relative my-6">
            <label htmlFor="employmentStatus">
              What’s your current employment status?:
            </label>
            <select
              name="employmentStatus"
              id="employmentStatus"
              className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
              required
              tabIndex=""
              value={values.employmentStatus}
              onChange={handleChange}
            >
              <option value="default">Select Default</option>
              <option value="unemployed">Unemployed</option>
              <option value="civilServant">Civil Servant</option>
              <option value="businessOwner">Business Owner</option>
              <option value="investor">Investor</option>
            </select>
          </div>

          <div className="relative my-6">
            <label htmlFor="profession">What’s your current profession?:</label>
            <select
              name="profession"
              id="profession"
              className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
              required
              tabIndex=""
              value={values.profession}
              onChange={handleChange}
            >
              <option value="default">Select Default</option>
              <option value="unemployed">Unemployed</option>
              <option value="civilServant">Civil Servant</option>
              <option value="businessOwner">Business Owner</option>
              <option value="investor">Investor</option>
            </select>
          </div>

          <div className="relative my-6">
            <label htmlFor="placeOfWork">
              What’s the name of your current place of work?:
            </label>
            <input
              type="text"
              id="placeOfWork"
              name="placeOfWork"
              className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
              required
              tabIndex="4"
              value={values.placeOfWork}
              onChange={handleChange}
            />
          </div>

          <div className="relative my-6">
            <label htmlFor="addressOfWork">
              What is the address of your current place of work?:
            </label>
            <input
              type="text"
              id="addressOfWork"
              name="addressOfWork"
              className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
              required
              tabIndex="4"
              value={values.addressOfWork}
              onChange={handleChange}
            />
          </div>

          <div className="relative my-6">
            <label htmlFor="emailAddress">
              What is your work email address?:
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
              required
              tabIndex="4"
              value={values.emailAddress}
              onChange={handleChange}
            />
          </div>

          <div className="relative my-6">
            <label htmlFor="sector">
              What sector of the economy is your company?:
            </label>
            <select
              name="sector"
              id="sector"
              className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
              required
              tabIndex=""
              value={values.sector}
              onChange={handleChange}
            >
              <option value="default">Select Default</option>
              <option value="unemployed">Unemployed</option>
              <option value="civilServant">Civil Servant</option>
              <option value="businessOwner">Business Owner</option>
              <option value="investor">Investor</option>
            </select>
          </div>

          <div className="relative my-6">
            <label htmlFor="firstJobYear">
              When did you start your first job?:
            </label>
            <select
              name="firstJobYear"
              id="firstJobYear"
              className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
              required
              tabIndex=""
              value={values.firstJobYear}
              onChange={handleChange}
            >
              <option value="default">Select Default</option>
              <option value="unemployed">Unemployed</option>
              <option value="civilServant">Civil Servant</option>
              <option value="businessOwner">Business Owner</option>
              <option value="investor">Investor</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button
              className="proceed-button bg-[#003399] text-white px-5 py-2 rounded-[10px] cursor-pointer"
              onClick={handleSubmit}
            >
              {loading ? "loading..." : "Proceed"}
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

export default EmploymentStatus;
