import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "../Components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom/dist";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
  gender: "",
  phone: "",
  accountType: 0,
};

const SignupPage = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [terms, setTerms] = useState(null);
  const [authloading, setAuthloading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (token) {
      navigate(
        user?.accountType === 1 ? "/borrowersDashboard" : "/lendersDashboard"
      );
      return;
    }
    setAuthloading(false);
  }, [navigate]);

  // handlechange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.password ||
      !values.confirm_password ||
      !values.phone
    ) {
      cogoToast.error("Input cannot be empty");
      return;
    }

    if (values.password !== values.confirm_password) {
      cogoToast.error("Password should be the same");
      return;
    }

    if (!terms) {
      cogoToast.error("Accept our terms & condition to continue");
      return;
    }

    // get type from local storage
    const type = localStorage.getItem("type");

    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      gender: values.gender,
      phone: values.phone,
      accountType: type === "borrower" ? 1 : 2,
    };

    try {
      setLoading(true);
      await axios.post(
        "https://padipay-backend.onrender.com/v1/auth/register",
        payload,
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      cogoToast.success("Account Created Successfully");
      navigate("/login");

      setLoading(false);
    } catch (error) {
      cogoToast.error(error.response.data.message);
      console.log(error);
      setLoading(false);
    }
  };

  if (authloading) return;

  //
  return (
    <div className="bg-primary font-primaryFont">
      <div className=" h-100vw py-6">
        <div className="flex gap-2 small-screen">
          <div className="flex flex-col relative items-center justify-center text-white w-screen">
            <div className="text-center">
              <h1 className="text-4xl">Welcome Onboard</h1>
              <span className="text-4xl font-bold">Padi</span>
            </div>
            <div className="mx-auto ">
              <img
                src={
                  "https://ik.imagekit.io/gru3qfrss/tr:w-200,h-500,bl-10/Group%2023936.svg"
                }
                alt="PadiPay"
                className="right-img mt-8"
              />
            </div>
            <div className="flex gap-4 small-screen relative md:flex-col lg:flex-row">
              <div className=" p-4 rounded-lg">
                <img
                  src={"https://ik.imagekit.io/gru3qfrss/appStore.png"}
                  alt="apple mockup"
                  className="w-40"
                />
              </div>
              <div className="p-4 rounded-lg">
                <img
                  src={"https://ik.imagekit.io/gru3qfrss/googlePlay.png"}
                  alt="google-play mockup"
                  className="w-40"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md w-full px-10 m-16 p-8">
            <div className="text-center">
              <h1 className="text-4xl">
                Create Your Account<span className="font-bold"></span>
              </h1>
              <p className="text-xl my-4">
                Welcome! Please enter with your details
              </p>
            </div>

            <button className="border-2 border-black w-full py-2 flex justify-center items-center gap-2 my-8">
              <img
                src={"https://ik.imagekit.io/b6b9xwu9l/google-logo.svg"}
                alt="google-play mockup"
                className="w-10"
              />
              <span>Sign up with Google</span>
            </button>

            {/* MAIN BODY - SIGNUP FORM */}
            <form onSubmit={handleSubmit}>
              <div className="relative my-6 w-full">
                <i className="fa-solid fa-user absolute px-3.5 py-4 text-2xl"></i>
                <TextField
                  className="border-2 border-black bg-[#F0F0F0] w-full  py-4"
                  label="Enter Your first Name"
                  variant="outlined"
                  id="lastName"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  name="firstName"
                />
                <br />
              </div>

              <div className="relative my-6 w-full">
                <i className="fa-solid fa-user absolute px-3.5 py-4 text-2xl"></i>
                <TextField
                  className="border-2 border-black bg-[#F0F0F0] w-full px-12 py-4"
                  label="Enter Your last Name"
                  variant="outlined"
                  id="lastName"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  name="lastName"
                />

                <br />
              </div>

              <div className="relative my-6 w-full">
                <i className="fa-solid fa-envelope absolute px-3.5 py-4 text-2xl"></i>
                <TextField
                  className="border-2 border-black bg-[#F0F0F0] w-full px-12 py-4"
                  label=" Email Address"
                  variant="outlined"
                  id="lastName"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                />
                <br />
              </div>

              <div className="relative my-6 w-full">
                <i className="fa-solid fa-lock absolute px-3.5 py-4 text-2xl"></i>
                <TextField
                  className="border-2 border-black bg-[#F0F0F0] w-full px-12 py-4"
                  label="Password"
                  variant="outlined"
                  id="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>

              <div className="relative my-6 w-full">
                <i className="fa-solid fa-lock absolute px-3.5 py-4 text-2xl"></i>
                <TextField
                  className="border-2 border-black bg-[#F0F0F0] w-full px-12 py-4"
                  label="Retype Password"
                  variant="outlined"
                  id="confirmPassword"
                  type="password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  name="confirm_password"
                />
              </div>

              {/* Gender*/}
              <div className="my-6 w-full">
                <select
                  id=""
                  className=" bg-[#F0F0F0] w-full px-5 py-4"
                  value={values.gender}
                  onChange={handleChange}
                  name="gender"
                >
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="relative my-6 w-full">
                <i className="fa-solid fa-phone absolute px-3.5 py-4 text-2xl"></i>
                <TextField
                  className="border-2 border-black bg-[#F0F0F0] w-full px-12 py-4"
                  label="Phone Number"
                  variant="outlined"
                  id="phone"
                  type="number"
                  value={values.phone}
                  onChange={handleChange}
                  name="phone"
                />
              </div>

              <div className="w-full my-5">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    onChange={(e) => setTerms(e.target.checked)}
                  />
                  <span className="text-sm">
                    I accept all terms & conditions
                  </span>
                </div>
              </div>

              {/* <Link
                to="/lendersDashboard"
                className="flex justify-center align-middle my-10"
              > */}
              <Button
                text={loading ? "loading..." : "Sign up"}
                className="bg-[#003399] text-white  rounded-[10px] cursor-pointer "
                size="lg"
              />
              {/* </Link> */}
            </form>

            <p className="font-bold text-xl text-center">
              Already have an account?
              <Link to="/login" className="text-red-500 ml-2">
                Login
              </Link>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
