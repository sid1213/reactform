import { message } from "antd";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";

export interface SignUpDetailType {
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
}
interface PropType {
  setPageSwitch: Dispatch<SetStateAction<"LOGIN" | "SIGNUP">>;
}
const getUserDataFromLocalStorage = (): SignUpDetailType[] => {
  const userData = localStorage.getItem("UserDetails");
  if (userData) {
    return JSON.parse(userData || "");
  } else {
    return [];
  }
};

const setTodoOnLocalStorage = (state: SignUpDetailType[]) => {
  localStorage.setItem("UserDetails", JSON.stringify(state));
};

const SignUpForm: React.FC<PropType> = ({ setPageSwitch }) => {
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetailType>({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getUserDataFromLocalStorage();

    //checking username exist or not
    if (
      !data.find((ele) => ele.username === signUpDetails.username) &&
      !data.find((ele) => ele.email === signUpDetails.email)
    ) {
      setTodoOnLocalStorage([...data, signUpDetails]);
      message.success("Account created successfully ");
      setSignUpDetails({
        name: "",
        username: "",
        email: "",
        password: "",
      });
    } else {
      message.error("User already exist ");
    }
  };
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      action="#"
      className=" mt-10 flex flex-col w-full items-center space-y-3"
      onSubmit={handleSignUp}
    >
      <input
        required
        type="text"
        name="name"
        id="name"
        value={signUpDetails.name}
        placeholder="Please Enter your Full name "
        className=" w-full max-w-[500px] lg:w-3/4 block p-4 rounded-lg border bg-white border-[ #464660]"
        onChange={handleInput}
      />
      <input
        required
        type="text"
        name="username"
        id="username"
        value={signUpDetails.username}
        placeholder="Please Enter your username"
        className=" w-full max-w-[500px] lg:w-3/4 block p-4 rounded-lg border bg-white border-[ #464660]"
        onChange={handleInput}
      />
      <input
        required
        type="email"
        name="email"
        id="email"
        value={signUpDetails.email}
        placeholder="Please Enter your Email"
        className=" w-full max-w-[500px] lg:w-3/4 block p-4 rounded-lg border bg-white border-[ #464660]"
        onChange={handleInput}
      />
      <input
        required
        type="password"
        name="password"
        id="password"
        value={signUpDetails.password}
        placeholder="Please Enter your Password"
        className=" w-full max-w-[500px] lg:w-3/4 block p-4 rounded-lg border border-[ #464660]"
        onChange={handleInput}
      />
      <input
        required
        type="submit"
        value="Sign Up"
        className="  cursor-pointer lg:bg-[#020100] bg-[#08A593] button-shadow text-white font-extrabold  w-full max-w-[500px] lg:w-3/4 block p-4 rounded-lg"
      />

      <p className="mt-10I ">
        Already have an account?
        <button
          className="float-right text-[#08A593] ml-1"
          onClick={(e) => {
            e.preventDefault();
            setPageSwitch("LOGIN");
          }}
        >
          Log In
        </button>
      </p>
    </form>
  );
};

export default SignUpForm;
