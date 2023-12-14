import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KycSidebar from "../../../../Components/Auth/Dashboard/KycSidebar";
import { useNavigate } from "react-router-dom/dist";
import axios from "axios";
import cogoToast from "cogo-toast";
import { formatDate } from "../../../../utils/date";

const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  phoneNumber: "",
  address: "",
  state: "",
  localGovernment: "",
  city: "",
  nearestLandmark: "",
  occupation: "",
  dob: "",
  relationship: "",
};

const NextOfKin = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [dataloading, setDataloading] = useState(true);

  //
  // get user infor
  useEffect(() => {
    // get token from local storage
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    setToken(token);
    setUser(user);

    // if (token) {
    //   const getInfor = async () => {
    //     const res = await axios.get(
    //       `https://padipay-backend.onrender.com/v1/users/${user.id}`,

    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );

    //     const newData = {
    //       firstName: res.data.firstName,
    //       lastName: res.data.lastName,
    //       gender: res.data.gender,
    //       phoneNumber: res.data.phoneNumber,
    //       address: res.data.address,
    //       state: res.data.state,
    //       localGovernment: res.data.localGovernment,
    //       city: res.data.city,
    //       nearestLandmark: res.data.nearestLandmark,
    //       occupation: res.data.occupation,
    //       relationship: res.data.relationship,
    //       dob: formatDate(res.data.dob),
    //     };

    //     setValues(newData);
    //     setDataloading(false);
    //   };
    //   getInfor();
    // }
  }, []);

  // handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate inputs
    if (
      !values.firstName ||
      !values.lastName ||
      !values.gender ||
      !values.phoneNumber ||
      !values.address ||
      !values.state ||
      !values.localGovernment ||
      !values.city ||
      !values.nearestLandmark ||
      !values.occupation ||
      !values.dob
    ) {
      cogoToast.error("Please provide your details");
      return;
    }

    setLoading(true);

    const payload = {
      userId: user?.id,
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      phoneNumber: values.phoneNumber,
      address: values.address,
      state: values.state,
      localGovernment: values.localGovernment,
      city: values.city,
      nearestLandmark: values.nearestLandmark,
      occupation: values.occupation,
      dob: values.dob,
      relationship: "single",
    };

    try {
      const res = await axios.post(
        `https://padipay-backend.onrender.com/v1/kyc/save-next-of-kin`,
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
      navigate("/accountDetails");
    } catch (error) {
      setLoading(false);
      cogoToast.error(error.response.data.message);
    }
  };

  return (
    <main className="bg-[#003399] px-20 pt-20 pb-56">
      <div className="flex justify-around gap-2 small-screen">
        {/* Left Side */}
        <KycSidebar />

        {/* -------------------------------------------------- */}
        {/* Right side */}
        <div className=" bg-white w-screen my-10 px-16 py-8">
          {/* {dataloading ? (
            <h4>Loading...</h4>
          ) : ( */}
          <>
            <h1 className="text-2xl font-bold">Next of Kin</h1>
            <div className="relative my-6">
              <label htmlFor="nextOfKinFirstName">
                What’s the first name of your next of kin? :
              </label>
              <input
                type="text"
                id="nextOfKinFirstName"
                name="firstName"
                className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                required
                tabIndex="3"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="relative my-6">
              <label htmlFor="nextOfKinLastName">
                What’s the last name of your next of kin?:
              </label>
              <input
                type="text"
                id="nextOfKinLastName"
                name="lastName"
                className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                required
                tabIndex="3"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="nextOfKinPhoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="nextOfKinPhoneNumber"
                name="phoneNumber"
                className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                required
                tabIndex="4"
                value={values.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="relative my-6">
              <label htmlFor="nextOfKinAddress">Address:</label>
              <input
                type="text"
                id="nextOfKinAddress"
                name="address"
                className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                required
                tabIndex="3"
                value={values.address}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3 my-6">
              <div className="relative">
                <label htmlFor="state">State:</label>
                <select
                  name="state"
                  id="state"
                  className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                  required
                  value={values.state}
                  onChange={handleChange}
                >
                  <option value="Default">Select Default</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Kwara">Kwara</option>
                </select>
              </div>
              <div className="relative">
                <label htmlFor="lga">LGA:</label>
                <select
                  name="localGovernment"
                  id="lga"
                  className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                  required
                  tabIndex="3"
                  value={values.localGovernment}
                  onChange={handleChange}
                >
                  <option value="default">Select Default</option>
                  <option value="amac">AMAC</option>
                  <option value="gwagwalada">Gwagwalada</option>
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
                  tabIndex="3"
                  value={values.city}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <label htmlFor="landmark">Nearest Landamark:</label>
                <input
                  type="text"
                  id="landmark"
                  name="nearestLandmark"
                  className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                  required
                  tabIndex="3"
                  value={values.nearestLandmark}
                  onChange={handleChange}
                />
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
                  tabIndex="3"
                  value={values.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <label htmlFor="occupation">Occupation:</label>
                <select
                  name="occupation"
                  id="occupation"
                  className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                  required
                  tabIndex="3"
                  value={values.occupation}
                  onChange={handleChange}
                >
                  <option value="default">Select Default</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="civilServant">Civil Servant</option>
                  <option value="businessOwner">Business Owner</option>
                  <option value="investor">Investor</option>
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
                tabIndex="3"
                value={values.gender}
                onChange={handleChange}
              >
                <option value="default">Select Default</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="preferNotToSay">Prefer Not to Say</option>
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
          </>
        </div>
      </div>
    </main>
  );
};

export default NextOfKin;
