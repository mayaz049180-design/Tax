import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <Sidebar title={title} setTitle={setTitle} />
      <div className="mt-[60px] lg:ml-[270px] px-6 ">
        <Outlet context={{ title, setTitle }} />
      </div>
    </div>
  );
};

export default Layout;
