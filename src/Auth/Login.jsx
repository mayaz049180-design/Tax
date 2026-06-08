import React, { useState } from "react";
import bg from "./assets/loginBg.png";
import { useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { z } from "zod";

const Login = () => {
  const [showPasswrod, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({});
  console.log(inputErrors);
  const navigate = useNavigate(null);
  const schema = z.object({
    email: z.string().email("Invalid Email Address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must be at most 32 characters")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
  });
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    // setInputErrors((prev) => ({ ...prev, [name]: "" })); // Clear field error
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(inputValue);
    // if (!result.success) {
    //   const errors = result.error.issues;
    //   console.log(errors);
    //   const newError = {};
    //   errors.forEach((error) => {
    //     newError[error.path[0]] = error.message;
    //   });
    //   setInputErrors(newError);
    //   return;
    // }
    navigate("/dashboard");
  };
  return (
    <>
      <div className="h-screen  bg-black  md:flex md:flex-row">
        {/* left side */}
        <div className="p-4 h-full hidden  w-1/2 md:block">
          <img src={bg} alt="" className=" w-full h-full " />
        </div>
        {/* right */}
        <div className="flex flex-col   w-full md:w-1/2 py-4 h-full items-center justify-center">
          <div className="  overflow-y-auto space-y-4 lg:space-y-8 w-full px-6 lg:w-[90%] ">
            <div className="text-center">
              <h1 className="text-[32px] font-semibold text-white">
                Welcome back!
              </h1>
              <p className="text-[#8D9299] text-sm">
                Ullamco nostrud veniam Lorem dolor excepteur veniam Lorem fugiat
                ipsum
              </p>
            </div>

            <form action="" onSubmit={handleSubmit}>
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
                        required
                        onChange={handleInputValue}
                        value={inputValue.email}
                        name="email"
                        className=" border-none outline-none   placeholder:text-[#ADB3B7]"
                      />
                    </div>
                    {/* {inputErrors.email && (
                      <p className="text-red-500">{inputErrors.email}</p>
                    )} */}
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
                        required
                        onChange={handleInputValue}
                        value={inputValue.password}
                        type={showPasswrod ? "password" : "text"}
                        name="password"
                        className=" border-none outline-none w-full  placeholder:text-[#ADB3B7]"
                      />
                      <button
                        type="button"
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
                    {/* {inputErrors.password && (
                      <p className="text-red-500">{inputErrors.password}</p>
                    )} */}
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#C7E941] text-sm font-medium w-full px-4 py-3 rounded-lg"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
