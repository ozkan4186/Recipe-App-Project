import React from 'react'
import LoginDiv, { LoginButton, LoginLabel, Loginİnput } from './Login.style'

const Login = () => {


const handleSubmit=(e)=>{
  e.preventDefault()
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

         <LoginButton type='submit' > Submit</LoginButton>   
      </form>



    </LoginDiv>
    

  )
}

export default Login