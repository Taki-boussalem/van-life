import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Hostlayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <>
      <div className="host-nav">
        <NavLink style={({isActive}) => isActive ? activeStyle : null} end to=".">DashBoard</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null} to="income">Income</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null} to="vans">Vans</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null} to="reviews">Reviews</NavLink>
      </div>
      <Outlet/>
    </>
  );
}

export default Hostlayout;
