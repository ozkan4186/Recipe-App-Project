import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/blue.jpg";
import NavbarDiv, { NavbarUl } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavbarDiv>
      <img src={logo} width="150" alt="" />

      <NavbarUl>
        <li >
          <NavLink
            to={"/about"}
            style={({ isActive }) => ({ color: isActive && "red" })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            style={({ isActive }) => ({ color: isActive && "red" })}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => ({ color: isActive && "red" })}
          >
            Lagout
          </NavLink>
        </li>
      </NavbarUl>
    </NavbarDiv>
  );
};

export default Navbar;
