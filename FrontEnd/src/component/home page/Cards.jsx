import React, { useEffect, useState } from "react";
import { like, unlike } from "../../api/post";
import { userProfile } from "../../api/user";

const Cards = (props) => {
  const [userId, setUserId] = useState("");


  const likePost = async() => {
    const res = await like(props.id);
    return res;
  };
  const unLikePost = async() => {
    const res = await unlike(props.id);
    return res;
  };

  const user = async() => {
    const data = await userProfile();
    setUserId(data.user._id);
  };


  useEffect(() => {
    (user());
  }, []);

  return (
    <div className="w-[40vw] rounded-md border-gray-500 text-white bg-gray-900 mt-6 mb-6 overflow-hidden">
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
        className=" w-full max-h-[90vh] object-contain bg-black"
        src={props.postImg}
        alt="post pic"
      />

      <div className="flex gap-x-4 ml-4 my-2">
        <div className="flex gap-x-3">
          {props.likes.includes(userId) === true ? (
            <button
              onClick={() => {
                unLikePost();
              }}
            >
              <img className="w-7 h-7" src="./redHeart.png " alt="like logo" />
            </button>
          ) : (
            <button
              onClick={() => {
                likePost();
              }}
            >
              <img className="w-7 h-7" src="./heart_logo.png" alt="unlike logo" />
            </button>
          )}

          <p>{props.likes.length}</p>
        </div>

        <button>
          <img className="w-7 h-7" src="./chat_logo.png" alt="chat logo" />
        </button>
      </div>

      <p className="ml-4 my-2">{props.description}</p>
    </div>
  );
};

export default Cards;
