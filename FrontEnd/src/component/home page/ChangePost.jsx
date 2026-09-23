import { useContext, useEffect } from "react";
import { delPost } from "../../api/post";
import { UserPageContext } from "./UserPage";

const ChangePost = () => {
  const { setShowChangePostCard, selectedPostData,setShowPostCard } =
    useContext(UserPageContext);

  const del = async () => {
    const res = await delPost(selectedPostData._id);
    console.log(res)
    return res;
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/70 ">
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          {/* edit post btn */}
          <div>
            <button
              onClick={() => {}}
              className="border border-b-0 border-gray-600 bg-gray-950 text-blue-500 w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
            >
              Edit
            </button>
          </div>
          {/* delete post btn */}
          <div>
            <button
              onClick={async () => {
                del();
                setShowChangePostCard(false);
                setShowPostCard(false)
              }}
              className="border border-b-0 border-gray-600 bg-gray-950 text-red-500 w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
            >
              Delete
            </button>
          </div>

          {/* cancel */}
          <div>
            <button
              onClick={() => {
                setShowChangePostCard(false);
              }}
              className="border rounded-b-2xl border-gray-600 bg-gray-950 text-white w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePost;
