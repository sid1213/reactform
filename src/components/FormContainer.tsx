import React from "react";
import formIcon from "../images/form-icon.svg";
import mobileImg from "../images/background-img-mobile.png";
import logo from "../images/logo.png";
const FormContainer = () => {
  return (
    <div className="w-full h-full lg:w-1/2 relative p-5 flex justify-center items-center flex-col text-[#667085] font-bold">
      <div className="block lg:hidden w-full h-full -z-10 absolute top-0 left-0">
        <img
          src={mobileImg}
          alt="mobile background image"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-10 left-10 w-20">
        <img src={logo} alt="logo img" className="w-full" />
      </div>
      <div className="text-center">
        <div className="w-[25%] mx-auto">
          <img
            src={formIcon}
            alt="Form header"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-4xl font-extrabold ">
          Welcome <span className="text-[#08A593]">back!</span>
        </h2>
        <p className="text-xl font-semibold ">Glad to see you, Again!</p>
      </div>
      <form
        action=""
        className=" mt-10 flex flex-col w-full items-center space-y-3"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Please Enter your Email"
          className=" w-full max-w-[500px] lg:w-3/4 block p-4 rounded-lg border bg-white border-[ #464660]"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Please Enter your Password"
          className=" w-full max-w-[500px] lg:w-3/4 block p-4 rounded-lg border border-[ #464660]"
        />
        <div className=" w-full max-w-[500px] lg:w-3/4 ">
          <a className="float-right" href="#">
            Forgot Password?
          </a>
        </div>

        <input
          type="submit"
          value="Log In"
          className=" lg:bg-[#020100] bg-[#08A593] button-shadow text-white font-extrabold  w-full max-w-[500px] lg:w-3/4 block p-4 rounded-lg"
        />

        <p className="mt-10I ">
          Don’t have an account yet?
          <a className="float-right text-[#08A593] ml-1" href="#">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default FormContainer;
