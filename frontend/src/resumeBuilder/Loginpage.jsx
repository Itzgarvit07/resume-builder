import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
function Loginpage() {
  // const bgImg = "./login-background.jpg"

  return (
    <>
    <div className='h-screen bg-cover bg-center bg-fixed bg-[url(./login-background.jpg)] bg-gradient-to-r from-red-500 to-cyan-500 flex items-center justify-center'>
<div className='bg-white h-[550px] w-[800px] rounded-3xl flex justify-between items-center' >
  <div className='flex text-center justify-center border-r-[2px] border-solid border-gray-600 w-[400px]  h-[550px]'>
    <div>
    <h1 className='font-bold text-[24px] mt-5'>WELCOME USER</h1>
  <button><span className='font-bold text-[25px]' style={{background: "linear-gradient(180deg, #EA4335 20%,  #FBBC05 2  w0%, #34A853 100%, #3285a8 90%)",color:'transparent',WebkitBackgroundClip:"text"}}>G</span></button> 
  <div>
<input type="email" placeholder='Email' /> <br />
<input type="password" placeholder='Password' /> <br />
<input type="checkbox"/> <label htmlFor="">Keep me logged in</label>
</div>

    </div>
  
</div>
<div>
  <img className='h-[550px] w-[400px] object-cover rounded-r-3xl' src="./login-background.jpg" alt="" />
</div>
</div>


    </div>
  
   <NavLink to="/create"> <button>Login</button></NavLink>
  
    
    
    
    
    </>
  )
}

export default Loginpage