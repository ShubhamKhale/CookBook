import React, { useState } from "react";
import YellowSquare from "../icons/YellowSquare";
import bgImg from "../assets/cover-page-bg-img.png";
import GoogleLogo from "../icons/GoogleLogo";
import FacebookLogo from "../icons/FacebookLogo";
import { useNavigate } from "react-router-dom";

const Login = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your logic for handling the form submission, such as sending data to a server
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the form fields
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="w-screen h-screen flex ">
        <div className="w-[68%] inline-flex ">
          <YellowSquare width="179px" height="171px" />
          <div className="ml-20 mt-20">
            <p className="font-semibold text-center text-4xl">LOG IN</p>

            <form onSubmit={handleLogin} className="flex flex-col ">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={(e) => e.target.setAttribute("placeholder", "")} // Remove placeholder on focus
                onBlur={(e) => e.target.setAttribute("placeholder", "Email")} // Restore placeholder on blur
                className="bg-[#E3E3E3] mt-10 pl-4 w-[36rem] h-16 rounded-xl font-medium text-2xl text-black placeholder:font-medium placeholder:text-2xl placeholder:text-black"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(e) => e.target.setAttribute("placeholder", "")} // Remove placeholder on focus
                onBlur={(e) => e.target.setAttribute("placeholder", "Password")} // Restore placeholder on blur
                className="bg-[#E3E3E3] mt-12 pl-4 w-[36rem] h-16 rounded-xl font-medium text-2xl text-black placeholder:font-medium placeholder:text-2xl placeholder:text-black"
                placeholder="Password"
                required
              />
              <p className="mt-1 font-normal text-base text-right leading-normal text-black">
                Forgot Password
              </p>
              <button
                type="submit"
                className="bg-[#EBC76B] text-black mt-12 [36rem] h-16 rounded-xl font-medium text-2xl hover:opacity-80 "
              >
                LOGIN
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center">
              <p className="border-[1px] border-[#000] w-[178px]"></p>
              <p className="mx-2 mb-1 font-medium text-xl">or</p>
              <p className="border-[1px] border-[#000] w-[178px]"></p>
            </div>

            <div className="mt-4 flex items-center justify-center gap-x-20">
              <GoogleLogo
                width="50px"
                height="50px"
                className="cursor-pointer"
              />
              <FacebookLogo
                width="50px"
                height="50px"
                className="cursor-pointer"
              />
            </div>

            <p className="mt-8 text-center font-medium text-2xl hover:cursor-pointer hover:underline" onClick={() => {navigate("/sign-up")}}>
              Sign up
            </p>
          </div>  
        </div>
        <div className="w-[32%]">
          <img className="object-cover h-screen" src={bgImg} alt="-" />
        </div>
      </div>
    </>
  );
};

export default Login;
