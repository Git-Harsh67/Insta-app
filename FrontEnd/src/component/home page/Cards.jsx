import React from "react";  
  
const Cards = (props) => {
  return (
    <div className="w-[40vw] h-auto rounded-md border-gray-500 text-white bg-gray-900 mt-6 mb-6 overflow-hidden ">

      <div className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-x-3">
          <button>
            <img
              className="w-7 h-7 border rounded-full object-contain"
              src="./user_logo.png"
              alt="profile pic"
            />
          </button>

          <p>{props.name}</p>
        </div>

        <button className="rounded-md bg-gray-600 px-2 font-extralight">
          Follow
        </button>
      </div>

      <img
        className="block w-full h-auto"
        src={props.postImg}
        alt="post pic"
      />

      <div className="flex gap-x-4 ml-4 my-2">
        <div className="flex gap-x-3">
          <button>
            <img
              className="w-7 h-7"
              src="./heart_logo.png"
              alt="like logo"
            />
          </button>

          <p>12</p>
        </div>

        <button>
          <img
            className="w-7 h-7"
            src="./chat_logo.png"
            alt="chat logo"
          />
        </button>
      </div>

      <p className="ml-4 my-2">{props.description}</p>
    </div>
  );
};

export default Cards;
