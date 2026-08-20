import React from "react";

const Nav = (props) => {
  return (
    <nav className="flex flex-col gap-y-6 h-screen w-[7vw] items-center border-r-2 border-gray-600 ">
      <button>
        <img
          className="w-[2vw] mt-10 mb-6 "
          src="./insta_logo.png"
          alt="insta_logo"
        />
      </button>
      <button
        onClick={() => {
          props.setToUser(false);
          props.setToHome(true);
        }}
      >
        <img className="w-[2vw]" src="./home_logo.png" alt="home_logo" />
      </button>
      <button
        onClick={() => {
          props.setToUser(true);
          props.setToHome(false);
        }}
      >
        <img className="w-[2vw]" src="./user_logo.png" alt="user_logo" />
      </button>
    </nav>
  );
};

export default Nav;
