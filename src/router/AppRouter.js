import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Contact from "../pages/contact/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/home" element={<PrivateRouter />}>
            <Route path="/home" element={<Home/>} />
          </Route>
          <Route path="/details" element={<PrivateRouter />}>
           <Route path="details" element={<Details/>}/>
          </Route>
          <Route path="/about" element={<PrivateRouter />}>
          <Route path="/about" element={<About />}  />
          </Route>
          <Route path="/contact" element={<PrivateRouter />}>
          <Route path="/contact" element={<Contact/>} />
            </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
