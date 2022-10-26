import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Contact from "../pages/contact/Contact";

const AppRouter = () => {

  const [user, setUser] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />}/>
          <Route path="/home" element={<PrivateRouter user={user} setUser={setUser} />}>
            <Route path="/home" element={<Home/>} />
          </Route>
          <Route path="/details" element={<PrivateRouter user={user} setUser={setUser} />}>
           <Route path="/details " element={<Details/>}/>
          </Route>
          <Route path="/about" element={<PrivateRouter user={user} setUser={setUser}/>}>
          <Route path="/about " element={<About />}  />
          </Route>
          <Route path="/contact" element={<PrivateRouter user={user} setUser={setUser} />}>
          <Route path=" /contact" element={<Contact/>}  user={user} setUser={setUser}/>
            </Route>
          
      
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
