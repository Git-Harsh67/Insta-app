import { useState } from "react";
import { addComment, like, unlike } from "../../api/post";
import { follow, unFollow } from "../../api/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostCard from "./PostCard";

const Cards = ({ selectedPostData , user }) => {

  const [showPostCard, setShowPostCard] = useState(false);
  const [showPostMenuCard, setShowPostMenuCard] = useState(false);

  const queryClient = useQueryClient();

  const likePost = useMutation({
    mutationKey: ["like post"],
    mutationFn(id) {
      const res = like(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["posts"], (oldPosts) => {
        return oldPosts.map((post) => {
          if (post._id === selectedPostData._id) {
            return {
              ...post,
              likes: [...post.likes, user._id],
            };
          }
          return post;
        });
      });
    },
  });

  const unLikePost = useMutation({
    mutationKey: ["unlike post"],
    mutationFn(id) {
      const res = unlike(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["posts"], (posts) => {
        return posts.map((post) => {
          if (post._id === selectedPostData._id) {
            return {
              ...post,
              likes: post.likes.filter((id) => id !== user._id),
            };
          }
          return post;
        });
      });
    },
    onError: (error) => alert(`Error : ${error.message}`),
  });

  const handleFollow = useMutation({
    mutationFn: async (id) => {
      const res = await follow(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["user"], (oldUser) => {
        return {
          ...oldUser,
          user: {
            ...oldUser.user,
            following: [...oldUser.user.following, selectedPostData.postedBy._id],
          },
        };
      });
    },
    onError(error) {
      return error.message;
    },
  });

  const handleUnFollow = useMutation({
    mutationFn: async (id) => {
      const res = await unFollow(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["user"], (oldUser) => {
        return {
          ...oldUser,
          user: {
            ...oldUser.user,
            following: oldUser.user.following.filter(
              (e) => e !== selectedPostData.postedBy._id,
            ),
          },
        };
      });
    },
    onError(error) {
      return error.message;
    },
  });

  return (
    <div className="w-[40vw] rounded-md border-gray-500 text-white bg-gray-900 mt-6 mb-6 overflow-hidden">
      <div className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-x-3">
          <button>
            <img
              className="w-7 h-7 border-none rounded-full object-cover"
              src={selectedPostData?.postedBy?.pic}
              alt="profile pic"
            />
          </button>
          <p>{selectedPostData?.postedBy?.userName}</p>

          {/* follow / unFollow */}
        </div>
        {user?.following?.includes(selectedPostData?.postedBy?._id) === true && (
          <button
            onClick={() => {
              handleUnFollow.mutate(selectedPostData?.postedBy?._id);
            }}
            className="rounded-md bg-gray-600 px-2 font-extralight"
          >
            Following
          </button>
        )}
        {user?.following?.includes(selectedPostData?.postedBy?._id) === false && (
          <button
            onClick={() => {
              handleFollow.mutate(selectedPostData?.postedBy?._id);
            }}
            className="rounded-md bg-gray-600 px-2 font-extralight"
          >
            Follow
          </button>
        )}
      </div>

      <img
        className=" w-full max-h-[90vh] object-contain bg-black"
        src={selectedPostData?.photo}
        alt="post pic"
      />

      {/* like / unlike / comment*/}
      <div className="flex gap-x-4 ml-4 my-2">
        {/* like */}
        <div className="flex items-center gap-x-3">
          {selectedPostData?.likes?.includes(user?._id) === true ? (
            <button
              onClick={() => {
                unLikePost.mutate(selectedPostData?._id);
              }}
            >
              <img className="w-7 h-7" src="./redHeart.png " alt="like logo" />
            </button>
          ) : (
            <button
              onClick={() => {
                likePost.mutate(selectedPostData?._id);
              }}
            >
              <img
                className="w-7 h-7"
                src="./heart_logo.png"
                alt="unlike logo"
              />
            </button>
          )}
          <p>{selectedPostData?.likes.length}</p>
        </div>
        {/* comment */}
        <div
          onClick={() => {
            setShowPostCard(true);
          }}
          className="flex items-center gap-x-3"
        >
          <button>
            <img className=" w-7 h-7" src="./chat_logo.png" alt="chat logo" />
          </button>
          <p>{selectedPostData?.comment?.length}</p>
        </div>
      </div>

      <p className="ml-4 my-2">{selectedPostData?.description}</p>

      {showPostCard === true && (
        <PostCard
          setShowPostCard={setShowPostCard}
          showPostMenuCard={showPostMenuCard}
          setShowPostMenuCard={setShowPostMenuCard}
          selectedPostData={selectedPostData}
          user={user}
        />
      )}
    </div>
  );
};

export default Cards;
