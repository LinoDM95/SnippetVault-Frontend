import React from "react";
import { NavLink } from "react-router-dom";

const NavlinkHeader = ({ navigationLink, title }) => {
  return (
    <NavLink
      to={navigationLink}
      className={({ isActive }) =>
        `relative px-4 py-2 rounded transition-all duration-300 
        hover:text-secondary
        ${isActive ? "text-secondary before:w-full font-bold" : "text-white"}
        before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] 
        before:bg-secondary before:transition-all before:duration-300 
        before:transform before:-translate-x-1/2 
        hover:before:w-full hover:font-bold`
      }
    >
      {title}
    </NavLink>
  );
};
export default NavlinkHeader;
