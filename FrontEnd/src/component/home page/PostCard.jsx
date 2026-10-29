import { useMutation, useQueryClient } from "@tanstack/react-query";
import ChangePost from "./PostDeleteCard";
import PostMenu from "./PostMenuCard";
import { addComment } from "../../api/post";
import { useState } from "react";

const PostCard = ({
  setShowPostCard,
  showChangePostCard,
  setShowChangePostCard,
  showPostMenuCard,
  setShowPostMenuCard,
  postDetail,
  user,
}) => {
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();

  const AddComment = useMutation({
    mutationFn({id, text}) {
      addComment(id, text);
    },
    onMutate() {
      queryClient.setQueryData(["posts"], (oldPost) => {
        return oldPost.map((post) => {
          if (post?._id === postDetail?._id) {
            return {
              ...post,
              comment: [...post.comment, postDetail?._id],
            };
          }
        });
      });
    },
    onError(error) {
      return error.message;
    },
  });

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

      {/* full card */}
      <div className="flex bg-gray-900 ">
        {/* post img */}
        <div className="bg-gray-950">
          <img
            className=" object-contain h-130 w-130 "
            src={postDetail?.photo}
          />
        </div>

        {/* post comments */}
        <div className="flex flex-col justify-between bg-gray-800 w-[40vw]">
          <div>
            {/* user name */}
            <div className="flex items-center py-2 px-3 outline-none text-white border-b border-gray-600">
              {/* user detail */}
              <div className="flex items-center justify-between w-[40vw]">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 border-none rounded-full object-contain bg-gray-950"
                    src={postDetail?.postedBy?.pic}
                  />
                  <div className="pl-4">
                    <p className="font-semibold text-sm">
                      {postDetail?.postedBy?.userName}
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    onClick={() => {
                      if (setShowChangePostCard) {
                        setShowChangePostCard(true);
                      } else {
                        setShowPostMenuCard(true);
                      }
                    }}
                    className="w-[1vw]"
                    src="./menu.png"
                  />
                </div>
              </div>
            </div>

            {/*user bio/comment */}
            <div className="flex items-center py-2 px-3 outline-none text-white ">
              {/* user detail */}
              <div className="flex items-center">
                <img
                  className="w-10 h-10 border-none rounded-full object-contain bg-gray-950"
                  src={postDetail?.postedBy?.pic}
                />
                <div className="w-[33vw]">
                  <p className="font-semibold text-sm pl-4 ">
                    {postDetail?.postedBy?.userName}
                    <span className="font-normal text-md pl-3">
                      {postDetail?.description}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* others comments */}
            {postDetail?.comment.map((com) => (
              <div
                key={com._id}
                className="flex items-center py-2 px-3 outline-none text-white "
              >
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 border-none rounded-full object-contain bg-gray-950"
                    src={com?.pic}
                  />
                  <div className="w-[33vw]">
                    <p className="font-semibold text-sm pl-4 ">
                      {/* {user?.userName} */}
                      {com?.userName}
                      <span className="font-normal text-md pl-3">
                        {com?.text}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* add comment form */}
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                AddComment.mutate({id: postDetail?._id, text:comment});
                setComment("");
              }}
            >
              <input
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                className="px-3 py-3 outline-none border-t border-gray-500 text-white w-[35vw]"
                type="text"
                placeholder="Add a comment"
              />
              <input
                className="px-3 py-3 text-gray-500 border-t border-gray-500 w-[5vw] font-semibold"
                type="submit"
                value="Post"
              />
            </form>
          </div>
        </div>
      </div>
      {showChangePostCard === true && (
        <ChangePost
          setShowChangePostCard={setShowChangePostCard}
          postDetail={postDetail}
          setShowPostCard={setShowPostCard}
        />
      )}
      {showPostMenuCard === true && (
        <PostMenu
          setShowPostMenuCard={setShowPostMenuCard}
          setShowPostCard={setShowPostCard}
          postDetail={postDetail}
          user={user}
        />
      )}
    </div>
  );
};

export default PostCard;
