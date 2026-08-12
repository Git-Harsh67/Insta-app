import React, { useState } from "react";
import { login } from "../api/auth";

const LoginCard = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = {
    email,
    password
  };

  return (
    <div className="flex flex-col bg-gray-900 border-l-2 border-l-gray-600 w-[45vw] text-white pl-12">
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            const data = await login(userInfo);
            setEmail("");
            setPassword("");
          } catch (error) {
            console.log("Status:", error.response?.status);
            // console.log("data:", error.response?.data);
            alert( error.response?.data.msg);
            // console.log("Headers:", error.response?.headers);
          }
        }}
        className="flex flex-col gap-6  text-gray-300"
      >
        <p className="mb-2 mt-15 text-xl">Log into Instagram</p>
        <div>
          <p className="pb-1">Email</p>
          <input
            onChange={(e) => {
              setTimeout(()=>{
                setEmail(e.target.value);
              },600)
            }}

            className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
            type="text"
            placeholder="your email"
            id=""
          />
        </div>
        <div>
          <p className="pb-1">Password</p>
          <input
            onChange={(e) => {
              setTimeout(()=>{
                setPassword(e.target.value);
              },600)
            }}

            className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
            type="text"
            placeholder="your password"
            id=""
          />
        </div>

        <button className=" bg-blue-700 rounded-4xl outline-none py-2 px-4 w-[35vw] font-semibold">
          Log in
        </button>
      </form>
      <div className="flex items-center mt-10">
        <hr className="w-[11vw] " />
        <p className="px-2">If don't have account</p>
        <hr className=" w-[11vw] " />
      </div>

      <button
        onClick={(e) => {
          props.setToSignCard(true);
          props.setToLogCard(false);
        }}
        className=" bg-green-800 rounded-4xl outline-none py-2 px-4 w-[35vw] font-semibold mt-6"
      >
        Create new account
      </button>
    </div>
  );
};

export default LoginCard;
