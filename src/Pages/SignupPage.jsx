import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '../Components/Button';
import SelectAccount from "../Components/SelectAccount";
import SelectGender from "../Components/SelectGender";
// import Alert from "../Components/Alert";

const SignupPage = ({baseUrl}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState("");
  const [genderType, setGenderType] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const navigate = useNavigate()

  // response part 
  async function handleSignup(e){
    e.preventDefault()
    console.log(accountType)
    console.log(check)
    console.log(JSON.stringify({firstName, lastName, password, confirmPassword, accountType, genderType, phone}))
    
    if(password !== confirmPassword){
      setErrorMessage("Both passwords field must match")
      setAlertType("danger")
      return;
    }else if(check === false){
      setErrorMessage("Agree to terms and conditions")
      setAlertType("danger")
      return;
    }else{
      
      setLoading(true)
      const response = await fetch(`${baseUrl}/auth/login`,{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({firstName, lastName, email, password, accountType, gender:genderType, phone})
      })
      // extract data from response object
      const data = await response.json()
      console.log(response, data)
      if (response) setLoading(false)
      if (!response.ok) {
        setErrorMessage(data.message)
        setTimeout(()=>{
          setErrorMessage("")
        },5000)
      }
      if (response.ok){
        localStorage.setItem("user", JSON.stringify(data))
        if(data.user.accountType === 1){
          console.log("accounttype")
          navigate("/borrowersDashboard")
        }
        if(data.user.accountType === 2){
          navigate("/lendersDashboard")
        }
      }
    }

  }
  
  function isChecked(e){
    console.log(e.target)
    if (e.target.value === "password"){
      setPasswordType("text")
    } if (e.target.value === "text"){
      setPasswordType("password")
    }
  }

  return (
    <div className='bg-primary font-primaryFont'>
      <div className=' h-100vw py-6'>
        <div className='flex justify-around gap-2 small-screen'>
          <div className='flex flex-col relative items-center justify-center text-white w-screen'>
            <div className='text-center'>
              <h1 className='text-4xl'>Welcome Onboard</h1>
              <span className='text-4xl font-bold'>Padi</span>
            </div>
            <div className='mx-auto '>
              <img
                src={
                  'https://ik.imagekit.io/gru3qfrss/tr:w-200,h-500,bl-10/Group%2023936.svg'
                }
                alt='PadiPay'
                className='right-img mt-8'
              />
            </div>
            <div className='flex gap-4 small-screen relative md:flex-col lg:flex-row'>
              <div className=' p-4 rounded-lg'>
                <img
                  src={'https://ik.imagekit.io/gru3qfrss/appStore.png'}
                  alt='apple mockup'
                  className='w-40'
                />
              </div>
              <div className='p-4 rounded-lg'>
                <img
                  src={'https://ik.imagekit.io/gru3qfrss/googlePlay.png'}
                  alt='google-play mockup'
                  className='w-40'
                />
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md w-full px-10 m-16 p-8'>
            <div className='text-center'>
              <h1 className='text-4xl'>
                Create Your Account<span className='font-bold'></span>
              </h1>
              <p className='text-xl my-4'>
                Welcome! Please enter with your details
              </p>
            </div>
            <button className='border-2 border-black w-full py-2 flex justify-center items-center gap-2 my-8'>
              <img
                src={'https://ik.imagekit.io/b6b9xwu9l/google-logo.svg'}
                alt='google-play mockup'
                className='w-10'
              />
              <span>Sign up with Google</span>
            </ button>

            
            {/* MAIN BODY - SIGNUP FORM */}
            <form name='loginForm' onSubmit={handleSignup}>
              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-user absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full  py-4'
                label='Enter Your first Name'
                variant='outlined'
                id='firstName'
                type='text'
                onChange={e => setFirstName(e.target.value)}
                />
                <br />
              </div>

              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-user absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Enter Your last Name'
                variant='outlined'
                id='lastName'
                type='text'
                onChange={e => setLastName(e.target.value)}
                />
                
                <br />
              </div>

              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-envelope absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label=' Email Address'
                variant='outlined'
                id='lastName'
                type='email'
                onChange={e => setEmail(e.target.value)}
                />
                <br />
              </div>
                <div className='relative my-6 w-full'>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Password'
                variant='outlined'
                id='password'
                type={passwordType}
                onChange={e => setPassword(e.target.value)}
                />
              </div>
              <span className=' block  w-full'>
              <input className='mr-4'
                    type='checkbox'
                    name='terms'
                    id='terms'
                    value={passwordType}
                    onChange={(e) => isChecked(e)}
                  />
                  Show password
              </span>

              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-lock absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Retype Password'
                variant='outlined'
                id='confirmPassword'
                type='password'
                onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
              

              <div className='relative my-6 w-full'>
                <i className='fa-solid fa-phone absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Phone Number'
                variant='outlined'
                id='phone'
                type='number'
                onChange={e => setPhone(e.target.value)}
                />
              </div>

              {/* <div className='relative my-6 w-full'>
                <i className='fa-solid fa-location-dot absolute px-3.5 py-4 text-2xl'></i>
                <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Address'
                variant='outlined'
                id='address'
                type='text'
                onChange={e => setA}
                />
              </div> */}
               <SelectGender setGenderType={setGenderType}/>

              <SelectAccount setAccountType={setAccountType}/>

              <div className='flex justify-between mt-10'>
                <div className='flex items-center gap-1'>
                  <input
                    type='checkbox'
                    name='terms'
                    id='terms'
                    value={check}
                    onChange={e => setCheck(e.target.value)}
                  />
                  <span className='text-sm'>
                    I accept all terms & conditions
                  </span>
                </div>
              </div>

           {/* <Link to='/account-type' className='flex justify-center align-middle my-10' size='lg'> */}
           {loading ?
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
            :
            <Button
              text='Login'
              type = "submit"
              className='bg-[#003399] text-white  rounded-[10px] cursor-pointer' size="lg"
            />
            }
            </form>

            <p className='font-bold text-xl text-center'>
              Already have an account?
              <Link to='/login' className='text-red-500 ml-2'>
                Login
              </Link>{' '}
              here
            </p>
          </div>
        </div>
      </div>
      {/* {errorMessage && 
        <Alert errorMessage={errorMessage} setErrorMessage={setErrorMessage} alertType={alertType}/>
      } */}
    </div>
  );
};

export default SignupPage;
