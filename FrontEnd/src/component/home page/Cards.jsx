import React from "react";

const Cards = () => {
  return (
    <>
      <div className="rounded border-2 border-gray-500 w-[35vw] text-white bg-gray-900 mt-8">
        <button>
          <img className="w-[1vw]" src="./user_logo.png" alt="profile pic" />
          <p>user name</p>
        </button>
        <button>Follow</button>
        <img className="p-4" src="./user_logo.png" alt="post pic" />
        <div className="flex gap-x-4 ml-4">
          <div className="flex gap-x-3">
            <button>
              <img className="w-[2vw]" src="./heart_logo.png" alt="like logo" />
            </button>
              <p>12</p>
          </div>
          <button>
            <img className="w-[2vw]" src="./chat_logo.png" alt="chat logo" />
          </button>
        </div>
        <p className="ml-4 my-2"> this is</p>
      </div>
    </>
  );
};

export default Cards;
