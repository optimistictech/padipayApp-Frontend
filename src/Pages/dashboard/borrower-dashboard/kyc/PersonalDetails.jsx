import axios from "axios";
import cogoToast from "cogo-toast";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { formatDate } from "../../../../utils/date";
import states from "../../../../Components/states";

const initialState = {
  firstName: "",
  lastName: "",
  middleName: "",
  gender: "",
  nin: "",
  phone: "",
  address: "",
  state: "",
  lga: "",
  city: "",
  landmark: "",
  occupation: "",
  dob: "",
};

const PersonalDetails = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [dataloading, setDataloading] = useState(true);

  // get user infor
  useEffect(() => {
    // get token from local storage
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    setToken(token);
    setUser(user);

    if (token) {
      const getInfor = async () => {
        const res = await axios.get(
          `https://padipay-backend.onrender.com/v1/users/${user.id}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const newData = {
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          middleName: res.data.middleName,
          gender: res.data.gender,
          nin: res.data.nin,
          phone: res.data.phone,
          address: res.data.address,
          state: res.data.state,
          lga: res.data.localGovernment,
          city: res.data.city,
          landmark: res.data.nearestLandmark,
          occupation: res.data.occupation,
          dob: formatDate(res.data.dob),
        };

        setValues(newData);
        setDataloading(false);
      };
      getInfor();
    }
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
      !values.middleName ||
      !values.gender ||
      !values.nin ||
      !values.phone ||
      !values.address ||
      !values.state ||
      !values.lga ||
      !values.city ||
      !values.landmark ||
      !values.occupation ||
      !values.dob
    ) {
      cogoToast.error("Please provide your details");
      return;
    }

    setLoading(true);

    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      middleName: values.middleName,
      gender: values.gender,
      nin: Number(values.nin),
      phone: Number(values.phone),
      address: values.address,
      state: values.state,
      localGovernment: values.lga,
      city: values.city,
      nearestLandmark: values.landmark,
      occupation: values.occupation,
      dob: values.dob,
    };

    try {
      const res = await axios.post(
        `https://padipay-backend.onrender.com/v1/kyc/update-user/${user.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      cogoToast.success("Information saved successfully");
      setLoading(false);
      navigate("/employmentstatus");
    } catch (error) {
      setLoading(false);
      cogoToast.error(error.response.data.message);
    }
  };

  //
  return (
    <div className="w-[60%]">
      <div className="section" id="personalDetailsSection">
        <h1 className="text-2xl font-bold">Personal Details</h1>

        {dataloading ? (
          <div>
            <h4>Loading...</h4>
          </div>
        ) : (
          // <Loading height="40px" width="40px" />
          <>
            <div className="relative my-6">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                required
                tabIndex="3"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="relative my-6">
              <label htmlFor="middleName">Middle Name:</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                required
                tabIndex="3"
                value={values.middleName}
                onChange={handleChange}
              />
            </div>

            <div className="relative my-6">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                required
                tabIndex="3"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-3 my-6">
              <div className="relative">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                  required
                  tabIndex="3"
                  value={values.address}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <label htmlFor="address">Nin:</label>
                <input
                  type="text"
                  id="address"
                  name="nin"
                  className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-4"
                  required
                  tabIndex="3"
                  value={values.nin}
                  onChange={handleChange}
                />
              </div>
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
                  {states.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="relative">
                <label htmlFor="lga">LGA:</label>
                <select
                  name="lga"
                  id="lga"
                  className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                  required
                  tabIndex="3"
                  value={values.lga}
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
                  name="landmark"
                  className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                  required
                  tabIndex="3"
                  value={values.landmark}
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

            <div className="flex gap-3 my-6">
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border-2 rounded-[10px] border-lowergrey bg-[#F0F0F0] px-4 w-full py-3"
                  required
                  tabIndex="4"
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
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
            </div>

            <div className="flex gap-4">
              <button
                className="proceed-button bg-[#003399] text-white px-5 py-2 rounded-[10px] cursor-pointer"
                onClick={handleSubmit}
              >
                {loading ? "loading.." : "Proceed"}
              </button>

              <button
                className="border-2 border-primary text-primary px-5 py-2 rounded-[10px] cursor-pointer"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
