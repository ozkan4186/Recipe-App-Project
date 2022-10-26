import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import LoginDiv, { LoginButton, LoginLabel, Loginİnput } from './Login.style'

const Login = ({user,setUser}) => {

  const navigate=useNavigate()

console.log(user)

const handleSubmit=(e)=>{
  e.preventDefault()
  navigate("/home")
  
}


  return (
    <LoginDiv>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit} >
        <LoginLabel htmlFor="">Enter Your Name</LoginLabel>
        <br />
        <Loginİnput type="text" />
         <br /> <br />

        <LoginLabel htmlFor="">Enter Your Password</LoginLabel>
        <br />
         <Loginİnput type="text" />
         <br /> <br />

         <LoginButton type='submit'onClick={()=>setUser(true)}> Submit</LoginButton>   
      </form>


      {/* <Outlet/> */}
    </LoginDiv>
    

  )
}

export default Login