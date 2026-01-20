import React, { useState } from "react";
import bg from "./assets/loginBg.png";
import { useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showPasswrod, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(null);
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="h-screen  bg-black  md:flex md:flex-row">
        {/* left side */}
        <div className="p-4 h-full hidden  w-1/2 md:block">
          <img src={bg} alt="" className=" w-full h-full " />
        </div>
        {/* right */}
        <div className="flex flex-col  w-full md:w-1/2 py-4 h-full items-center justify-center">
          <div className="  overflow-y-auto  w-full px-6 lg:w-[90%] ">
            <div className="text-center">
              <h1 className="text-[32px] font-semibold text-white">
                Welcome back!
              </h1>
              <p className="text-[#8D9299] text-sm">
                Ullamco nostrud veniam Lorem dolor excepteur veniam Lorem fugiat
                ipsum
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm text-white font-medium"
                  >
                    Email
                  </label>
                  <div className="w-full px-4 py-3 h-[48px] mt-1.5 rounded-lg bg-white border-[#E6E7E9] border">
                    <input
                      placeholder="hi@example.com"
                      type="text"
                      onChange={handleInputValue}
                      value={inputValue.email}
                      name="email"
                      className=" border-none outline-none   placeholder:text-[#ADB3B7]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-sm text-white font-medium"
                  >
                    Password
                  </label>
                  <div className="w-full gap-3 justify-between flex items-center px-4 py-3 h-[48px] mt-1.5 rounded-lg bg-white border-[#E6E7E9] border">
                    <input
                      placeholder="*************"
                      onChange={handleInputValue}
                      value={inputValue.password}
                      type={showPasswrod ? "password" : "text"}
                      name="password"
                      className=" border-none outline-none w-full  placeholder:text-[#ADB3B7]"
                    />
                    <button
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                      className="cursor-pointer"
                    >
                      {showPasswrod ? (
                        <FiEyeOff className="text-xl text-[#AEAFB3]" />
                      ) : (
                        <FiEye className="text-xl text-[#AEAFB3]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="bg-[#C7E941] text-sm font-medium w-full px-4 py-3 rounded-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
