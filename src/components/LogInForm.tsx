import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { SignUpDetailType } from "./SignUpForm";
import { message } from "antd";
import { CurrentUserType } from "./FormContainer";
interface PropType {
  setPageSwitch: Dispatch<SetStateAction<"LOGIN" | "SIGNUP">>;
  setLoggedIn: Dispatch<React.SetStateAction<CurrentUserType>>;
}
interface AuthType {
  email: string;
  password: string;
}
const getUserDataFromLocalStorage = (): SignUpDetailType[] => {
  const userData = localStorage.getItem("UserDetails");
  if (userData) {
    return JSON.parse(userData || "");
  } else {
    return [];
  }
};
export const setUserToLocalStorage = (state: CurrentUserType) => {
  localStorage.setItem("currentUser", JSON.stringify(state));
};

const LoginForm: React.FC<PropType> = ({ setPageSwitch, setLoggedIn }) => {
  const [auth, setAuth] = useState<AuthType>({
    email: "",
    password: "",
  });

  const handleLogIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userCheck = getUserDataFromLocalStorage();
    const userIndex = userCheck.findIndex((ele) => ele.email === auth.email);

    if (userCheck.find((ele) => ele.email === auth.email)) {
      if (userCheck.find((ele) => ele.password === auth.password)) {
        message.success("welcome" + userCheck[userIndex].username);

        setUserToLocalStorage({
          isUser: true,
          userIndex,
          currentUser: userCheck[userIndex],
        });
        setLoggedIn({
          isUser: true,
          userIndex,
          currentUser: userCheck[userIndex],
        });
      } else {
        message.error("wrong password");
      }
    } else {
      message.error("wrong credentials");
    }
  };
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      action=""
      className="  mt-10 flex flex-col w-full items-center space-y-3"
      onSubmit={handleLogIn}
    >
      <input
        required
        type="email"
        name="email"
        value={auth.email}
        placeholder="Please Enter your Email"
        className=" w-full max-w-[500px] lg:w-3/4 block p-4 rounded-lg border bg-white border-[ #464660]"
        onChange={handleInput}
      />
      <input
        required
        type="password"
        name="password"
        value={auth.password}
        placeholder="Please Enter your Password"
        className=" w-full max-w-[500px] lg:w-3/4 block p-4 rounded-lg border border-[ #464660]"
        onChange={handleInput}
      />
      <div className=" w-full max-w-[500px] lg:w-3/4 ">
        <a className="float-right" href="#">
          Forgot Password?
        </a>
      </div>

      <input required type="submit" value="Log In" className=" form-button" />

      <p className="mt-10I ">
        Don’t have an account yet?
        <button
          className="float-right text-[#08A593] ml-1"
          onClick={(e) => {
            e.preventDefault();
            setPageSwitch("SIGNUP");
          }}
        >
          Sign Up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
