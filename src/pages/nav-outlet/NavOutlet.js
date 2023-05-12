import React from "react";
import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";

const NavOutlet = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavOutlet;
