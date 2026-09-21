import { useContext } from "react";
import { UserPageContext } from "./UserPage";

const PostCard = () => {
  const { selectedPostData, setShowPostCard } = useContext(UserPageContext);

  return (
    <div className="flex fixed inset-0 z-50 bg-gray-900/70 justify-center items-center">
      {/* back btn */}
      <button
        className="absolute right-4 top-4"
        onClick={() => {
          setShowPostCard(false);
        }}
      >
        <img className=" w-[2vw] " src="./close.png" alt="X_logo" />
      </button>

      <div className="flex bg-gray-900 ">
        {/* post img */}
        <div className="bg-gray-950">
          <img
            className=" object-contain h-130 w-130 "
            src={selectedPostData.photo}
          />
        </div>

        {/* post comments */}
        <div className="flex flex-col justify-between bg-gray-800 w-[40vw]">
          <div>
            {/* user name */}
            <div className="flex items-center py-2 px-3 outline-none text-white border-b border-gray-600">
              {/* user detail */}
              <div className="flex items-center ">
                <img
                  className="w-10 h-10 border-none rounded-full object-contain bg-gray-950"
                  src={selectedPostData.photo}
                />
                <div className="pl-5">
                  <p className="font-semibold text-sm">{selectedPostData.postedBy.userName}</p>
                  <p className="text-xs">{selectedPostData.postedBy.name}</p>
                </div>
              </div>
            </div>

            {/* user bio */}
            <div className="flex items-center py-2 px-3 outline-none text-white ">
              {/* user detail */}
              <div className="flex ">
                <img
                  className="w-10 h-10 border-none rounded-full object-contain bg-gray-950"
                  src={selectedPostData.photo}
                />
                <div className="w-[33vw]">
                  <p className="font-semibold text-sm pl-5 ">
                    {selectedPostData.postedBy.userName}
                    <span className="font-normal text-md pl-5">
                      {selectedPostData.description}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* others comments */}
            <div className="flex items-center py-2 px-3 outline-none text-white ">
              {/* user detail */}
              <div className="flex ">
                <img
                  className="w-10 h-10 border-none rounded-full object-contain bg-gray-950"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsM28_ZUjVSSuW5N7JGfLArfiYaWoIsUGNzJYO9kKv0Q&s=10"
                />
                <div className="w-[33vw]">
                  <p className="font-semibold text-sm pl-5 ">
                    userName
                    <span className="font-normal text-md pl-5">comments</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* add comment form */}
          <div>
            <form>
              <input
                className="px-3 py-3 outline-none border-t border-gray-500 text-white w-[35vw]"
                type="text"
                placeholder="Add a comment"
              />
              <input
                className="px-3 py-3 text-gray-500 border-t border-gray-500 w-[5vw] font-semibold"
                type="button"
                value="Post"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
