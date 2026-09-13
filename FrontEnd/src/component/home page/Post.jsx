import { useState } from "react";
import { createPost } from "../../api/post";
import { uploadImage } from "../../utils/uploadImage";

const Post = (props) => {
  const [imgUrl, setImgUrl] = useState("");
  const [mainImgUrl, setMainImgUrl] = useState("");
  const [showImg, setShowImg] = useState(false);
  const [captionCard, setcaptionCard] = useState(false);
  const [description, setDescription] = useState("");
  const postDis = {
    description: description,
    photo: mainImgUrl
  };
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
                    onChange={async (e) => {
                      const file = e.target.files[0];

                      setImgUrl(URL.createObjectURL(e.target.files[0]));
                      setShowImg(true);

                      const cloudinaryUrl = await uploadImage(file);
                      setMainImgUrl(cloudinaryUrl)

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
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        try {
                          createPost(postDis);
                          props.setToPost(false);
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
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
                          type="submit"
                          className="text-blue-400 font-extralight"
                        >
                          Post
                        </button>
                      </div>
                      <div className="flex flex-col text-white w-[28vw] h-[60vh] border border-dashed border-gray-600 rounded-b-2xl bg-gray-900 p-3">
                        {/* Heading */}
                        <div className="mb-4">
                          <p className="text-lg font-medium">
                            Add caption and description
                          </p>
                        </div>

                        {/* Description */}
                        <div className="flex-1">
                          <label className="block text-sm text-gray-400 mb-2">
                            Description
                          </label>

                          <textarea
                            onChange={(e) => {
                              setTimeout(() => {
                                setDescription(e.target.value);
                              }, 400);
                            }}
                            placeholder="Write something about your post..."
                            className="w-full h-[30vh] bg-gray-800/60 border border-gray-700 rounded-xl outline-none text-white px-4 py-3 placeholder-gray-500 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                          />
                        </div>
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
