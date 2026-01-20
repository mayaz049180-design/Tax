import React, { use, useCallback, useEffect, useState } from "react";
import logo from "./assets/taxLogo.png";
import dashboard from "./assets/dashboard.png";
import files from "./assets/files.png";
import tax from "./assets/tax.png";
import users from "./assets/Users.png";
import logout from "./assets/logout.png";
import person from "./assets/person.png";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";
import LogoutModal from "./Modal/LogoutModal";

const Sidebar = ({ title, setTitle }) => {
  const [showLogoutModal, setLogoutModal] = useState(false);
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const location = useLocation();
  const menu = [
    { title: "Dashboard", path: "/dashboard", img: dashboard },
    { title: "All Users", path: "/users", img: users },
    { title: "Tax Advisors", path: "/tax", img: tax },
    { title: "Upload Files", path: "/files", img: files },
  ];
  const handleLogoutModal = () => {
    setLogoutModal((prev) => !prev);
  };
  useEffect(() => {
    const current = menu.find((item) => item.path === location.pathname);
    setTitle(current.title);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      console.log(height);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (showLogoutModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup (VERY important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLogoutModal]);

  return (
    <>
      {/* Header */}
      <div className="border z-10 flex bg-white items-center justify-between h-[60px] w-full lg:w-[calc(100%-270px)] fixed top-0 right-0 w-full  border-[#E4E4E4]   px-6 py-4">
        <p className="text-[#020202] font-medium capitalize text-2xl">
          {title}
        </p>
        <div className="flex hidden lg:flex items-center gap-3">
          <img src={person} alt="" className="h-[31px]" />
          <div>
            <p className="text-[#052223] font-medium text-sm">Scott Johnston</p>
            <p className="text-[12px] text-[#C7E941]">Admin</p>
          </div>
        </div>
        <div
          onClick={() => {
            setShow(!show);
          }}
          className={`lg:hidden`}
        >
          <CgMenuLeftAlt className="text-2xl " />
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={` ${show ? "translate-x-0" : "-translate-x-full"}
          bg-black lg:translate-x-0 ease-in duration-300 transition fixed top-0 z-50  w-[270px] h-[100vh] overflow-y-auto`}
      >
        <div className="flex justify-center pt-10 lg:pt-15 pb-7 lg:pb-10 ">
          <img src={logo} alt="" className="h-12 md:h-15 lg:h-18 " />
        </div>
        <div>
          <ul className="space-y-2.5  ">
            {menu.map((item, index) => (
              <li className="relative h-[48px]   ">
                <div
                  className={`
                      ${location.pathname === item.path && "bg-[#F2F2F2]/20"}
                      flex items-center  rounded-[4px] gap-2.5 ml-4  mr-5 px-6 h-full `}
                >
                  <img src={item.img} alt="" className="h-4.5" />
                  <Link
                    className="text-white text-sm font-medium"
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </div>
                {location.pathname === item.path && (
                  <div class="w-[4px] h-[48px] absolute top-0 left-0 bg-white rounded-tr-[4px] rounded-br-[4px]"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Logout Button */}
        <div
          onClick={handleLogoutModal}
          className={`${
            height > 420 ? "absolute" : "relative mt-15  "
          }  bottom-5 md:bottom-10  xl:bottom-15 2xl:bottom-20 flex items-center gap-2.5 ml-7 mr-5 px-6 cursor-pointer`}
        >
          <img src={logout} alt="" className="h-[18px]" />
          <span className="text-sm text-white ">Logout</span>
        </div>
        {/* sidebar Close button */}
        <div
          onClick={() => setShow(false)}
          className="lg:hidden absolute right-4 top-2 "
        >
          <RiCloseLine className="text-2xl text-white " />
        </div>
      </div>
      {/* overlay */}
      <div
        onClick={() => setShow(false)}
        className={`${
          show
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
          fixed inset-0 bg-black/20 transition-opacity duration-500 backdrop-blur-[2px] z-40`}
      ></div>
      {/* Modal */}
      {showLogoutModal && <LogoutModal closeModal={handleLogoutModal} />}
    </>
  );
};

export default Sidebar;
