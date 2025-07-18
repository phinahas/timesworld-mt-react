import React from "react";
import ResponsiveNavbar from "../components/layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <ResponsiveNavbar />
      <Outlet />
    </>
  );
}
