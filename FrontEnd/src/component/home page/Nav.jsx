import { useContext } from "react";
import { Context } from "../../App";

const Nav = (props) => {
  const setToken = useContext(Context);

  return (
    <nav className="flex flex-col gap-y-10 h-screen w-[7vw] items-center border-r-2 border-gray-600 ">
      <button>
        <img
          className="w-[3vw] mt-10 mb-6 "
          src="./insta_logo.png"
          alt="insta_logo"
        />
      </button>
      {/* home page */}
      <button
        onClick={() => {
          props.setToUser(false);
          props.setToHome(true);
        }}
      >
        <img className="w-[2vw]" src="./home_logo.png" alt="home_logo" />
      </button>
      {/* user page */}
      <button
        onClick={() => {
          props.setToUser(true);
          props.setToHome(false);
        }}
      >
        <img className="w-[2vw]" src="./user_logo.png" alt="user_logo" />
      </button>
      {/* search page */}
      <button>
        <img className="w-[2vw]" src="./search_logo.png" alt="search_logo" />
      </button>
      {/* create post */}
      <button
        onClick={() => {
          props.setToPost(true);
        }}
      >
        <img className="w-[2vw]" src="./plus.png" alt="plus_logo" />
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          setToken(null);
        }}
      >
        <img className="w-[2vw] mt-14" src="./logout_logo.png" alt="plus_logo" />
      </button>
    </nav>
  );
};

export default Nav;
