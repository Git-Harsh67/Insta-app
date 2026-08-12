import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="flex bg-gray-950 h-dvh">
        {/* left side */}
        <div className="flex flex-col items-center justify-center h-dvh px-2 w-[55vw] gap-4">
          <h1 className="text-white text-3xl font-semibold text-wrap mt-4 px-18 text-center">
            See every day moments form your{" "}
            <span className="bg-linear-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              close friends
            </span>
            .
          </h1>
          <img
            className="w-80"
            src="https://static.cdninstagram.com/rsrc.php/yJ/r/53X3pk-t2Gn.webp"
            alt="Image related to Instagram"
          />
        </div>
        {/* right side */}
        <div className="flex flex-col bg-gray-900 border-l-2 border-l-gray-600 w-[45vw] text-white pl-12">
          <form className="flex flex-col gap-6  text-gray-300">
            <p className="mb-2 mt-15 text-xl">Log into Instagram</p>
            <div>
              <p className="pb-1">Email</p>
              <input
                className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
                type="text"
                name=""
                placeholder="your email"
                id=""
              />
            </div>
            <div>
              <p className="pb-1">Password</p>
              <input
                className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
                type="text"
                name=""
                placeholder="your password"
                id=""
              />
            </div>

            <button className=" bg-blue-700 rounded-4xl outline-none py-2 px-4 w-[35vw] font-semibold">
              Log in
            </button>
            <div className="flex items-center ">
            <hr className="w-[11vw] " />
            <p className="px-2">If don't have account</p>
            <hr className=" w-[11vw] " />
            </div>
            <button className=" bg-green-800 rounded-4xl outline-none py-2 px-4 w-[35vw] font-semibold mt-3">
              Create new account
            </button>
          </form>
        </div>

        {/* <div className="flex flex-col bg-gray-900 border-l-2 border-l-gray-600 w-[45vw] text-white pl-12">
          <form className="flex flex-col gap-4 text-gray-300">
            <div>
              <p className=" mt-18 text-2xl font-semibold">
                Get started on Instagram
              </p>
              <p className="mb-2">
                Sign up to see photos and videos from your friends.
              </p>
            </div>
            <div>
              <p className="pb-1">Name</p>
              <input
                className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
                type="text"
                name=""
                placeholder="your name"
                id=""
              />
            </div>
            <div>
              <p className="pb-1">Email</p>
              <input
                className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
                type="text"
                name=""
                placeholder="your email"
                id=""
              />
            </div>

            <div>
              <p className="pb-1">Set password</p>
              <input
                className="border rounded-lg py-2 px-4 w-[35vw] outline-none"
                type="text"
                name=""
                placeholder="your password"
                id=""
              />
            </div>

            <button className=" bg-green-700 rounded-4xl outline-none py-2 px-4 w-[35vw] mt-5">
              Submit
            </button>
          </form>
        </div> */}
      </main>
    </>
  );
}

export default App;
