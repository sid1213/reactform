import React, { useState } from "react";
import formIcon from "../images/form-icon.svg";
import mobileImg from "../images/background-img-mobile.png";
import logo from "../images/logo.png";
import SignUpForm, { SignUpDetailType } from "./SignUpForm";
import LoginForm from "./LogInForm";
import { AiOutlineArrowRight } from "react-icons/ai";

export interface CurrentUserType {
  isUser: boolean;
  userIndex: number | undefined;
  currentUser: SignUpDetailType | undefined;
}
const getUserFromLocalStorage = (): CurrentUserType => {
  const userData = localStorage.getItem("currentUser");
  if (userData) {
    return JSON.parse(userData || "");
  } else {
    return {
      isUser: false,
      userIndex: undefined,
      currentUser: undefined,
    };
  }
};

const FormContainer = () => {
  const [pageSwitch, setPageSwitch] = useState<"LOGIN" | "SIGNUP">("LOGIN");
  const [loggedIn, setLoggedIn] = useState<CurrentUserType>(
    getUserFromLocalStorage()
  );
  const handleLogOut = () => {
    setLoggedIn({
      isUser: false,
      userIndex: undefined,
      currentUser: undefined,
    });
  };
  return (
    <div className="form">
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

      {!loggedIn.isUser ? (
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
      ) : (
        ""
      )}

      {!loggedIn.isUser ? (
        pageSwitch === "SIGNUP" ? (
          <SignUpForm setPageSwitch={setPageSwitch} />
        ) : pageSwitch === "LOGIN" ? (
          <LoginForm setPageSwitch={setPageSwitch} setLoggedIn={setLoggedIn} />
        ) : (
          ""
        )
      ) : (
        <div>
          <h1 className="mt-20 text-4xl font-extrabold">
            Welcome {loggedIn.currentUser?.username}
          </h1>
          <button
            className="cursor-pointer bg-blue-500 text-white px-5 py-3 rounded-xl mt-5 flex  space-x-3 items-center"
            onClick={handleLogOut}
          >
            <h6>Log out</h6> <AiOutlineArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default FormContainer;
