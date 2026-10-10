import React, { use, useState } from "react";
import { signUp } from "../../api/auth";

const SignUpCard = (props) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = {
    userName,
    name,
    email,
    password,
  };

  return (
    <div className="flex flex-col bg-gray-900 border-l-2 border-l-gray-600 w-[45vw] text-white pl-12">
      <form
        onSubmit={async(e) => {
          try {
            e.preventDefault();
            await signUp(userInfo);
            props.setToSignCard(false);
            props.setToLogCard(true);
            setName("");
            setEmail("");
            setPassword("");
            alert("signUp completed");
          } catch (error) {
            console.log("Status:", error.response?.status);
            alert(error.response?.data.msg);
            console.log("Headers:", error.response?.headers);
          }
        }}
        className="flex flex-col gap-4 text-gray-300"
      >
        <div>
          <button
            className="mt-5 "
            onClick={() => {
              props.setToSignCard(false);
              props.setToLogCard(true);
            }}
          >
            <img className="w-[2vw]" src="./arrow_logo.png" alt="Arrow logo" />
          </button>
          <p className=" mt-5 text-2xl font-semibold">
            Get started on Instagram
          </p>
          <p className="mb-2">
            Sign up to see photos and videos from your friends.
          </p>
        </div>
        {/* Name */}
        <div>
          <p className="pb-1">Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
            type="text"
            placeholder="your name"
            id=""
          />
        </div>
        {/* user name */}
        <div>
          <p className="pb-1">User Name</p>
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
            type="text"
            placeholder="your user name"
            id=""
          />
        </div>
        {/* Email */}
        <div>
          <p className="pb-1">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
            type="text"
            placeholder="your email"
            id=""
          />
        </div>
        {/* password */}
        <div>
          <p className="pb-1">Set password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
            type="text"
            placeholder="your password"
          />
        </div>

        <button
          type="submit"
          className=" bg-green-700 rounded-4xl outline-none py-2 px-4 w-[35vw] mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpCard;
