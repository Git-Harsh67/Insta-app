import { useState } from "react";

const Post = (props) => {
  const [imgUrl, setImgUrl] = useState("");
  const [showImg, setShowImg] = useState(false);
  const [captionCard, setcaptionCard] = useState(false);
  return (
    <>
      <div className="fixed inset-0 z-50 bg-gray-900/70 ">
        <div>
          <div className="flex flex-col items-center justify-between mt-14">
            {showImg === false && (
              <div>
                <p className="bg-gray-950 text-white w-[28vw] text-center py-2 text-xl">
                  Create new post
                </p>
                <div className="flex flex-col items-center justify-center gap-y-4 text-xl border border-dashed border-gray-600 w-[28vw] h-[60vh] text-white bg-gray-900 rounded-b-2xl">
                  <button className="rounded-2xl bg-blue-700 px-10 py-2">
                    <label htmlFor="input">Select from computer</label>
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
              </div>
            )}
            {showImg === true && (
              <div>
                {captionCard === false && (
                  <div>
                    <div className="flex justify-between bg-gray-950 py-2 px-4 text-xl w-[28vw]">
                      <button
                        onClick={() => {
                          (setImgUrl(""), setShowImg(false));
                        }}
                      >
                        <img
                          src="./arrow_logo.png"
                          className="w-[1.5vw]"
                          alt="arrow_logo"
                        />
                      </button>
                      <p className=" text-white  text-center ">
                        Create new post
                      </p>
                      <button
                        onClick={() => {
                          setcaptionCard(true);
                        }}
                        className="text-blue-400 font-extralight"
                      >
                        Next
                      </button>
                    </div>
                    <div>
                      <img
                        className="w-[28vw] h-[60vh] border border-dashed border-gray-600 rounded-b-2xl object-contain bg-gray-900"
                        src={imgUrl}
                        alt="post image"
                      />
                    </div>
                  </div>
                )}
                {captionCard === true && (
                  <div>
                    <form>
                    <div className="flex justify-between bg-gray-950 py-2 px-4 text-xl w-[28vw]">
                      <button
                        onClick={() => {
                          (setImgUrl(""), setShowImg(false));
                        }}
                      >
                        <img
                          src="./arrow_logo.png"
                          className="w-[1.5vw]"
                          alt="arrow_logo"
                        />
                      </button>
                      <p className=" text-white  text-center ">
                        Create new post
                      </p>
                      <button
                        onClick={() => {
                          console.log("posted")
                        }}
                        className="text-blue-400 font-extralight"
                      >
                        Post
                      </button>
                    </div>
                    <div className="text-white w-[28vw] h-[60vh] border border-dashed border-gray-600 rounded-b-2xl object-contain bg-gray-900">
                      <p>Caption for your post</p>
                      <input type="text" name="" id="" />
                    </div>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* back btn */}
          <button
            className="absolute right-4 top-4"
            onClick={() => {
              props.setToPost(false);
            }}
          >
            <img className=" w-[2vw] " src="./close.png" alt="X_logo" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;
