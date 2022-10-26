import React from 'react'
import { Outlet } from 'react-router-dom';
import Home from '../pages/home/Home';

const PrivateRouter = ({user,setUser}) => {

  console.log(user);
  
  return (
  <div>
    {user &&  <>
    <Outlet/>
 </> }
  </div>
  )
}

export default PrivateRouter