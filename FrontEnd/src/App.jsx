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
            <p className="mb-2 mt-20">Log into Instagram</p>
            <input className="border rounded-lg py-2 px-4 w-[35vw] outline-none" type="text" name="" placeholder="username"  id="" />
            <input className="border rounded-lg py-2 px-4 w-[35vw] outline-none" type="text" name="" placeholder="password" id="" />
            <button className=" bg-blue-500 rounded-4xl outline-none py-2 px-4 w-[35vw]">Log in</button>
            <button className=" bg-green-700 rounded-4xl outline-none py-2 px-4 w-[35vw] mt-10">Create new account</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
