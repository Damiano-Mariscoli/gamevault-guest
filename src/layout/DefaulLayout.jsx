import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
  return (
    <div className="height-full">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
