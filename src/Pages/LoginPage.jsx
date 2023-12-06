import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LeftPartLogin from '../Components/LeftPartLogin';
import { TextField, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '../Components/Button';

const LoginPage = ({baseUrl}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const [passwordType, setPasswordType] = useState("password");

  function checkEmail(){
    const email = JSON.parse(localStorage.getItem('email'))
    if(email) setEmail(email)
  }
  useEffect(() =>{
    checkEmail()
  },[])

// response part 
  async function handleSignin(e){
    e.preventDefault()
    setLoading(true)
    console.log(JSON.stringify({email:email, password: password}))
    const response = await fetch(`${baseUrl}/auth/login`,{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({email:email, password: password})
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

  // REMEMBER ME FUNCTIONALITY
  function rememberMeFunc(e){
    if(!email){
      return
    }else{
      setRememberMe(!rememberMe)
      console.log(typeof e.target.value)
      if(e.target.value === "false"){
        localStorage.setItem("email", JSON.stringify(email))
      }
    }
  }

   // SHOW PASSWORD FUNCTIONALITY
   function isChecked(e){
    console.log(e.target)
    if (e.target.value === "password"){
      setPasswordType("text")
    } if (e.target.value === "text"){
      setPasswordType("password")
    }
  }

  return (
    <div className='bg-[#003399] text-primaryFont h-full flex flex-col justify-center'>
      <div className='pt-10 flex justify-around gap-2 small-screen'>
        {/* LEFT SIDE */}
        <div className='flex flex-col relative items-center justify-center text-white w-screen'>
          <LeftPartLogin />
        </div>
        {/* RIGHT SIDE */}
        

        <div className='bg-white rounded w-screen px-10 m-16 p-8'>
          <div className='text-center'>
            <h1 className='text-4xl'>
              Log in to <span className='font-bold'>Padi</span>Pay
            </h1>
            <p className='text-xl my-8'>
              Welcome back! <br />
              Please login with your details
            </p>
          </div>
          <button className='border-2 border-black w-full py-2 flex justify-center items-center gap-2 my-8'>
            <img
              src={'https://ik.imagekit.io/b6b9xwu9l/google-logo.svg'}
              alt='google-play mockup'
              className='w-10'
            />
            <span>Login with Google</span>
          </button>

          {errorMessage && 
          <p className='text-red-600 text-center '>{errorMessage}</p>
          }

          {/* LOGIN FORM */}
          <form name='loginForm' onSubmit={handleSignin}>
            <div className='relative my-6 w-full'>
              <i className='fa-solid fa-envelope absolute px-3.5 py-4 text-2xl'></i>
              <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label=' Email Address'
                variant='outlined'
                id='lastName'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              <br />
            </div>
            <div className='relative my-6 w-full'>
              <i className='fa-solid fa-lock absolute px-3.5 py-4 text-2xl'></i>
              <TextField
                className='border-2 border-black bg-[#F0F0F0] w-full px-12 py-4'
                label='Password'
                variant='outlined'
                id='password'
                type={passwordType}
                onChange={e => setPassword(e.target.value)}
                />
                <span className=' block  w-full'>
              <input className='mr-4 my-6'
                    type='checkbox'
                    name='terms'
                    id='terms'
                    value={passwordType}
                    onChange={(e) => isChecked(e)}
                  />
                  Show password
              </span>
            </div>
            <div className='w-full flex justify-between'>
              <div className='flex items-center gap-1'>
                <input
                  type='checkbox'
                  name='remember'
                  id='remember'
                  value={rememberMe}
                  onChange={e => rememberMeFunc(e)}
                />
                <span className='text-sm'>Remember me</span>
              </div>
              <Link to='' className='text-sm'>
                Forget your password?
              </Link>
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
            {/* </Link> */}
          </form>
          <p className='text-xl font-bold text-center'>
            Don't have an account?
            <Link to='/signup' className='text-red-500 ml-2'>
              Sign up
            </Link>{' '}
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
