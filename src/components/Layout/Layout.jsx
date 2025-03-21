import React from "react";
import { Outlet } from "react-router-dom";   // Import Outlet
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <Outlet />   {/* Render nested routes here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
