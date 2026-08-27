import { useState } from "react";

const Post = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [showImg, setShowImg] = useState(false);
  return (
    <>
      <div className="h-screen ml-77 mt-12">
        <p className="text-white text-2xl mb-6">Create new post</p>
        {showImg === true && (
          <div >
            <img
              className="w-[30vw] border border-dashed border-gray-600 rounded-2xl object-fill"
              src={imgUrl}
              alt="post image"
            />

            <button
              onClick={() => {
                (setShowImg(false), setImgUrl(""));
              }}
              className="rounded-2xl bg-red-500 px-3 py-2 w-35 text-white mt-4"
            >
              Remove image
            </button>
          </div>
        )}

        {showImg === false && (
          <div className="flex flex-col items-center justify-center gap-y-4 text-xl border border-dashed border-gray-600 w-[30vw] h-[60vh] text-white ">
            <button className="rounded-2xl bg-blue-500 px-3 py-2 w-32">
              <label For="input">Upload</label>
            </button>
            <p className="text-gray-400">Upload image</p>
            <input
              onChange={(e) => {
                setImgUrl(URL.createObjectURL(e.target.files[0]));
                setShowImg(true);
              }}
              className="hidden"
              id="input"
              type="file"
              accept="image/jpeg, image/png, image/jpg"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
